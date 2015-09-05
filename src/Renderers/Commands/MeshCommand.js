goog.provide('Lemon.MeshCommand');
goog.require('Lemon.Geometry');
goog.require('Lemon.Pass');
goog.require('Lemon.RenderCommand');
goog.require('Lemon.Type');

/**
 * Draw meshes.
 * @constructor
 * @extends {Lemon.RenderCommand}
 * @param {Lemon.Geometry} geometry A Geometry instance.
 * @param {Lemon.Pass} pass A Pass instance.
 * @param {Lemon.Program} program A Program instance.
 * @param {goog.vec.Mat4.Float32} modelMatrix A Matrix with model's transformations (scale, rotate, translate).
 * @param {goog.vec.Mat4.Float32} normalMatrix A Matrix with model's normals transformed.
 * @param {number} startVertex First vertex to draw.
 * @param {number} endVertex Last vertex to draw.
 */
Lemon.MeshCommand = function( geometry, pass, program, modelMatrix, normalMatrix, startVertex, endVertex )
{
    Lemon.RenderCommand.call(this);

    /**
    * Last vertex to draw.
    * @type {number}
    * @private
    */
    this.endVertex = endVertex;

    /**
    * Geometry.
    * @type {Lemon.Geometry}
    * @private
    */
    this.geometry = geometry;

    /**
    * Model's matrix.
    * @type {goog.vec.Mat4.Float32}
    * @private
    */
    this.modelMatrix = modelMatrix;

    /**
    * Model's normal matrix.
    * @type {goog.vec.Mat4.Float32}
    * @private
    */
    this.normalMatrix = normalMatrix;

    /**
    * Pass.
    * @type {Lemon.Pass}
    * @private
    */
    this.pass = pass;

    /**
    * Program.
    * @type {Lemon.Program}
    * @private
    */
    this.program = program;

    /**
    * First vertex to draw.
    * @type {number}
    * @private
    */
    this.startVertex = startVertex;
};
goog.inherits(Lemon.MeshCommand, Lemon.RenderCommand);

/**
 * Execute the command.
 * @param {Lemon.RenderAPI} renderAPI RenderAPI instance used to process the commands.
 */
Lemon.MeshCommand.prototype.execute = function( renderAPI ) 
{
    // Program.
    var programCode = renderAPI.setProgram(this.program);
    if( programCode == -1 )
        return;

    // Must send/update shared uniforms.
    if( programCode == 1 )
        renderAPI.setUniform(this.program, 'uCamera', Lemon.Type.Matrix, renderAPI.getActiveCamera().getViewProjectionMatrix());

    // Send uniforms.
    renderAPI.setUniform(this.program, 'uModel', Lemon.Type.Matrix, this.modelMatrix);
    renderAPI.setUniform(this.program, 'uModelNormal', Lemon.Type.Matrix, this.normalMatrix);

    // State.
    renderAPI.applyStateBlock(this.pass);

    // Material.
    var parameters      = this.pass.getParameters();
    var slot            = 0;
    for( var i = 0; i < parameters.length; i++ )
    {
        var parameter = parameters[i];
        switch(parameter.type)
        {
            case Lemon.Type.Texture2D:
            {
                renderAPI.setUniform(this.program, parameter.name, Lemon.Type.Int, slot);
                renderAPI.bindTexture(slot, /** @type {Lemon.Private.TextureInterface} */ (parameter.value));
                slot++;
                break;
            }
            default:
            {
                renderAPI.setUniform(this.program, parameter.name, parameter.type, parameter.value);
                break;
            }
        }
    }

    // Bind geometry.
    renderAPI.setGeometry(this.geometry);

    // Draw object.
    renderAPI.drawIndexedPrimitives(this.pass.drawingMode, this.startVertex, this.endVertex);
};
