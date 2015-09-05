goog.provide('Lemon.Mesh');
goog.require('Lemon.Drawable');
goog.require('Lemon.Geometry');
goog.require('Lemon.Material');
goog.require('Lemon.MeshCommand');
goog.require('Lemon.Program');

/**
 * A mesh.
 * @constructor
 * @extends {Lemon.Drawable}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Mesh = function()
{
    Lemon.Drawable.call(this);

    /**
    * Geometry.
    * @type {Lemon.Geometry}
    * @private
    */
    this.geometry = null;

    /**
    * Material.
    * @type {Lemon.Material}
    * @private
    */
    this.material = null;

    /**
    * Program.
    * @type {Lemon.Program}
    * @private
    */
    this.program = null;
};
goog.inherits(Lemon.Mesh, Lemon.Drawable);

/**
 * Draw the element.
 * @param {Lemon.RenderTarget} renderTarget Renderer who called this method.
 */
Lemon.Mesh.prototype.draw = function( renderTarget )
{
    if( !this.geometry || !this.material || !this.program )
        return;

    var task            = renderTarget.getActiveTask();
    var activeTechnique = this.material.getActiveTechnique();
    var passCount       = this.material.getPassCount(activeTechnique); 

    for( var i = 0; i < passCount; i++ )
        task.addCommand(new Lemon.MeshCommand(this.geometry, this.material.getPass(activeTechnique, i), this.program, this.getTransformationMatrix(), this.getNormalMatrix(), 0, this.geometry.getIndexCount()));
};

/**
 * Set geometry.
 * @param {Lemon.Geometry} geometry A Geometry instance.
 */
Lemon.Mesh.prototype.setGeometry = function( geometry )
{
    this.geometry = geometry;
};

/**
 * Set material.
 * @param {Lemon.Material} material A Material instance.
 */
Lemon.Mesh.prototype.setMaterial = function( material )
{
    this.material = material;
};

/**
 * Set program.
 * @param {Lemon.Program} program A Program instance.
 */
Lemon.Mesh.prototype.setProgram = function( program )
{
    this.program = program;
};

/**
 * Return a reference to the program use by this mesh.
 * @return {Lemon.Program} A Program instance.
 */
Lemon.Mesh.prototype.getProgram = function() 
{
    return this.program;
};
