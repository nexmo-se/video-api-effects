'use strict';

const {
  isSupported,
  BackgroundBlurEffect,
  VirtualBackgroundEffect
} = OT.VideoEffects;
const bootstrap = window.bootstrap;

const startBlurEffectButton = document.getElementById('start-blur-effect');
const startVirtualBgEffectButton = document.getElementById(
  'start-virtual-bg-effect'
);
const stopEffectButton = document.getElementById('stop-effect');
const backgroundsForm = document.getElementById('backgrounds-form');

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
let backgroundBlur;
let audioTrack;
let videoTrack;
let mediaTrack;
let virtualBgEffect;

const loadImage = (name) => {
  return new Promise((resolve) => {
    /* const image = new Image(); */
    const image = document.createElement('img');
    image.crossOrigin = 'anonymous';
    image.src = `backgrounds/${name}.jpg`;
    image.onload = () => resolve(image);
  });
};

let backgrounds = {};
Promise.all([
  loadImage('vonage_background'),
  loadImage('simpson_background')
]).then(([vonageBg, simpsonBg]) => {
  backgrounds.vonage = vonageBg;
  backgrounds.simpson = simpsonBg;
  return backgrounds;
});

if (!isSupported) {
  errorMessage.textContent = 'This browser is not supported.';
  errorModal.show();
}

const createLocalTrack = () => {
  return OT.getUserMedia({ audio: true, video: true })
    .then((track) => {
      mediaTrack = track;
      audioTrack = track.getAudioTracks()[0];
      console.log('OTGetUserMedia - videoTrack', videoTrack);
    })
    .catch((err) => {
      console.error('OTGetUserMedia - err', err);
    });
};

const publishToSession = (outputVideoStream) => {
  publisher = OT.initPublisher(
    'publisher',
    {
      audioSource: audioTrack,
      videoSource: outputVideoStream.getVideoTracks()[0],
      width: 640,
      height: 480,
      insertMode: 'append'
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

// Start Effect Logic

const initVirtualBgEffect = async () => {
  const options = {};
  const inputs = backgroundsForm.elements;
  for (let item of inputs) {
    item.valueAsNumber
      ? (options[item.id] = item.valueAsNumber)
      : (options[item.id] = item.value);
  }
  let backgroundImage = backgrounds[options.backgroundImage];
  if (!virtualBgEffect) {
    virtualBgEffect = new VirtualBackgroundEffect({
      assetsPath: '',
      virtualBackground: {
        backgroundType: 'image',
        backgroundImage
      }
    });
    await virtualBgEffect.loadModel();
  } else {
    virtualBgEffect.backgroundImage = backgroundImage;
  }
  await createLocalTrack();
  await virtualBgEffect.loadModel();
  publishToSession(virtualBgEffect.startEffect(mediaTrack));
};

const initBlurEffect = async () => {
  await createLocalTrack();
  backgroundBlur = new BackgroundBlurEffect({
    assetsPath: ''
  });
  await backgroundBlur.loadModel();
  publishToSession(backgroundBlur.startEffect(mediaTrack));
};

startBlurEffectButton.onclick = (event) => {
  event.preventDefault();
  initBlurEffect();
};
startVirtualBgEffectButton.onclick = (event) => {
  event.preventDefault();
  initVirtualBgEffect();
};

stopEffectButton.onclick = (event) => {
  event.preventDefault();
  if (backgroundBlur) {
    backgroundBlur.stopEffect();
  }
  if (virtualBgEffect) {
    virtualBgEffect.stopEffect();
  }

  publisher.destroy();
  mediaTrack.getTracks().forEach((t) => t.stop());
};
