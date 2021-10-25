import { BackgroundBlurEffect, BackgroundBlurEffectOptions,  } from './effects/background/backgroundBlurEffect';
import { BackgroundEffect,  } from './effects/background/backgroundEffect';
import { isSupported } from './utils';

window.OT = window.OT || {};

window.OT.VideoEffects = {
    isSupported,
    BackgroundBlurEffect,
    BackgroundEffect
};


const OTVideoEffects = {
    BackgroundBlurEffect, 
    BackgroundEffect
}



export {
  OTVideoEffects,
  isSupported,
  BackgroundBlurEffect,
  BackgroundBlurEffectOptions,
  BackgroundEffect
};
