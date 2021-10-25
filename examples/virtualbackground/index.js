'use strict';

const { isSupported, BackgroundEffect } = OT.VideoEffects;
const bootstrap = window.bootstrap;

const gaussianBlurForm = document.querySelector('form#gaussianBlur-Form');
const gaussianBlurButton = document.querySelector('button#gaussianBlur-Apply');
const virtualBackgroundForm = document.querySelector(
  'form#virtualBackground-Form'
);
const virtualBackgroundButton = document.querySelector(
  'button#virtualBackground-Apply'
);
const videoInput = document.querySelector('video#video-input');
const removeProcessorButton = document.querySelector(
  'button#no-processor-apply'
);
const errorMessage = document.querySelector('div.modal-body');
const errorModal = new bootstrap.Modal(
  document.querySelector('div#errorModal')
);

// Credentials

const apikey = '47003234';
const sessionId =
  '1_MX40NzAwMzIzNH5-MTYzNTE1NDgxMTQzMn5IUUhjUTk1NWFNMmlURFZyYnFGVTF1cGl-fg';
const token =
  'T1==cGFydG5lcl9pZD00NzAwMzIzNCZzaWc9YWVkY2FmNTZjNGUzYzQwY2Y0NDg5ZDg3NDQxYThlMTc5MGIzMTY1OTpzZXNzaW9uX2lkPTFfTVg0ME56QXdNekl6Tkg1LU1UWXpOVEUxTkRneE1UUXpNbjVJVVVoalVUazFOV0ZOTW1sVVJGWnlZbkZHVlRGMWNHbC1mZyZjcmVhdGVfdGltZT0xNjM1MTU0ODIxJm5vbmNlPTAuNTA3NjgyNDEwMjUxNDk0MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjM3NzUwNDIwJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

// Same directory as the current js file
const assetsPath = '';

let session = null;
let publisher = null;
let audioTrack;
let videoTrack;
let mediaTrack;
let gaussianBlurProcessor;
let virtualBackgroundProcessor;

if (!isSupported) {
  errorMessage.textContent = 'This browser is not supported.';
  errorModal.show();
}

const createLocalTrack = () => {
  return OT.getUserMedia({ resolution: '640x480' })
    .then((track) => {
      console.log('OTGetUserMedia', track);
      mediaTrack = track;
      audioTrack = track.getAudioTracks()[0];
      console.log('OTGetUserMedia - videoTrack', videoTrack);
    })
    .catch((err) => {
      console.error('OTGetUserMedia - err', err);
    });
};

const init = async () => {
  await createLocalTrack();
  const backgroundBlur = new BackgroundEffect({
    assetsPath: ''
    /*     width: 256,
    height: 144 */
  });
  window.mediaTrack = mediaTrack;
  await backgroundBlur.loadModel();
  const outputVideoStream = backgroundBlur.startEffect(mediaTrack);
  console.log('outputVideoStream', outputVideoStream);
  publisher = OT.initPublisher(
    'publisher',
    {
      audioSource: audioTrack,
      videoSource: outputVideoStream.getVideoTracks()[0]
      /*  width: 400,
      height: 224 */
    },
    (err) => {
      console.log('Publisher Created');
    }
  );
  session = OT.initSession(apikey, sessionId);
  session.on('streamCreated', (stream) => {
    session.subscribe(stream, (err) => {
      if (err) {
        console.log('Error while subscribing', stream);
      }
      console.log('Subscribed to ', stream);
    });
  });
  session.connect(token, (err) => {
    if (err) {
      console.log('Error while connecting to the session');
    }
    console.log('Session Connected');
    session.publish(publisher, (errPublisher) => {
      if (errPublisher) {
        console.log('Error while publishing into the session');
      }
      console.log('Successfully published the stream');
    });
  });
};

init();

/* const loadImage = (name) =>
  new Promise((resolve) => {
    const image = new Image();
    image.src = `backgrounds/${name}.jpg`;
    image.onload = () => resolve(image);
  });

let images = {};
Promise.all([
  loadImage('living_room'),
  loadImage('office'),
  loadImage('vacation')
]).then(([livingRoom, office, vacation]) => {
  images.livingRoom = livingRoom;
  images.office = office;
  images.vacation = vacation;
  return images;
}); */

/* Video.createLocalVideoTrack({
  width: 1280,
  height: 720,
  frameRate: 24,
}).then((track) => {
  track.attach(videoInput);
  return videoTrack = track;
}); */

// Adding processor to Video Track

/* 
const setProcessor = (processor, track) => {
  if (track.processor) {
    removeProcessorButton.disabled = true;
    track.removeProcessor(track.processor);
  }
  if (processor) {
    removeProcessorButton.disabled = false;
    track.addProcessor(processor);
  }
};

gaussianBlurButton.onclick = async (event) => {
  event.preventDefault();
  const options = {};
  const inputs = gaussianBlurForm.getElementsByTagName('input');
  for (let item of inputs) {
    options[item.id] = item.valueAsNumber;
  }
  const { maskBlurRadius, blurFilterRadius } = options;
  if (!gaussianBlurProcessor) {
    gaussianBlurProcessor = new GaussianBlurBackgroundProcessor({
      assetsPath,
      maskBlurRadius,
      blurFilterRadius
    });
    await gaussianBlurProcessor.loadModel();
  } else {
    gaussianBlurProcessor.maskBlurRadius = maskBlurRadius;
    gaussianBlurProcessor.blurFilterRadius = blurFilterRadius;
  }
  setProcessor(gaussianBlurProcessor, videoTrack);
};

virtualBackgroundButton.onclick = async (event) => {
  event.preventDefault();
  const options = {};
  const inputs = virtualBackgroundForm.elements;
  for (let item of inputs) {
    item.valueAsNumber
      ? (options[item.id] = item.valueAsNumber)
      : (options[item.id] = item.value);
  }
  let backgroundImage = images[options.backgroundImage];
  let { maskBlurRadius, fitType } = options;
  if (!virtualBackgroundProcessor) {
    virtualBackgroundProcessor = new VirtualBackgroundProcessor({
      assetsPath,
      maskBlurRadius,
      backgroundImage,
      fitType
    });
    await virtualBackgroundProcessor.loadModel();
  } else {
    virtualBackgroundProcessor.backgroundImage = backgroundImage;
    virtualBackgroundProcessor.fitType = fitType;
    virtualBackgroundProcessor.maskBlurRadius = maskBlurRadius;
  }
  setProcessor(virtualBackgroundProcessor, videoTrack);
};

removeProcessorButton.disabled = true;
removeProcessorButton.onclick = (event) => {
  event.preventDefault();
  setProcessor(null, videoTrack);
};
 */
