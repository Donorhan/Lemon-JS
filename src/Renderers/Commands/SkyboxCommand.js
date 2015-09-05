goog.provide('Lemon.SkyboxCommand');
goog.require('Lemon.Geometry');
goog.require('Lemon.Program');
goog.require('Lemon.RenderCommand');
goog.require('Lemon.Type');

/**
 * Draw Skyboxes.
 * @constructor
 * @extends {Lemon.RenderCommand}
 * @param {Lemon.Skybox} skybox A Skybox instance.
 */
Lemon.SkyboxCommand = function( skybox )
{
    Lemon.RenderCommand.call(this);

    /**
    * The Skybox instance to draw.
    * @type {Lemon.Skybox}
    * @private
    */
    this.skybox = skybox;
};
goog.inherits(Lemon.SkyboxCommand, Lemon.RenderCommand);

/**
* Default geometry for skybox rendering.
* @type {Lemon.Geometry}
* @private
*/
Lemon.SkyboxCommand.sharedGeometry = Lemon.Geometry.createCube(0.5, 0.5, 0.5);

/**
* Default program for skybox rendering.
* @type {Lemon.Program}
* @private
*/
Lemon.SkyboxCommand.sharedProgram = new Lemon.Program();

/**
 * Execute the command.
 * @param {Lemon.RenderAPI} renderAPI RenderAPI instance used to process the commands.
 */
Lemon.SkyboxCommand.prototype.execute = function( renderAPI ) 
{
    var texture = this.skybox.getTexture();
    if( !texture || !texture.isReady() )
        return;

    // Use custom or default program.
    var program = this.skybox.getCustomProgram();
    if( !program )
    {
        if( Lemon.SkyboxCommand.isDefaultProgramLoaded() )
            program = Lemon.SkyboxCommand.sharedProgram;
        else
            return;
    }

    // Program.
    var programCode = renderAPI.setProgram(program);
    if( programCode == -1 )
        return;

    // Must send/update shared uniforms.
    if( programCode == 1 )
    {
        renderAPI.setUniform(program, 'projection', Lemon.Type.Matrix, renderAPI.getActiveCamera().getProjectionMatrix());

        // Tip: Remove last row and col from the matrix to get a realistic skybox.
        var viewMatrix = goog.vec.Mat4.createFloat32FromArray(renderAPI.getActiveCamera().getViewMatrix());        
        goog.vec.Mat4.setRowValues(viewMatrix, 3, 0, 0, 0, 1);
        goog.vec.Mat4.setColumnValues(viewMatrix, 3, 0, 0, 0, 1);
        renderAPI.setUniform(program, 'view', Lemon.Type.Matrix, viewMatrix);
    }

    // Send uniforms.
    renderAPI.setUniform(program, 'uModel', Lemon.Type.Matrix, this.skybox.getTransformationMatrix());

    // States and apparence.
    renderAPI.setDepthState(false, false, Lemon.DepthFunction.Less);
    renderAPI.bindTextureCube(0, texture);

    // Bind geometry.
    renderAPI.setGeometry(Lemon.SkyboxCommand.sharedGeometry);

    // Draw object.
    renderAPI.drawIndexedPrimitives(Lemon.DrawingMode.Triangles, 0, Lemon.SkyboxCommand.sharedGeometry.getIndexCount()); 
};

/**
 * Check if the default program is ready, otherwise the function load it.
 * @return {boolean} Return true if the default program is loaded.
 */
Lemon.SkyboxCommand.isDefaultProgramLoaded = function() 
{
    // Everything is ok?
    if( Lemon.SkyboxCommand.sharedProgram.isReady() )
        return true;

    var vertexShader =  'uniform mat4 projection;' +
                        'uniform mat4 view;' +
                        'uniform mat4 uModel;' +
                        'attribute vec4 aPosition;' +
                        'attribute vec4 aColor;' +
                        'varying vec4 vColor;' +
                        'varying vec4 vUV;' +
                        'void main() {' +
                            'gl_Position = projection * view * aPosition;'+
                            'vColor      = aColor;'+
                            'vUV         = aPosition;' +
                        '}';

    var fragmentShader =    'uniform lowp samplerCube skybox;' +
                            'varying lowp vec4 vColor;' +
                            'varying mediump vec4 vUV;' +
                            'void main() {'+
                                'gl_FragColor = textureCube(skybox, vUV.xyz) * vColor;' +
                            '}';

    Lemon.SkyboxCommand.sharedProgram.loadFromData(vertexShader, fragmentShader);

    return false;
};
