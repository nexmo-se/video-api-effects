import {TFLITE_MODELS_SEG_LITE, TFLITE_SIMD_LOADER_NAME} from '../constants';
import log from 'loglevel';

/**
 * Loads tensorflow lite and initializes it with the given model
 * @param tflitePath path to the tflite lib
 * @param modelPath path to the tflite model
 */
export async function loadTFLite(tflitePath: string, modelPath: string): Promise<any> {
    const [tflite, modelResponse] = await Promise.all([
        loadTFLiteModule(tflitePath),
        fetch(modelPath)
    ]);

    log.debug('ModelResponse', modelResponse);

    if (!tflite) {
        log.error('[BackgroundEffect] - Tflite module not supported or available');
        throw new Error('[BackgroundEffect] - Tflite module not supported or available');
    }

    const model = await modelResponse.arrayBuffer();
    const modelBufferOffset = tflite._getModelBufferMemoryOffset();
    tflite.HEAPU8.set(new Uint8Array(model), modelBufferOffset);
    tflite._loadModel(model.byteLength);

    return tflite;
}


async function loadTFLiteModule(path: string): Promise<any> {
    let tflite: any;
    await createJSScript(path);

    try {
        tflite = await window.createTFLiteSIMDModule();
    } catch {
        log.warn('SIMD not supported. You may experience poor quality of background replacement.');
    }
    return tflite;
}

async function createJSScript(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.append(script);
        script.src = url;
    });
}