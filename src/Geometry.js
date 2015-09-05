goog.provide('Lemon.Geometry');
goog.require('Lemon.Private.ContextResource');
goog.require('Lemon.VertexFormat');

/**
 * A geometry.
 * @constructor
 * @extends {Lemon.Private.ContextResource}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Geometry = function() 
{
    Lemon.Private.ContextResource.call(this);

    /**
    * Colors.
    * @type {Float32Array}
    * @private
    */
    this.colors = null;

    /**
    * Indices.
    * @type {Uint16Array}
    * @private
    */
    this.indices = null;

    /**
    * Normals.
    * @type {Float32Array}
    * @private
    */
    this.normals = null;

    /**
    * Positions.
    * @type {Float32Array}
    * @private
    */
    this.positions = null;

    /**
    * Uvs.
    * @type {Float32Array}
    * @private
    */
    this.uvs = null;

    /**
    * Format.
    * @type {Lemon.VertexFormat}
    * @private
    */
    this.vertexFormat = null;
};
goog.inherits(Lemon.Geometry, Lemon.Private.ContextResource);

/**
 * Set vertices colors.
 * @param {Float32Array} colors An array of float values representing colors (r, g, b, a, r, g, b, a, …).
 */
Lemon.Geometry.prototype.setColors = function( colors ) 
{
    this.colors = new Float32Array(colors);

    // Indicate that an attribut of the geometry need an update.
    if( this.vertexFormat )
        this.vertexFormat.setStreamAsWaitingUpdate(Lemon.VertexElement.Usage.Color, true);
};

/**
 * Set indices.
 * @param {Uint16Array} indices An array of unsigned integer values representing indices order.
 */
Lemon.Geometry.prototype.setIndices = function( indices ) 
{
    this.indices = new Uint16Array(indices);

    // Indicate that indices need an update.
    if( this.vertexFormat )
        this.vertexFormat.setIndicesAsWaitingUpdate(true);
};

/**
 * Set vertices normals.
 * @param {Float32Array} normals An array of float values representing normals (x, y, z, x, y, z, …).
 */
Lemon.Geometry.prototype.setNormals = function( normals ) 
{
    this.normals = new Float32Array(normals);

    // Indicate that an attribut of the geometry need an update.
    if( this.vertexFormat )
        this.vertexFormat.setStreamAsWaitingUpdate(Lemon.VertexElement.Usage.Normal, true);
};

/**
 * Set vertices positions.
 * @param {Float32Array} positions An array of float values representing positions (x, y, z, x, y, z, …).
 */
Lemon.Geometry.prototype.setPositions = function( positions ) 
{
    this.positions = new Float32Array(positions);

    // Indicate that an attribut of the geometry need an update.
    if( this.vertexFormat )
        this.vertexFormat.setStreamAsWaitingUpdate(Lemon.VertexElement.Usage.Position, true);
};

/**
 * Set texture coordinates (uvs) for each vertex.
 * @param {Float32Array} uvs An array of float values representing texture coordinates (u, v, u, v, …).
 */
Lemon.Geometry.prototype.setTextureUVs = function( uvs ) 
{
    this.uvs = new Float32Array(uvs);

    // Indicate that an attribut of the geometry need an update.
    if( this.vertexFormat )
        this.vertexFormat.setStreamAsWaitingUpdate(Lemon.VertexElement.Usage.UVS, true);
};

/**
 * Set geometry's format.
 * @param {Lemon.VertexFormat} vertexFormat A VertexFormat instance.
 */
Lemon.Geometry.prototype.setVertexFormat = function( vertexFormat ) 
{
    this.vertexFormat = vertexFormat;
};

/**
 * Get format.
 * @return {Lemon.VertexFormat} A VertexFormat instance.
 */
Lemon.Geometry.prototype.getVertexFormat = function() 
{
    return this.vertexFormat;
};

/**
 * Return index count.
 * @return {number} Indices array's length.
 */
Lemon.Geometry.prototype.getIndexCount = function() 
{
    return this.indices.length;
};

/**
 * Return the indices.
 * @return {Uint16Array} Indices array.
 */
Lemon.Geometry.prototype.getIndices = function() 
{
    return this.indices;
};

/**
 * Return an array with the color for each vertex.
 * @return {Float32Array} An array with the format [r, g, b, a, r, g, b, a, …].
 */
Lemon.Geometry.prototype.getVerticesColors = function() 
{
    return this.colors;
};

/**
 * Return an array with the position for each vertex.
 * @return {Float32Array} An array with the format [x, y, z, x, y, z, …].
 */
Lemon.Geometry.prototype.getVerticesPositions = function() 
{
    return this.positions;
};

