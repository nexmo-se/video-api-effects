/* import { ModelConfig, PersonInferenceConfig } from '@tensorflow-models/body-pix/dist/body_pix_model'; */
import { InferenceDimensions } from './types';

export const BLUR_FILTER_RADIUS = 15;
export const DEBOUNCE = 2;
export const MASK_BLUR_RADIUS = 5;
export const HISTORY_COUNT = 5;
export const PERSON_PROBABILITY_THRESHOLD = 0.4;
export const MODEL_NAME = 'selfie_segmentation_landscape.tflite';
export const TFLITE_LOADER_NAME = 'tflite.js';
export const TFLITE_SIMD_LOADER_NAME = 'tflite-simd.js';
export const TFLITE_MODELS_SEG_LITE = {
    model96: 'models/segm_lite_v681.tflite',
    model144: 'models/segm_full_v679.tflite'
  };

/* export const MODEL_CONFIG: ModelConfig = {
  architecture: 'MobileNetV1',
  outputStride: 16,
  multiplier: 0.75,
  quantBytes: 4,
};

export const INFERENCE_CONFIG: PersonInferenceConfig = {
  internalResolution: 1,
  maxDetections: 1,
  segmentationThreshold: 0.75,
}; */

export const MODEL_WASM_INFERENCE_DIMENSIONS: InferenceDimensions = {
    model96: {
        height: 96,
        width: 160
    },
    model144: {
        height: 144,
        width: 256
    }
};
