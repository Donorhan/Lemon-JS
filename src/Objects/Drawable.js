goog.provide('Lemon.Drawable');
goog.require('Lemon.Node');

/**
 * A drawable element.
 * @constructor
 * @extends {Lemon.Node}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Drawable = function()
{
    Lemon.Node.call(this);
};
goog.inherits(Lemon.Drawable, Lemon.Node);

/**
 * Draw the element.
 * @param {Lemon.RenderTarget} renderTarget Renderer who called this method.
 */
Lemon.Drawable.prototype.draw = function( renderTarget ) { };

/**
 * Visit the node and his children.
 * @param {Lemon.RenderTarget} renderTarget Renderer who called this method.
 */
Lemon.Drawable.prototype.visit = function( renderTarget ) 
{
    this.draw(renderTarget);
};
