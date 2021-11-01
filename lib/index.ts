import { BackgroundBlurEffect, BackgroundBlurEffectOptions } from './effects/background/BackgroundBlurEffect';
import { VirtualBackgroundEffect, VirtualBackgroundEffectOptions } from './effects/background/VirtualBackgroundEffect';
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