import { vec3 } from 'gl-matrix';

/**
 * A plane
 *
 * @category Geometry
 */
class Plane {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Distance from origin
         *
         * @type {number}
         */
        this.distance = 0;

        /**
         * Normal
         *
         * @type {vec3}
         */
        this.normal = vec3.create();
    }

    /**
     * Get distance from a given point
     *
     * @param {number} x Point position on X
     * @param {number} y Point position on Y
     * @param {number} z Point position on Z
     */
    distanceTo(x, y, z) {
        return vec3.dot(this.normal, vec3.fromValues(x, y, z)) + this.distance;
    }

    /**
     * Normalize
     *
     * @return {Plane} A reference to the instance
     */
    normalize() {
        const length = vec3.length(this.normal);
        this.normal[0] /= length;
        this.normal[1] /= length;
        this.normal[2] /= length;
        this.distance /= length;

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
    set(x, y, z, distance) {
        vec3.set(this.normal, x, y, z);
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
    setFromPoints(a, b, c) {
        // Diff
        const edge1 = vec3.create();
        const edge2 = vec3.create();
        const vecA = vec3.fromValues(a[0], a[1], a[2]);
        vec3.subtract(edge1, vec3.fromValues(b[0], b[1], b[2]), vecA);
        vec3.subtract(edge2, vec3.fromValues(c[0], c[1], c[2]), vecA);

        // Compute
        vec3.cross(this.normal, edge1, edge2);
        this.distance = -vec3.dot(this.normal, a);

        this.normalize();

        return this;
    }

    /**
     * Get normal
     *
     * @return {vec3}
     */
    getNormal() {
        return this.normal;
    }

    /**
     * Get distance
     *
     * @return {number}
     */
    getDistance() {
        return this.distance;
    }
}

export default Plane;
