import * as mat3 from 'gl-matrix/mat3';
import * as mat4 from 'gl-matrix/mat4';
import * as vec3 from 'gl-matrix/vec3';
import * as quat from 'gl-matrix/quat';
import { glMatrix } from 'gl-matrix';

/**
 * Transformable: Manage matrix's transformations
 *
 * @category Core
 */
class Transformable {
    /**
     * Constructor
     */
    constructor() {
        /**
         * The result matrix
         *
         * @type {mat4}
         * @private
         */
        this.matrix = mat4.create();

        /**
         * The normal matrix: inverse and transpose the transformation matrix
         *
         * @type {mat4}
         * @private
         */
        this.normalMatrix = mat4.create();

        /**
         * Origin, useful to apply rotation relatively to a point in space
         *
         * @type {vec3}
         * @private
         */
        this.origin = vec3.create();

        /**
         * Position
         *
         * @type {vec3}
         * @private
         */
        this.position = vec3.create();

        /**
         * Rotation
         *
         * @type {quat}
         * @private
         */
        this.rotation = quat.create();

        /**
         * Matrix with rotation data
         *
         * @type {mat4}
         * @private
         */
        this.rotationMatrix = mat4.create();

        /**
         * Scale
         *
         * @type {vec3}
         * @private
         */
        this.scale = vec3.fromValues(1.0, 1.0, 1.0);

        /**
         * Indicate if the matrix/cache need to be updated
         *
         * @type {boolean}
         * @private
         */
        this.needTransformUpdate = true;
    }

    /**
     * Look at the given position
     *
     * @param {Array.<number>|Float32Array|Float64Array} position An array with value for each axis
     * @param {Array.<number>|Float32Array|Float64Array=} up An array with value for each axis
     * @return {Transformable} A reference to the instance
     */
    lookAt(position = [0, 0, 0], up = [0, 1, 0]) {
        // Useful variables
        const xAxis = vec3.create();
        const yAxis = vec3.create();
        const zAxis = vec3.create();

        // Compute rotation on z-axis
        vec3.subtract(zAxis, position, this.position);
        vec3.normalize(zAxis, zAxis);

        // Compute rotation on z-axis
        vec3.subtract(zAxis, position, this.position);
        vec3.normalize(zAxis, zAxis);

        // Compute rotation on x-axis
        vec3.cross(xAxis, up, zAxis);
        vec3.normalize(xAxis, xAxis);

        // Compute rotation on y-axis
        vec3.cross(yAxis, zAxis, xAxis);

        // Compute rotation matrix
        const matrix = mat4.create();
        matrix[0] = xAxis[0];
        matrix[1] = xAxis[1];
        matrix[2] = xAxis[2];
        matrix[3] = 0;

        matrix[4] = yAxis[0];
        matrix[5] = yAxis[1];
        matrix[6] = yAxis[2];
        matrix[7] = 0;

        matrix[8] = zAxis[0];
        matrix[9] = zAxis[1];
        matrix[10] = zAxis[2];
        matrix[11] = 0;

        matrix[12] = 0;
        matrix[13] = 0;
        matrix[14] = 0;
        matrix[15] = 1;

        // Send result
        this.setRotationFromMatrix(matrix);

        return this;
    }

    /**
     * Set origin
     *
     * @param {number|Array.<number>} x Origin on X or an array with origin on each axis
     * @param {?number} y Origin on Y
     * @param {?number} z Origin on Z
     * @return {Transformable} A reference to the instance
     */
    setOrigin(x, y = this.origin[1], z = this.origin[2]) {
        if (x.constructor === Array) {
            vec3.copy(this.origin, x);
        } else {
            vec3.set(this.origin, x, y, z);
        }

        this.needTransformUpdate = true;

        return this;
    }

    /**
     * Set position
     *
     * @param {number|Array.<number>} x Position on X or an array with position on each axis
     * @param {?number} y Position on Y
     * @param {?number} z Position on Z
     * @return {Transformable} A reference to the instance
     */
    setPosition(x, y = this.position[1], z = this.position[2]) {
        if (x.constructor === Array) {
            vec3.copy(this.position, x);
        } else {
            vec3.set(this.position, x, y, z);
        }

        this.needTransformUpdate = true;

        return this;
    }

