goog.provide('Lemon.GetContext');
goog.provide('Lemon.Private.Context');

/**
 * A context.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Private.Context = function() 
{
    /**
    * The DOM elment.
    * @type {Element}
    */
    this.domElement = null;

    /**
    * Context instance.
    * @type {WebGLRenderingContext|Object}
    * @public
    */
    this.instance = null;
};

/**
* Active context.
* @type {Lemon.Private.Context}
*/
Lemon.Private.Context.current = null;

/**
* Type of context.
* @enum {number}
*/
Lemon.Private.Context.Type = { WebGL: 0 };

/**
* Shortcut to the active context's instance.
* @enum {Object}
*/
Lemon.GetContext = function() 
{ 
    return Lemon.Private.Context.current.instance;
};

/**
 * Init.
 * @param {Lemon.Private.Context.Type} type Type of context.
 * @param {{antialiasing: boolean, width: (number|undefined), height: (number|undefined)}} options Options.
 * @param {string} targetID Targeted DOM element.
 */
Lemon.Private.Context.prototype.init = function( type, options, targetID ) 
{
    // Get DOM element.
    var target = document.getElementById(targetID);
    if( !target )
        throw '404 - Canvas with the name ' + targetID + ' not found.';

    // Init webgl context.
    if( type == Lemon.Private.Context.Type.WebGL ) 
    {
        // Create canvas.
        this.domElement         = document.createElement('canvas');
        this.domElement.width   = target.offsetWidth;
        this.domElement.height  = target.offsetHeight;
        target.appendChild(this.domElement);

        // Init WebGL.
        this.instance                   = this.domElement.getContext('webgl', { antialias: options.antialiasing || true });
        this.instance.viewportWidth     = this.domElement.width; 
        this.instance.viewportHeight    = this.domElement.height;
    }

    // Set as active context.
    if( !Lemon.Private.Context.current )
        Lemon.Private.Context.current = this;
};

/**
 * Resize context.
 * @param {number} width Width to assign in pixel.
 * @param {number} height Height to assign in pixel.
 */
Lemon.Private.Context.prototype.resize = function( width, height ) 
{
    if( !this.domElement || !this.instance ) 
        return;

    // DOM
    this.domElement.width           = width;
    this.domElement.height          = height;

    // WebGL
    this.instance.viewportWidth     = width;
    this.instance.viewportHeight    = height;
};

/**
 * Activate the context.
 * The context become the one used by the renderer.
 */
Lemon.Private.Context.prototype.activate = function() 
{
    Lemon.Private.Context.current = this;
};

/**
 * Get size.
 * @return {Array.<number>} A array with size on x and y.
 */
Lemon.Private.Context.prototype.getSize = function() 
{
    return [this.domElement.width, this.domElement.height];
};
