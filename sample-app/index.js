'use strict';

const {
    isSupported,
    BackgroundEffectProcessor,
    BackgroundBlurEffect,
    VirtualBackgroundEffect
} = OT.VideoEffects;
const bootstrap = window.bootstrap;

const enableEffectButton = document.getElementById('enable-effect');
const pauseEffectProcessingButton = document.getElementById('pause-effect-processing');


const effectTypeSelect = document.getElementById('effect-type');

const blurEffectConfigContainer = document.getElementById('blur-background-config');
const maskBlurRadiusBlurEffect = document.getElementById('mask-blur-radius-blur-effect');
const blurRadiusInput = document.getElementById('blur-radius');
const startBlurEffectButton = document.getElementById('start-blur-effect');


const imageEffectConfigContainer = document.getElementById('virtual-background-config');
const maskBlurRadiusImgEffect = document.getElementById('mask-blur-radius-blur-effect');
const backgroundImageSelect = document.getElementById('background-image');
const startVirtualBgEffectButton = document.getElementById('start-virtual-bg-effect');

// Credentials
const apikey = '47003234';
const sessionId =
    '1_MX40NzAwMzIzNH5-MTYzNTE1NDgxMTQzMn5IUUhjUTk1NWFNMmlURFZyYnFGVTF1cGl-fg';
const token =
    'T1==cGFydG5lcl9pZD00NzAwMzIzNCZzaWc9YWVkY2FmNTZjNGUzYzQwY2Y0NDg5ZDg3NDQxYThlMTc5MGIzMTY1OTpzZXNzaW9uX2lkPTFfTVg0ME56QXdNekl6Tkg1LU1UWXpOVEUxTkRneE1UUXpNbjVJVVVoalVUazFOV0ZOTW1sVVJGWnlZbkZHVlRGMWNHbC1mZyZjcmVhdGVfdGltZT0xNjM1MTU0ODIxJm5vbmNlPTAuNTA3NjgyNDEwMjUxNDk0MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjM3NzUwNDIwJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

// Same directory as the current js file
const assetsPath = '/assets';

if (!isSupported) {
    errorMessage.textContent = 'This browser is not supported.';
    errorModal.show();
}

async function loadImage(name) {
    return new Promise((resolve) => {
        /* const image = new Image(); */
        const image = document.createElement('img');
        image.crossOrigin = 'anonymous';
        image.src = `backgrounds/${name}.jpg`;
        image.onload = () => resolve(image);
    });
}

async function getLocalMedia() {
    try {
        //return await OT.getUserMedia({audioSource: null, videoSource: true});
        return await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    } catch (err) {
        console.error('OTGetUserMedia - err', err);
    }
}

async function createBackgroudEffectProcessor() {
    const effectProcessor = new BackgroundEffectProcessor({assetsPath});
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
            publishAudio: false,
            publishVideo: true,
            insertMode: 'append'
        },
        err => {
            if (err) console.error('Error publishing:', err);
            else console.log('Publisher Created');
        }
    );
    const session = OT.initSession(apikey, sessionId);
    session.on('streamCreated', (stream) => {
        session.subscribe(stream, (err) => {
            if (err) console.error('Error while subscribing', err);
            else console.log('Subscribed to ', stream);
        });
    });
    session.on("streamPropertyChanged", event => {
        if (event.stream === publisher.stream) {
            if (event.changedProperty === "hasVideo") {
                // make sure we pause effect processing while we are not publishing video
                effectProcessor.paused = !event.event.newValue;
            }
        }
    });
    session.connect(token, (err) => {
        if (err) {
            console.error('Error while connecting to the session falling', err);
            return;
        }
        console.log('Session Connected');

        session.publish(publisher, (errPublisher) => {
            if (errPublisher) console.error('Error while publishing into the session', errPublisher);
            else console.log('Successfully published the stream');
        });
    });

    return publisher;
}

(async () => {
    const backgrounds = {
        vonage: await loadImage('vonage_background'),
        simpson: await loadImage('simpson_background')
    };

    // putting it all together
    const effectProcessor = await createBackgroudEffectProcessor();
    await effectProcessor.loadEffect(new BackgroundBlurEffect());
    effectProcessor.paused = false;
    effectProcessor.effectEnabled = true;
    const publisher = await publishToSession(effectProcessor);

    // dynamically switch to blur effect
    async function switchToBlurEffect(blurRadius, maskBlurRadius) {
        await effectProcessor.loadEffect(new BackgroundBlurEffect({
            blurFilterRadius: blurRadius,
            maskBlurRadius
        }));
    }

    // dynamically switch to background image effect
    async function switchToImageEffect(imageName, maskBlurRadius) {
        await effectProcessor.loadEffect(new VirtualBackgroundEffect({
            virtualBackground: {
                backgroundType: 'image',
                backgroundImage: backgrounds[imageName]
            },
            maskBlurRadius
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

    // bind UI event listeners

    enableEffectButton.onclick = event => {
        effectProcessor.effectEnabled = event.target.checked;
    };

    pauseEffectProcessingButton.onclick = event => {
        effectProcessor.paused = event.target.checked;
    };

    blurEffectConfigContainer.style.display = '';
    imageEffectConfigContainer.style.display = 'none';
    effectTypeSelect.onchange = event => {
        const effectName = effectTypeSelect.options[effectTypeSelect.selectedIndex].value;
        if (effectName === 'image') {
            blurEffectConfigContainer.style.display = 'none';
            imageEffectConfigContainer.style.display = '';
        } else {
            blurEffectConfigContainer.style.display = '';
            imageEffectConfigContainer.style.display = 'none';
        }
    };

    startBlurEffectButton.onclick = event => {
        switchToBlurEffect(new Number(blurRadiusInput.value), new Number(maskBlurRadiusBlurEffect.value));
    };
    startVirtualBgEffectButton.onclick = event => {
        const imageName = backgroundImageSelect.options[backgroundImageSelect.selectedIndex].value;
        const maskBlurRadius = new Number(maskBlurRadiusImgEffect.value);
        switchToImageEffect(imageName, maskBlurRadius);
    };
})
();
