import * as glExt from './gl-matrix-extension.js';
let glMatrix = require('gl-matrix');

/**
 * An AABB box: Useful for culling, picking, …
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Box
{
    /**
     * Constructor
     */
    constructor()
    {
        /**
         * Maximum bounds
         *
         * @type {glMatrix.vec3}
         */
        this.maxBounds = glMatrix.vec3.fromValues(0.1, 0.1, 0.1);

        /**
         * Minimun bounds
         *
         * @type {glMatrix.vec3}
         */
        this.minBounds = glMatrix.vec3.fromValues(-0.1, -0.1 -0.1);

        /**
         * Maximum bounds (with transformation applied)
         *
         * @type {glMatrix.vec3}
         * @public
         */
        this.maxTransformedBounds = glMatrix.vec3.create();

        /**
         * Minimum bounds (with transformation applied)
         *
         * @type {glMatrix.vec3}
         * @public
         */
        this.minTransformedBounds = glMatrix.vec3.create();

        /**
         * Center
         *
         * @type {glMatrix.vec3}
         * @public
         */
        this.center = glMatrix.vec3.create();

        /**
         * Size
         *
         * @type {glMatrix.vec3}
         * @public
         */
        this.size = glMatrix.vec3.create();
    }

    /**
     * Compute bounds
     *
     * @param {Float32Array} positions A continious array with vertices positions
     * @return {boolean} False is the given array is invalid
     */
    compute(positions)
    {
        // Ignore invalid arrays
        if ((positions.length % 3) != 0)
            return false;

        this.minBounds = glMatrix.vec3.fromValues(+Infinity, +Infinity, +Infinity);
        this.maxBounds = glMatrix.vec3.fromValues(-Infinity, -Infinity, -Infinity);

        // Fetch array to found min and max positions for each axis
        for (let i = 0; i < positions.length; i += 3)
        {            
            if      (positions[i] < this.minBounds[0])   { this.minBounds[0] = positions[i]; }
            else if (positions[i] > this.maxBounds[0])   { this.maxBounds[0] = positions[i]; }
            
            if      (positions[i+1] < this.minBounds[1]) { this.minBounds[1] = positions[i+1]; }
            else if (positions[i+1] > this.maxBounds[1]) { this.maxBounds[1] = positions[i+1]; }
            
            if      (positions[i+2] < this.minBounds[2]) { this.minBounds[2] = positions[i+2]; }
            else if (positions[i+2] > this.maxBounds[2]) { this.maxBounds[2] = positions[i+2]; }
        }

        // Set transformed bounds too
        glMatrix.vec3.copy(this.minTransformedBounds, this.minBounds);
        glMatrix.vec3.copy(this.maxTransformedBounds, this.maxBounds);

        return true;
    }

    /**
     * Apply a transformation matrix to know absolute position
     *
     * @param {glMatrix.mat4} matrix A matrix
     */
    applyMatrix(matrix)
    {
        // Compute result
        let a = glMatrix.vec4.create();
        let b = glMatrix.vec4.create();
        glMatrix.vec4.multiplyWithMat4(a, glMatrix.vec4.fromValues(this.minBounds[0], this.minBounds[1], this.minBounds[2], 1.0), matrix);
        glMatrix.vec4.multiplyWithMat4(b, glMatrix.vec4.fromValues(this.maxBounds[0], this.maxBounds[1], this.maxBounds[2], 1.0), matrix);
        glMatrix.vec3.set(this.minTransformedBounds, a[0], a[1], a[2]);
        glMatrix.vec3.set(this.maxTransformedBounds, b[0], b[1], b[2]);

        // Compute size and center
        glMatrix.vec3.subtract(this.size, this.maxTransformedBounds, this.minTransformedBounds);
        glMatrix.vec3.set(this.center, this.size[0] * 0.5, this.size[1] * 0.5, this.size[2] * 0.5);
    }

    /**
     * Check if box intersect/collide with the another box
     *
     * @param {Box} box A Box instance
     * @return {boolean} True if boxes intersects
     */
    intersectBox(box)
    {
        let minA = this.minTransformedBounds;
        let maxA = this.maxTransformedBounds;
        let minB = box.minTransformedBounds;
        let maxB = box.maxTransformedBounds;

        return  ((minA[0] >= minB[0] && minA[0] <= maxB[0]) || (minB[0] >= minA[0] && minB[0] <= maxA[0])) &&
                ((minA[1] >= minB[1] && minA[1] <= maxB[1]) || (minB[1] >= minA[1] && minB[1] <= maxA[1])) &&
                ((minA[2] >= minB[2] && minA[2] <= maxB[2]) || (minB[2] >= minA[2] && minB[2] <= maxA[2]));
    }

    /**
     * Check if box intersect/collide with the given ray
     *
     * @param {Ray} ray A Ray instance
     * @param {?Array.<number>} outPosition An array to stock intersection position
     * @return {boolean} True if box intersect with the ray
     */
    intersectRay(ray, outPosition = [])
    {
        let t1   = 0;
        let t2   = 0;
        let tmin = -Infinity;
        let tmax = +Infinity;

        // Check intersection
        for (let i = 0; i < 3; i++)
        {
            t1 = (this.minTransformedBounds[i] - ray.origin[i]) * ray.invDirection[i];
            t2 = (this.maxTransformedBounds[i] - ray.origin[i]) * ray.invDirection[i];

            tmin = Math.max(tmin, Math.min(t1, t2));
            tmax = Math.min(tmax, Math.max(t1, t2));
        }

        if (tmax <= Math.max(tmin, 0.0))
            return false;

        // Compute intersection point
        for (let i = 0; i < 3; i++)
            outPosition[i] = ray.origin[i] + ray.direction[i] * tmin;

        return true;
    }
}
