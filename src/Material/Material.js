goog.provide('Lemon.Material');
goog.require('Lemon.Pass');

/**
 * A material.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Material = function()
{
    /**
    * Index of the technique to use.
    * @type {number}
    * @default 0
    * @private
    */
    this.activeTechnique = 0;

    /**
    * An array of passes per technique.
    * By default, we have at least one technique available.
    * @type {Array.<Array.<Lemon.Pass>>}
    * @private
    */
    this.techniques = [];
  
    //< Add a default technique and pass.
    this.createTechnique();
};

/**
 * Add a pass to a technique.
 * @param {number=} techniqueIndex Targeted technique's index (default: 0).
 * @return {Lemon.Pass} A Pass instance.
 */
Lemon.Material.prototype.createPass = function( techniqueIndex ) 
{
    var pass = new Lemon.Pass();
    this.techniques[(techniqueIndex || 0)].push(pass);

    return pass;
};

/**
 * Create a new technique.
 * @return {number} The technique index.
 */
Lemon.Material.prototype.createTechnique = function() 
{
    this.techniques.push([]);
    return this.techniques.length - 1;
};

/**
 * Set technique to use.
 * @param {number} techniqueIndex Targeted technique's index.
 */
Lemon.Material.prototype.setActiveTechnique = function( techniqueIndex ) 
{
    this.activeTechnique = techniqueIndex;
};

/**
 * Get active technique's index.
 * @return {number} A positive integer.
 */
Lemon.Material.prototype.getActiveTechnique = function() 
{
    return this.activeTechnique;
};

/**
 * Get a pass.
 * @param {number} techniqueIndex Targeted technique's index (default: 0).
 * @param {number} passIndex Pass's index.
 * @return {?Lemon.Pass} A Pass instance or null if the technique or the pass didn't exist.
 */
Lemon.Material.prototype.getPass = function( techniqueIndex, passIndex ) 
{
    if( techniqueIndex >= this.techniques.length )
        return null;

    return this.techniques[techniqueIndex][passIndex] || null;
};

/**
 * Get pass count.
 * @param {number} techniqueIndex Targeted technique's index (default: 0).
 * @return {number} A signed integer.
 */
Lemon.Material.prototype.getPassCount = function( techniqueIndex ) 
{
    if( techniqueIndex >= this.techniques.length )
        return 0;

    return this.techniques[techniqueIndex].length;
};
