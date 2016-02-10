let glMatrix = require('gl-matrix');

/**
 * A Ray
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Ray
{
    /**
     * Constructor
     *
     * @param {?glMatrix.vec3} origin Ray's origin
     * @param {?glMatrix.vec3} end Ray's end
     */
    constructor(origin = null, end = null)
    {
        /**
         * Direction
         *
         * @type {glMatrix.vec3}
         */
        this.direction = glMatrix.vec3.create();

        /**
         * Inverse direction
         *
         * @type {glMatrix.vec3}
         */
        this.invDirection = glMatrix.vec3.create();

        /**
         * Origin
         *
         * @type {glMatrix.vec3}
         */
        this.origin = glMatrix.vec3.create();

        /**
         * Signs
         *
         * @type {glMatrix.vec3}
         */
        this.signs = glMatrix.vec3.create();

        // Init
        if (origin && end)
            this.set(origin, end);
    }

    /**
     * Set ray
     *
     * @param {glMatrix.vec3} origin Ray's origin
     * @param {glMatrix.vec3} end Ray's end
     */
    set(origin, end)
    {
        // Compute direction
        let direction = glMatrix.vec3.create();
        glMatrix.vec3.subtract(direction, end, origin);

        // Copy
        glMatrix.vec3.copy(this.origin, origin);
        glMatrix.vec3.copy(this.direction, direction);

        // Compute inverse direction
        for (let i = 0; i < 3; i++)
        {
            this.invDirection[i] = 1.0 / direction[i];
            this.signs[i] = (this.invDirection[i] < 0) ? 1 : 0;
        }
    }
}