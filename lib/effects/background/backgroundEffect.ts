import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
/* import { ModelConfig, PersonInferenceConfig } from '@tensorflow-models/body-pix/dist/body_pix_model'; */
import { Dimensions } from '../../types';
import {
  CLEAR_TIMEOUT,
  TIMEOUT_TICK,
  SET_TIMEOUT,
  timerWorkerScript
} from '../TimeWorker';

import {
  MASK_BLUR_RADIUS,
  TFLITE_MODELS_SEG_LITE,
  TFLITE_SIMD_LOADER_NAME,
  MODEL_WASM_INFERENCE_DIMENSIONS
} from '../../constants';

/**
 * @private
 */
export interface BackgroundEffectOptions {
  /**
   * The BackgroundEffect load assets dynamically depending on certain browser features.
   * You need to serve all the assets and provide the root path so they can be referenced properly.
   * These assets can be copied from the `dist/build` folder which you can add as part of your deployment process.
   * @example
   * <br/>
   * <br/>
   * For virtual background:
   * <br/>
   *
   * ```ts
   * const virtualBackground = new BackgroundEffect({
   *   assetsPath: 'https://my-server-path/assets',
   *   backgroundImage: img,
   * });
   * await virtualBackground.loadModel();
   * ```
   *
   * <br/>
   * For blur background:
   * <br/>
   *
   * ```ts
   * const blurBackground = new BackgroundEffect({
   *   assetsPath: 'https://my-server-path/assets'
   * });
   * await blurBackground.loadModel();
   * ```
   */
  assetsPath: string;

  /**
   * @private
   */
  debounce?: number;

  /**
   * @private
   */
  /* inferenceConfig?: PersonInferenceConfig; */

  /**
   * @private
   */
  inferenceDimensions?: Dimensions;

  /**
   * The blur radius to use when smoothing out the edges of the person's mask.
   * @default
   * ```html
   * 5
   * ```
   */
  maskBlurRadius?: number;

  /**
   * @private
   */
  personProbabilityThreshold?: number;

  /**
   * @private
   */
  useWasm?: boolean;
}

/**
 * @private
 */
export class BackgroundEffect {
  private _tflite: any;
  private _options: any = {};
  private static segmentationDimensions = MODEL_WASM_INFERENCE_DIMENSIONS
  
  protected _inputVideoElement: HTMLVideoElement;
  protected _outputCanvasElement: HTMLCanvasElement;
  protected _outputCanvasCtx: CanvasRenderingContext2D | null;

  private _assetsPath: string;
  // tslint:disable-next-line no-unused-variable
  private _isSimdEnabled: boolean | null = null;
  private _maskBlurRadius: number = MASK_BLUR_RADIUS;
  private _segmentationMask: ImageData;
  private _segmentationMaskCanvas: HTMLCanvasElement;
  private _segmentationMaskCtx: CanvasRenderingContext2D | null;
  // tslint:disable-next-line no-unused-variable
  /* private readonly _version: string = version; */

  private _maskFrameTimerWorker: any;

  constructor(options: BackgroundEffectOptions) {
    this._options = {
        ...options,
        ...this._isSimdEnabled ? BackgroundEffect.segmentationDimensions.model144 : BackgroundEffect.segmentationDimensions.model96,
    }
    console.log("BackgroundEffect Options", this._options)
    if (typeof options.assetsPath !== 'string') {
      throw new Error('assetsPath parameter is missing');
    }
    let assetsPath = options.assetsPath;
    if (assetsPath && assetsPath[assetsPath.length - 1] !== '/') {
      assetsPath += '/';
    }

    this.maskBlurRadius = options.maskBlurRadius!;
    this._assetsPath = assetsPath;
    this._inputVideoElement = document.createElement('video');
    this._outputCanvasElement = document.createElement('canvas');
    this._outputCanvasCtx = this._outputCanvasElement.getContext(
      '2d'
    ) as CanvasRenderingContext2D;

    this._segmentationMask = new ImageData(
      this._options.width,
      this._options.height
    );
    this._segmentationMaskCanvas = document.createElement('canvas');
    this._segmentationMaskCanvas.width = this._options.width;
    this._segmentationMaskCanvas.height = this._options.height;
    this._segmentationMaskCtx = this._segmentationMaskCanvas.getContext('2d');
  }

