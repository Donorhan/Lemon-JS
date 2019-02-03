import TextureInterface from './TextureInterface';

/**
 * A texture to display video
 *
 * @category Textures
 * @extends {TextureInterface}
 */
class TextureVideo extends TextureInterface {
    /**
     * Constructor
     *
     * @param {string} path Path to the video file
     */
    constructor(path = null) {
        super();

        /**
         * Video.
         * @type {HTMLVideoElement}
         * @private
         */
        this.data = document.createElement('video');

        if (path) {
            this.loadFromFile(path);
        }
    }

    /**
     * Load the video from a file
     *
     * @param {string} path Path to the video file
     */
    loadFromFile(path) {
        // Detect when video is ready
        this.data.addEventListener('canplaythrough', () => {
            this.ready = true;
        }, true);

        // Load
        this.data.preload = 'auto';
        this.data.crossOrigin = 'anonymous';
        this.data.src = path;
        this.data.muted = 'muted';
    }

    /**
     * Pause the video
     */
    pause() {
        this.data.pause();
    }

    /**
     * Play the video
     */
    play() {
        this.data.play();
    }

    /**
     * Set video's playback speed
     *
     * @param {number} [value] 0.5 is half speed, 1.0 is normal speed, 2.0 is double speed
     */
    setSpeed(value = 1.0) {
        this.data.playbackRate = value;
    }

    /**
     * Get video's duration
     *
     * @return {number} The duration property returns the length of the current audio/video, in seconds
     */
    getDuration() {
        return this.data.duration;
    }

    /**
     * Get video's data
     *
     * @return {HTMLVideoElement} The HTML video element
     */
    getVideoData() {
        return this.data;
    }
}

export default TextureVideo;
