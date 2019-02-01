import * as mat4 from 'gl-matrix/mat4';
import * as vec3 from 'gl-matrix/vec3';
import * as vec4 from 'gl-matrix/vec4';
import { multiplyWithMat4 } from './gl-matrix-extension';

/**
 * An AABB box: Useful for culling, picking, …
 *
 * @category Geometry
 */
class Box {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Maximum bounds
         *
         * @type {vec3}
         */
        this.maxBounds = vec3.fromValues(0.1, 0.1, 0.1);

        /**
         * Minimun bounds
         *
         * @type {vec3}
         */
        this.minBounds = vec3.fromValues(-0.1, -0.1, -0.1);

        /**
         * Maximum bounds (with transformation applied)
         *
         * @type {vec3}
         * @public
         */
        this.maxTransformedBounds = vec3.create();

        /**
         * Minimum bounds (with transformation applied)
         *
         * @type {vec3}
         * @public
         */
        this.minTransformedBounds = vec3.create();

        /**
         * Center
         *
         * @type {vec3}
         * @public
         */
        this.center = vec3.create();

        /**
         * Size
         *
         * @type {vec3}
         * @public
         */
        this.size = vec3.create();
    }

    /**
     * Compute bounds
     *
     * @param {Float32Array} positions A continious array with vertices positions
     * @return {boolean} False is the given array is invalid
     */
    compute(positions) {
        // Ignore invalid arrays
        if ((positions.length % 3) !== 0) {
            return false;
        }

        this.minBounds = vec3.fromValues(+Infinity, +Infinity, +Infinity);
        this.maxBounds = vec3.fromValues(-Infinity, -Infinity, -Infinity);

        // Fetch array to found min and max positions for each axis
        for (let i = 0; i < positions.length; i += 3) {
            if (positions[i] < this.minBounds[0]) this.minBounds[0] = positions[i];
            else if (positions[i] > this.maxBounds[0]) this.maxBounds[0] = positions[i];

            if (positions[i + 1] < this.minBounds[1]) this.minBounds[1] = positions[i + 1];
            else if (positions[i + 1] > this.maxBounds[1]) this.maxBounds[1] = positions[i + 1];

            if (positions[i + 2] < this.minBounds[2]) this.minBounds[2] = positions[i + 2];
            else if (positions[i + 2] > this.maxBounds[2]) this.maxBounds[2] = positions[i + 2];
        }

        // Set transformed bounds too
        vec3.copy(this.minTransformedBounds, this.minBounds);
        vec3.copy(this.maxTransformedBounds, this.maxBounds);

        return true;
    }

    /**
     * Apply a transformation matrix to know absolute position
     *
     * @param {mat4} matrix A matrix
     * @return {Box} A reference to the instance
     */
    applyMatrix(matrix) {
        // Compute results
        const a = multiplyWithMat4(vec4.fromValues(this.minBounds[0], this.minBounds[1], this.minBounds[2], 1.0), matrix);
        const b = multiplyWithMat4(vec4.fromValues(this.maxBounds[0], this.maxBounds[1], this.maxBounds[2], 1.0), matrix);

        vec3.set(this.minTransformedBounds, a[0], a[1], a[2]);
        vec3.set(this.maxTransformedBounds, b[0], b[1], b[2]);

        // Compute size and center
        vec3.subtract(this.size, this.maxTransformedBounds, this.minTransformedBounds);
        vec3.set(this.center, this.size[0] * 0.5, this.size[1] * 0.5, this.size[2] * 0.5);

        return this;
    }

    /**
     * Check if box intersect/collide with the another box
     *
     * @param {Box} box A Box instance
     * @return {boolean} True if boxes intersects
     */
    intersectBox(box) {
        const minA = this.minTransformedBounds;
        const maxA = this.maxTransformedBounds;
        const minB = box.minTransformedBounds;
        const maxB = box.maxTransformedBounds;

        return ((minA[0] >= minB[0] && minA[0] <= maxB[0]) || (minB[0] >= minA[0] && minB[0] <= maxA[0]))
            && ((minA[1] >= minB[1] && minA[1] <= maxB[1]) || (minB[1] >= minA[1] && minB[1] <= maxA[1]))
            && ((minA[2] >= minB[2] && minA[2] <= maxB[2]) || (minB[2] >= minA[2] && minB[2] <= maxA[2]));
    }

    /**
     * Check if box intersect/collide with the given ray
     *
     * @param {Ray} ray A Ray instance
     * @param {?Array.<number>} outPosition An array to stock intersection position
     * @return {boolean} True if box intersect with the ray
     */
    intersectRay(ray, outPosition = []) {
        let t1 = 0;
        let t2 = 0;
        let tmin = -Infinity;
        let tmax = +Infinity;

        // Check intersection
        for (let i = 0; i < 3; i += 1) {
            t1 = (this.minTransformedBounds[i] - ray.origin[i]) * ray.invDirection[i];
            t2 = (this.maxTransformedBounds[i] - ray.origin[i]) * ray.invDirection[i];

            tmin = Math.max(tmin, Math.min(t1, t2));
            tmax = Math.min(tmax, Math.max(t1, t2));
        }

        if (tmax <= Math.max(tmin, 0.0)) {
            return false;
        }

        // Compute intersection point
        for (let i = 0; i < 3; i += 1) {
            outPosition[i] = ray.origin[i] + ray.direction[i] * tmin;
        }

        return true;
    }
}

export default Box;
