let glMatrix = require('gl-matrix');

/**
 * A Plane
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Plane
{
    /**
     * Constructor
     */
    constructor()
    {
        /**
         * Distance from origin
         *
         * @type {number}
         */
        this.distance = 0;

        /**
         * Normal
         *
         * @type {glMatrix.vec3}
         */
        this.normal = glMatrix.vec3.create();
    }

    /**
     * Get distance from a given point
     *
     * @param {number} x Point position on X
     * @param {number} y Point position on Y
     * @param {number} z Point position on Z
     */
    distanceTo(x, y, z)
    {
        return glMatrix.vec3.dot(this.normal, glMatrix.vec3.fromValues(x, y, z)) + this.distance;
    }

    /**
     * Normalize
     * 
     * @return {Plane} A reference to the instance
     */
    normalize()
    {
        let length = glMatrix.vec3.length(this.normal);
        this.normal[0] /= length;
        this.normal[1] /= length;
        this.normal[2] /= length;
        this.distance  /= length;

        return this;
    }

    /**
     * Set plane using a position and an origin
     *
     * @param {number} x Normal on X
     * @param {number} y Normal on Y
     * @param {number} z Normal on Z
     * @param {number} distance Distance from origin
     * @return {Plane} A reference to the instance
     */
    set(x, y, z, distance)
    {
        glMatrix.vec3.set(this.normal, x, y, z);
        this.distance = distance;

        return this;
    }

    /**
     * Set plane using a position and an origin
     *
     * @param {Array.<number>} a Point A
     * @param {Array.<number>} b Point B
     * @param {Array.<number>} c Point C
     * @return {Plane} A reference to the instance
     */
    setFromPoints(a, b, c)
    {
        // Diff
        let edge1 = glMatrix.vec3.create();
        let edge2 = glMatrix.vec3.create();
        let vecA  = glMatrix.vec3.fromValues(a[0], a[1], a[2]);
        glMatrix.vec3.subtract(edge1, glMatrix.vec3.fromValues(b[0], b[1], b[2]), vecA);
        glMatrix.vec3.subtract(edge2, glMatrix.vec3.fromValues(c[0], c[1], c[2]), vecA);

        // Compute
        glMatrix.vec3.cross(this.normal, edge1, edge2);
        this.distance = -glMatrix.vec3.dot(this.normal, a);

        this.normalize();

        return this;
    }

    /**
     * Get normal
     *
     * @return {glMatrix.vec3}
     */
    getNormal()
    {
        return this.normal;
    }

    /**
     * Get distance
     *
     * @return {number}
     */
    getDistance()
    {
        return this.distance;
    }
}