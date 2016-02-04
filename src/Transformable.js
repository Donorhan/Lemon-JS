goog.provide('Lemon.Transformable');

/**
 * Transformable: Manage matrix's transformations
 *
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Transformable = function ()
{
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
};

/**
 * Look at the given position
 *
 * @param {Array.<number>|Float32Array|Float64Array} position An array with value for each axis
 * @param {Array.<number>|Float32Array|Float64Array=} up An array with value for each axis
 */
Lemon.Transformable.prototype.lookAt = function (position, up) 
{
    // Default values.
    position = position || [0, 0, 0];
    up       = up       || [0, 1, 0];

    // Useful variables
    var xAxis = vec3.create();
    var yAxis = vec3.create();
    var zAxis = vec3.create();

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
    var matrix = mat4.create();
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
};

/**
 * Set origin
 *
 * @param {number} x Origin on X
 * @param {number} y Origin on Y
 * @param {number} z Origin on Z
 */
Lemon.Transformable.prototype.setOrigin = function (x, y, z) 
{
    vec3.set(this.origin, x, y, z);
    this.needTransformUpdate = true;
};

/**
 * Set position
 *
 * @param {number} x Position on X
 * @param {number} y Position on Y
 * @param {number} z Position on Z
 */
Lemon.Transformable.prototype.setPosition = function (x, y, z) 
{
    vec3.set(this.position, x, y, z);
    this.needTransformUpdate = true;
};

/**
 * Set rotation using values in degrees
 *
 * @param {number} x Rotation on X in degrees
 * @param {number} y Rotation on Y in degrees
 * @param {number} z Rotation on Z in degrees
 */
Lemon.Transformable.prototype.setRotation = function (x, y, z) 
{
    // Compute rotation matrix
    mat4.identity(this.rotationMatrix);
    mat4.rotateX(this.rotationMatrix, this.rotationMatrix, glMatrix.toRadian(x));
    mat4.rotateY(this.rotationMatrix, this.rotationMatrix, glMatrix.toRadian(y));
    mat4.rotateZ(this.rotationMatrix, this.rotationMatrix, glMatrix.toRadian(z));

    // Compute quaterion
    var m3 = mat3.create();
    mat3.fromMat4(m3, this.rotationMatrix);
    quat.fromMat3(this.rotation, m3);

    this.needTransformUpdate = true;
};

/**
 * Set rotation from a quaternion.
 * @param {quat} quaternion A quaternion.
 */
Lemon.Transformable.prototype.setRotationFromQuaternion = function (quaternion) 
{
    mat4.fromQuat(this.rotationMatrix, quaternion);

    this.rotation               = quaternion;
    this.needTransformUpdate    = true;
};

/**
 * Set rotation from a rotation matrix.
 * @param {mat4} matrix A Matrix.
 */
Lemon.Transformable.prototype.setRotationFromMatrix = function (matrix) 
{
    quat.fromMat3(this.rotation, matrix);

    this.rotationMatrix         = matrix;
    this.needTransformUpdate    = true;
};

/**
 * Set scale
 *
 * @param {number} x Position on X
 * @param {number} y Position on Y
 * @param {number} z Position on Z
 */
Lemon.Transformable.prototype.setScale = function (x, y, z) 
{
    vec3.set(this.scale, x, y, z);
    this.needTransformUpdate = true;
};

/**
 * Update matrix
 *
 * @param {?mat4} parentMatrix Parent transformable's matrix
 * @param {boolean} forceUpdate True to force an update
 * @return {boolean} True if the matrix have been updated, otherwise false
 */
Lemon.Transformable.prototype.computeTransformationMatrix = function (parentMatrix, forceUpdate)
{
    // Avoid useless updates
    if (!forceUpdate && !this.needTransformUpdate)
        return false;

    // Compute matrix
    mat4.identity(this.matrix);
    mat4.translate(this.matrix, this.matrix, this.position);
    mat4.multiply(this.matrix, this.matrix, this.rotationMatrix);
    mat4.scale(this.matrix, this.matrix, this.scale);

    // Apply parent's transformations
    if (parentMatrix)
        mat4.multiply(this.matrix, parentMatrix, this.matrix);

    // Compute inverse matrix
    mat4.invert(this.normalMatrix, this.matrix);
    mat4.transpose(this.normalMatrix, this.normalMatrix);

    this.needTransformUpdate = false;

    return true;
};

/**
 * Return computed matrix
 *
 * @return {mat4} A reference to the object's matrix
 */
Lemon.Transformable.prototype.getTransformationMatrix = function ()
{
    return this.matrix;
};

/**
 * Return computed normal matrix
 *
 * @return {mat4} A matrix
 */
Lemon.Transformable.prototype.getNormalMatrix = function ()
{
    return this.normalMatrix;
};

/**
 * Return the origin
 *
 * @return {vec3} A vector with the value for each axis
 */
Lemon.Transformable.prototype.getOrigin = function () 
{
    return this.origin;
};

/**
 * Return relative position
 *
 * @return {vec3} A vector with the value for each axis
 */
Lemon.Transformable.prototype.getPosition = function () 
{
    return this.position;
};

/**
 * Return the rotation in degrees
 *
 * @return {Array.<number>} A vector with the value for each axis in degrees
 * @todo Implement this function
 */
Lemon.Transformable.prototype.getRotation = function () 
{
    throw '\'getRotation\' is not implemented for now …';
};

/**
 * Return the scale
 *
 * @return {vec3} A vector with the value for each axis
 */
Lemon.Transformable.prototype.getScale = function () 
{
    return this.scale;
};
