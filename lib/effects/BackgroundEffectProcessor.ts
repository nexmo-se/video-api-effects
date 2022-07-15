import log from 'loglevel';
import {
    CLEAR_TIMEOUT,
    TIMEOUT_TICK,
    SET_TIMEOUT,
    timerWorkerScript
} from './TimeWorker';

import {
    MODEL_WASM_INFERENCE_DIMENSIONS,
    OUTPUT_FRAMES_PER_SECOND,
    TFLITE_MODELS_SEG_LITE,
    TFLITE_SIMD_LOADER_NAME,
} from '../constants';
import {loadTFLite} from './TFLiteLoader';
import {BackgroundEffect} from './background/BackgroundEffect';
import {supportsDirectForwarding, VideoTrackToCanvas} from './VideoTrackToCanvas';
import {Dimensions} from '../types';

/**
 * @private
 */
export interface BackgroundEffectOptions {
    /**
     * The assets path where the models and tflite are loaded.
     * These assets can be copied from the `dist/build` folder.
     */
    assetsPath: string;

    /**
     * The output video stream's frame rate in fps
     * @default
     * ```html
     * 30
     * ```
     */
    frameRate?: number;

    /**
     * @private
     */
    useWasm?: boolean;
}

enum OutputState {
    /**
     * No output actively being sent
     */
    PAUSED,
    /**
     * The effect is applied to the output
     */
    EFFECT_APPLIED,
    /**
     * The input video is simply forwarded to the output
     */
    INPUT_FORWARDING
}

export class BackgroundEffectProcessor {

    private readonly _assetsPath: string;
    private readonly _useWasm: boolean;

    private readonly _inputVideoElement: HTMLVideoElement;
    private readonly _outputCanvasElement: HTMLCanvasElement;
    private readonly _outputCanvasCtx: CanvasRenderingContext2D;

    private readonly _outputFramesPerSecond: number;
    private readonly _maskFrameTimerWorker: any;

    private _inputStream: MediaStream;
    private _inputVideoTrack: MediaStreamTrack;

    private _effect: BackgroundEffect | null;
    private _inputForwardEffect: VideoTrackToCanvas | null;
    private _effectEnabled = false;
    private _outputState = OutputState.PAUSED;
    private _tflite: any;
    private _segmentationMaskDimensions: Dimensions;

    constructor(options: BackgroundEffectOptions) {
        this._useWasm = typeof options.useWasm === 'boolean' ? options.useWasm : true;
        this._outputFramesPerSecond = typeof options.frameRate === 'number' ? options.frameRate : OUTPUT_FRAMES_PER_SECOND;
        if (typeof options.assetsPath !== 'string') {
            throw new Error('assetsPath parameter is missing');
        }
        let assetsPath = options.assetsPath;
        if (assetsPath?.[assetsPath.length - 1] !== '/') {
            assetsPath += '/';
        }

        this._assetsPath = assetsPath;
        this._inputVideoElement = document.createElement('video');
        this._outputCanvasElement = document.createElement('canvas');
        this._outputCanvasCtx = this._outputCanvasElement.getContext('2d') as CanvasRenderingContext2D;

        this._maskFrameTimerWorker = new Worker(timerWorkerScript, {name: 'BackgroundEffectWorker'});
        this._maskFrameTimerWorker.onmessage = (e: MessageEvent) => {
            if (e.data.id !== TIMEOUT_TICK) return;
            this.renderFrame();
        };
    }

    /**
     * Returns true if the video stream processing is paused
     */
    get paused(): boolean {
        return this._outputState === OutputState.PAUSED;
    }

    /**
     * Pauses all ongoing video stream processing. This should be used when video isn't published to not use the CPU without any need for it.
     */
    pauseStreamProcessing(pause: boolean) {
        this.setOutputState(pause ? OutputState.PAUSED : this.effectEnabled ? OutputState.EFFECT_APPLIED : OutputState.INPUT_FORWARDING);
    }

    /**
     * If the effect is currently applied to the stream returned by the startEffect method.
     */
    get effectEnabled(): boolean {
        return this._effectEnabled;
    }

    /**
     * Enables or disables the effect on the stream returned by the startEffect method. If set to false, the input video track will simply be forwarded to the output.
     * @param enable defines if the effect should be applied to the returned stream
     */
    enableEffect(enable: boolean) {
        if (this.effectEnabled === enable) return;

        this._effectEnabled = enable;
        if (this._outputState !== OutputState.PAUSED)
            this.setOutputState(enable ? OutputState.EFFECT_APPLIED : OutputState.INPUT_FORWARDING);
    }