  /**
   * The current blur radius when smoothing out the edges of the person's mask.
   */
  get maskBlurRadius(): number {
    return this._maskBlurRadius;
  }

  /**
   * Set a new blur radius to be used when smoothing out the edges of the person's mask.
   */
  set maskBlurRadius(radius: number) {
    if (typeof radius !== 'number' || radius < 0) {
      console.warn(
        `Valid mask blur radius not found. Using ${MASK_BLUR_RADIUS} as default.`
      );
      radius = MASK_BLUR_RADIUS;
    }
    this._maskBlurRadius = radius;
  }

  /**
   * Load the segmentation model.
   * Call this method before attaching the effect to ensure
   * video frames are processed correctly.
   */
  async loadModel() {
    const modelToLoad =  this._isSimdEnabled? TFLITE_MODELS_SEG_LITE.model144 : TFLITE_MODELS_SEG_LITE.model96 
    const [tflite, modelResponse] = await Promise.all([
      this._loadTfLite(),
      fetch(this._assetsPath + modelToLoad)
    ]);

    console.log("ModelResponse", modelResponse)

    const model = await modelResponse.arrayBuffer();
    const modelBufferOffset = tflite._getModelBufferMemoryOffset();
    tflite.HEAPU8.set(new Uint8Array(model), modelBufferOffset);
    tflite._loadModel(model.byteLength);

    this._tflite = tflite;
  }

  // todo  NEW METHODS ============

  /**
   * loadModel and initialize tflite.
   * @param virtualBackground
   */
  async createVirtualBackgroundEffect(virtualBackground: any): Promise<any> {
    // return new BackgroundEffect(tflite, options);
  }

