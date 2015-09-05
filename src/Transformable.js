goog.provide('Lemon.Transformable');
goog.require('goog.math');
goog.require('goog.vec.Mat4');
goog.require('goog.vec.Quaternion');

/**
 * Transformable: Manage matrix's transformations.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Transformable = function() 
{
    /**
    * The result matrix.
    * @type {goog.vec.Mat4.Float32}
    * @private
    */
    this.matrix = goog.vec.Mat4.createFloat32Identity();

    /**
    * The normal matrix: inverse and transpose the transformation matrix.
    * @type {goog.vec.Mat4.Float32}
    * @private
    */
    this.normalMatrix = goog.vec.Mat4.createFloat32Identity();

    /**
    * Origin, useful to apply rotation relatively to a point in space.
    * @type {goog.vec.Vec3.Float32}
    * @private
    */
    this.origin = goog.vec.Vec3.createFloat32();

    /**
    * Position.
    * @type {goog.vec.Vec3.Float32}
    * @private
    */
    this.position = goog.vec.Vec3.createFloat32();

    /**
    * Rotation.
    * @type {goog.vec.Quaternion.Float32}
    * @private
    */
    this.rotation = goog.vec.Quaternion.createFloat32();

    /**
    * Matrix with rotation data.
    * @type {goog.vec.Mat4.Float32}
    * @private
    */
    this.rotationMatrix = goog.vec.Mat4.createFloat32Identity();

    /**
    * Scale.
    * @type {goog.vec.Vec3.Float32}
    * @private
    */
    this.scale = goog.vec.Vec3.createFloat32FromValues(1.0, 1.0, 1.0);

    /**
    * Indicate if the matrix/cache need to be updated.
    * @type {boolean}
    * @private
    */
    this.needTransformUpdate = true;
};

/**
 * Look at the given position.
 * @param {Array.<number>|Float32Array|Float64Array} position An array with value for each axis.
 * @param {Array.<number>|Float32Array|Float64Array=} up An array with value for each axis.
 */
Lemon.Transformable.prototype.lookAt = function( position, up ) 
{
    // Default values.
    position = position || [0, 0, 0];
    up       = up       || [0, 1, 0];

    // Useful variables.
    var xAxis = goog.vec.Vec3.createFloat32();
    var yAxis = goog.vec.Vec3.createFloat32();
    var zAxis = goog.vec.Vec3.createFloat32();

    // Compute rotation on z-axis.
    goog.vec.Vec3.subtract(position, this.position, zAxis);
    goog.vec.Vec3.normalize(zAxis, zAxis);

    // Compute rotation on z-axis.
    goog.vec.Vec3.subtract(position, this.position, zAxis);
    goog.vec.Vec3.normalize(zAxis, zAxis);

    // Compute rotation on x-axis.
    goog.vec.Vec3.cross(up, zAxis, xAxis);
    goog.vec.Vec3.normalize(xAxis, xAxis);

    // Compute rotation on y-axis.
    goog.vec.Vec3.cross(zAxis, xAxis, yAxis);

    // Compute rotation matrix.
    var matrix = goog.vec.Mat4.createFloat32Identity();
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

    // Send result.
    this.setRotationFromMatrix(matrix);
};

/**
 * Set origin.
 * @param {number} x Origin on X.
 * @param {number} y Origin on Y.
 * @param {number} z Origin on Z.
 */
Lemon.Transformable.prototype.setOrigin = function( x, y, z ) 
{
    goog.vec.Vec3.setFromValues(this.origin, x, y, z);
    this.needTransformUpdate = true;
};

/**
 * Set position.
 * @param {number} x Position on X.
 * @param {number} y Position on Y.
 * @param {number} z Position on Z.
 */
Lemon.Transformable.prototype.setPosition = function( x, y, z ) 
{
    goog.vec.Vec3.setFromValues(this.position, x, y, z);
    this.needTransformUpdate = true;
};

/**
 * Set rotation using values in degrees.
 * @param {number} x Rotation on X in degrees.
 * @param {number} y Rotation on Y in degrees.
 * @param {number} z Rotation on Z in degrees.
 */
