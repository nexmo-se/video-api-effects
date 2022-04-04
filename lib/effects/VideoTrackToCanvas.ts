import log from 'loglevel';

export function supportsDirectForwarding(): boolean {
    return !!window.MediaStreamTrackProcessor;
}

export class VideoTrackToCanvas {
    private readonly inputVideoTrack: MediaStreamTrack;
    private readonly outputCanvasCtx: CanvasRenderingContext2D;
    private enabled = false;

    constructor(inputVideoTrack: MediaStreamTrack, outputCanvasCtx: CanvasRenderingContext2D) {
        this.inputVideoTrack = inputVideoTrack;
        this.outputCanvasCtx = outputCanvasCtx;
    }

    public startDirectForwardingInputToOutput() {
        this.enabled = true;
        if (!supportsDirectForwarding())
            throw new Error('Your browser doesn\'t support the MediaStreamTrackProcessor API yet');

        log.debug('forwardInputToOutput');
        const processor = new MediaStreamTrackProcessor({track: this.inputVideoTrack});
        const reader = processor.readable.getReader();
        this.writeFramesToOutput(reader);
    }

    public stopDirectForwardingInputToOutput() {
        this.enabled = false;
    }

    private async writeFramesToOutput(reader: ReadableStreamReader<VideoFrame>) {
        try {
            const {done, value} = await reader.read();
            if (done) return;
            if (!this.enabled) {
                value.close();
                return;
            }

            if (this.outputCanvasCtx != null) {
                // the MediaStream video can have dynamic size
                if (this.outputCanvasCtx.canvas.width !== value.displayWidth || this.outputCanvasCtx.canvas.height !== value.displayHeight) {
                    this.outputCanvasCtx.canvas.width = value.displayWidth;
                    this.outputCanvasCtx.canvas.height = value.displayHeight;
                }
                this.outputCanvasCtx.filter = 'none';
                this.outputCanvasCtx.globalCompositeOperation = 'copy';
                // value is a VideoFrame but the TS DOM lib doesn't support this as parameter yet
                this.outputCanvasCtx.drawImage(value as any, 0, 0);
                value.close(); // close the VideoFrame when we're done with it
            }
            // write the next frame
            this.writeFramesToOutput(reader);
        } catch (e) {
            log.error('Error reading video stream: ' + e, e);
        }
    }

}