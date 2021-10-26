import { BackgroundBlurEffect, BackgroundBlurEffectOptions } from './effects/background/BackgroundBlurEffect';
import { VirtualBackgroundEffect, VirtualBackgroundEffectOptions } from './effects/background/VirtualBackgroundEffect';
/* import { BackgroundEffect,  } from './effects/background/BackgroundEffect'; */
import { isSupported } from './utils';

window.OT = window.OT || {};

window.OT.VideoEffects = {
    isSupported,
    BackgroundBlurEffect,
    VirtualBackgroundEffect
};


const OTVideoEffects = {
    BackgroundBlurEffect, 
    VirtualBackgroundEffect
}



export {
  OTVideoEffects,
  isSupported,
  BackgroundBlurEffect,
  BackgroundBlurEffectOptions,
  VirtualBackgroundEffect,
  VirtualBackgroundEffectOptions
};


/* import { GaussianBlurBackgroundProcessor, GaussianBlurBackgroundProcessorOptions } from './processors/background/GaussianBlurBackgroundProcessor';
import { VirtualBackgroundProcessor, VirtualBackgroundProcessorOptions } from './processors/background/VirtualBackgroundProcessor';
import { ImageFit } from './types';
import { isSupported } from './utils/support';
import { version } from './utils/version';

window.Twilio = window.Twilio || {};
window.Twilio.VideoProcessors = {
  ...window.Twilio.VideoProcessors,
  GaussianBlurBackgroundProcessor,
  ImageFit,
  isSupported,
  version,
  VirtualBackgroundProcessor,
};

export {
  GaussianBlurBackgroundProcessor,
  GaussianBlurBackgroundProcessorOptions,
  ImageFit,
  isSupported,
  version,
  VirtualBackgroundProcessor,
  VirtualBackgroundProcessorOptions,
};
 */