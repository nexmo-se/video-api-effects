# Vonage Video API - Video Effects

The Vonage Video Effect library adds effects to a camera video stream that you can use with [Vonage Video API](https://www.npmjs.com/package/@opentok/client).

The main feature is the background blur applied to the person's background. 

## Prerequisites

* [Vonage Video API SDK](https://www.npmjs.com/package/@opentok/client)

## Installation

### NPM

You can install directly from npm.

```
npm install @vonage/video-effects --save
```

Using this method, you can import `vonage-video-effects` like so:

```ts
import * as VideoEffects from '@vonage/video-effects';
```

### Script tag

You can also copy `vonage-video-effects.js` from the `dist/build` folder and include it directly in your web app using a `<script>` tag.

 ```html
 <script src="https://my-server-path/vonage-video-effects.js"></script>
 ```

 Using this method, `vonage-video-effects.js` will set a browser global:
 
 ```ts
 const VideoEffects = OT.VideoEffect;
 
 ```
 
 
### Build the library locally
 
You can build the library locally following these steps:

1. `npm install` 
2. `npm run build-umd`
3. `cd example` and `npm start`. The app server will start on port 3000


 
### Background Effect
 
The library adds effects on a MediaStream object. The developer needs to create the MediaStream and pass it to the library. Example:

```js
import OT from "@opentok/client"
const {
  isSupported,
  BackgroundBlurEffect,
} = OT.VideoEffects;

let mediaTrack;
let backgroundBlur;

// Create the MediaTrack with OT.getUserMedia

OT.getUserMedia({ audio: true, video: true })
	.then((track) => {
	  mediaTrack = track;
	})
	.catch((err) => {
	  console.error('OTGetUserMedia - err', err);
	});
	
// Initiate the blur effect
	
backgroundBlur = new BackgroundBlurEffect({
	assetsPath: 'https://your-server-url.com/assets'
});
await backgroundBlur.loadModel();
let outputVideoStream = backgroundBlur.startEffect(mediaTrack);

// Create the publisher and publish into the session

let publisher = OT.initPublisher(
    'publisher',
    {
      audioSource: mediaTrack.getAudioTracks()[0],
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

```