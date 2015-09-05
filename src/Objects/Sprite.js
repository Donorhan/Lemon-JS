goog.provide('Lemon.Sprite');
goog.require('Lemon.BlendMode');
goog.require('Lemon.Color');
goog.require('Lemon.Drawable');
goog.require('Lemon.Program');
goog.require('Lemon.SpriteCommand');
goog.require('Lemon.Texture');

/**
 * A sprite.
 * @constructor
 * @extends {Lemon.Drawable}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 * @description Draw 2D textured element efficiently.
 */
Lemon.Sprite = function()
{
    Lemon.Drawable.call(this);

    /**
    * Blend mode.
    * @type {Lemon.BlendMode}
    * @private
    */
    this.blendMode = new Lemon.BlendMode(Lemon.BlendMode.Mode.Alpha);

    /**
    * Color.
    * @type {Lemon.Color}
    * @private
    */
    this.color = new Lemon.Color(255, 255, 255, 255);

    /**
    * Texture's area to show.
    * - Two first values represents x and y offset.
    * - Two last values represents width and height (relative to offset). 
    * @type {Array.<number>}
    * @private
    */
    this.rect = [0.0, 0.0, 0.0, 0.0];

    /**
    * Size.
    * @type {Array.<number>}
    * @private
    */
    this.size = [0.5, 0.5];

    /**
    * Program.
    * @type {Lemon.Program}
    * @private
    */
    this.customProgram = null;

    /**
    * Texture.
    * @type {Lemon.Private.TextureInterface}
    * @private
    */
    this.texture = null;
};
goog.inherits(Lemon.Sprite, Lemon.Drawable);

/**
 * Set blend mode to use.
 * @param {Lemon.BlendMode} blendMode A BlendMode instance.
 */
Lemon.Sprite.prototype.setBlendMode = function( blendMode ) 
{
    this.blendMode = blendMode;
};

/**
 * Set program to use.
 * @param {number} r Red color in the range [0-255].
 * @param {number} g Green color in the range [0-255].
 * @param {number} b Blue color in the range [0-255].
 * @param {number=} a Opacity in the range [0-255].
 */
Lemon.Sprite.prototype.setColor = function( r, g, b, a ) 
{
    this.color.set(r, g, b, a);
};

/**
 * Draw the element.
 * @param {Lemon.RenderTarget} renderTarget Renderer who called this method.
 */
Lemon.Sprite.prototype.draw = function( renderTarget )
{
    if( this.texture )
        renderTarget.getActiveTask().addCommand(new Lemon.SpriteCommand(this));
};

/**
 * Set program to use.
 * @param {Lemon.Program} program A Program instance.
 */
Lemon.Sprite.prototype.setCustomProgram = function( program ) 
{
    this.customProgram = program;
};

/**
 * Set sprite's size.
 * @param {number} x Size on X.
 * @param {number} y Size on Y.
 */
Lemon.Sprite.prototype.setSize = function( x, y ) 
{
    this.size[0] = x;
    this.size[1] = y;
};

/**
 * Set texture to use.
 * @param {Lemon.Private.TextureInterface} texture Can be a Texture or a TextureVideo.
 */
Lemon.Sprite.prototype.setTexture = function( texture ) 
{
    this.texture = texture;
};

/**
 * Set texture's area to show.
 * @param {number} x Start position on x.
 * @param {number} y Start position on y.
 * @param {number} w Area's width.
 * @param {number} h Area's height.
 */
Lemon.Sprite.prototype.setTextureRect = function( x, y, w, h ) 
{
    this.rect = [x, y, w, h];
};

/**
 * Get sprite's blend mode.
 * @return {Lemon.BlendMode} A BlendMode instance.
 */
Lemon.Sprite.prototype.getBlendMode = function() 
{
    return this.blendMode;
};

/**
 * Get sprite's color.
 * @return {Lemon.Color} A Color instance.
 */
Lemon.Sprite.prototype.getColor = function() 
{
    return this.color;
};

/**
 * Get program.
 * @return {?Lemon.Program} A Program instance or null if the sprite use the default program.
 */
Lemon.Sprite.prototype.getCustomProgram = function() 
{
    return this.customProgram;
};

/**
 * Get size.
 * @return {Array.<number>} An array with index 0 for size on X and index 1 for size on y.
 */
Lemon.Sprite.prototype.getSize = function() 
{
    return this.size;
};

/**
 * Get texture.
 * @return {Lemon.Private.TextureInterface} A texture.
 */
Lemon.Sprite.prototype.getTexture = function() 
{
    return this.texture;
};

/**
 * Get texture's area to show.
 * @return {Array.<number>} An array representing area to show (x, y, w, h).
 */
Lemon.Sprite.prototype.getTextureRect = function() 
{
    return this.rect;
};
