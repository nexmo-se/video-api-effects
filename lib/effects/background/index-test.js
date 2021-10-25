const models = {
    model96: 'models/segm_lite_v681.tflite',
    model144: 'models/segm_full_v679.tflite'
  };

  const segmentationDimensions = {
    model96: {
      height: 96,
      width: 160
    },
    model144: {
      height: 144,
      width: 256
    }
  };

  var outputElement = document.getElementById('output');

  var Module = {
    preRun: [],
    postRun: [],
    printErr: function(text) {
      console.error(text);
    },
    setStatus: function(text) {
      console.log('[setStatus] text :', text);
    },
    totalDependencies: 0,
    monitorRunDependencies: function(left) {
      this.totalDependencies = Math.max(this.totalDependencies, left);
      Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
    }
  };
  Module.setStatus('Downloading...');
  window.onerror = function(event) {
    Module.setStatus('Exception thrown, see JavaScript console');
    Module.setStatus = function(text) {
      if (text) Module.printErr('[post-exception status] ' + text);
    };
  };


  /**
   * SET_TIMEOUT constant is used to set interval and it is set in
   * the id property of the request.data property. timeMs property must
   * also be set. request.data example:
   *
   * {
   *      id: SET_TIMEOUT,
   *      timeMs: 33
   * }
   */
  const SET_TIMEOUT = 1;

  /**
   * CLEAR_TIMEOUT constant is used to clear the interval and it is set in
   * the id property of the request.data property.
   *
   * {
   *      id: CLEAR_TIMEOUT
   * }
   */
  const CLEAR_TIMEOUT = 2;

  /**
   * TIMEOUT_TICK constant is used as response and it is set in the id property.
   *
   * {
   *      id: TIMEOUT_TICK
   * }
   */
  const TIMEOUT_TICK = 3;

  /**
   * The following code is needed as string to create a URL from a Blob.
   * The URL is then passed to a WebWorker. Reason for this is to enable
   * use of setInterval that is not throttled when tab is inactive.
   */
  const code = `
    var timer;

    onmessage = function(request) {
        switch (request.data.id) {
            case ${SET_TIMEOUT}: {
                timer = setTimeout(() => {
                    postMessage({ id: ${TIMEOUT_TICK} });
                  }, request.data.timeMs);
                break;
              }
            case ${CLEAR_TIMEOUT}: {
                if (timer) {
                    clearTimeout(timer);
                  }
                break;
              }
          }
      };
    `;

  const timerWorkerScript = URL.createObjectURL(new Blob([ code ], { type: 'application/javascript' }));


  /**
   * Represents a modified MediaStream that adds effects to video background.
   * <tt>StreamBackgroundEffect</tt> does the processing of the original
   * video stream.
   */
  class StreamBackgroundEffect {
    _model = {};
    _options = {};
    _segmentationPixelCount = 0;
    _inputVideoElement = {}; // HTMLMediaElement
    _outputCanvasElement = {}; // HTMLCanvasElement
    _outputCanvasCtx = {};
    _segmentationMaskCtx = {};
    _segmentationMask = {};
    _segmentationMaskCanvas = {};
    _virtualImage = {}; // HTMLImageElement

    /**
     * Represents a modified video MediaStream track.
     *
     * @class
     * @param {Object} model - Meet model.
     * @param {Object} options - Segmentation dimensions.
     */
    constructor(model, options) {
      this._options = options;

      if (this._options.virtualBackground.backgroundType === 'image') {
        this._virtualImage = document.createElement('img');
        this._virtualImage.crossOrigin = 'anonymous';
        this._virtualImage.src = this._options.virtualBackground.virtualSource;
      }
      this._model = model;
      this._options = options;
      this._segmentationPixelCount = this._options.width * this._options.height;

      // Bind event handler so it is only bound once for every instance.
      this._onMaskFrameTimer = this._onMaskFrameTimer.bind(this);

      // Workaround for FF issue https://bugzilla.mozilla.org/show_bug.cgi?id=1388974
      this._outputCanvasElement = document.createElement('canvas');
      this._outputCanvasElement.getContext('2d');
      this._inputVideoElement = document.createElement('video');

      console.log('[constructor] model :', model);
      console.log('[constructor] options :', options);
    }

    /**
     * EventHandler onmessage for the maskFrameTimerWorker WebWorker.
     *
     * @private
     * @param {EventHandler} response - The onmessage EventHandler parameter.
     * @returns {void}
     */
    _onMaskFrameTimer(response) {
      if (response.data.id === TIMEOUT_TICK) {
        this._renderMask();
      }
    }

    /**
     * Represents the run post processing.
     *
     * @returns {void}
     */
    runPostProcessing() {
      this._outputCanvasCtx.globalCompositeOperation = 'copy';

      // Draw segmentation mask.
      //

      // Smooth out the edges.
      if (this._options.virtualBackground.backgroundType === 'image') {
        this._outputCanvasCtx.filter = 'blur(4px)';
      } else {
        this._outputCanvasCtx.filter = 'blur(8px)';
      }

      this._outputCanvasCtx.drawImage(
        this._segmentationMaskCanvas,
        0,
        0,
        this._options.width,
        this._options.height,
        0,
        0,
        this._inputVideoElement.width,
        this._inputVideoElement.height
      );
      this._outputCanvasCtx.globalCompositeOperation = 'source-in';
      this._outputCanvasCtx.filter = 'none';

      // Draw the foreground video.
      //

      this._outputCanvasCtx.drawImage(this._inputVideoElement, 0, 0);

      // Draw the background.
      //

      this._outputCanvasCtx.globalCompositeOperation = 'destination-over';
//      console.log('this._options.virtualBackground.backgroundType :', this._options.virtualBackground.backgroundType);

      if (this._options.virtualBackground.backgroundType === 'image') {
        this._outputCanvasCtx.drawImage(
          this._virtualImage,
          0,
          0,
          this._inputVideoElement.width,
          this._inputVideoElement.height
        );
      } else {
        //this._outputCanvasCtx.filter = `blur(${this._options.virtualBackground.blurValue}px)`;
        this._outputCanvasCtx.filter = `blur(10px)`;
        this._outputCanvasCtx.drawImage(this._inputVideoElement, 0, 0);
      }
    }

    /**
     * Represents the run Tensorflow Interference.
     *
     * @returns {void}
     */
    runInference() {
      this._model._runInference();
      const outputMemoryOffset = this._model._getOutputMemoryOffset() / 4;

      for (let i = 0; i < this._segmentationPixelCount; i++) {
        const background = this._model.HEAPF32[outputMemoryOffset + (i * 2)];
        const person = this._model.HEAPF32[outputMemoryOffset + (i * 2) + 1];
        const shift = Math.max(background, person);
        const backgroundExp = Math.exp(background - shift);
        const personExp = Math.exp(person - shift);

        // Sets only the alpha component of each pixel.
        this._segmentationMask.data[(i * 4) + 3] = (255 * personExp) / (backgroundExp + personExp);
      }
      this._segmentationMaskCtx.putImageData(this._segmentationMask, 0, 0);
    }

    /**
     * Loop function to render the background mask.
     *
     * @private
     * @returns {void}
     */
    _renderMask() {
      this.resizeSource();
      this.runInference();
      this.runPostProcessing();

      this._maskFrameTimerWorker.postMessage({
        id: SET_TIMEOUT,
        // timeMs: 1000 / 30
        timeMs: 30
      });
    }

    /**
     * Represents the resize source process.
     *
     * @returns {void}
     */
    resizeSource() {
      this._segmentationMaskCtx.drawImage(
        this._inputVideoElement,
        0,
        0,
        this._inputVideoElement.width,
        this._inputVideoElement.height,
        0,
        0,
        this._options.width,
        this._options.height
      );

      const imageData = this._segmentationMaskCtx.getImageData(
        0,
        0,
        this._options.width,
        this._options.height
      );
      const inputMemoryOffset = this._model._getInputMemoryOffset() / 4;

      for (let i = 0; i < this._segmentationPixelCount; i++) {
        this._model.HEAPF32[inputMemoryOffset + (i * 3)] = imageData.data[i * 4] / 255;
        this._model.HEAPF32[inputMemoryOffset + (i * 3) + 1] = imageData.data[(i * 4) + 1] / 255;
        this._model.HEAPF32[inputMemoryOffset + (i * 3) + 2] = imageData.data[(i * 4) + 2] / 255;
      }
    }

    /**
     * Checks if the local track supports this effect.
     *
     * @param {LocalTrack} localTrack - Track to apply effect.
     * @returns {boolean} - Returns true if this effect can run on the specified track
     * false otherwise.
     */
    isEnabled(localTrack) {
      return localTrack.isVideoTrack() && localTrack.videoType === 'camera';
    }

    /**
     * Starts loop to capture video frame and render the segmentation mask.
     *
     * @param {MediaStream} stream - Stream to be used for processing.
     * @returns {MediaStream} - The stream with the applied effect.
     */
    startEffect(stream) {
      console.log('[startEffect] Effect started');
      this._maskFrameTimerWorker = new Worker(timerWorkerScript, { name: 'Blur effect worker' });
      this._maskFrameTimerWorker.onmessage = this._onMaskFrameTimer;
      const firstVideoTrack = stream.getVideoTracks()[0];
      const { height, frameRate, width }
        = firstVideoTrack.getSettings ? firstVideoTrack.getSettings() : firstVideoTrack.getConstraints();

      console.log('[startEffect] height :', height);
      console.log('[startEffect] width :', width);

      this._segmentationMask = new ImageData(this._options.width, this._options.height);
      this._segmentationMaskCanvas = document.createElement('canvas');
      this._segmentationMaskCanvas.width = this._options.width;
      this._segmentationMaskCanvas.height = this._options.height;
      this._segmentationMaskCtx = this._segmentationMaskCanvas.getContext('2d');

      this._outputCanvasElement.width = parseInt(width, 10);
      this._outputCanvasElement.height = parseInt(height, 10);
      this._outputCanvasCtx = this._outputCanvasElement.getContext('2d');
      this._inputVideoElement.width = parseInt(width, 10);
      this._inputVideoElement.height = parseInt(height, 10);
      this._inputVideoElement.autoplay = true;
      this._inputVideoElement.srcObject = stream;
      this._inputVideoElement.onloadeddata = () => {
        console.log('[_inputVideoElement.onloadeddata] done');
        this._maskFrameTimerWorker.postMessage({
          id: SET_TIMEOUT,
//          timeMs: 1000 / 30
          timeMs: 30
        });
      };

      console.log('[startEffect] this._inputVideoElement.width :', this._inputVideoElement.width);
      console.log('[startEffect] this._inputVideoElement.height :', this._inputVideoElement.height);
      console.log('[startEffect] this._outputCanvasElement.width :', this._outputCanvasElement.width);
      console.log('[startEffect] this._outputCanvasElement.height :', this._outputCanvasElement.height);
      console.log('[startEffect] this._segmentationMaskCanvas.width :', this._segmentationMaskCanvas.width);
      console.log('[startEffect] this._segmentationMaskCanvas.height :', this._segmentationMaskCanvas.height);

      return this._outputCanvasElement.captureStream(parseInt(frameRate, 10));
    }

    /**
     * Stops the capture and render loop.
     *
     * @returns {void}
     */
    stopEffect() {
      this._maskFrameTimerWorker.postMessage({
        id: CLEAR_TIMEOUT
      });

      this._maskFrameTimerWorker.terminate();
    }
  }

  async function createVirtualBackgroundEffect(virtualBackground) {
    if (!MediaStreamTrack.prototype.getSettings && !MediaStreamTrack.prototype.getConstraints) { 
      throw new Error('StreamBackgroundEffect not supported!');                               
    }
    let tflite; 

    let simdSupported = await wasmFeatureDetect.simd();

    console.log('[createVirtualBackgroundEffect] simdSupported :', simdSupported);

    if (simdSupported) {
      tflite = await createTFLiteSIMDModule();
    } else {
      tflite = await createTFLiteModule();   
    }

    const modelBufferOffset = tflite._getModelBufferMemoryOffset();
    const modelResponse = await fetch(simdSupported? models.model144 : models.model96);

    console.log('[createVirtualBackgroundEffect] modelBufferOffset :', modelBufferOffset);
    console.log('[createVirtualBackgroundEffect] modelResponse :', modelResponse);

    if (!modelResponse.ok) {
      throw new Error('Failed to download tflite model!');
    }


    const model = await modelResponse.arrayBuffer();
    tflite.HEAPU8.set(new Uint8Array(model), modelBufferOffset);
    tflite._loadModel(model.byteLength);

    const options = {
      // Check SIMD here 
      ...simdSupported ? segmentationDimensions.model144 : segmentationDimensions.model96,
      virtualBackground
    };

    return new StreamBackgroundEffect(tflite, options);
  }


  async function getLocalVideoStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { height: 224, width: 400 },
        audio: false
      })

      document.querySelector('#live').srcObject = stream;

    } catch(e) {
      console.log('[getLocalVideoStream] error :', e);
    }
  }

  // call getLocalVideoStream
  // createVirtualBackgroundEffect({ width: 256, height: 144 }).then(res => {
  // const srcMediaStream = document.querySelector('#live').srcObject;
  // const outMediaStream = res.startEffect(srcMediaStream);
  // document.querySelector('#out').srcObject = outMediaStream;
})