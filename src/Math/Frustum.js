import Plane from './Plane';

/**
 * Frustum
 *
 * @category Geometry
 */
class Frustum {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Planes defining the frustum
         *
         * @type {Plane[]}
         */
        this.planes = [];

        // Init planes
        for (let i = 0; i < 6; i += 1) {
            this.planes[i] = new Plane();
        }
    }

    /**
     * Apply a transformation matrix to the frustum
     *
     * @param {glMatrix.mat4} matrix A matrix
     */
    fromMatrix(matrix) {
        // Set
        this.planes[0].set(matrix[3] - matrix[0], matrix[7] - matrix[4], matrix[11] - matrix[8], matrix[15] - matrix[12]);
        this.planes[1].set(matrix[3] + matrix[0], matrix[7] + matrix[4], matrix[11] + matrix[8], matrix[15] + matrix[12]);
        this.planes[2].set(matrix[3] + matrix[1], matrix[7] + matrix[5], matrix[11] + matrix[9], matrix[15] + matrix[13]);
        this.planes[3].set(matrix[3] - matrix[1], matrix[7] - matrix[5], matrix[11] - matrix[9], matrix[15] - matrix[13]);
        this.planes[4].set(matrix[3] - matrix[2], matrix[7] - matrix[6], matrix[11] - matrix[10], matrix[15] - matrix[14]);
        this.planes[5].set(matrix[3] + matrix[2], matrix[7] + matrix[6], matrix[11] + matrix[10], matrix[15] + matrix[14]);

        // Normalize
        for (let i = 0; i < 6; i += 1) {
            this.planes[i].normalize();
        }
    }

    /**
     * Check if the given box is contains inside the frustum
     *
     * @param {Box} box A Box instance
     * @return {boolean} True if box is contained
     */
    containsBox(box) {
        const p1 = [];
        const p2 = [];

        for (let i = 0; i < 6; i += 1) {
            p1[0] = (this.planes[i].normal[0] > 0) ? box.minTransformedBounds[0] : box.maxTransformedBounds[0];
            p2[0] = (this.planes[i].normal[0] > 0) ? box.maxTransformedBounds[0] : box.minTransformedBounds[0];
            p1[1] = (this.planes[i].normal[1] > 0) ? box.minTransformedBounds[1] : box.maxTransformedBounds[1];
            p2[1] = (this.planes[i].normal[1] > 0) ? box.maxTransformedBounds[1] : box.minTransformedBounds[1];
            p1[2] = (this.planes[i].normal[2] > 0) ? box.minTransformedBounds[2] : box.maxTransformedBounds[2];
            p2[2] = (this.planes[i].normal[2] > 0) ? box.maxTransformedBounds[2] : box.minTransformedBounds[2];

            if (this.planes[i].distanceTo(p1[0], p1[1], p1[2]) < 0
             && this.planes[i].distanceTo(p2[0], p2[1], p2[2]) < 0) {
                return false;
            }
        }

        return true;
    }
}

export default Frustum;
