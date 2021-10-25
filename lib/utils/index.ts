/**
 * @private
 */
 export function isBrowserSupported() {
    return !!window.OffscreenCanvas && !(/Mobi/i.test(window.navigator.userAgent)) && !!window.chrome;
  }
  
export const isSupported = isBrowserSupported();
  