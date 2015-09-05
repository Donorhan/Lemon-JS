goog.provide('Lemon.TextureCube');
goog.require('Lemon.Image');
goog.require('Lemon.Private.ContextResource');

/**
 * A texture cube to use with skyboxes.
 * @constructor
 * @extends {Lemon.Private.ContextResource}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.TextureCube = function() 
{
    Lemon.Private.ContextResource.call(this);

    /**
    * Images (one per face).
    * @type {Array.<Lemon.Image>}
    * @private
    */
    this.images = [];
};
goog.inherits(Lemon.TextureCube, Lemon.Private.ContextResource);

/**
* Faces.
* @enum {number}
*/
Lemon.TextureCube.Face = { Up: 0, Down: 1, Left: 2, Right: 3, Back: 4, Front: 5 };

/**
 * Load images from the given paths.
 * @param {Array.<string>} paths An array with the image's path for the right cube's face.
 */
Lemon.TextureCube.prototype.loadFromFiles = function( paths )
{
    for( var i in paths )
    {
        var image = new Lemon.Image();
        image.loadFromFile(paths[i]);
        this.images[i] = image;
    }
};

/**
 * Get images.
 * @return {Array.<Lemon.Image>} An array with images instances.
 */
Lemon.TextureCube.prototype.getImages = function()
{
    return this.images;
};

/**
 * Check if texture cube is ready to be use.
 * @return {boolean} True if everything is ready.
 */
Lemon.TextureCube.prototype.isReady = function()
{
    if( this.images.length === 0 )
        return false;

    for( var i = 0; i < this.images.length; i++ )
        if( !this.images[i].isReady() )
            return false;

    return true;
};
