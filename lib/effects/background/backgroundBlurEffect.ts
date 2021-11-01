import { BackgroundEffect, BackgroundEffectOptions } from './BackgroundEffect';
import { BLUR_FILTER_RADIUS } from '../../constants';
import log from 'loglevel';

export interface BackgroundBlurEffectOptions extends BackgroundEffectOptions {
  
  blurFilterRadius?: number;
}

export class BackgroundBlurEffect extends BackgroundEffect {
  private _blurFilterRadius: number = 15;
  // tslint:disable-next-line no-unused-variable

  constructor(options: BackgroundBlurEffectOptions) {
    super(options);
    this.blurFilterRadius = options.blurFilterRadius!;
  }

  get blurFilterRadius(): number {
    return this._blurFilterRadius;
  }

  set blurFilterRadius(radius: number) {
    if (!radius) {
      log.warn(
        `Valid blur filter radius not found. Using ${BLUR_FILTER_RADIUS} as default.`
      );
      radius = BLUR_FILTER_RADIUS;
    }
    this._blurFilterRadius = radius;
  }

  protected _applyFilter(input: HTMLVideoElement): void {
    if (this._outputCanvasCtx) {
      this._outputCanvasCtx.filter = `blur(${this._blurFilterRadius}px)`;
      this._outputCanvasCtx.drawImage(input, 0, 0);
    }
  }
}
