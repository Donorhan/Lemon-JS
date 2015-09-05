goog.provide('Lemon.Model');
goog.require('Lemon.Mesh');
goog.require('Lemon.Loaders.ModelLoader');

/**
 * A model.
 * @constructor
 * @extends {Lemon.Drawable}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Model = function() 
{
    Lemon.Drawable.call(this);

    /**
    * Meshes.
    * @type {Array.<Lemon.Mesh>}
    * @public
    */
    this.meshes = [];
};
goog.inherits(Lemon.Model, Lemon.Drawable);

/**
 * Update the node and his children.
 * @param {number} deltaTime A floating value representing time elapsed between two frames.
 * @param {boolean} parentUpdated Indicate if the parent element have been updated.
 * @return {boolean} True if the node have been updated.
 */
Lemon.Model.prototype.update = function( deltaTime, parentUpdated ) 
{
    // Call parent method.
    var updated = Lemon.Node.prototype.update.call(this, deltaTime, parentUpdated);

    // Update meshes.
    for( var i = 0; i < this.meshes.length; i++ )
    	this.meshes[i].computeTransformationMatrix(this.getTransformationMatrix(), updated);

    return updated;
};

/**
 * Draw the element.
 * @param {Lemon.RenderTarget} renderTarget Renderer who called this method.
 */
Lemon.Model.prototype.draw = function( renderTarget )
{
    for( var i = 0; i < this.meshes.length; i++ )
		this.meshes[i].draw(renderTarget);
};

/**
 * Load model from a file.
 * @param {string} filePath Path to the file with model's data.
 */
Lemon.Model.prototype.loadFromFile = function( filePath ) 
{
    Lemon.Loaders.ModelLoader.loadFromFile(filePath, this);
};
