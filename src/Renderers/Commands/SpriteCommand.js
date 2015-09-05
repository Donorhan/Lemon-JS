goog.provide('Lemon.SpriteCommand');
goog.require('Lemon.Geometry');
goog.require('Lemon.RenderCommand');
goog.require('Lemon.StateBlock');
goog.require('Lemon.Type');

/**
 * Draw sprites.
 * @constructor
 * @extends {Lemon.RenderCommand}
 * @param {Lemon.Sprite} sprite A Sprite instance.
 */
Lemon.SpriteCommand = function( sprite )
{
    Lemon.RenderCommand.call(this);

    /**
    * The Sprite instance to draw.
    * @type {Lemon.Sprite}
    * @private
    */
    this.sprite = sprite;
};
goog.inherits(Lemon.SpriteCommand, Lemon.RenderCommand);

/**
* Default geometry for sprite rendering.
* @type {Lemon.Geometry}
* @private
*/
Lemon.SpriteCommand.sharedGeometry = Lemon.Geometry.createRectangle(0.5, 0.5);

/**
* Default program for sprite rendering.
* @type {Lemon.Program}
* @private
*/
Lemon.SpriteCommand.sharedProgram = new Lemon.Program();

/**
 * Execute the command.
 * @param {Lemon.RenderAPI} renderAPI RenderAPI instance used to process the commands.
 */
Lemon.SpriteCommand.prototype.execute = function( renderAPI ) 
{
    Lemon.SpriteCommand.draw(renderAPI, this.sprite);
};

/**
 * Draw the given sprite.
 * @param {Lemon.RenderAPI} renderAPI RenderAPI instance used to process the commands.
 * @param {Lemon.Sprite} sprite Sprite instance to draw.
 */
Lemon.SpriteCommand.draw = function( renderAPI, sprite ) 
{
    var spriteTexture = sprite.getTexture();
    if( !spriteTexture.isReady() )
        return;

    // Use custom or default program.
    var program = sprite.getCustomProgram();
    if( !program )
    {
        if( Lemon.SpriteCommand.isDefaultProgramLoaded() )
            program = Lemon.SpriteCommand.sharedProgram;
        else
            return;
    }

    // Program.
    var programCode = renderAPI.setProgram(program);
    if( programCode === -1 )
        return;

    var spriteRect      = sprite.getTextureRect();
    var spriteSize      = sprite.getSize();

    // Must send/update shared uniforms.
    if( programCode === 1 )
        renderAPI.setUniform(program, 'uCamera', Lemon.Type.Matrix, renderAPI.getActiveCamera().getViewProjectionMatrix());

    // Send uniforms.
    renderAPI.setUniform(program, 'uModel', Lemon.Type.Matrix, sprite.getTransformationMatrix());

    // States and apparence.
    renderAPI.setBlendMode(sprite.getBlendMode());
    renderAPI.setDepthState(true, true, Lemon.DepthFunction.Less);
    renderAPI.bindTexture(0, spriteTexture);

    // Set visible area.
    var uvs = null;
    if( spriteTexture instanceof Lemon.TextureVideo )
        uvs = new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]);
    else 
    {
        var textureSize = spriteTexture.getImage().getSize();
            
        var x1          = spriteRect[0] / textureSize[0];
        var y1          = (spriteRect[1] + spriteRect[3]) / textureSize[1];
        var x2          = (spriteRect[0] + spriteRect[2]) / textureSize[0];
        var y2          = spriteRect[1] / textureSize[1];

        if( spriteRect[2] === 0 && spriteRect[3] === 0 )
            x2 = y2 = 1.0;

        uvs             = new Float32Array([x1, y2, x1, y1, x2, y2, x2, y1]);
    }
    Lemon.SpriteCommand.sharedGeometry.setTextureUVs(uvs);

    // Set color.
    var spriteColor = sprite.getColor();
    var colors = new Float32Array([      
        spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a, 
        spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a, 
        spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a, 
        spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a
    ]);
    Lemon.SpriteCommand.sharedGeometry.setColors(colors);

    // Set positions
    var positions = new Float32Array([      
        -spriteSize[0], -spriteSize[1],  0,
        -spriteSize[0],  spriteSize[1],  0,
         spriteSize[0], -spriteSize[1],  0,
         spriteSize[0],  spriteSize[1],  0
    ]);
    Lemon.SpriteCommand.sharedGeometry.setPositions(positions);

    // Bind geometry.
    renderAPI.setGeometry(Lemon.SpriteCommand.sharedGeometry);

    // Draw object.
    renderAPI.drawIndexedPrimitives(Lemon.DrawingMode.TrianglesStrip, 0, 4); 
};

/**
 * Check if the default program is ready, otherwise the function load it.
 * @return {boolean} Return true if the default program is loaded.
 */
Lemon.SpriteCommand.isDefaultProgramLoaded = function() 
{
    // Everything is ok?
    if( Lemon.SpriteCommand.sharedProgram.isReady() )
        return true;

    var vertexShader =  'uniform mat4 uCamera;' +
                        'uniform mat4 uModel;' +
                        'attribute vec4 aPosition;' +
                        'attribute vec4 aColor;' +
                        'attribute vec2 aTexCoord;' +
                        'varying vec4 vColor;' +
                        'varying vec2 vUV;' +
                        'void main() {' +
                            'gl_Position = (uCamera * uModel) * aPosition;' +
                            'vColor      = aColor;' +
                            'vUV         = aTexCoord;' +
                        '}';

    var fragmentShader =    'uniform lowp sampler2D texture;' +
                            'varying lowp vec4 vColor;' +
                            'varying mediump vec2 vUV;' +
                            'void main() {' +
                                'gl_FragColor = texture2D(texture, vUV) * vColor;' +
                            '}';

    Lemon.SpriteCommand.sharedProgram.loadFromData(vertexShader, fragmentShader);

    return false;
};
