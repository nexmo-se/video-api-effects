import log from 'loglevel';

import { BackgroundBlurEffect, BackgroundBlurEffectOptions } from './effects/background/BackgroundBlurEffect';
import { VirtualBackgroundEffect, VirtualBackgroundEffectOptions } from './effects/background/VirtualBackgroundEffect';
import { isSupported } from './utils';
import {BackgroundEffectProcessor} from './effects/BackgroundEffectProcessor';

window.OT = window.OT || {};

if (process.env.NODE_ENV === 'production') {
    log.setLevel('WARN');
}

window.OT.VideoEffects = {
    isSupported,
    BackgroundEffectProcessor,
    BackgroundBlurEffect,
    VirtualBackgroundEffect
};


export {
  isSupported,
  BackgroundEffectProcessor,
  BackgroundBlurEffect,
  BackgroundBlurEffectOptions,
  VirtualBackgroundEffect,
  VirtualBackgroundEffectOptions
};