import { BackgroundBlurEffect, BackgroundBlurEffectOptions } from './effects/background/backgroundBlurEffect';
import { isSupported } from './utils';

// window.Twilio = window.Twilio || {};
/* window.Twilio.VideoProcessors = {
  ...window.Twilio.VideoProcessors,
  GaussianBlurBackgroundProcessor,
  ImageFit,
  isSupported,
  version,
  VirtualBackgroundProcessor,
};
 */

const OTVideoEffects = {
    BackgroundBlurEffect, 
}



export {
OTVideoEffects,
  isSupported,
  BackgroundBlurEffect,
  BackgroundBlurEffectOptions,
};
