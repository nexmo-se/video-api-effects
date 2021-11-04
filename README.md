# Vonage Video API - Video Effects

The Vonage Video Effect library adds effects to a camera video stream that you can use with [Vonage Video API](https://www.npmjs.com/package/@opentok/client).

The main feature is the background blur applied to the person's background

## Live Example

You can see a working example: [https://vonage-video-effect-sample-app.herokuapp.com/](https://vonage-video-effect-sample-app.herokuapp.com/) 

## Prerequisites

* [Vonage Video API SDK](https://www.npmjs.com/package/@opentok/client)

## Installation

### NPM

You can install directly from npm.

```
npm install @vonage/video-effects
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

### Assets

The VideoEffect library uses WebAssembly to run TensorFlow Lite for person segmentation. You need to serve the tflite model and binaries so they can be loaded properly. These files can be downloaded from the dist/build folder.

These effects run TensorFlow Lite using MediaPipe Selfie Segmentation Landscape Model and requires Chrome's WebAssembly SIMD support in order to achieve the best performance. WebAssembly SIMD can be turned on by visiting chrome://flags on versions 84 through 90. This will be enabled by default on Chrome 91+.

 
### Background Blur Effect

The BackgroundBlurEffect applies a blur filter on the background in each video frame and leaves the person untouched. The constructor has the following options:

| Option      | Type | Required | Description
| ----------- | ----------- | --- | ----------- |
| assetsPath  | String       | Yes | The path where the assets are loaded. These files can be downloaded from the dist/build folder. |
| maskBlurRadius   | Number| No | The blur radius to use when smoothing out the edges of the person's mask (default 5)
| blurFilterRadius   | Number| No | The background blur filter radius to use in pixels. (default 15)

Example: 

```js
const backgroundBlur = new BackgroundBlurEffect({
	assetsPath: 'https://your-server-url.com/assets',
	maskBlurRadius: 5,
	blurFilterRadius: 15
});
await backgroundBlur.loadModel();
backgroundBlur.startEffect(mediaTrack);

```
 
The library adds effects on a MediaStream object. The developer needs to create the MediaStream and pass it to the library. Example:

```js
import OT from "@opentok/client"
import {
  isSupported,
  BackgroundBlurEffect,
} from "@vonage/video-effects";

let mediaTrack;
let backgroundBlur;
let outputVideoStream;

// Create the MediaTrack with OT.getUserMedia

async function getLocalTrack() {
	try {
	  const track = await OT.getUserMedia({ audioSource: null, videoSource: true });
	  mediaTrack = track;
	} catch (err) {
	  console.error('OTGetUserMedia - err', err);
	}
}

async function initBlurEffect() {
	// Initiate the blur effect
	backgroundBlur = new BackgroundBlurEffect({
		assetsPath: 'https://your-server-url.com/assets'
	});
	await backgroundBlur.loadModel();
	outputVideoStream = backgroundBlur.startEffect(mediaTrack);
}
	
async function publishToSession() {
// Create the publisher and publish into the session
let publisher = OT.initPublisher(
    'publisher',
    {
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
}

async function stopEffect() {
	if (backgroundBlur){
        backgroundBlur.stopEffect();
        mediaTrack.getTracks().forEach((t) => t.stop());
        publisher.destroy()
    }
}

async function init() {
	await getLocalTrack();
	await initBlurEffect();
	await publishToSession();
}

  
  

```