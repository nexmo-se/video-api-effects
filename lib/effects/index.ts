/**
 * @private
 * The [[Effect]] is an abstract class for building your own custom processors.
 */
 export abstract class Effect {

    /**
     * Applies a transform to an input frame and draw the results to an output frame buffer.
     * The frame will be dropped if this method raises an exception.
     * @param inputFrameBuffer - The source of the input frame to process.
     * @param outputFrameBuffer - The output frame buffer to use to draw the processed frame.
     */
    abstract processFrame(inputFrameBuffer: OffscreenCanvas, outputFrameBuffer: HTMLCanvasElement): Promise<void> | void;
  }
  