    /**
     * Set rotation using values in degrees
     *
     * @param {number|Array.<number>} x Rotation on X in degrees or an array with rotation on each axis
     * @param {?number} y Rotation on Y in degrees
     * @param {?number} z Rotation on Z in degrees
     * @return {Transformable} A reference to the instance
     */
    setRotation(x, y = 0, z = 0) {
        // Compute rotation matrix
        mat4.identity(this.rotationMatrix);

        if (x.constructor === Array) {
            mat4.rotateX(this.rotationMatrix, this.rotationMatrix, glMatrix.toRadian(x[0]));
            mat4.rotateY(this.rotationMatrix, this.rotationMatrix, glMatrix.toRadian(x[1]));
            mat4.rotateZ(this.rotationMatrix, this.rotationMatrix, glMatrix.toRadian(x[2]));
        } else {
            mat4.rotateX(this.rotationMatrix, this.rotationMatrix, glMatrix.toRadian(x));
            mat4.rotateY(this.rotationMatrix, this.rotationMatrix, glMatrix.toRadian(y));
            mat4.rotateZ(this.rotationMatrix, this.rotationMatrix, glMatrix.toRadian(z));
        }

        // Compute quaterion
        const m3 = mat3.create();
        mat3.fromMat4(m3, this.rotationMatrix);
        quat.fromMat3(this.rotation, m3);

        this.needTransformUpdate = true;

        return this;
    }

    /**
     * Set rotation from a quaternion
     *
     * @param {quat} quaternion A quaternion
     * @return {Transformable} A reference to the instance
     */
    setRotationFromQuaternion(quaternion) {
        mat4.fromQuat(this.rotationMatrix, quaternion);

        this.rotation = quaternion;
        this.needTransformUpdate = true;

        return this;
    }

    /**
     * Set rotation from a rotation matrix
     *
     * @param {mat4} matrix A Matrix
     * @return {Transformable} A reference to the instance
     */
    setRotationFromMatrix(matrix) {
        quat.fromMat3(this.rotation, matrix);

        this.rotationMatrix = matrix;
        this.needTransformUpdate = true;

        return this;
    }

    /**
     * Set scale
     *
     * @param {number|Array.<number>} x Scale on X or an array with scale on each axis
     * @param {?number} y Scale on Y
     * @param {?number} z Scale on Z
     * @return {Transformable} A reference to the instance
     */
    setScale(x, y = this.scale[1], z = this.scale[2]) {
        if (x.constructor === Array) {
            vec3.copy(this.scale, x);
        } else {
            vec3.set(this.scale, x, y, z);
        }

        this.needTransformUpdate = true;

        return this;
    }

    /**
     * Update matrix
     *
     * @param {?Array.<number>|mat4} parentMatrix Parent transformable's matrix
     * @param {boolean} forceUpdate True to force an update
     * @return {boolean} True if the matrix have been updated, otherwise false
     */
    computeTransformationMatrix(parentMatrix, forceUpdate) {
        // Avoid useless updates
        if (!forceUpdate && !this.needTransformUpdate) {
            return false;
        }

        // Compute matrix
        mat4.identity(this.matrix);
        mat4.translate(this.matrix, this.matrix, this.position);
        mat4.multiply(this.matrix, this.matrix, this.rotationMatrix);
        mat4.scale(this.matrix, this.matrix, this.scale);

        // Apply parent's transformations
        if (parentMatrix) {
            mat4.multiply(this.matrix, parentMatrix, this.matrix);
        }

        // Compute inverse matrix
        mat4.invert(this.normalMatrix, this.matrix);
        mat4.transpose(this.normalMatrix, this.normalMatrix);

        this.needTransformUpdate = false;

        return true;
    }

    /**
     * Return computed matrix
     *
     * @return {Array.<number>|mat4} A reference to the object's matrix
     */
    getTransformationMatrix() {
        return this.matrix;
    }

    /**
     * Return computed normal matrix
     *
     * @return {Array.<number>|mat4} A matrix
     */
    getNormalMatrix() {
        return this.normalMatrix;
    }

    /**
     * Return the origin
     *
     * @return {Array.<number>|vec3} A vector with the value for each axis
     */
    getOrigin() {
        return this.origin;
    }

    /**
     * Return relative position
     *
     * @return {Array.<number>|vec3} A vector with the value for each axis
     */
    getPosition() {
        return this.position;
    }

    /**
     * Return the rotation in degrees
     *
     * @return {Array.<number>} A vector with the value for each axis in degrees
     * @todo Implement this function
     */
    getRotation() {
        throw Error('\'getRotation\' is not implemented for now …');
    }

    /**
     * Return the scale
     *
     * @return {Array.<number>|vec3} A vector with the value for each axis
     */
    getScale() {
        return this.scale;
    }
}

export default Transformable;
