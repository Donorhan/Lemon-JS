goog.provide('Lemon.Camera');
goog.require('goog.math');
goog.require('goog.vec.Mat4');
goog.require('goog.vec.Vec2');
goog.require('goog.vec.Vec3');

/**
 * A camera.
 * @constructor
 * @param {Lemon.Camera.Type=} type Type of camera.
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Camera = function( type ) 
{
    /**
    * Camera's direction.
    * @type {goog.vec.Vec3.Float32}
    * @private
    */
    this.direction = goog.vec.Vec3.createFloat32();

    /**
    * Field of view.
    * @type {number}
    * @private
    */
    this.fov = 45.0;

    /**
    * Visibility limits: min (x) and max (y).
    * @type {goog.vec.Vec2.Float32}
    * @private
    */
    this.limits = goog.vec.Vec2.createFloat32FromValues(0.1, 100.0);

    /**
    * Projection matrix.
    * @type {goog.vec.Mat4.Float32}
    * @private
    */
    this.matrixProjection = goog.vec.Mat4.createFloat32Identity();

    /**
    * View matrix.
    * @type {goog.vec.Mat4.Float32}
    * @private
    */
    this.matrixView = goog.vec.Mat4.createFloat32Identity();

    /**
    * Indicate if the view matrix need an update.
    * @type {boolean}
    * @private
    */
    this.matrixViewNeedUpdate = true;

    /**
    * Resulting matrix with camera's transformations.
    * @type {goog.vec.Mat4.Float32}
    * @private
    */
    this.matrixViewProjection = goog.vec.Mat4.createFloat32Identity();

    /**
    * Indicate if the view matrix need an update.
    * @type {boolean}
    * @private
    */
    this.matrixViewProjectionNeedUpdate = true;

    /**
    * Camera's position.
    * @type {goog.vec.Vec3.Float32}
    * @private
    */
    this.position = goog.vec.Vec3.createFloat32FromValues(0.0, 0.0, 3.0);

    /**
    * Ratio: 16/9, 4/3, ….
    * @type {number}
    * @private
    */
    this.ratio = 16.0 / 9.0;

    /**
    * Camera's rotation.
    * @type {goog.vec.Quaternion.Float32}
    * @private
    */
    this.rotation = goog.vec.Quaternion.createFloat32FromValues(0.0, 0.0, 0.0, 1.0);

    /**
    * Type of camera.
    * @type {Lemon.Camera.Type}
    * @private
    */
    this.type = type || Lemon.Camera.Type.Perspective;

    /**
    * View size with x, y, w and h values.
    * @type {goog.vec.Vec4.Float32}
    * @private
    */
    this.viewport = goog.vec.Vec4.createFloat32();

    /**
    * Zoom.
    * @type {number}
    * @default 1.0
    * @private
    */
    this.zoomScale = 1.0;

    // Force projection matrix computation.
    this.setType(this.type);
};

/**
* Type of camera.
* @enum {number}
*/
Lemon.Camera.Type = { Perspective: 0, Orthographic: 1 };

/**
 * Set camera's direction: Point to look at.
 * @param {number} x Direction on X.
 * @param {number} y Direction on Y.
 * @param {number} z Direction on Z.
 */
Lemon.Camera.prototype.lookAt = function( x, y, z ) 
{
    goog.vec.Vec3.setFromValues(this.direction, x, y, z);
    this.matrixViewNeedUpdate = true;
};

/**
 * Set camera's position.
 * @param {number} x Position on X.
 * @param {number} y Position on Y.
 * @param {number} z Position on Z.
 */
Lemon.Camera.prototype.move = function( x, y, z ) 
{
    goog.vec.Vec3.setFromValues(this.position, x, y, z);
    this.matrixViewNeedUpdate = true;
};

/**
 * Set camera's rotation.
 * @param {number} yaw A floating value.
 * @param {number} pitch A floating value.
 */
Lemon.Camera.prototype.rotate = function( yaw, pitch ) 
{
    var yawQuat     = goog.vec.Quaternion.createFloat32FromValues(0.0, 0.0, 0.0, 1.0);
    var pitchQuat   = goog.vec.Quaternion.createFloat32FromValues(0.0, 0.0, 0.0, 1.0);
    
    goog.vec.Quaternion.fromAngleAxis(yaw, [0.0, 1.0, 0.0], yawQuat);
    goog.vec.Quaternion.fromAngleAxis(-pitch, [1.0, 0.0, 0.0], pitchQuat);
    goog.vec.Quaternion.concat(yawQuat, pitchQuat, this.rotation);

    /**
    * Multiply two vec4.
    * @param {goog.vec.Quaternion.Float32} q1 First vector.
    * @param {goog.vec.Quaternion.AnyType} q2 Second vector.
    */
    function multiply( q1, q2 )
    {
        return [q1[3] * q2[0] + q1[0] * q2[3] + q1[2] * q2[1] - q1[1] * q2[2],
                q1[3] * q2[1] + q1[1] * q2[3] + q1[0] * q2[2] - q1[2] * q2[0],
                q1[3] * q2[2] + q1[2] * q2[3] + q1[1] * q2[0] - q1[0] * q2[1],
                q1[3] * q2[3] + q1[0] * q2[0] + q1[1] * q2[1] - q1[2] * q2[2]];
    }

    var d = multiply(this.rotation, [this.direction[0], this.direction[1], this.direction[2], 0.0]);
    var p = multiply(this.rotation, [this.position[0], this.position[1], this.position[2], 0.0]);

    goog.vec.Vec3.setFromValues(this.direction, d[0], d[1], d[2]);
    goog.vec.Vec3.setFromValues(this.position,  p[0], p[1], p[2]);

    this.matrixViewNeedUpdate = true;
};

