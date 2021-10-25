import { BackgroundBlurEffect, BackgroundBlurEffectOptions,  } from './effects/background/BackgroundBlurEffect';
import { BackgroundEffect,  } from './effects/background/BackgroundEffect';
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