  /**
   * Represents the run post processing.
   *
   * @returns {void}
   */
  runPostProcessing() {
    if (this._outputCanvasCtx) {
      this._outputCanvasCtx.globalCompositeOperation = 'copy';
      if (this._options.virtualBackground && this._options.virtualBackground.backgroundType === 'image') {
        this._outputCanvasCtx.filter = `blur(${this._maskBlurRadius}px)`;
      } else {
        this._outputCanvasCtx.filter = `blur(${this._maskBlurRadius}px)`;
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

      if (this._options.virtualBackground && this._options.virtualBackground.backgroundType === 'image') {
        // todo for now only blur
        /* this._outputCanvasCtx.drawImage(
            this._virtualImage,
            
            0,
            0,
            this._inputVideoElement.width,
            this._inputVideoElement.height
          ); */
      } else {
        this._outputCanvasCtx.filter = `blur(${this._options.virtualBackground.blurValue}px)`;
        this._outputCanvasCtx.drawImage(this._inputVideoElement, 0, 0);
      }
    }
  }

  /**
   * Represents the run Tensorflow Interference.
   *
   * @returns {void}
   */
  private runInference() {
    this._tflite._runInference();
    const segmentationPixelCount = this._options.width * this._options.height;
    const outputMemoryOffset = this._tflite._getOutputMemoryOffset() / 4;

    for (let i = 0; i < segmentationPixelCount; i++) {
      const background = this._tflite.HEAPF32[outputMemoryOffset + (i * 2)];
      const person = this._tflite.HEAPF32[outputMemoryOffset + (i * 2) + 1];
      const shift = Math.max(background, person);
      const backgroundExp = Math.exp(background - shift);
      const personExp = Math.exp(person - shift);

      // Sets only the alpha component of each pixel.
      this._segmentationMask.data[(i * 4)  + 3] =
        (255 * personExp) / (backgroundExp + personExp);
    }
    if (this._segmentationMaskCtx) {
      this._segmentationMaskCtx.putImageData(this._segmentationMask, 0, 0);
    }
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
    if (this._segmentationMaskCtx) {
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
      const inputMemoryOffset = this._tflite._getInputMemoryOffset() / 4;
      const segmentationPixelCount = this._options.width * this._options.height;

      for (let i = 0; i < segmentationPixelCount; i++) {
        this._tflite.HEAPF32[inputMemoryOffset + (i * 3)] =
          imageData.data[i * 4] / 255;
        this._tflite.HEAPF32[inputMemoryOffset + (i * 3) + 1] =
          imageData.data[(i * 4) + 1] / 255;
        this._tflite.HEAPF32[inputMemoryOffset + (i * 3) + 2] =
          imageData.data[(i * 4) + 2] / 255;
      }
    }
  }

  /**
   * EventHandler onmessage for the maskFrameTimerWorker WebWorker.
   *
   * @private
   * @param {EventHandler} response - The onmessage EventHandler parameter.
   * @returns {void}
   */
  _onMaskFrameTimer(response: any) {
    if (response.data.id === TIMEOUT_TICK) {
      this._renderMask();
    }
  }

  /**
   * Starts loop to capture video frame and render the segmentation mask.
   *
   * @param {MediaStream} stream - Stream to be used for processing.
   * @returns {MediaStream} - The stream with the applied effect.
   */
  startEffect(stream: MediaStream) {
    console.log('[startEffect] Effect started', stream);
    try {
        this._maskFrameTimerWorker = new Worker(timerWorkerScript, {
            name: 'BlurEffectWorker'
          });
          this._maskFrameTimerWorker.onmessage = this._onMaskFrameTimer.bind(this);
          const videoTrack: MediaStreamTrack = stream.getVideoTracks()[0];
          const { width, height, frameRate } = videoTrack.getSettings
            ? videoTrack.getSettings()
            : videoTrack.getConstraints();
      
          console.log('[startEffect] height :', height);
          console.log('[startEffect] width :', width);
      
          this._outputCanvasElement.width = Number(width);
          this._outputCanvasElement.height = Number(height);
          this._outputCanvasCtx = this._outputCanvasElement.getContext('2d');
          this._inputVideoElement.width = Number(width);
          this._inputVideoElement.height = Number(height);
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
      
          console.log(
            '[startEffect] this._inputVideoElement.width :',
            this._inputVideoElement.width
          );
          console.log(
            '[startEffect] this._inputVideoElement.height :',
            this._inputVideoElement.height
          );
          console.log(
            '[startEffect] this._outputCanvasElement.width :',
            this._outputCanvasElement.width
          );
          console.log(
            '[startEffect] this._outputCanvasElement.height :',
            this._outputCanvasElement.height
          );
          console.log(
            '[startEffect] this._segmentationMaskCanvas.width :',
            this._segmentationMaskCanvas.width
          );
          console.log(
            '[startEffect] this._segmentationMaskCanvas.height :',
            this._segmentationMaskCanvas.height
          );
      
          return this._outputCanvasElement.captureStream(Number(frameRate));
    } catch(err) {
        console.error("[startEffect] Error:", err)
    }
    
  }

  stopEffect() {
    this._maskFrameTimerWorker.postMessage({
        id: CLEAR_TIMEOUT
      });

      this._maskFrameTimerWorker.terminate();
  }

  private _createJSScript(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.onload = () => resolve();
      script.onerror = reject;
      document.head.append(script);
      script.src = url;
    });
  }

  async _loadTfLite(): Promise<any> {
    let tflite: any;
    await this._createJSScript(this._assetsPath + TFLITE_SIMD_LOADER_NAME);

    try {
      tflite = await window.createTFLiteSIMDModule();
      this._isSimdEnabled = true;
    } catch {
      console.warn(
        'SIMD not supported. You may experience poor quality of background replacement.'
      );
      this._isSimdEnabled = false;
    }
    return tflite;
  }
}
