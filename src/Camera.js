import * as glExt from './Math/gl-matrix-extension.js';
let glMatrix = require('gl-matrix');

/**
 * A camera
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class Camera
{
    /**
     * Constructor
     *
     * @param {Camera.Type=} type Type of camera
     */
    constructor(type = Camera.Type.Perspective)
    {
        /**
         * Camera's direction
         *
         * @type {glMatrix.vec3}
         * @private
         */
        this.direction = glMatrix.vec3.create();

        /**
         * Field of view
         *
         * @type {number}
         * @private
         */
        this.fov = 45.0;

        /**
         * Visibility limits: min (x) and max (y)
         *
         * @type {glMatrix.vec2}
         * @private
         */
        this.limits = glMatrix.vec2.fromValues(0.1, 100.0);

        /**
         * Projection matrix
         *
         * @type {glMatrix.mat4}
         * @private
         */
        this.matrixProjection = glMatrix.mat4.create();

        /**
         * View matrix
         *
         * @type {glMatrix.mat4}
         * @private
         */
        this.matrixView = glMatrix.mat4.create();

        /**
         * Indicate if the view matrix need an update
         *
         * @type {boolean}
         * @private
         */
        this.matrixViewNeedUpdate = true;

        /**
         * Resulting matrix with camera's transformations
         *
         * @type {glMatrix.mat4}
         * @private
         */
        this.matrixViewProjection = glMatrix.mat4.create();

        /**
         * Indicate if the view matrix need an update
         *
         * @type {boolean}
         * @private
         */
        this.matrixViewProjectionNeedUpdate = true;

        /**
         * Camera's position
         *
         * @type {glMatrix.vec3}
         * @private
         */
        this.position = glMatrix.vec3.fromValues(0.0, 0.0, 3.0);

        /**
         * Ratio: 16/9, 4/3, …
         *
         * @type {number}
         * @private
         */
        this.ratio = 16.0 / 9.0;

        /**
         * Camera's rotation
         *
         * @type {glMatrix.quat}
         * @private
         */
        this.rotation = glMatrix.quat.fromValues(0.0, 0.0, 0.0, 1.0);

        /**
         * Type of camera
         *
         * @type {Camera.Type}
         * @private
         */
        this.type = type;

        /**
         * View size with x, y, w and h values
         *
         * @type {glMatrix.vec4}
         * @private
         */
        this.viewport = glMatrix.vec4.create();

        /**
         * Zoom
         *
         * @type {number}
         * @default 1.0
         * @private
         */
        this.zoomScale = 1.0;

        // Force projection matrix computation
        this.setType(this.type);
    }

    /**
     * Set camera's direction: Point to look at
     *
     * @param {number} x Direction on X
     * @param {number} y Direction on Y
     * @param {number} z Direction on Z
     * @return {Camera} A reference to the instance
     */
    lookAt(x, y, z)
    {
        glMatrix.vec3.set(this.direction, x, y, z);
        this.matrixViewNeedUpdate = true;

        return this;
    }

    /**
     * Set camera's position
     *
     * @param {number} x Position on X
     * @param {number} y Position on Y
     * @param {number} z Position on Z
     * @return {Camera} A reference to the instance
     */
    move(x, y, z)
    {
        glMatrix.vec3.set(this.position, x, y, z);
        this.matrixViewNeedUpdate = true;

        return this;
    }

    /**
     * Set camera's rotation
     *
     * @param {number} yaw A floating value
     * @param {number} pitch A floating value
     * @return {Camera} A reference to the instance
     */
    rotate(yaw, pitch)
    {
        let yawQuat     = glMatrix.quat.fromValues(0.0, 0.0, 0.0, 1.0);
        let pitchQuat   = glMatrix.quat.fromValues(0.0, 0.0, 0.0, 1.0);

        glMatrix.quat.setAxisAngle(yawQuat, [0.0, 1.0, 0.0], yaw);
        glMatrix.quat.setAxisAngle(pitchQuat, [1.0, 0.0, 0.0], -pitch);
        glMatrix.quat.multiply(this.rotation, yawQuat, pitchQuat);

        /**
         * Multiply two vec4
         *
         * @param {quat} q1 First vector
         * @param {quat} q2 Second vector
         */
        function multiply (q1, q2)
        {
            return [q1[3] * q2[0] + q1[0] * q2[3] + q1[2] * q2[1] - q1[1] * q2[2],
                q1[3] * q2[1] + q1[1] * q2[3] + q1[0] * q2[2] - q1[2] * q2[0],
                q1[3] * q2[2] + q1[2] * q2[3] + q1[1] * q2[0] - q1[0] * q2[1],
                q1[3] * q2[3] + q1[0] * q2[0] + q1[1] * q2[1] - q1[2] * q2[2]];
        }

        let d = multiply(this.rotation, [this.direction[0], this.direction[1], this.direction[2], 0.0]);
        let p = multiply(this.rotation, [this.position[0], this.position[1], this.position[2], 0.0]);

        glMatrix.vec3.set(this.direction, d[0], d[1], d[2]);
        glMatrix.vec3.set(this.position, p[0], p[1], p[2]);

        this.matrixViewNeedUpdate = true;

        return this;
    }

    /**
     * Set field of view
     *
     * @param {number} value Value in degrees (default: 45)
     * @return {Camera} A reference to the instance
     */
    setFieldOfView(value)
    {
        this.fov = value;
        this.setType(this.type); // Force projection matrix update

        return this;
    }

    /**
     * Set screen's ratio
     *
     * @param {number} ratio Ratio to assign (4/3, 16/9, …)
     * @return {Camera} A reference to the instance
     */
    setRatio(ratio)
    {
        this.ratio = ratio;
        this.setType(this.type); // Force projection matrix update

        return this;
    }

    /**
     * Set camera's distances
     *
     * @param {Camera.Type} type Type asked, for 2D you should use "Orthographic"
     * @return {Camera} A reference to the instance
     */
    setType(type)
    {
        // Save type
        this.type = type;

        // Compute projection matrix
        if (type == Camera.Type.Perspective)
            glMatrix.mat4.perspective(this.matrixProjection, glMatrix.glMatrix.toRadian(this.fov * this.zoomScale), this.ratio, this.limits[0], this.limits[1]);
        else
        {
            glMatrix.mat4.ortho(this.matrixProjection,
                                (-1.5 * this.ratio) * this.zoomScale,
                                (+1.5 * this.ratio) * this.zoomScale,
                                (-1.5 * this.zoomScale),
                                (+1.5 * this.zoomScale),
                                this.limits[0],
                                this.limits[1]);
        }

        this.matrixViewProjectionNeedUpdate = true;

        return this;
    }

    /**
     * Set camera's distances
     *
     * @param {number} min Minimum distance to show
     * @param {number} max Maximum distance to show
     * @return {Camera} A reference to the instance
     */
    setViewDistances(min, max)
    {
        glMatrix.vec2.set(this.limits, min, max);
        this.setType(this.type); // Force projection matrix update

        return this;
    }

    /**
     * Set camera's viewport
     *
     * @param {number} x View start position on X
     * @param {number} y View start position on Y
     * @param {number} w View size on X
     * @param {number} h View size on Y
     * @return {Camera} A reference to the instance
     */
    setViewport(x, y, w, h)
    {
        glMatrix.vec4.set(this.viewport, x, y, w, h);
        this.setRatio(w / h);

        return this;
    }

    /**
     * Zoom
     *
     * @param {number} zoomValue Zoom scale to apply
     * @return {Camera} A reference to the instance
     */
    zoom(zoomValue)
    {
        this.zoomScale = 1.0 / zoomValue;
        this.setType(this.type); // Force projection matrix update

        return this;
    }

    /**
     * Get camera's position
     *
     * @return {!Array.<number>} A vector with three values: x, y and z
     */
    getPosition()
    {
        return [this.position[0], this.position[1], this.position[2]];
    }

    /**
     * Get camera's projection matrix
     *
     * @return {!glMatrix.mat4} A matrix
     */
    getProjectionMatrix()
    {
        return this.matrixProjection;
    }

    /**
     * Get camera's matrix
     *
     * @return {!glMatrix.mat4} A matrix
     */
    getViewMatrix()
    {
        if (this.matrixViewNeedUpdate)
        {
            glMatrix.mat4.lookAt(this.matrixView, this.position, this.direction, glMatrix.vec3.fromValues(0.0, 1.0, 0.0));
            this.matrixViewNeedUpdate           = false;
            this.matrixViewProjectionNeedUpdate = true;
        }

        return this.matrixView;
    }

    /**
     * Get camera's viewport
     *
     * @return {!glMatrix.vec3} A vector with four values: x, y, w and h
     */
    getViewport()
    {
        return this.viewport;
    }

    /**
     * Get camera's matrix
     *
     * @return {!glMatrix.mat4} A matrix
     */
    getViewProjectionMatrix()
    {
        if (this.matrixViewProjectionNeedUpdate || this.matrixViewNeedUpdate)
        {
            glMatrix.mat4.multiply(this.matrixViewProjection, this.getProjectionMatrix(), this.getViewMatrix());
            this.matrixViewProjectionNeedUpdate = false;
        }

        return this.matrixViewProjection;
    }

    /**
     * Convert a point in 2D space to the 3D space
     *
     * Z value must have one of this two values:
     * - 0 for near plane
     * - 1 for far plane
     *
     * @param {Array.<number>} position Position in 2D space/a vec3
     * @return {!glMatrix.vec3} An array with position in 3D
     */
    screenToWorldPoint(position)
    {
        return glMatrix.vec3.unproject([position[0], position[1], position[2]],
                                        this.getViewMatrix(),
                                        this.getProjectionMatrix(),
                                        this.viewport);
    }

    /**
     * Convert a point in 3D space to the 2D space
     *
     * @param {Array.<number>} position Position in 3D space/a vec3
     * @return {!glMatrix.vec2} An array with position in 2D
     */
    worldToScreenPoint(position)
    {
        return glMatrix.vec3.project([position[0], position[1], position[2]],
                                        this.getViewMatrix(),
                                        this.getProjectionMatrix(),
                                        this.viewport);
    }
}

/**
 * Types
 *
 * @type {{Perspective: number, Orthographic: number}}
 */
Camera.Type = { Perspective: 0, Orthographic: 1 };