/**
 * Set field of view.
 * @param {number} value Value in degrees (default: 45).
 */
Lemon.Camera.prototype.setFieldOfView = function( value ) 
{
    this.fov = value;
    this.setType(this.type); // Force projection matrix update.
};

/**
 * Set screen's ratio.
 * @param {number} ratio Ratio to assign (4/3, 16/9, …).
 */
Lemon.Camera.prototype.setRatio = function( ratio ) 
{
    this.ratio = ratio;
    this.setType(this.type); // Force projection matrix update.
};

/**
 * Set camera's distances.
 * @param {Lemon.Camera.Type} type Type asked, for 2D you should use "Orthographic".
 */
Lemon.Camera.prototype.setType = function( type ) 
{
    // Save type.
    this.type = type;

    // Compute projection matrix. 
    if( type == Lemon.Camera.Type.Perspective )
        goog.vec.Mat4.makePerspective(this.matrixProjection, goog.math.toRadians(this.fov * this.zoomScale), this.ratio, this.limits[0], this.limits[1]);
    else
    {
        goog.vec.Mat4.makeOrtho(this.matrixProjection,  (-1.5 * this.ratio) * this.zoomScale, 
                                                        (+1.5 * this.ratio) * this.zoomScale, 
                                                         -1.5 * this.zoomScale, 
                                                         +1.5 * this.zoomScale, 
                                                         this.limits[0], 
                                                         this.limits[1]);
    }

    this.matrixViewProjectionNeedUpdate = true;
};

/**
 * Set camera's distances.
 * @param {number} min Minimum distance to show.
 * @param {number} max Maximum distance to show.
 */
Lemon.Camera.prototype.setViewDistances = function( min, max ) 
{
    goog.vec.Vec2.setFromValues(this.limits, min, max);
    this.setType(this.type); // Force projection matrix update.
};

/**
 * Set camera's viewport.
 * @param {number} x View start position on X.
 * @param {number} y View start position on Y.
 * @param {number} w View size on X.
 * @param {number} h View size on Y.
 */
Lemon.Camera.prototype.setViewport = function( x, y, w, h ) 
{
    goog.vec.Vec4.setFromValues(this.viewport, x, y, w, h);
    this.setRatio(w / h);
};

/**
 * Zoom.
 * @param {number} zoomValue Zoom scale to apply.
 */
Lemon.Camera.prototype.zoom = function( zoomValue ) 
{
    this.zoomScale = 1.0 / zoomValue;
    this.setType(this.type); // Force projection matrix update.
};

/**
 * Get camera's position.
 * @return {!Array.<number>} A vector with three values: x, y and z.
 */
Lemon.Camera.prototype.getPosition = function() 
{
    return [this.position[0], this.position[1], this.position[2]];
};

/**
 * Get camera's projection matrix.
 * @return {!goog.vec.Mat4.Float32} A matrix.
 */
Lemon.Camera.prototype.getProjectionMatrix = function() 
{
    return this.matrixProjection;
};

/**
 * Get camera's matrix.
 * @return {!goog.vec.Mat4.Float32} A matrix.
 */
Lemon.Camera.prototype.getViewMatrix = function() 
{
    if( this.matrixViewNeedUpdate )
    {
        goog.vec.Mat4.makeLookAt(this.matrixView, this.position, this.direction, goog.vec.Vec3.createFloat32FromValues(0.0, 1.0, 0.0));
        this.matrixViewNeedUpdate           = false;
        this.matrixViewProjectionNeedUpdate = true;
    }

    return this.matrixView;
};

/**
 * Get camera's viewport.
 * @return {!goog.vec.Vec4.Float32} A vector with four values: x, y, w and h.
 */
Lemon.Camera.prototype.getViewport = function() 
{
    return this.viewport;
};

/**
 * Get camera's matrix.
 * @return {!goog.vec.Mat4.Float32} A matrix.
 */
Lemon.Camera.prototype.getViewProjectionMatrix = function() 
{
    if( this.matrixViewProjectionNeedUpdate || this.matrixViewNeedUpdate )
    {
        goog.vec.Mat4.multMat(this.getProjectionMatrix(), this.getViewMatrix(), this.matrixViewProjection);
        this.matrixViewProjectionNeedUpdate = false;
    }

    return this.matrixViewProjection;
};