/**
 * Return an array with the normal for each vertex.
 * @return {Float32Array} An array with the format [x, y, z, x, y, z, …].
 */
Lemon.Geometry.prototype.getVerticesNormals = function() 
{
    return this.normals;
};

/**
 * Return an array with the texture coordinates for each vertex.
 * @return {Float32Array} An array with the format [u, v, u, v, …].
 */
Lemon.Geometry.prototype.getVerticesUVs = function() 
{
    return this.uvs;
};

/**
 * Create a cube.
 * @param {number} width Width.
 * @param {number} height Height.
 * @param {number} depth Depth.
 * @return {Lemon.Geometry} A Geometry instance.
 */
Lemon.Geometry.createCube = function( width, height, depth ) 
{
    var geometry = new Lemon.Geometry();

    // Set format.
    var format = new Lemon.VertexFormat();
    format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.Position, 0, Lemon.VertexElement.Type.Float, 3, false));
    format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.Color, 2, Lemon.VertexElement.Type.Float, 4, false));
    format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.UVS, 1, Lemon.VertexElement.Type.Float, 2, false));
    format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.Normal, 3, Lemon.VertexElement.Type.Float, 3, false));
    geometry.setVertexFormat(format);

    // Set positions
    var positions = new Float32Array([      
        -width, -height,  depth,
         width, -height,  depth,
         width,  height,  depth,
        -width,  height,  depth,
        
        -width, -height, -depth,
        -width,  height, -depth,
         width,  height, -depth,
         width, -height, -depth,
        
        -width,  height, -depth,
        -width,  height,  depth,
         width,  height,  depth,
         width,  height, -depth,
        
        -width, -height, -depth,
         width, -height, -depth,
         width, -height,  depth,
        -width, -height,  depth,
        
         width, -height, -depth,
         width,  height, -depth,
         width,  height,  depth,
         width, -height,  depth,
        
        -width, -height, -depth,
        -width, -height,  depth,
        -width,  height,  depth,
        -width,  height, -depth
    ]);
    geometry.setPositions(positions);

    // Set colors
    var colors = new Float32Array([
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
             
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
             
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
             
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
             
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
             
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
    ]);
    geometry.setColors(colors);

    // Texture uvs
    var uvs = new Float32Array([
        0, 0,
        1, 0,
        1, 1,
        0, 1,

        0, 0,
        1, 0,
        1, 1,
        0, 1,

        0, 0,
        1, 0,
        1, 1,
        0, 1,

        0, 0,
        1, 0,
        1, 1,
        0, 1,

        0, 0,
        1, 0,
        1, 1,
        0, 1,
        
        0, 0,
        1, 0,
        1, 1,
        0, 1
    ]);
    geometry.setTextureUVs(uvs);

    // Normals
    var normals = new Float32Array([
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,

        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,

        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,

        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,

        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0
    ]);
    geometry.setNormals(normals);

    // Indices.
    var indices = new Uint16Array([  0,  1,  2,  0,  2,  3,  4,  5,  6,  4,  6,  7, 
                                     8,  9, 10,  8, 10, 11, 12, 13, 14, 12, 14, 15,
                                    16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23 ]);
    geometry.setIndices(indices);

    return geometry;
};

/**
 * Create a rectangle.
 * @param {number} width Width.
 * @param {number} height Height.
 * @return {Lemon.Geometry} A Geometry instance.
 */
Lemon.Geometry.createRectangle = function( width, height ) 
{
    var geometry = new Lemon.Geometry();

    // Set format.
    var format = new Lemon.VertexFormat();
    format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.Position, 0, Lemon.VertexElement.Type.Float, 3, false));
    format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.Color, 1, Lemon.VertexElement.Type.Float, 4, false));
    format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.UVS, 2, Lemon.VertexElement.Type.Float, 2, false));
    format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.Normal, 3, Lemon.VertexElement.Type.Float, 3, false));
    geometry.setVertexFormat(format);

    // Set positions
    var positions = new Float32Array([      
        -width, -height,  0,
        -width,  height,  0,
         width, -height,  0,
         width,  height,  0
    ]);
    geometry.setPositions(positions);

    // Set colors
    var colors = new Float32Array([      
        1, 1, 1, 1, 
        1, 1, 1, 1, 
        1, 1, 1, 1, 
        1, 1, 1, 1
    ]);
    geometry.setColors(colors);

    // Texture uvs
    var uvs = new Float32Array([      
        0, 1,
        0, 0,
        1, 1,
        1, 0
    ]);
    geometry.setTextureUVs(uvs);

    // Normals
    var normals = new Float32Array([
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
    ]);
    geometry.setNormals(normals);

    // Indices.
    geometry.setIndices(new Uint16Array([0, 2, 1, 3]));

    return geometry;
};
