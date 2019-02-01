import { vec3 } from 'gl-matrix';

/**
 * A ray
 *
 * @category Geometry
 */
class Ray {
    /**
     * Constructor
     *
     * @param {?vec3} origin Ray's origin
     * @param {?vec3} end Ray's end
     */
    constructor(origin = null, end = null) {
        /**
         * Direction
         *
         * @type {vec3}
         */
        this.direction = vec3.create();

        /**
         * Inverse direction
         *
         * @type {vec3}
         */
        this.invDirection = vec3.create();

        /**
         * Origin
         *
         * @type {vec3}
         */
        this.origin = vec3.create();

        /**
         * Signs
         *
         * @type {vec3}
         */
        this.signs = vec3.create();

        // Init
        if (origin && end) {
            this.set(origin, end);
        }
    }

    /**
     * Set ray
     *
     * @param {vec3} origin Ray's origin
     * @param {vec3} end Ray's end
     */
    set(origin, end) {
        // Compute direction
        const direction = vec3.create();
        vec3.subtract(direction, end, origin);

        // Copy
        vec3.copy(this.origin, origin);
        vec3.copy(this.direction, direction);

        // Compute inverse direction
        for (let i = 0; i < 3; i += 1) {
            this.invDirection[i] = 1.0 / direction[i];
            this.signs[i] = (this.invDirection[i] < 0) ? 1 : 0;
        }
    }
}

export default Ray;
