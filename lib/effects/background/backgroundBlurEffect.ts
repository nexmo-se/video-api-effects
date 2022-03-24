import {BackgroundEffect, BackgroundEffectOptions} from './BackgroundEffect';
import {BLUR_FILTER_RADIUS} from '../../constants';
import log from 'loglevel';

export interface BackgroundBlurEffectOptions extends BackgroundEffectOptions {
    blurFilterRadius?: number;
}

export class BackgroundBlurEffect extends BackgroundEffect {
    private _blurFilterRadius: number;

    constructor(options: BackgroundBlurEffectOptions) {
        super(options);
        this.blurFilterRadius = options.blurFilterRadius!;
    }

    get blurFilterRadius(): number {
        return this._blurFilterRadius;
    }

    set blurFilterRadius(radius: number) {
        if (!radius) {
            log.warn(`Valid blur filter radius not found. Using ${BLUR_FILTER_RADIUS} as default.`);
            radius = BLUR_FILTER_RADIUS;
        }
        this._blurFilterRadius = radius;
    }

    protected drawBackground(input: HTMLVideoElement, outputCanvasCtx: CanvasRenderingContext2D): void {
        outputCanvasCtx.filter = `blur(${this._blurFilterRadius}px)`;
        outputCanvasCtx.drawImage(input, 0, 0);
    }
}
