import { BackgroundEffect, BackgroundEffectOptions } from './backgroundEffect';
import { BLUR_FILTER_RADIUS } from '../../constants';


/**
 * Options passed to [[BackgroundBlurEffectOptions]] constructor.
 */
 export interface BackgroundBlurEffectOptions extends BackgroundEffectOptions{
    /**
     * The background blur filter radius to use in pixels.
     * @default
     * ```html
     * 15
     * ```
     */
    blurFilterRadius?: number;
  }

export class BackgroundBlurEffect extends BackgroundEffect {
    private _blurFilterRadius: number = 15;
    // tslint:disable-next-line no-unused-variable 
  
    /**
     * Construct a GaussianBlurBackgroundProcessor. Default values will be used for
     * any missing properties in [[BackgroundBlurEffectOptions]], and
     * invalid properties will be ignored.
     */
    constructor(options: BackgroundBlurEffectOptions) {
      super(options);
      this.blurFilterRadius = options.blurFilterRadius!;
    }
  
    /**
     * The current background blur filter radius in pixels.
     */
    get blurFilterRadius(): number {
      return this._blurFilterRadius;
    }
  
    /**
     * Set a new background blur filter radius in pixels.
     */
    set blurFilterRadius(radius: number) {
      if (!radius) {
        console.warn(`Valid blur filter radius not found. Using ${BLUR_FILTER_RADIUS} as default.`);
        radius = BLUR_FILTER_RADIUS;
      }
      this._blurFilterRadius = radius;
    }
  
    protected _setBackground(inputFrame: OffscreenCanvas): void {
      this._outputContext.filter = `blur(${this._blurFilterRadius}px)`;
      this._outputContext.drawImage(inputFrame, 0, 0);
    }
}