    /**
     * Load the given effect as well as tflite and the segmentation model.
     * Bust be called before the effect is enabled.
     *
     * This method can be called multiple times to change the applied background effect on demand.
     */
    async loadEffect(effect: BackgroundEffect) {
        if (!this._tflite) {
            log.debug('[loadEffect] loading tflite');
            const modelToLoad = this._useWasm ? TFLITE_MODELS_SEG_LITE.model144 : TFLITE_MODELS_SEG_LITE.model96;
            this._segmentationMaskDimensions = this._useWasm ? MODEL_WASM_INFERENCE_DIMENSIONS.model144 : MODEL_WASM_INFERENCE_DIMENSIONS.model96;
            this._tflite = await loadTFLite(this._assetsPath + TFLITE_SIMD_LOADER_NAME, this._assetsPath + modelToLoad);
        }
        this._effect = effect;
        this._effect.init(this._tflite, this._segmentationMaskDimensions, this._inputVideoElement, this._outputCanvasCtx);
    }


    private setOutputState(state: OutputState) {
        if (state === this._outputState) return;
        this._outputState = state;
        this.applyOutputState();
    }

    private applyOutputState() {
        // make sure to stop everything first before triggering new effects.
        this.stopEffectProcessing();
        if (this._inputForwardEffect) {
            this._inputForwardEffect.stopDirectForwardingInputToOutput();
            this._inputForwardEffect = null;
        }

        if (this._outputState === OutputState.EFFECT_APPLIED) {
            this.triggerEffectProcessing();
        }

        if (this._outputState === OutputState.INPUT_FORWARDING) {
            if (supportsDirectForwarding()) {
                this._inputForwardEffect = new VideoTrackToCanvas(this._inputVideoTrack, this._outputCanvasCtx);
                this._inputForwardEffect.startDirectForwardingInputToOutput();
            } else {
                this.triggerEffectProcessing();
            }
        }
    }

    private triggerEffectProcessing() {
        this._maskFrameTimerWorker.postMessage({
            id: SET_TIMEOUT,
            timeMs: 1000 / this._outputFramesPerSecond
        });
    }

    private stopEffectProcessing() {
        this._maskFrameTimerWorker.postMessage({
            id: CLEAR_TIMEOUT
        });
    }

    /**
     * Returns the previously set media stream
     */
    public get inputStream(): MediaStream {
        return this._inputStream;
    }

    /**
     * Sets / changes the input stream to the given stream. The effect will be applied to this stream and then forwarded to the ouput.
     * @param stream the stream to use for the video input
     */
    public setInputStream(stream: MediaStream) {
        if (!stream?.getVideoTracks?.()[0]) {
            log.warn('[inputStream] - Media Stream is null or doesn\'t contain any video tracks');
            throw new Error(`Invalid input stream is missing a video track: ${stream}`);
        }

        this.disconnectInputVideoElement();
        if (this._inputForwardEffect) {
            this._inputForwardEffect.stopDirectForwardingInputToOutput();
            this._inputForwardEffect = null;
        }

        this._inputStream = stream;
        this._inputVideoTrack = stream.getVideoTracks()[0];
        const {width, height} = this._inputVideoTrack.getSettings?.() ?? this._inputVideoTrack.getConstraints();

        this._outputCanvasElement.width = Number(width);
        this._outputCanvasElement.height = Number(height);

        this._inputVideoElement.width = Number(width);
        this._inputVideoElement.height = Number(height);
        this._inputVideoElement.autoplay = true;
        this._inputVideoElement.srcObject = stream;
        this._inputVideoElement.onloadeddata = () => {
            this.applyOutputState();
        };

        // log.debug('[inputStream] this._inputVideoElement.width :', this._inputVideoElement.width);
        // log.debug('[inputStream] this._inputVideoElement.height :', this._inputVideoElement.height);
        // log.debug('[inputStream] this._outputCanvasElement.width :', this._outputCanvasElement.width);
        // log.debug('[inputStream] this._outputCanvasElement.height :', this._outputCanvasElement.height);
    }

    /**
     * Returns the output stream with the effect applied to it
     */
    public get outputStream(): MediaStream {
        return this._outputCanvasElement.captureStream(Number(this._outputFramesPerSecond));
    }

    private renderFrame() {
        if (this._outputState === OutputState.EFFECT_APPLIED) {
            this._effect?.applyEffect();
            // schedule next rendering
            this.triggerEffectProcessing();
        } else if (this._outputState === OutputState.INPUT_FORWARDING && !this._inputForwardEffect) {
            // simply forward the video if we don't support direct forwarding
            this._outputCanvasCtx.globalCompositeOperation = 'copy';
            this._outputCanvasCtx.filter = 'none';
            this._outputCanvasCtx.drawImage(this._inputVideoElement, 0, 0);
            // schedule next rendering
            this.triggerEffectProcessing();
        }
    }

    private disconnectInputVideoElement() {
        this._inputVideoElement.pause();
        this._inputVideoElement.srcObject = null;
        if (this._inputVideoTrack)
            this._inputVideoTrack.stop();
    }

    public destroy() {
        this.pauseStreamProcessing(true);
        this._maskFrameTimerWorker.terminate();
        this.disconnectInputVideoElement();
    }

}