Lemon.Transformable.prototype.setRotation = function( x, y, z ) 
{
    goog.vec.Mat4.makeIdentity(this.rotationMatrix);
    goog.vec.Mat4.rotateX(this.rotationMatrix, goog.math.toRadians(x));
    goog.vec.Mat4.rotateY(this.rotationMatrix, goog.math.toRadians(y));
    goog.vec.Mat4.rotateZ(this.rotationMatrix, goog.math.toRadians(z));
    goog.vec.Quaternion.fromRotationMatrix4(this.rotationMatrix, this.rotation);

    this.needTransformUpdate = true;
};

/**
 * Set rotation from a quaternion.
 * @param {goog.vec.Quaternion.Float32} quaternion A quaternion.
 */
Lemon.Transformable.prototype.setRotationFromQuaternion = function( quaternion ) 
{
    goog.vec.Quaternion.toRotationMatrix4(quaternion, this.rotationMatrix);

    this.rotation               = quaternion;
    this.needTransformUpdate    = true;
};

/**
 * Set rotation from a rotation matrix.
 * @param {goog.vec.Mat4.Float32} matrix A Matrix.
 */
Lemon.Transformable.prototype.setRotationFromMatrix = function( matrix ) 
{
    goog.vec.Quaternion.fromRotationMatrix4(matrix, this.rotation);

    this.rotationMatrix         = matrix;
    this.needTransformUpdate    = true;
};

/**
 * Set scale.
 * @param {number} x Position on X.
 * @param {number} y Position on Y.
 * @param {number} z Position on Z.
 */
Lemon.Transformable.prototype.setScale = function( x, y, z ) 
{
    goog.vec.Vec3.setFromValues(this.scale, x, y, z);
    this.needTransformUpdate = true;
};

/**
 * Update matrix.
 * @param {?goog.vec.Mat4.Float32} parentMatrix Parent transformable's matrix.
 * @param {boolean} forceUpdate True to force an update.
 * @return {boolean} True if the matrix have been updated, otherwise false.
 */
Lemon.Transformable.prototype.computeTransformationMatrix = function( parentMatrix, forceUpdate )
{
    // Avoid useless updates.
    if( !forceUpdate && !this.needTransformUpdate )
        return false;

    // Compute matrix.
    goog.vec.Mat4.makeTranslate(this.matrix, this.position[0], this.position[1], this.position[2]);
    goog.vec.Mat4.multMat(this.matrix, this.rotationMatrix, this.matrix );
    goog.vec.Mat4.scale(this.matrix, this.scale[0], this.scale[1], this.scale[2]);

    // Apply parent's transformations.
    if( parentMatrix )
        goog.vec.Mat4.multMat(parentMatrix, this.matrix, this.matrix );

    // Compute inverse matrix.
    goog.vec.Mat4.invert(this.matrix, this.normalMatrix);
    goog.vec.Mat4.transpose(this.normalMatrix, this.normalMatrix);

    this.needTransformUpdate = false;

    return true;
};

/**
 * Return computed matrix.
 * @return {goog.vec.Mat4.Float32} A reference to the object's matrix.
 */
Lemon.Transformable.prototype.getTransformationMatrix = function()
{
    return this.matrix;
};

/**
 * Return computed normal matrix.
 * @return {goog.vec.Mat4.Float32} A matrix.
 */
Lemon.Transformable.prototype.getNormalMatrix = function()
{
    return this.normalMatrix;
};

/**
 * Return the origin.
 * @return {goog.vec.Vec3.Float32} A vector with the value for each axis.
 */
Lemon.Transformable.prototype.getOrigin = function() 
{
    return this.origin;
};

/**
 * Return relative position.
 * @return {goog.vec.Vec3.Float32} A vector with the value for each axis.
 */
Lemon.Transformable.prototype.getPosition = function() 
{
    return this.position;
};

/**
 * Return the rotation in degrees.
 * @return {Array.<number>} A vector with the value for each axis in degrees.
 * @todo Implement this function.
 */
Lemon.Transformable.prototype.getRotation = function() 
{
	throw '\'getRotation\' is not implemented for now …';
};

/**
 * Return the scale.
 * @return {goog.vec.Vec3.Float32} A vector with the value for each axis.
 */
Lemon.Transformable.prototype.getScale = function() 
{
    return this.scale;
};
