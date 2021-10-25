# Vonage Video API - Video Effects

The Vonage Video Effect library adds effects to a camera video stream that you can use with [Vonage Video API](https://www.npmjs.com/package/@opentok/client).

The main feature is the background blur applied to the person's background. 

## Prerequisites

* [Vonage Video API SDK](https://www.npmjs.com/package/@opentok/client

## Installation

### NPM

You can install directly from npm.

```
npm install @opentok/video-effects --save
```

Using this method, you can import `twilio-video-processors` like so:

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
 const VideoEffects = Opentok.VideoEffect;
 ```
 
 
 
 