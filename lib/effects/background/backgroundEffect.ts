import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import log from 'loglevel';
import {
    MASK_BLUR_RADIUS
} from '../../constants';
import {Dimensions} from '../../types';

/**
 * @private
 */
export interface BackgroundEffectOptions {
    /**
     * The blur radius to use when smoothing out the edges of the person's mask.
     * @default
     * ```html
     * 5
     * ```
     */
    maskBlurRadius?: number;
}

export abstract class BackgroundEffect {
    private _tflite: any;
    private _inputVideoElement: HTMLVideoElement;
    private _outputCanvasCtx: CanvasRenderingContext2D | null;

    private readonly _segmentationMaskCanvas: HTMLCanvasElement;
    private readonly _segmentationMaskCtx: CanvasRenderingContext2D;
    private _segmentationMask: ImageData;
    private _maskBlurRadius: number;

    protected constructor(options: BackgroundEffectOptions) {
        log.setLevel('DEBUG');
        this.maskBlurRadius = options?.maskBlurRadius;

        this._segmentationMaskCanvas = document.createElement('canvas');
        this._segmentationMaskCtx = this._segmentationMaskCanvas.getContext('2d') as CanvasRenderingContext2D;

        log.debug('[BackgroundEffect] this._segmentationMaskCanvas.width :', this._segmentationMaskCanvas.width);
        log.debug('[BackgroundEffect] this._segmentationMaskCanvas.height :', this._segmentationMaskCanvas.height);
    }

    public init(tflite: any, segmentationMaskDimensions: Dimensions, inputVideoElement: HTMLVideoElement, outputCanvesCtx: CanvasRenderingContext2D) {
        this._tflite = tflite;
        this._inputVideoElement = inputVideoElement;
        this._outputCanvasCtx = outputCanvesCtx;
        this._segmentationMask = new ImageData(segmentationMaskDimensions.width, segmentationMaskDimensions.height);
        this._segmentationMaskCanvas.width = this._segmentationMask.width;
        this._segmentationMaskCanvas.height = this._segmentationMask.height;

        log.debug('[BackgroundEffect.init] this._inputVideoElement.width :', this._inputVideoElement.width);
        log.debug('[BackgroundEffect.init] this._inputVideoElement.height :', this._inputVideoElement.height);
        log.debug('[BackgroundEffect.init] this._segmentationMask.width :', this._segmentationMask.width);
        log.debug('[BackgroundEffect.init] this._segmentationMask.height :', this._segmentationMask.height);
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
    set maskBlurRadius(radius: number | null | undefined) {
        if (typeof radius !== 'number' || radius < 0) {
            log.warn(`Valid mask blur radius not found. Using ${MASK_BLUR_RADIUS} as default.`);
            radius = MASK_BLUR_RADIUS;
        }
        this._maskBlurRadius = radius;
    }

    /**
     * Loop function to render the background mask.
     *
     * @returns {void}
     */
    public applyEffect(): void {
        if (!this._tflite) throw new Error('Effect has to be initialized before it can be applied');

        this.resizeSource();
        this.runInference();
        this.runPostProcessing();
    }

    /**
     * Represents the resize source process.
     *
     * @returns {void}
     */
    private resizeSource() {
        this._segmentationMaskCtx.drawImage(
            this._inputVideoElement,
            0,
            0,
            this._inputVideoElement.width,
            this._inputVideoElement.height,
            0,
            0,
            this._segmentationMask.width,
            this._segmentationMask.height
        );

        const imageData = this._segmentationMaskCtx.getImageData(
            0,
            0,
            this._segmentationMask.width,
            this._segmentationMask.height
        );
        const inputMemoryOffset = this._tflite._getInputMemoryOffset() / 4;
        const segmentationPixelCount = this._segmentationMask.width * this._segmentationMask.height;

        for (let i = 0; i < segmentationPixelCount; i++) {
            this._tflite.HEAPF32[inputMemoryOffset + (i * 3)] = imageData.data[i * 4] / 255;
            this._tflite.HEAPF32[inputMemoryOffset + (i * 3) + 1] = imageData.data[(i * 4) + 1] / 255;
            this._tflite.HEAPF32[inputMemoryOffset + (i * 3) + 2] = imageData.data[(i * 4) + 2] / 255;
        }
    }

    /**
     * Represents the run Tensorflow Interference.
     *
     * @returns {void}
     */
    private runInference() {
        this._tflite._runInference();
        const segmentationPixelCount = this._segmentationMask.width * this._segmentationMask.height;
        const outputMemoryOffset = this._tflite._getOutputMemoryOffset() / 4;

        for (let i = 0; i < segmentationPixelCount; i++) {
            const background = this._tflite.HEAPF32[outputMemoryOffset + (i * 2)];
            const person = this._tflite.HEAPF32[outputMemoryOffset + (i * 2) + 1];
            const shift = Math.max(background, person);
            const backgroundExp = Math.exp(background - shift);
            const personExp = Math.exp(person - shift);

            // Sets only the alpha component of each pixel.
            this._segmentationMask.data[(i * 4) + 3] = (255 * personExp) / (backgroundExp + personExp);
        }
        this._segmentationMaskCtx.putImageData(this._segmentationMask, 0, 0);
    }

    /**
     * Represents the run post processing.
     *
     * @returns {void}
     */
    private runPostProcessing() {
        if (!this._outputCanvasCtx) return;

        // Smooth out the edges.
        this._outputCanvasCtx.filter = `blur(${this._maskBlurRadius}px)`;
        this._outputCanvasCtx.globalCompositeOperation = 'copy';
        this._outputCanvasCtx.drawImage(
            this._segmentationMaskCanvas,
            0,
            0,
            this._segmentationMask.width,
            this._segmentationMask.height,
            0,
            0,
            this._inputVideoElement.width,
            this._inputVideoElement.height
        );
        this._outputCanvasCtx.globalCompositeOperation = 'source-in';
        this._outputCanvasCtx.filter = 'none';
        // Draw the foreground video.
        this._outputCanvasCtx.drawImage(this._inputVideoElement, 0, 0);

        this._outputCanvasCtx.globalCompositeOperation = 'destination-over';
        this.drawBackground(this._inputVideoElement, this._outputCanvasCtx);
    }

    protected abstract drawBackground(input: HTMLVideoElement, outputCanvasCtx: CanvasRenderingContext2D): void;
}
