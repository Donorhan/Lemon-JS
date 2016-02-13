let glMatrix = require('gl-matrix');

/**
 * Transformable: Manage matrix's transformations
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Transformable
{
    /**
     * Constructor
     */
    constructor()
    {
        /**
         * The result matrix
         *
         * @type {glMatrix.mat4}
         * @private
         */
        this.matrix = glMatrix.mat4.create();

        /**
         * The normal matrix: inverse and transpose the transformation matrix
         *
         * @type {glMatrix.mat4}
         * @private
         */
        this.normalMatrix = glMatrix.mat4.create();

        /**
         * Origin, useful to apply rotation relatively to a point in space
         *
         * @type {glMatrix.vec3}
         * @private
         */
        this.origin = glMatrix.vec3.create();

        /**
         * Position
         *
         * @type {glMatrix.vec3}
         * @private
         */
        this.position = glMatrix.vec3.create();

        /**
         * Rotation
         *
         * @type {glMatrix.quat}
         * @private
         */
        this.rotation = glMatrix.quat.create();

        /**
         * Matrix with rotation data
         *
         * @type {glMatrix.mat4}
         * @private
         */
        this.rotationMatrix = glMatrix.mat4.create();

        /**
         * Scale
         *
         * @type {glMatrix.vec3}
         * @private
         */
        this.scale = glMatrix.vec3.fromValues(1.0, 1.0, 1.0);

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
     */
    lookAt(position = [0, 0, 0], up = [0, 1, 0])
    {
        // Useful variables
        let xAxis = glMatrix.vec3.create();
        let yAxis = glMatrix.vec3.create();
        let zAxis = glMatrix.vec3.create();

        // Compute rotation on z-axis
        glMatrix.vec3.subtract(zAxis, position, this.position);
        glMatrix.vec3.normalize(zAxis, zAxis);

        // Compute rotation on z-axis
        glMatrix.vec3.subtract(zAxis, position, this.position);
        glMatrix.vec3.normalize(zAxis, zAxis);

        // Compute rotation on x-axis
        glMatrix.vec3.cross(xAxis, up, zAxis);
        glMatrix.vec3.normalize(xAxis, xAxis);

        // Compute rotation on y-axis
        glMatrix.vec3.cross(yAxis, zAxis, xAxis);

        // Compute rotation matrix
        let matrix = glMatrix.mat4.create();
        matrix[0]  = xAxis[0];
        matrix[1]  = xAxis[1];
        matrix[2]  = xAxis[2];
        matrix[3]  = 0;

        matrix[4]  = yAxis[0];
        matrix[5]  = yAxis[1];
        matrix[6]  = yAxis[2];
        matrix[7]  = 0;

        matrix[8]  = zAxis[0];
        matrix[9]  = zAxis[1];
        matrix[10] = zAxis[2];
        matrix[11] = 0;

        matrix[12] = 0;
        matrix[13] = 0;
        matrix[14] = 0;
        matrix[15] = 1;

        // Send result
        this.setRotationFromMatrix(matrix);
    }

    /**
     * Set origin
     *
     * @param {number|Array.<number>} x Origin on X or an array with origin on each axis
     * @param {?number} y Origin on Y
     * @param {?number} z Origin on Z
     */
    setOrigin(x, y = this.origin[1], z = this.origin[2])
    {
        if (x.constructor === Array)
            glMatrix.vec3.copy(this.origin, x);
        else
            glMatrix.vec3.set(this.origin, x, y, z);

        this.needTransformUpdate = true;
    }

    /**
     * Set position
     *
     * @param {number|Array.<number>} x Position on X or an array with position on each axis
     * @param {?number} y Position on Y
     * @param {?number} z Position on Z
     */
    setPosition(x, y = this.position[1], z = this.position[2])
    {
        if (x.constructor === Array)
            glMatrix.vec3.copy(this.position, x);
        else
            glMatrix.vec3.set(this.position, x, y, z);

        this.needTransformUpdate = true;
    }

    /**
     * Set rotation using values in degrees
     *
     * @param {number|Array.<number>} x Rotation on X in degrees or an array with rotation on each axis
     * @param {?number} y Rotation on Y in degrees
     * @param {?number} z Rotation on Z in degrees
     */
    setRotation(x, y = 0, z = 0)
    {
        // Compute rotation matrix
        glMatrix.mat4.identity(this.rotationMatrix);

        if (x.constructor === Array)
        {
            glMatrix.mat4.rotateX(this.rotationMatrix, this.rotationMatrix, glMatrix.glMatrix.toRadian(x[0]));
            glMatrix.mat4.rotateY(this.rotationMatrix, this.rotationMatrix, glMatrix.glMatrix.toRadian(x[1]));
            glMatrix.mat4.rotateZ(this.rotationMatrix, this.rotationMatrix, glMatrix.glMatrix.toRadian(x[2]));
        }
        else
        {
            glMatrix.mat4.rotateX(this.rotationMatrix, this.rotationMatrix, glMatrix.glMatrix.toRadian(x));
            glMatrix.mat4.rotateY(this.rotationMatrix, this.rotationMatrix, glMatrix.glMatrix.toRadian(y));
            glMatrix.mat4.rotateZ(this.rotationMatrix, this.rotationMatrix, glMatrix.glMatrix.toRadian(z));            
        }

        // Compute quaterion
        let m3 = glMatrix.mat3.create();
        glMatrix.mat3.fromMat4(m3, this.rotationMatrix);
        glMatrix.quat.fromMat3(this.rotation, m3);

        this.needTransformUpdate = true;
    }

    /**
     * Set rotation from a quaternion
     *
     * @param {glMatrix.quat} quaternion A quaternion
     */
    setRotationFromQuaternion(quaternion)
    {
        glMatrix.mat4.fromQuat(this.rotationMatrix, quaternion);

        this.rotation               = quaternion;
        this.needTransformUpdate    = true;
    }

    /**
     * Set rotation from a rotation matrix
     *
     * @param {glMatrix.mat4} matrix A Matrix
     */
    setRotationFromMatrix(matrix)
    {
        glMatrix.quat.fromMat3(this.rotation, matrix);

        this.rotationMatrix         = matrix;
        this.needTransformUpdate    = true;
    }

    /**
     * Set scale
     *
     * @param {number|Array.<number>} x Scale on X or an array with scale on each axis
     * @param {?number} y Scale on Y
     * @param {?number} z Scale on Z
     */
    setScale(x, y = this.scale[1], z = this.scale[2])
    {
        if (x.constructor === Array)
            glMatrix.vec3.copy(this.scale, x);
        else
            glMatrix.vec3.set(this.scale, x, y, z);

        this.needTransformUpdate = true;
    }

    /**
     * Update matrix
     *
     * @param {?Array.<number>|glMatrix.mat4} parentMatrix Parent transformable's matrix
     * @param {boolean} forceUpdate True to force an update
     * @return {boolean} True if the matrix have been updated, otherwise false
     */
    computeTransformationMatrix(parentMatrix, forceUpdate)
    {
        // Avoid useless updates
        if (!forceUpdate && !this.needTransformUpdate)
            return false;

        // Compute matrix
        glMatrix.mat4.identity(this.matrix);
        glMatrix.mat4.translate(this.matrix, this.matrix, this.position);
        glMatrix.mat4.multiply(this.matrix, this.matrix, this.rotationMatrix);
        glMatrix.mat4.scale(this.matrix, this.matrix, this.scale);

        // Apply parent's transformations
        if (parentMatrix)
            glMatrix.mat4.multiply(this.matrix, parentMatrix, this.matrix);

        // Compute inverse matrix
        glMatrix.mat4.invert(this.normalMatrix, this.matrix);
        glMatrix.mat4.transpose(this.normalMatrix, this.normalMatrix);

        this.needTransformUpdate = false;

        return true;
    }

    /**
     * Return computed matrix
     *
     * @return {Array.<number>|glMatrix.mat4} A reference to the object's matrix
     */
    getTransformationMatrix()
    {
        return this.matrix;
    }

    /**
     * Return computed normal matrix
     *
     * @return {Array.<number>|glMatrix.mat4} A matrix
     */
    getNormalMatrix()
    {
        return this.normalMatrix;
    }

    /**
     * Return the origin
     *
     * @return {Array.<number>|glMatrix.vec3} A vector with the value for each axis
     */
    getOrigin()
    {
        return this.origin;
    }

    /**
     * Return relative position
     *
     * @return {Array.<number>|glMatrix.vec3} A vector with the value for each axis
     */
    getPosition()
    {
        return this.position;
    }

    /**
     * Return the rotation in degrees
     *
     * @return {Array.<number>} A vector with the value for each axis in degrees
     * @todo Implement this function
     */
    getRotation()
    {
        throw '\'getRotation\' is not implemented for now …';
    }

    /**
     * Return the scale
     *
     * @return {Array.<number>|glMatrix.vec3} A vector with the value for each axis
     */
    getScale()
    {
        return this.scale;
    }
}
