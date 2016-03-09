import {ContextResource} from './ContextResource.js';
import {VertexFormat, VertexElement} from './VertexFormat.js';

/**
 * A geometry
 *
 * @extends {ContextResource}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Geometry extends ContextResource
{
    /**
     * Constructor
     */
    constructor()
    {
        super();

        /**
         * Colors
         *
         * @type {Float32Array}
         * @private
         */
        this.colors = null;

        /**
         * Indices
         *
         * @type {Uint16Array}
         * @private
         */
        this.indices = null;

        /**
         * Normals
         *
         * @type {Float32Array}
         * @private
         */
        this.normals = null;

        /**
         * Positions
         *
         * @type {Float32Array}
         * @private
         */
        this.positions = null;

        /**
         * Uvs
         *
         * @type {Float32Array}
         * @private
         */
        this.uvs = null;

        /**
         * Format
         *
         * @type {VertexFormat}
         * @private
         */
        this.vertexFormat = null;
    }

    /**
     * Set vertices colors
     *
     * @param {Float32Array} colors An array of float values representing colors (r, g, b, a, r, g, b, a, …)
     * @return {Geometry} A reference to the instance
     */
    setColors(colors)
    {
        this.colors = new Float32Array(colors);

        // Indicate that an attribute of the geometry need an update.
        if (this.vertexFormat)
            this.vertexFormat.setStreamAsWaitingUpdate(VertexElement.Usage.Color, true);

        return this;
    }

    /**
     * Set indices
     *
     * @param {Uint16Array} indices An array of unsigned integer values representing indices order
     * @return {Geometry} A reference to the instance
     */
    setIndices(indices)
    {
        this.indices = new Uint16Array(indices);

        // Indicate that indices need an update.
        if (this.vertexFormat)
            this.vertexFormat.setIndicesAsWaitingUpdate(true);

        return this;
    }

    /**
     * Set vertices normals
     *
     * @param {Float32Array} normals An array of float values representing normals (x, y, z, x, y, z, …)
     * @return {Geometry} A reference to the instance
     */
    setNormals(normals)
    {
        this.normals = new Float32Array(normals);

        // Indicate that an attribut of the geometry need an update.
        if (this.vertexFormat)
            this.vertexFormat.setStreamAsWaitingUpdate(VertexElement.Usage.Normal, true);

        return this;
    }

    /**
     * Set vertices positions
     *
     * @param {Float32Array} positions An array of float values representing positions (x, y, z, x, y, z, …)
     * @return {Geometry} A reference to the instance
     */
    setPositions(positions)
    {
        this.positions = new Float32Array(positions);

        // Indicate that an attribute of the geometry need an update.
        if (this.vertexFormat)
            this.vertexFormat.setStreamAsWaitingUpdate(VertexElement.Usage.Position, true);

        return this;
    }

    /**
     * Set texture coordinates (uvs) for each vertex
     *
     * @param {Float32Array} uvs An array of float values representing texture coordinates (u, v, u, v, …)
     * @return {Geometry} A reference to the instance
     */
    setTextureUVs(uvs)
    {
        this.uvs = new Float32Array(uvs);

        // Indicate that an attribute of the geometry need an update
        if (this.vertexFormat)
            this.vertexFormat.setStreamAsWaitingUpdate(VertexElement.Usage.UVS, true);

        return this;
    }

    /**
     * Set geometry's format
     *
     * @param {VertexFormat} vertexFormat A VertexFormat instance
     * @return {Geometry} A reference to the instance
     */
    setVertexFormat(vertexFormat)
    {
        this.vertexFormat = vertexFormat;

        return this;
    }

    /**
     * Get format
     *
     * @return {VertexFormat} A VertexFormat instance
     */
    getVertexFormat()
    {
        return this.vertexFormat;
    }

    /**
     * Return index count
     *
     * @return {number} Indices array's length
     */
    getIndexCount()
    {
        return this.indices.length;
    }

    /**
     * Return the indices
     *
     * @return {Uint16Array} Indices array
     */
    getIndices()
    {
        return this.indices;
    }

    /**
     * Return an array with the color for each vertex
     *
     * @return {Float32Array} An array with the format [r, g, b, a, r, g, b, a, …]
     */
    getVerticesColors()
    {
        return this.colors;
    }

    /**
     * Return an array with the position for each vertex
     *
     * @return {Float32Array} An array with the format [x, y, z, x, y, z, …]
     */
    getVerticesPositions()
    {
        return this.positions;
    }

    /**
     * Return an array with the normal for each vertex
     *
     * @return {Float32Array} An array with the format [x, y, z, x, y, z, …]
     */
    getVerticesNormals()
    {
        return this.normals;
    }

    /**
     * Return an array with the texture coordinates for each vertex
     *
     * @return {Float32Array} An array with the format [u, v, u, v, …]
     */
    getVerticesUVs()
    {
        return this.uvs;
    }

    /**
     * Create a cube
     *
     * @param {number} width Width
     * @param {number} height Height
     * @param {number} depth Depth
     * @return {Geometry} A Geometry instance
     */
    static createCube(width, height, depth)
    {
        let geometry = new Geometry();

        // Set format
        let format = new VertexFormat();
        format.add(new VertexElement(VertexElement.Usage.Position, 0, VertexElement.Type.Float, 3, false));
        format.add(new VertexElement(VertexElement.Usage.Color, 2, VertexElement.Type.Float, 4, false));
        format.add(new VertexElement(VertexElement.Usage.UVS, 1, VertexElement.Type.Float, 2, false));
        format.add(new VertexElement(VertexElement.Usage.Normal, 3, VertexElement.Type.Float, 3, false));
        geometry.setVertexFormat(format);

        // Set positions
        let positions = new Float32Array([
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
        let colors = new Float32Array([
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
        let uvs = new Float32Array([
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
        let normals = new Float32Array([
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
        let indices = new Uint16Array([     0,  1,  2,  0,  2,  3,  4,  5,  6,  4,  6,  7,
                                            8,  9, 10,  8, 10, 11, 12, 13, 14, 12, 14, 15,
                                            16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23 ]);
        geometry.setIndices(indices);

        return geometry;
    }

    /**
     * Create a rectangle
     *
     * @param {number} width Width
     * @param {number} height Height
     * @return {Geometry} A Geometry instance
     */
    static createRectangle(width, height)
    {
        let geometry = new Geometry();

        // Set format
        let format = new VertexFormat();
        format.add(new VertexElement(VertexElement.Usage.Position, 0, VertexElement.Type.Float, 3, false));
        format.add(new VertexElement(VertexElement.Usage.Color, 1, VertexElement.Type.Float, 4, false));
        format.add(new VertexElement(VertexElement.Usage.UVS, 2, VertexElement.Type.Float, 2, false));
        format.add(new VertexElement(VertexElement.Usage.Normal, 3, VertexElement.Type.Float, 3, false));
        geometry.setVertexFormat(format);

        // Set positions
        let positions = new Float32Array([
            -width, -height,  0,
            -width,  height,  0,
            width, -height,  0,
            width,  height,  0
        ]);
        geometry.setPositions(positions);

        // Set colors
        let colors = new Float32Array([
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1
        ]);
        geometry.setColors(colors);

        // Texture uvs
        let uvs = new Float32Array([
            0, 1,
            0, 0,
            1, 1,
            1, 0
        ]);
        geometry.setTextureUVs(uvs);

        // Normals
        let normals = new Float32Array([
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
        ]);
        geometry.setNormals(normals);

        // Indices
        geometry.setIndices(new Uint16Array([0, 2, 1, 3]));

        return geometry;
    }
}
