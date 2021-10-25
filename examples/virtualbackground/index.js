'use strict';

const { isSupported, BackgroundEffect } = OT.VideoEffects;
const bootstrap = window.bootstrap;

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
  });
  await backgroundBlur.loadModel();
  const outputVideoStream = backgroundBlur.startEffect(mediaTrack);
  console.log('outputVideoStream', outputVideoStream);
  publisher = OT.initPublisher(
    'publisher',
    {
      audioSource: audioTrack,
      videoSource: outputVideoStream.getVideoTracks()[0]
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
