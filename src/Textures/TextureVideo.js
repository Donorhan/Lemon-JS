goog.provide('Lemon.TextureVideo');
goog.require('Lemon.Private.TextureInterface');

/**
 * A texture to display video.
 * @constructor
 * @extends {Lemon.Private.TextureInterface}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.TextureVideo = function() 
{
    Lemon.Private.TextureInterface.call(this);

    /**
    * Video.
    * @type {HTMLVideoElement}
    * @private
    */
    this.data = /** @type {HTMLVideoElement} */ (document.createElement('video'));
};
goog.inherits(Lemon.TextureVideo, Lemon.Private.TextureInterface);

/**
 * Load the video from a file.
 * @param {string} path Path to the video file.
 */
Lemon.TextureVideo.prototype.loadFromFile = function( path ) 
{
    // Detect when video is ready.
    this.data.addEventListener('canplaythrough', function()
    {
        this.ready = true;
    }.bind(this), true);

    // Load;
    this.data.preload   = 'auto';
    this.data.src       = path;
};

/**
 * Pause the video.
 */
Lemon.TextureVideo.prototype.pause = function() 
{
    this.data.pause();
};

/**
 * Play the video.
 */
Lemon.TextureVideo.prototype.play = function() 
{
    this.data.play();
};

/**
 * Get video's duration.
 * @return {number} The duration property returns the length of the current audio/video, in seconds.
 */
Lemon.TextureVideo.prototype.getDuration = function() 
{
    return this.data.duration;
};

/**
 * Get video's data.
 * @return {HTMLVideoElement} The HTML video element.
 */
Lemon.TextureVideo.prototype.getVideoData = function() 
{
    return this.data;
};
