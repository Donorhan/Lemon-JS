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
     */
    constructor() {
        super();

        /**
         * Video.
         * @type {HTMLVideoElement}
         * @private
         */
        this.data = document.createElement('video');
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
        this.data.src = path;
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
