goog.provide('Lemon.RenderCanvas');
goog.require('Lemon.RenderAPI');
goog.require('Lemon.RenderAPI.WebGL');
goog.require('Lemon.RenderTarget');

/**
 * A rendering canvas.
 * @constructor
 * @extends {Lemon.RenderTarget}
 * @param {string} canvas Id of the container.
 * @param {{antialiasing: boolean, width: (number|undefined), height: (number|undefined)}} options Options.
 * @param {string=} type A string with the value "webgl" or "canvas".
 */
Lemon.RenderCanvas = function( canvas, options, type )
{
    Lemon.RenderTarget.call(this);

    /**
    * The render API to use: For now we support WebGL 1.0.3 only.
    * @type {Lemon.RenderAPI}
    * @protected
    */
    this.renderApi = Lemon.RenderAPI.WebGL.getInstance();

    // Init the context.
    this.context.init( Lemon.Private.Context.Type.WebGL, options || {}, canvas);
};
goog.inherits(Lemon.RenderCanvas, Lemon.RenderTarget);

/**
 * Clear the canvas.
 * @param {Lemon.Color} color A Color instance.
 */
Lemon.RenderCanvas.prototype.clear = function( color ) 
{
    // Remove previous tasks.
    this.removeTasks();

    // Activate context.
    this.context.activate();

    // Clear screen.
    this.renderApi.clear(color);
};
