// @flow

import { EventEmitter } from "events";
import { getLogger } from 'jitsi-meet-logger';

const logger = getLogger(__filename);

const SAMPLE_RATE: number = 16000;

const NUMBER_OF_SAMPLES_REQUIRED: number = 16000;

export default class AudioFeedbackDetector extends EventEmitter{

    _audiofeedbackWasmModule: any;

    constructor(audiofeedbackWasmModule) {
        super();
        // Notify via event that audiofeedback is ready

        logger.info("AudioFeedbackDetector initialized...");
    }

    _copySamplesToWasm(samples: Float32Array) {

    }

    getSampleRate() {
        return SAMPLE_RATE;
    }

    getNumberOfBufferSamples() {
        return NUMBER_OF_SAMPLES_REQUIRED;
    }

    /**
     * 
     * @param {Float32Array} pcmFrame length of the frame needs to be one second at 16khz
     * 
     * @returns {Float32Array} representing the scores of the current audio frame.
     */
    getAudioFeedbackScore(pcmFrame: Float32Array) {

        if (pcmFrame.length != this.NUMBER_OF_SAMPLES_REQUIRED) {

            return [1.0, 0.0, 0.0];
        }

        this._copySamplesToWasm(pcmFrame);

        // 

        return [1.0, 0.0, 0.0];
    }
}