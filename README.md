# Vonage Video API - Video Effects

The Vonage Video Effect library adds effects to a camera video stream that you can use
with [Vonage Video API](https://www.npmjs.com/package/@opentok/client).

The main feature is the background blur applied to the person's background

## Live Example

You can see a working
example: [https://vonage-video-effect-sample-app.herokuapp.com/](https://vonage-video-effect-sample-app.herokuapp.com/)

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

You can also copy `vonage-video-effects.js` from the `dist/build` folder and include it directly in your web app using
a `<script>` tag.

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
3. `cd sample-app` and `npm install`. The app server will start on port 3000

### Assets

The VideoEffect library uses WebAssembly to run TensorFlow Lite for person segmentation. You need to serve the tflite
model and binaries so they can be loaded properly. These files can be downloaded from the [assets](./assets) folder.

These effects run TensorFlow Lite using MediaPipe Selfie Segmentation Landscape Model and requires Chrome's WebAssembly
SIMD support in order to achieve the best performance. WebAssembly SIMD can be turned on by visiting chrome://flags on
versions 84 through 90. This will be enabled by default on Chrome 91+.

### Background Effect Processor

The BackgroundEffectProcessor allows you to dynamically add different background effects, enabling and disabling them
and making sure everything is applied to the stream being published by the OpenTok video API.

| Option      | Type | Required | Description
| ----------- | ----------- | --- | ----------- |
| assetsPath  | String       | Yes | The path where the assets are loaded. These files can be downloaded from the dist/build folder. |
| frameRate   | Number| No | The frames per second (fps) to use for the output stream. (default 30)

Example:

```js
const effectProcessor = new BackgroundEffectProcessor({
    assetsPath: 'https://your-server-url.com/assets',
    maskBlurRadius: 5,
    frameRate: 30
});
await effectProcessor.loadEffect(someEffect);

// pause effect processing
effectProcessor.paused = true;
// set and dynamically change the input stream the effects are applied to
effectProcessor.inputStream = yourCameraSteam;
// enable / disable the effect. If disabled the input stream will simply be forwarded to the output
effectProcessor.effectEnabled = true;
// the output stream that has the effect applied to it and will dynamically change based on the properties above.
effectProcessor.outputStream;
```

Currently, the BackgroundEffectProcessor allows you to use the following 2 effects.

### Background Blur Effect

The BackgroundBlurEffect applies a blur filter on the background in each video frame and leaves the person untouched.
The constructor has the following options:

| Option      | Type | Required | Description
| ----------- | ----------- | --- | ----------- |
| blurFilterRadius   | Number| No | The background blur filter radius to use in pixels. (default 15)
| maskBlurRadius   | Number| No | The blur radius to use when smoothing out the edges of the person's mask (default 5)

Example:

```js
const effectProcessor = new BackgroundEffectProcessor({...});
await effectProcessor.loadEffect(new BackgroundBlurEffect({
    blurFilterRadius: 15
}));
```

### Virtual Background Effect

The Virtual Background Effect applies a virtual background in each video frame and leaves the person untouched. The
constructor has the following options:

| Option      | Type | Required | Description
| ----------- | ----------- | --- | ----------- |
| virtualBackground.backgroundType   | String | Yes | Type of virtual background. The only supported type is "image".
| virtualBackground.backgroundImage   | HTMLImageElement | Yes | The HTMLImageElement representing the current background image.
| fitType   | Number| No | The ImageFit for positioning of the background image in the viewport. Available options: "Contain", "Cover", "Fill" or "None"
| maskBlurRadius   | Number| No | The blur radius to use when smoothing out the edges of the person's mask (default 5)

Example:

```js

async function loadImage(name) {
    return new Promise((resolve) => {
        const image = document.createElement('img');
        image.crossOrigin = 'anonymous';
        image.src = `backgrounds/${name}.jpg`;
        image.onload = () => resolve(image);
    });
};

const effectProcessor = new BackgroundEffectProcessor({...});
const backgroundImage = await loadImage('vonage_background');
await effectProcessor.loadEffect(new VirtualBackgroundEffect({
    virtualBackground: {
        backgroundType: 'image',
        backgroundImage
    }
}));
```

The library adds effects on a MediaStream object. The developer needs to create the MediaStream and pass it to the
library. You can see an example on the previous paragraph.

### Bringing it all together

A simple example for a full integration with the opentok video API.

```js
import OT from "@opentok/client"
import {
    BackgroundEffectProcessor,
    BackgroundBlurEffect,
    VirtualBackgroundEffect,
} from "@vonage/video-effects";


async function getLocalMedia() {
    try {
        return await OT.getUserMedia({audioSource: null, videoSource: true});
    } catch (err) {
        console.error('OTGetUserMedia - err', err);
    }
}

async function createBackgroudEffectProcessor() {
    const effectProcessor = new BackgroundEffectsProcessor({assetsPath: 'https://your-server-url.com/assets'});
    effectProcessor.inputStream = await getLocalMedia();
    return effectProcessor;
}

async function publishToSession(effectProcessor) {
    // Create the publisher and publish into the session
    let publisher = OT.initPublisher(
        'publisher',
        {
            videoSource: effectProcessor.outputStream.getVideoTracks()[0],
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
    session.on("streamPropertyChanged", event => {
        if (event.stream == publisher.stream) {
            if (event.changedProperty === "hasVideo") {
                // make sure we pause effect processing while we are not publishing video
                effectProcessor.paused = !event.event.newValue;
            }
        }
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

    return publisher;
}


// putting it all together
const effectProcessor = await createBackgroudEffectProcessor();
await effectProcessor.loadEffect(new BackgroundBlurEffect());
const publisher = await publishToSession(effectProcessor);

// enable disable the effect
function toggleBackgroundEffect() {
    effectProcessor.effectEnabled = !effectProcessor.effectEnabled;
}

// dynamically switch to blur effect
async function switchToBlurEffect(blurRadius) {
    await effectProcessor.loadEffect(new BackgroundBlurEffect({blurFilterRadius: blurRadius}));
}

// dynamically switch to background image effect
async function switchToImageEffect(imageUrl) {
    const image = await new Promise((resolve) => {
        const img = document.createElement('img');
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.src = imageUrl;
    });
    await effectProcessor.loadEffect(new VirtualBackgroundEffect({
        virtualBackground: {
            backgroundType: 'image',
            backgroundImage: image
        }
    }));
}

// change the input stream e.g. when switching to a different camera
function switchCamera(newCameraStream) {
    effectProcessor.inputStream = newCameraStream;
}

// clean up everything
function destory() {
    effectProcessor.destroy();
    publisher.destroy();
}

```



