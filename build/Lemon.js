(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Lemon", [], factory);
	else if(typeof exports === 'object')
		exports["Lemon"] = factory();
	else
		root["Lemon"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _BlendMode = __webpack_require__(1);
	
	var _Camera = __webpack_require__(2);
	
	var _Color = __webpack_require__(13);
	
	var _DirectionalLight = __webpack_require__(14);
	
	var _StateBlock = __webpack_require__(18);
	
	var _FileLoader = __webpack_require__(19);
	
	var _Geometry = __webpack_require__(20);
	
	var _Material = __webpack_require__(23);
	
	var _Mesh = __webpack_require__(26);
	
	var _Model = __webpack_require__(31);
	
	var _ModelLoader = __webpack_require__(32);
	
	var _Pass = __webpack_require__(24);
	
	var _PointLight = __webpack_require__(37);
	
	var _PostEffect = __webpack_require__(38);
	
	var _Program = __webpack_require__(29);
	
	var _ProgramLibrary = __webpack_require__(33);
	
	var _RenderCanvas = __webpack_require__(52);
	
	var _RenderTarget = __webpack_require__(40);
	
	var _RenderTexture = __webpack_require__(39);
	
	var _Scene = __webpack_require__(53);
	
	var _Skybox = __webpack_require__(54);
	
	var _SpotLight = __webpack_require__(56);
	
	var _Sprite = __webpack_require__(50);
	
	var _Texture = __webpack_require__(34);
	
	var _TextureCube = __webpack_require__(47);
	
	var _TextureVideo = __webpack_require__(48);
	
	var _Transformable = __webpack_require__(17);
	
	var _Types = __webpack_require__(25);
	
	var _VertexFormat = __webpack_require__(22);
	
	exports.BlendMode = _BlendMode.BlendMode;
	exports.Camera = _Camera.Camera;
	exports.Color = _Color.Color;
	exports.DirectionalLight = _DirectionalLight.DirectionalLight;
	exports.DrawingMode = _StateBlock.DrawingMode;
	exports.FileLoader = _FileLoader.FileLoader;
	exports.Geometry = _Geometry.Geometry;
	exports.Material = _Material.Material;
	exports.Mesh = _Mesh.Mesh;
	exports.Model = _Model.Model;
	exports.ModelLoader = _ModelLoader.ModelLoader;
	exports.Pass = _Pass.Pass;
	exports.PointLight = _PointLight.PointLight;
	exports.PostEffect = _PostEffect.PostEffect;
	exports.Program = _Program.Program;
	exports.ProgramLibrary = _ProgramLibrary.ProgramLibrary;
	exports.RenderCanvas = _RenderCanvas.RenderCanvas;
	exports.RenderTexture = _RenderTexture.RenderTexture;
	exports.Scene = _Scene.Scene;
	exports.Skybox = _Skybox.Skybox;
	exports.SpotLight = _SpotLight.SpotLight;
	exports.Sprite = _Sprite.Sprite;
	exports.Texture = _Texture.Texture;
	exports.TextureCube = _TextureCube.TextureCube;
	exports.TextureVideo = _TextureVideo.TextureVideo;
	exports.Transformable = _Transformable.Transformable;
	exports.Type = _Types.Type;
	exports.VertexFormat = _VertexFormat.VertexFormat;
	exports.VertexElement = _VertexFormat.VertexElement;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Blending
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var BlendMode = exports.BlendMode = function () {
	  /**
	   * Constructor
	   *
	   * @param {BlendMode=} mode Mode to use, preset values.
	   */
	
	  function BlendMode(mode) {
	    _classCallCheck(this, BlendMode);
	
	    /**
	     * Source blending factor for the alpha channel
	     *
	     * @type {BlendMode.Factor}
	     * @public
	     */
	    this.alphaSourceFactor = BlendMode.Factor.One;
	
	    /**
	     * Destination blending factor for the alpha channel
	     *
	     * @type {BlendMode.Factor}
	     * @public
	     */
	    this.alphaDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
	
	    /**
	     * Blending equation for the alpha channel
	     *
	     * @type {BlendMode.Equation}
	     * @public
	     */
	    this.alphaEquation = BlendMode.Equation.Add;
	
	    /**
	     * Blending color (source)
	     *
	     * @type {BlendMode.Factor}
	     * @public
	     */
	    this.colorSourceFactor = BlendMode.Factor.SourceAlpha;
	
	    /**
	     * Blending color (destination)
	     *
	     * @type {BlendMode.Factor}
	     * @public
	     */
	    this.colorDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
	
	    /**
	     * Equation to use on source and destination color
	     *
	     * @type {BlendMode.Equation}
	     * @public
	     */
	    this.colorEquation = BlendMode.Equation.Add;
	
	    if (mode) this.setMode(mode);
	  }
	
	  /**
	   * Set blending mode to use: this method erase the previous configuration, be careful
	   *
	   * @param {BlendMode.Mode=} mode Mode to use, preset values
	   */
	
	  _createClass(BlendMode, [{
	    key: "setMode",
	    value: function setMode(mode) {
	      switch (mode) {
	        case BlendMode.Mode.Alpha:
	          {
	            this.colorSourceFactor = BlendMode.Factor.SourceAlpha;
	            this.colorDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
	            this.colorEquation = BlendMode.Equation.Add;
	            this.alphaSourceFactor = BlendMode.Factor.One;
	            this.alphaDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
	            this.alphaEquation = BlendMode.Equation.Add;
	            break;
	          }
	        case BlendMode.Mode.Add:
	          {
	            this.colorSourceFactor = BlendMode.Factor.SourceAlpha;
	            this.colorDestinationFactor = BlendMode.Factor.One;
	            this.colorEquation = BlendMode.Equation.Add;
	            this.alphaSourceFactor = BlendMode.Factor.One;
	            this.alphaDestinationFactor = BlendMode.Factor.One;
	            this.alphaEquation = BlendMode.Equation.Add;
	            break;
	          }
	        case BlendMode.Mode.Multiply:
	          {
	            this.colorSourceFactor = BlendMode.Factor.DestinationColor;
	            this.colorDestinationFactor = BlendMode.Factor.One;
	            this.colorEquation = BlendMode.Equation.Add;
	            this.alphaSourceFactor = BlendMode.Factor.One;
	            this.alphaDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
	            this.alphaEquation = BlendMode.Equation.Add;
	            break;
	          }
	        default:
	        case BlendMode.Mode.None:
	          {
	            this.colorSourceFactor = BlendMode.Factor.One;
	            this.colorDestinationFactor = BlendMode.Factor.Zero;
	            this.colorEquation = BlendMode.Equation.Add;
	            this.alphaSourceFactor = BlendMode.Factor.One;
	            this.alphaDestinationFactor = BlendMode.Factor.OneMinusSourceAlpha;
	            this.alphaEquation = BlendMode.Equation.Add;
	            break;
	          }
	      }
	    }
	
	    /**
	     * Check if the given BlendMode instance is equal to this one
	     *
	     * @param {BlendMode} blendMode A BlendMode instance
	     * @return {boolean} True if the two blend mode are equals, otherwise false
	     */
	
	  }, {
	    key: "isEqual",
	    value: function isEqual(blendMode) {
	      return this.alphaSourceFactor == blendMode.alphaSourceFactor && this.alphaDestinationFactor == blendMode.alphaDestinationFactor && this.alphaEquation == blendMode.alphaEquation && this.colorSourceFactor == blendMode.colorSourceFactor && this.colorDestinationFactor == blendMode.colorDestinationFactor && this.colorEquation == blendMode.colorEquation;
	    }
	  }]);
	
	  return BlendMode;
	}();
	
	/**
	 * Default modes availables
	 *
	 * @enum {number}
	 */
	
	BlendMode.Mode = { Alpha: 0, Add: 1, Multiply: 2, None: 3 };
	
	/**
	 * Blend factors
	 *
	 * @enum {number}
	 */
	BlendMode.Factor = { DestinationAlpha: 0,
	  DestinationColor: 1,
	  One: 2,
	  OneMinusDestinationAlpha: 3,
	  OneMinusDestinationColor: 4,
	  OneMinusSourceAlpha: 5,
	  OneMinusSourceColor: 6,
	  SourceAlpha: 7,
	  SourceColor: 8,
	  Zero: 9
	};
	
	/**
	 * Blend equations
	 *
	 * @enum {number}
	 */
	BlendMode.Equation = { Add: 0, Subtract: 1 };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var glMatrix = __webpack_require__(3);
	
	/**
	 * A camera
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Camera = exports.Camera = function () {
	  /**
	   * Constructor
	   *
	   * @param {Camera.Type=} type Type of camera
	   */
	
	  function Camera() {
	    var type = arguments.length <= 0 || arguments[0] === undefined ? Camera.Type.Perspective : arguments[0];
	
	    _classCallCheck(this, Camera);
	
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
	   */
	
	  _createClass(Camera, [{
	    key: 'lookAt',
	    value: function lookAt(x, y, z) {
	      glMatrix.vec3.set(this.direction, x, y, z);
	      this.matrixViewNeedUpdate = true;
	    }
	
	    /**
	     * Set camera's position
	     *
	     * @param {number} x Position on X
	     * @param {number} y Position on Y
	     * @param {number} z Position on Z
	     */
	
	  }, {
	    key: 'move',
	    value: function move(x, y, z) {
	      glMatrix.vec3.set(this.position, x, y, z);
	      this.matrixViewNeedUpdate = true;
	    }
	
	    /**
	     * Set camera's rotation
	     *
	     * @param {number} yaw A floating value
	     * @param {number} pitch A floating value
	     */
	
	  }, {
	    key: 'rotate',
	    value: function rotate(yaw, pitch) {
	      var yawQuat = glMatrix.quat.fromValues(0.0, 0.0, 0.0, 1.0);
	      var pitchQuat = glMatrix.quat.fromValues(0.0, 0.0, 0.0, 1.0);
	
	      glMatrix.quat.setAxisAngle(yawQuat, [0.0, 1.0, 0.0], yaw);
	      glMatrix.quat.setAxisAngle(pitchQuat, [1.0, 0.0, 0.0], -pitch);
	      glMatrix.quat.multiply(this.rotation, yawQuat, pitchQuat);
	
	      /**
	       * Multiply two vec4
	       *
	       * @param {quat} q1 First vector
	       * @param {quat} q2 Second vector
	       */
	      function multiply(q1, q2) {
	        return [q1[3] * q2[0] + q1[0] * q2[3] + q1[2] * q2[1] - q1[1] * q2[2], q1[3] * q2[1] + q1[1] * q2[3] + q1[0] * q2[2] - q1[2] * q2[0], q1[3] * q2[2] + q1[2] * q2[3] + q1[1] * q2[0] - q1[0] * q2[1], q1[3] * q2[3] + q1[0] * q2[0] + q1[1] * q2[1] - q1[2] * q2[2]];
	      }
	
	      var d = multiply(this.rotation, [this.direction[0], this.direction[1], this.direction[2], 0.0]);
	      var p = multiply(this.rotation, [this.position[0], this.position[1], this.position[2], 0.0]);
	
	      glMatrix.vec3.set(this.direction, d[0], d[1], d[2]);
	      glMatrix.vec3.set(this.position, p[0], p[1], p[2]);
	
	      this.matrixViewNeedUpdate = true;
	    }
	
	    /**
	     * Set field of view
	     *
	     * @param {number} value Value in degrees (default: 45)
	     */
	
	  }, {
	    key: 'setFieldOfView',
	    value: function setFieldOfView(value) {
	      this.fov = value;
	      this.setType(this.type); // Force projection matrix update
	    }
	
	    /**
	     * Set screen's ratio
	     *
	     * @param {number} ratio Ratio to assign (4/3, 16/9, …)
	     */
	
	  }, {
	    key: 'setRatio',
	    value: function setRatio(ratio) {
	      this.ratio = ratio;
	      this.setType(this.type); // Force projection matrix update
	    }
	
	    /**
	     * Set camera's distances
	     *
	     * @param {Camera.Type} type Type asked, for 2D you should use "Orthographic"
	     */
	
	  }, {
	    key: 'setType',
	    value: function setType(type) {
	      // Save type
	      this.type = type;
	
	      // Compute projection matrix
	      if (type == Camera.Type.Perspective) glMatrix.mat4.perspective(this.matrixProjection, glMatrix.glMatrix.toRadian(this.fov * this.zoomScale), this.ratio, this.limits[0], this.limits[1]);else {
	        glMatrix.mat4.ortho(this.matrixProjection, -1.5 * this.ratio * this.zoomScale, +1.5 * this.ratio * this.zoomScale, -1.5 * this.zoomScale, +1.5 * this.zoomScale, this.limits[0], this.limits[1]);
	      }
	
	      this.matrixViewProjectionNeedUpdate = true;
	    }
	
	    /**
	     * Set camera's distances
	     *
	     * @param {number} min Minimum distance to show
	     * @param {number} max Maximum distance to show
	     */
	
	  }, {
	    key: 'setViewDistances',
	    value: function setViewDistances(min, max) {
	      glMatrix.vec2.set(this.limits, min, max);
	      this.setType(this.type); // Force projection matrix update
	    }
	
	    /**
	     * Set camera's viewport
	     *
	     * @param {number} x View start position on X
	     * @param {number} y View start position on Y
	     * @param {number} w View size on X
	     * @param {number} h View size on Y
	     */
	
	  }, {
	    key: 'setViewport',
	    value: function setViewport(x, y, w, h) {
	      glMatrix.vec4.set(this.viewport, x, y, w, h);
	      this.setRatio(w / h);
	    }
	
	    /**
	     * Zoom
	     *
	     * @param {number} zoomValue Zoom scale to apply
	     */
	
	  }, {
	    key: 'zoom',
	    value: function zoom(zoomValue) {
	      this.zoomScale = 1.0 / zoomValue;
	      this.setType(this.type); // Force projection matrix update
	    }
	
	    /**
	     * Get camera's position
	     *
	     * @return {!Array.<number>} A vector with three values: x, y and z
	     */
	
	  }, {
	    key: 'getPosition',
	    value: function getPosition() {
	      return [this.position[0], this.position[1], this.position[2]];
	    }
	
	    /**
	     * Get camera's projection matrix
	     *
	     * @return {!glMatrix.mat4} A matrix
	     */
	
	  }, {
	    key: 'getProjectionMatrix',
	    value: function getProjectionMatrix() {
	      return this.matrixProjection;
	    }
	
	    /**
	     * Get camera's matrix
	     *
	     * @return {!glMatrix.mat4} A matrix
	     */
	
	  }, {
	    key: 'getViewMatrix',
	    value: function getViewMatrix() {
	      if (this.matrixViewNeedUpdate) {
	        glMatrix.mat4.lookAt(this.matrixView, this.position, this.direction, glMatrix.vec3.fromValues(0.0, 1.0, 0.0));
	        this.matrixViewNeedUpdate = false;
	        this.matrixViewProjectionNeedUpdate = true;
	      }
	
	      return this.matrixView;
	    }
	
	    /**
	     * Get camera's viewport
	     *
	     * @return {!glMatrix.vec3} A vector with four values: x, y, w and h
	     */
	
	  }, {
	    key: 'getViewport',
	    value: function getViewport() {
	      return this.viewport;
	    }
	
	    /**
	     * Get camera's matrix
	     *
	     * @return {!glMatrix.mat4} A matrix
	     */
	
	  }, {
	    key: 'getViewProjectionMatrix',
	    value: function getViewProjectionMatrix() {
	      if (this.matrixViewProjectionNeedUpdate || this.matrixViewNeedUpdate) {
	        glMatrix.mat4.multiply(this.matrixViewProjection, this.getProjectionMatrix(), this.getViewMatrix());
	        this.matrixViewProjectionNeedUpdate = false;
	      }
	
	      return this.matrixViewProjection;
	    }
	  }]);
	
	  return Camera;
	}();
	
	/**
	 * Types
	 *
	 * @type {{Perspective: number, Orthographic: number}}
	 */
	
	Camera.Type = { Perspective: 0, Orthographic: 1 };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview gl-matrix - High performance matrix and vector operations
	 * @author Brandon Jones
	 * @author Colin MacKenzie IV
	 * @version 2.3.0
	 */
	
	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	// END HEADER
	
	exports.glMatrix = __webpack_require__(4);
	exports.mat2 = __webpack_require__(5);
	exports.mat2d = __webpack_require__(6);
	exports.mat3 = __webpack_require__(7);
	exports.mat4 = __webpack_require__(8);
	exports.quat = __webpack_require__(9);
	exports.vec2 = __webpack_require__(12);
	exports.vec3 = __webpack_require__(10);
	exports.vec4 = __webpack_require__(11);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	/**
	 * @class Common utilities
	 * @name glMatrix
	 */
	var glMatrix = {};
	
	// Constants
	glMatrix.EPSILON = 0.000001;
	glMatrix.ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
	glMatrix.RANDOM = Math.random;
	
	/**
	 * Sets the type of array used when creating new vectors and matrices
	 *
	 * @param {Type} type Array type, such as Float32Array or Array
	 */
	glMatrix.setMatrixArrayType = function(type) {
	    GLMAT_ARRAY_TYPE = type;
	}
	
	var degree = Math.PI / 180;
	
	/**
	* Convert Degree To Radian
	*
	* @param {Number} Angle in Degrees
	*/
	glMatrix.toRadian = function(a){
	     return a * degree;
	}
	
	module.exports = glMatrix;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(4);
	
	/**
	 * @class 2x2 Matrix
	 * @name mat2
	 */
	var mat2 = {};
	
	/**
	 * Creates a new identity mat2
	 *
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Creates a new mat2 initialized with values from an existing matrix
	 *
	 * @param {mat2} a matrix to clone
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Copy the values from one mat2 to another
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Set a mat2 to the identity matrix
	 *
	 * @param {mat2} out the receiving matrix
	 * @returns {mat2} out
	 */
	mat2.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a1 = a[1];
	        out[1] = a[2];
	        out[2] = a1;
	    } else {
	        out[0] = a[0];
	        out[1] = a[2];
	        out[2] = a[1];
	        out[3] = a[3];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.invert = function(out, a) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	
	        // Calculate the determinant
	        det = a0 * a3 - a2 * a1;
	
	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;
	    
	    out[0] =  a3 * det;
	    out[1] = -a1 * det;
	    out[2] = -a2 * det;
	    out[3] =  a0 * det;
	
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.adjoint = function(out, a) {
	    // Caching this value is nessecary if out == a
	    var a0 = a[0];
	    out[0] =  a[3];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] =  a0;
	
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat2
	 *
	 * @param {mat2} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2.determinant = function (a) {
	    return a[0] * a[3] - a[2] * a[1];
	};
	
	/**
	 * Multiplies two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.multiply = function (out, a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    return out;
	};
	
	/**
	 * Alias for {@link mat2.multiply}
	 * @function
	 */
	mat2.mul = mat2.multiply;
	
	/**
	 * Rotates a mat2 by the given angle
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.rotate = function (out, a, rad) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 *  c + a2 * s;
	    out[1] = a1 *  c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    return out;
	};
	
	/**
	 * Scales the mat2 by the dimensions in the given vec2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2} out
	 **/
	mat2.scale = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    return out;
	};
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.rotate(dest, dest, rad);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.fromRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.scale(dest, dest, vec);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2} out
	 */
	mat2.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    return out;
	}
	
	/**
	 * Returns a string representation of a mat2
	 *
	 * @param {mat2} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2.str = function (a) {
	    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat2
	 *
	 * @param {mat2} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
	};
	
	/**
	 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
	 * @param {mat2} L the lower triangular matrix 
	 * @param {mat2} D the diagonal matrix 
	 * @param {mat2} U the upper triangular matrix 
	 * @param {mat2} a the input matrix to factorize
	 */
	
	mat2.LDU = function (L, D, U, a) { 
	    L[2] = a[2]/a[0]; 
	    U[0] = a[0]; 
	    U[1] = a[1]; 
	    U[3] = a[3] - L[2] * U[1]; 
	    return [L, D, U];       
	}; 
	
	
	module.exports = mat2;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(4);
	
	/**
	 * @class 2x3 Matrix
	 * @name mat2d
	 * 
	 * @description 
	 * A mat2d contains six elements defined as:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty]
	 * </pre>
	 * This is a short form for the 3x3 matrix:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty,
	 *  0, 0, 1]
	 * </pre>
	 * The last row is ignored so the array is shorter and operations are faster.
	 */
	var mat2d = {};
	
	/**
	 * Creates a new identity mat2d
	 *
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};
	
	/**
	 * Creates a new mat2d initialized with values from an existing matrix
	 *
	 * @param {mat2d} a matrix to clone
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};
	
	/**
	 * Copy the values from one mat2d to another
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};
	
	/**
	 * Set a mat2d to the identity matrix
	 *
	 * @param {mat2d} out the receiving matrix
	 * @returns {mat2d} out
	 */
	mat2d.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};
	
	/**
	 * Inverts a mat2d
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.invert = function(out, a) {
	    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
	        atx = a[4], aty = a[5];
	
	    var det = aa * ad - ab * ac;
	    if(!det){
	        return null;
	    }
	    det = 1.0 / det;
	
	    out[0] = ad * det;
	    out[1] = -ab * det;
	    out[2] = -ac * det;
	    out[3] = aa * det;
	    out[4] = (ac * aty - ad * atx) * det;
	    out[5] = (ab * atx - aa * aty) * det;
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat2d
	 *
	 * @param {mat2d} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2d.determinant = function (a) {
	    return a[0] * a[3] - a[1] * a[2];
	};
	
	/**
	 * Multiplies two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.multiply = function (out, a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    out[4] = a0 * b4 + a2 * b5 + a4;
	    out[5] = a1 * b4 + a3 * b5 + a5;
	    return out;
	};
	
	/**
	 * Alias for {@link mat2d.multiply}
	 * @function
	 */
	mat2d.mul = mat2d.multiply;
	
	/**
	 * Rotates a mat2d by the given angle
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.rotate = function (out, a, rad) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 *  c + a2 * s;
	    out[1] = a1 *  c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};
	
	/**
	 * Scales the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.scale = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};
	
	/**
	 * Translates the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to translate the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.translate = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0;
	    out[1] = a1;
	    out[2] = a2;
	    out[3] = a3;
	    out[4] = a0 * v0 + a2 * v1 + a4;
	    out[5] = a1 * v0 + a3 * v1 + a5;
	    return out;
	};
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.rotate(dest, dest, rad);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.fromRotation = function(out, rad) {
	    var s = Math.sin(rad), c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.scale(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2d} out
	 */
	mat2d.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.translate(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat2d} out
	 */
	mat2d.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = v[0];
	    out[5] = v[1];
	    return out;
	}
	
	/**
	 * Returns a string representation of a mat2d
	 *
	 * @param {mat2d} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2d.str = function (a) {
	    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
	                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat2d
	 *
	 * @param {mat2d} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2d.frob = function (a) { 
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
	}; 
	
	module.exports = mat2d;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(4);
	
	/**
	 * @class 3x3 Matrix
	 * @name mat3
	 */
	var mat3 = {};
	
	/**
	 * Creates a new identity mat3
	 *
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Copies the upper-left 3x3 values into the given mat3.
	 *
	 * @param {mat3} out the receiving 3x3 matrix
	 * @param {mat4} a   the source 4x4 matrix
	 * @returns {mat3} out
	 */
	mat3.fromMat4 = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[4];
	    out[4] = a[5];
	    out[5] = a[6];
	    out[6] = a[8];
	    out[7] = a[9];
	    out[8] = a[10];
	    return out;
	};
	
	/**
	 * Creates a new mat3 initialized with values from an existing matrix
	 *
	 * @param {mat3} a matrix to clone
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Copy the values from one mat3 to another
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Set a mat3 to the identity matrix
	 *
	 * @param {mat3} out the receiving matrix
	 * @returns {mat3} out
	 */
	mat3.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1], a02 = a[2], a12 = a[5];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a01;
	        out[5] = a[7];
	        out[6] = a02;
	        out[7] = a12;
	    } else {
	        out[0] = a[0];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a[1];
	        out[4] = a[4];
	        out[5] = a[7];
	        out[6] = a[2];
	        out[7] = a[5];
	        out[8] = a[8];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.invert = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b01 = a22 * a11 - a12 * a21,
	        b11 = -a22 * a10 + a12 * a20,
	        b21 = a21 * a10 - a11 * a20,
	
	        // Calculate the determinant
	        det = a00 * b01 + a01 * b11 + a02 * b21;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = b01 * det;
	    out[1] = (-a22 * a01 + a02 * a21) * det;
	    out[2] = (a12 * a01 - a02 * a11) * det;
	    out[3] = b11 * det;
	    out[4] = (a22 * a00 - a02 * a20) * det;
	    out[5] = (-a12 * a00 + a02 * a10) * det;
	    out[6] = b21 * det;
	    out[7] = (-a21 * a00 + a01 * a20) * det;
	    out[8] = (a11 * a00 - a01 * a10) * det;
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.adjoint = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    out[0] = (a11 * a22 - a12 * a21);
	    out[1] = (a02 * a21 - a01 * a22);
	    out[2] = (a01 * a12 - a02 * a11);
	    out[3] = (a12 * a20 - a10 * a22);
	    out[4] = (a00 * a22 - a02 * a20);
	    out[5] = (a02 * a10 - a00 * a12);
	    out[6] = (a10 * a21 - a11 * a20);
	    out[7] = (a01 * a20 - a00 * a21);
	    out[8] = (a00 * a11 - a01 * a10);
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat3
	 *
	 * @param {mat3} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat3.determinant = function (a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
	};
	
	/**
	 * Multiplies two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.multiply = function (out, a, b) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b00 = b[0], b01 = b[1], b02 = b[2],
	        b10 = b[3], b11 = b[4], b12 = b[5],
	        b20 = b[6], b21 = b[7], b22 = b[8];
	
	    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
	
	    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
	
	    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	    return out;
	};
	
	/**
	 * Alias for {@link mat3.multiply}
	 * @function
	 */
	mat3.mul = mat3.multiply;
	
	/**
	 * Translate a mat3 by the given vector
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to translate
	 * @param {vec2} v vector to translate by
	 * @returns {mat3} out
	 */
	mat3.translate = function(out, a, v) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	        x = v[0], y = v[1];
	
	    out[0] = a00;
	    out[1] = a01;
	    out[2] = a02;
	
	    out[3] = a10;
	    out[4] = a11;
	    out[5] = a12;
	
	    out[6] = x * a00 + y * a10 + a20;
	    out[7] = x * a01 + y * a11 + a21;
	    out[8] = x * a02 + y * a12 + a22;
	    return out;
	};
	
	/**
	 * Rotates a mat3 by the given angle
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.rotate = function (out, a, rad) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    out[0] = c * a00 + s * a10;
	    out[1] = c * a01 + s * a11;
	    out[2] = c * a02 + s * a12;
	
	    out[3] = c * a10 - s * a00;
	    out[4] = c * a11 - s * a01;
	    out[5] = c * a12 - s * a02;
	
	    out[6] = a20;
	    out[7] = a21;
	    out[8] = a22;
	    return out;
	};
	
	/**
	 * Scales the mat3 by the dimensions in the given vec2
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat3} out
	 **/
	mat3.scale = function(out, a, v) {
	    var x = v[0], y = v[1];
	
	    out[0] = x * a[0];
	    out[1] = x * a[1];
	    out[2] = x * a[2];
	
	    out[3] = y * a[3];
	    out[4] = y * a[4];
	    out[5] = y * a[5];
	
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.translate(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat3} out
	 */
	mat3.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = v[0];
	    out[7] = v[1];
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.rotate(dest, dest, rad);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.fromRotation = function(out, rad) {
	    var s = Math.sin(rad), c = Math.cos(rad);
	
	    out[0] = c;
	    out[1] = s;
	    out[2] = 0;
	
	    out[3] = -s;
	    out[4] = c;
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.scale(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat3} out
	 */
	mat3.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	
	    out[3] = 0;
	    out[4] = v[1];
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Copies the values from a mat2d into a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat2d} a the matrix to copy
	 * @returns {mat3} out
	 **/
	mat3.fromMat2d = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = 0;
	
	    out[3] = a[2];
	    out[4] = a[3];
	    out[5] = 0;
	
	    out[6] = a[4];
	    out[7] = a[5];
	    out[8] = 1;
	    return out;
	};
	
	/**
	* Calculates a 3x3 matrix from the given quaternion
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {quat} q Quaternion to create matrix from
	*
	* @returns {mat3} out
	*/
	mat3.fromQuat = function (out, q) {
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[3] = yx - wz;
	    out[6] = zx + wy;
	
	    out[1] = yx + wz;
	    out[4] = 1 - xx - zz;
	    out[7] = zy - wx;
	
	    out[2] = zx - wy;
	    out[5] = zy + wx;
	    out[8] = 1 - xx - yy;
	
	    return out;
	};
	
	/**
	* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {mat4} a Mat4 to derive the normal matrix from
	*
	* @returns {mat3} out
	*/
	mat3.normalFromMat4 = function (out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	        // Calculate the determinant
	        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	
	    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	
	    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat3
	 *
	 * @param {mat3} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat3.str = function (a) {
	    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
	                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
	                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat3
	 *
	 * @param {mat3} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat3.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
	};
	
	
	module.exports = mat3;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(4);
	
	/**
	 * @class 4x4 Matrix
	 * @name mat4
	 */
	var mat4 = {};
	
	/**
	 * Creates a new identity mat4
	 *
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a new mat4 initialized with values from an existing matrix
	 *
	 * @param {mat4} a matrix to clone
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Copy the values from one mat4 to another
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */
	mat4.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1], a02 = a[2], a03 = a[3],
	            a12 = a[6], a13 = a[7],
	            a23 = a[11];
	
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a01;
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a02;
	        out[9] = a12;
	        out[11] = a[14];
	        out[12] = a03;
	        out[13] = a13;
	        out[14] = a23;
	    } else {
	        out[0] = a[0];
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a[1];
	        out[5] = a[5];
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a[2];
	        out[9] = a[6];
	        out[10] = a[10];
	        out[11] = a[14];
	        out[12] = a[3];
	        out[13] = a[7];
	        out[14] = a[11];
	        out[15] = a[15];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.invert = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	        // Calculate the determinant
	        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.adjoint = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	
	    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
	    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
	    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
	    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
	    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
	    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
	    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
	    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat4
	 *
	 * @param {mat4} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat4.determinant = function (a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32;
	
	    // Calculate the determinant
	    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	};
	
	/**
	 * Multiplies two mat4's
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.multiply = function (out, a, b) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	
	    // Cache only the current line of the second matrix
	    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
	    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
	    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
	    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
	    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	    return out;
	};
	
	/**
	 * Alias for {@link mat4.multiply}
	 * @function
	 */
	mat4.mul = mat4.multiply;
	
	/**
	 * Translate a mat4 by the given vector
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.translate = function (out, a, v) {
	    var x = v[0], y = v[1], z = v[2],
	        a00, a01, a02, a03,
	        a10, a11, a12, a13,
	        a20, a21, a22, a23;
	
	    if (a === out) {
	        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
	        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
	        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
	        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	    } else {
	        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
	        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
	        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
	
	        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
	        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
	        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;
	
	        out[12] = a00 * x + a10 * y + a20 * z + a[12];
	        out[13] = a01 * x + a11 * y + a21 * z + a[13];
	        out[14] = a02 * x + a12 * y + a22 * z + a[14];
	        out[15] = a03 * x + a13 * y + a23 * z + a[15];
	    }
	
	    return out;
	};
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.scale = function(out, a, v) {
	    var x = v[0], y = v[1], z = v[2];
	
	    out[0] = a[0] * x;
	    out[1] = a[1] * x;
	    out[2] = a[2] * x;
	    out[3] = a[3] * x;
	    out[4] = a[4] * y;
	    out[5] = a[5] * y;
	    out[6] = a[6] * y;
	    out[7] = a[7] * y;
	    out[8] = a[8] * z;
	    out[9] = a[9] * z;
	    out[10] = a[10] * z;
	    out[11] = a[11] * z;
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Rotates a mat4 by the given angle around the given axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.rotate = function (out, a, rad, axis) {
	    var x = axis[0], y = axis[1], z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s, c, t,
	        a00, a01, a02, a03,
	        a10, a11, a12, a13,
	        a20, a21, a22, a23,
	        b00, b01, b02,
	        b10, b11, b12,
	        b20, b21, b22;
	
	    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
	    
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	
	    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
	    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
	    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
	
	    // Construct the elements of the rotation matrix
	    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
	    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
	    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;
	
	    // Perform rotation-specific matrix multiplication
	    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateX = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[0]  = a[0];
	        out[1]  = a[1];
	        out[2]  = a[2];
	        out[3]  = a[3];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[4] = a10 * c + a20 * s;
	    out[5] = a11 * c + a21 * s;
	    out[6] = a12 * c + a22 * s;
	    out[7] = a13 * c + a23 * s;
	    out[8] = a20 * c - a10 * s;
	    out[9] = a21 * c - a11 * s;
	    out[10] = a22 * c - a12 * s;
	    out[11] = a23 * c - a13 * s;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Y axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateY = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[4]  = a[4];
	        out[5]  = a[5];
	        out[6]  = a[6];
	        out[7]  = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c - a20 * s;
	    out[1] = a01 * c - a21 * s;
	    out[2] = a02 * c - a22 * s;
	    out[3] = a03 * c - a23 * s;
	    out[8] = a00 * s + a20 * c;
	    out[9] = a01 * s + a21 * c;
	    out[10] = a02 * s + a22 * c;
	    out[11] = a03 * s + a23 * c;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Z axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateZ = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[8]  = a[8];
	        out[9]  = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c + a10 * s;
	    out[1] = a01 * c + a11 * s;
	    out[2] = a02 * c + a12 * s;
	    out[3] = a03 * c + a13 * s;
	    out[4] = a10 * c - a00 * s;
	    out[5] = a11 * c - a01 * s;
	    out[6] = a12 * c - a02 * s;
	    out[7] = a13 * c - a03 * s;
	    return out;
	};
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.scale(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = v[1];
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = v[2];
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a given angle around a given axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotate(dest, dest, rad, axis);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.fromRotation = function(out, rad, axis) {
	    var x = axis[0], y = axis[1], z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s, c, t;
	    
	    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
	    
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	    
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	    
	    // Perform rotation-specific matrix multiplication
	    out[0] = x * x * t + c;
	    out[1] = y * x * t + z * s;
	    out[2] = z * x * t - y * s;
	    out[3] = 0;
	    out[4] = x * y * t - z * s;
	    out[5] = y * y * t + c;
	    out[6] = z * y * t + x * s;
	    out[7] = 0;
	    out[8] = x * z * t + y * s;
	    out[9] = y * z * t - x * s;
	    out[10] = z * z * t + c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the X axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateX(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromXRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	    
	    // Perform axis-specific matrix multiplication
	    out[0]  = 1;
	    out[1]  = 0;
	    out[2]  = 0;
	    out[3]  = 0;
	    out[4] = 0;
	    out[5] = c;
	    out[6] = s;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = -s;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the Y axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateY(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromYRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	    
	    // Perform axis-specific matrix multiplication
	    out[0]  = c;
	    out[1]  = 0;
	    out[2]  = -s;
	    out[3]  = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = s;
	    out[9] = 0;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the Z axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateZ(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromZRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	    
	    // Perform axis-specific matrix multiplication
	    out[0]  = c;
	    out[1]  = s;
	    out[2]  = 0;
	    out[3]  = 0;
	    out[4] = -s;
	    out[5] = c;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a quaternion rotation and vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslation = function (out, q, v) {
	    // Quaternion math
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - (yy + zz);
	    out[1] = xy + wz;
	    out[2] = xz - wy;
	    out[3] = 0;
	    out[4] = xy - wz;
	    out[5] = 1 - (xx + zz);
	    out[6] = yz + wx;
	    out[7] = 0;
	    out[8] = xz + wy;
	    out[9] = yz - wx;
	    out[10] = 1 - (xx + yy);
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	    
	    return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScale = function (out, q, v, s) {
	    // Quaternion math
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2,
	        sx = s[0],
	        sy = s[1],
	        sz = s[2];
	
	    out[0] = (1 - (yy + zz)) * sx;
	    out[1] = (xy + wz) * sx;
	    out[2] = (xz - wy) * sx;
	    out[3] = 0;
	    out[4] = (xy - wz) * sy;
	    out[5] = (1 - (xx + zz)) * sy;
	    out[6] = (yz + wx) * sy;
	    out[7] = 0;
	    out[8] = (xz + wy) * sz;
	    out[9] = (yz - wx) * sz;
	    out[10] = (1 - (xx + yy)) * sz;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	    
	    return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     mat4.translate(dest, origin);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *     mat4.translate(dest, negativeOrigin);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @param {vec3} o The origin vector around which to scale and rotate
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
	  // Quaternion math
	  var x = q[0], y = q[1], z = q[2], w = q[3],
	      x2 = x + x,
	      y2 = y + y,
	      z2 = z + z,
	
	      xx = x * x2,
	      xy = x * y2,
	      xz = x * z2,
	      yy = y * y2,
	      yz = y * z2,
	      zz = z * z2,
	      wx = w * x2,
	      wy = w * y2,
	      wz = w * z2,
	      
	      sx = s[0],
	      sy = s[1],
	      sz = s[2],
	
	      ox = o[0],
	      oy = o[1],
	      oz = o[2];
	      
	  out[0] = (1 - (yy + zz)) * sx;
	  out[1] = (xy + wz) * sx;
	  out[2] = (xz - wy) * sx;
	  out[3] = 0;
	  out[4] = (xy - wz) * sy;
	  out[5] = (1 - (xx + zz)) * sy;
	  out[6] = (yz + wx) * sy;
	  out[7] = 0;
	  out[8] = (xz + wy) * sz;
	  out[9] = (yz - wx) * sz;
	  out[10] = (1 - (xx + yy)) * sz;
	  out[11] = 0;
	  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
	  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
	  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
	  out[15] = 1;
	        
	  return out;
	};
	
	mat4.fromQuat = function (out, q) {
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[1] = yx + wz;
	    out[2] = zx - wy;
	    out[3] = 0;
	
	    out[4] = yx - wz;
	    out[5] = 1 - xx - zz;
	    out[6] = zy + wx;
	    out[7] = 0;
	
	    out[8] = zx + wy;
	    out[9] = zy - wx;
	    out[10] = 1 - xx - yy;
	    out[11] = 0;
	
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Generates a frustum matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Number} left Left bound of the frustum
	 * @param {Number} right Right bound of the frustum
	 * @param {Number} bottom Bottom bound of the frustum
	 * @param {Number} top Top bound of the frustum
	 * @param {Number} near Near bound of the frustum
	 * @param {Number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.frustum = function (out, left, right, bottom, top, near, far) {
	    var rl = 1 / (right - left),
	        tb = 1 / (top - bottom),
	        nf = 1 / (near - far);
	    out[0] = (near * 2) * rl;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = (near * 2) * tb;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = (right + left) * rl;
	    out[9] = (top + bottom) * tb;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = (far * near * 2) * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fovy Vertical field of view in radians
	 * @param {number} aspect Aspect ratio. typically viewport width/height
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspective = function (out, fovy, aspect, near, far) {
	    var f = 1.0 / Math.tan(fovy / 2),
	        nf = 1 / (near - far);
	    out[0] = f / aspect;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = f;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = (2 * far * near) * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given field of view.
	 * This is primarily useful for generating projection matrices to be used
	 * with the still experiemental WebVR API.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspectiveFromFieldOfView = function (out, fov, near, far) {
	    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
	        downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
	        leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
	        rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
	        xScale = 2.0 / (leftTan + rightTan),
	        yScale = 2.0 / (upTan + downTan);
	
	    out[0] = xScale;
	    out[1] = 0.0;
	    out[2] = 0.0;
	    out[3] = 0.0;
	    out[4] = 0.0;
	    out[5] = yScale;
	    out[6] = 0.0;
	    out[7] = 0.0;
	    out[8] = -((leftTan - rightTan) * xScale * 0.5);
	    out[9] = ((upTan - downTan) * yScale * 0.5);
	    out[10] = far / (near - far);
	    out[11] = -1.0;
	    out[12] = 0.0;
	    out[13] = 0.0;
	    out[14] = (far * near) / (near - far);
	    out[15] = 0.0;
	    return out;
	}
	
	/**
	 * Generates a orthogonal projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} left Left bound of the frustum
	 * @param {number} right Right bound of the frustum
	 * @param {number} bottom Bottom bound of the frustum
	 * @param {number} top Top bound of the frustum
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.ortho = function (out, left, right, bottom, top, near, far) {
	    var lr = 1 / (left - right),
	        bt = 1 / (bottom - top),
	        nf = 1 / (near - far);
	    out[0] = -2 * lr;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = -2 * bt;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 2 * nf;
	    out[11] = 0;
	    out[12] = (left + right) * lr;
	    out[13] = (top + bottom) * bt;
	    out[14] = (far + near) * nf;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	mat4.lookAt = function (out, eye, center, up) {
	    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
	        eyex = eye[0],
	        eyey = eye[1],
	        eyez = eye[2],
	        upx = up[0],
	        upy = up[1],
	        upz = up[2],
	        centerx = center[0],
	        centery = center[1],
	        centerz = center[2];
	
	    if (Math.abs(eyex - centerx) < glMatrix.EPSILON &&
	        Math.abs(eyey - centery) < glMatrix.EPSILON &&
	        Math.abs(eyez - centerz) < glMatrix.EPSILON) {
	        return mat4.identity(out);
	    }
	
	    z0 = eyex - centerx;
	    z1 = eyey - centery;
	    z2 = eyez - centerz;
	
	    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;
	
	    x0 = upy * z2 - upz * z1;
	    x1 = upz * z0 - upx * z2;
	    x2 = upx * z1 - upy * z0;
	    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	    if (!len) {
	        x0 = 0;
	        x1 = 0;
	        x2 = 0;
	    } else {
	        len = 1 / len;
	        x0 *= len;
	        x1 *= len;
	        x2 *= len;
	    }
	
	    y0 = z1 * x2 - z2 * x1;
	    y1 = z2 * x0 - z0 * x2;
	    y2 = z0 * x1 - z1 * x0;
	
	    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	    if (!len) {
	        y0 = 0;
	        y1 = 0;
	        y2 = 0;
	    } else {
	        len = 1 / len;
	        y0 *= len;
	        y1 *= len;
	        y2 *= len;
	    }
	
	    out[0] = x0;
	    out[1] = y0;
	    out[2] = z0;
	    out[3] = 0;
	    out[4] = x1;
	    out[5] = y1;
	    out[6] = z1;
	    out[7] = 0;
	    out[8] = x2;
	    out[9] = y2;
	    out[10] = z2;
	    out[11] = 0;
	    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat4
	 *
	 * @param {mat4} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat4.str = function (a) {
	    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
	                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
	                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
	                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat4
	 *
	 * @param {mat4} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat4.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
	};
	
	
	module.exports = mat4;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(4);
	var mat3 = __webpack_require__(7);
	var vec3 = __webpack_require__(10);
	var vec4 = __webpack_require__(11);
	
	/**
	 * @class Quaternion
	 * @name quat
	 */
	var quat = {};
	
	/**
	 * Creates a new identity quat
	 *
	 * @returns {quat} a new quaternion
	 */
	quat.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Sets a quaternion to represent the shortest rotation from one
	 * vector to another.
	 *
	 * Both vectors are assumed to be unit length.
	 *
	 * @param {quat} out the receiving quaternion.
	 * @param {vec3} a the initial vector
	 * @param {vec3} b the destination vector
	 * @returns {quat} out
	 */
	quat.rotationTo = (function() {
	    var tmpvec3 = vec3.create();
	    var xUnitVec3 = vec3.fromValues(1,0,0);
	    var yUnitVec3 = vec3.fromValues(0,1,0);
	
	    return function(out, a, b) {
	        var dot = vec3.dot(a, b);
	        if (dot < -0.999999) {
	            vec3.cross(tmpvec3, xUnitVec3, a);
	            if (vec3.length(tmpvec3) < 0.000001)
	                vec3.cross(tmpvec3, yUnitVec3, a);
	            vec3.normalize(tmpvec3, tmpvec3);
	            quat.setAxisAngle(out, tmpvec3, Math.PI);
	            return out;
	        } else if (dot > 0.999999) {
	            out[0] = 0;
	            out[1] = 0;
	            out[2] = 0;
	            out[3] = 1;
	            return out;
	        } else {
	            vec3.cross(tmpvec3, a, b);
	            out[0] = tmpvec3[0];
	            out[1] = tmpvec3[1];
	            out[2] = tmpvec3[2];
	            out[3] = 1 + dot;
	            return quat.normalize(out, out);
	        }
	    };
	})();
	
	/**
	 * Sets the specified quaternion with values corresponding to the given
	 * axes. Each axis is a vec3 and is expected to be unit length and
	 * perpendicular to all other specified axes.
	 *
	 * @param {vec3} view  the vector representing the viewing direction
	 * @param {vec3} right the vector representing the local "right" direction
	 * @param {vec3} up    the vector representing the local "up" direction
	 * @returns {quat} out
	 */
	quat.setAxes = (function() {
	    var matr = mat3.create();
	
	    return function(out, view, right, up) {
	        matr[0] = right[0];
	        matr[3] = right[1];
	        matr[6] = right[2];
	
	        matr[1] = up[0];
	        matr[4] = up[1];
	        matr[7] = up[2];
	
	        matr[2] = -view[0];
	        matr[5] = -view[1];
	        matr[8] = -view[2];
	
	        return quat.normalize(out, quat.fromMat3(out, matr));
	    };
	})();
	
	/**
	 * Creates a new quat initialized with values from an existing quaternion
	 *
	 * @param {quat} a quaternion to clone
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.clone = vec4.clone;
	
	/**
	 * Creates a new quat initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.fromValues = vec4.fromValues;
	
	/**
	 * Copy the values from one quat to another
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the source quaternion
	 * @returns {quat} out
	 * @function
	 */
	quat.copy = vec4.copy;
	
	/**
	 * Set the components of a quat to the given values
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} out
	 * @function
	 */
	quat.set = vec4.set;
	
	/**
	 * Set a quat to the identity quaternion
	 *
	 * @param {quat} out the receiving quaternion
	 * @returns {quat} out
	 */
	quat.identity = function(out) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Sets a quat from the given angle and rotation axis,
	 * then returns it.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {vec3} axis the axis around which to rotate
	 * @param {Number} rad the angle in radians
	 * @returns {quat} out
	 **/
	quat.setAxisAngle = function(out, axis, rad) {
	    rad = rad * 0.5;
	    var s = Math.sin(rad);
	    out[0] = s * axis[0];
	    out[1] = s * axis[1];
	    out[2] = s * axis[2];
	    out[3] = Math.cos(rad);
	    return out;
	};
	
	/**
	 * Adds two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 * @function
	 */
	quat.add = vec4.add;
	
	/**
	 * Multiplies two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 */
	quat.multiply = function(out, a, b) {
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = b[0], by = b[1], bz = b[2], bw = b[3];
	
	    out[0] = ax * bw + aw * bx + ay * bz - az * by;
	    out[1] = ay * bw + aw * by + az * bx - ax * bz;
	    out[2] = az * bw + aw * bz + ax * by - ay * bx;
	    out[3] = aw * bw - ax * bx - ay * by - az * bz;
	    return out;
	};
	
	/**
	 * Alias for {@link quat.multiply}
	 * @function
	 */
	quat.mul = quat.multiply;
	
	/**
	 * Scales a quat by a scalar number
	 *
	 * @param {quat} out the receiving vector
	 * @param {quat} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {quat} out
	 * @function
	 */
	quat.scale = vec4.scale;
	
	/**
	 * Rotates a quaternion by the given angle about the X axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateX = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw + aw * bx;
	    out[1] = ay * bw + az * bx;
	    out[2] = az * bw - ay * bx;
	    out[3] = aw * bw - ax * bx;
	    return out;
	};
	
	/**
	 * Rotates a quaternion by the given angle about the Y axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateY = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        by = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw - az * by;
	    out[1] = ay * bw + aw * by;
	    out[2] = az * bw + ax * by;
	    out[3] = aw * bw - ay * by;
	    return out;
	};
	
	/**
	 * Rotates a quaternion by the given angle about the Z axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateZ = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bz = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw + ay * bz;
	    out[1] = ay * bw - ax * bz;
	    out[2] = az * bw + aw * bz;
	    out[3] = aw * bw - az * bz;
	    return out;
	};
	
	/**
	 * Calculates the W component of a quat from the X, Y, and Z components.
	 * Assumes that quaternion is 1 unit in length.
	 * Any existing W component will be ignored.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate W component of
	 * @returns {quat} out
	 */
	quat.calculateW = function (out, a) {
	    var x = a[0], y = a[1], z = a[2];
	
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
	    return out;
	};
	
	/**
	 * Calculates the dot product of two quat's
	 *
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {Number} dot product of a and b
	 * @function
	 */
	quat.dot = vec4.dot;
	
	/**
	 * Performs a linear interpolation between two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 * @function
	 */
	quat.lerp = vec4.lerp;
	
	/**
	 * Performs a spherical linear interpolation between two quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 */
	quat.slerp = function (out, a, b, t) {
	    // benchmarks:
	    //    http://jsperf.com/quaternion-slerp-implementations
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = b[0], by = b[1], bz = b[2], bw = b[3];
	
	    var        omega, cosom, sinom, scale0, scale1;
	
	    // calc cosine
	    cosom = ax * bx + ay * by + az * bz + aw * bw;
	    // adjust signs (if necessary)
	    if ( cosom < 0.0 ) {
	        cosom = -cosom;
	        bx = - bx;
	        by = - by;
	        bz = - bz;
	        bw = - bw;
	    }
	    // calculate coefficients
	    if ( (1.0 - cosom) > 0.000001 ) {
	        // standard case (slerp)
	        omega  = Math.acos(cosom);
	        sinom  = Math.sin(omega);
	        scale0 = Math.sin((1.0 - t) * omega) / sinom;
	        scale1 = Math.sin(t * omega) / sinom;
	    } else {        
	        // "from" and "to" quaternions are very close 
	        //  ... so we can do a linear interpolation
	        scale0 = 1.0 - t;
	        scale1 = t;
	    }
	    // calculate final values
	    out[0] = scale0 * ax + scale1 * bx;
	    out[1] = scale0 * ay + scale1 * by;
	    out[2] = scale0 * az + scale1 * bz;
	    out[3] = scale0 * aw + scale1 * bw;
	    
	    return out;
	};
	
	/**
	 * Performs a spherical linear interpolation with two control points
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {quat} c the third operand
	 * @param {quat} d the fourth operand
	 * @param {Number} t interpolation amount
	 * @returns {quat} out
	 */
	quat.sqlerp = (function () {
	  var temp1 = quat.create();
	  var temp2 = quat.create();
	  
	  return function (out, a, b, c, d, t) {
	    quat.slerp(temp1, a, d, t);
	    quat.slerp(temp2, b, c, t);
	    quat.slerp(out, temp1, temp2, 2 * t * (1 - t));
	    
	    return out;
	  };
	}());
	
	/**
	 * Calculates the inverse of a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate inverse of
	 * @returns {quat} out
	 */
	quat.invert = function(out, a) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
	        invDot = dot ? 1.0/dot : 0;
	    
	    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
	
	    out[0] = -a0*invDot;
	    out[1] = -a1*invDot;
	    out[2] = -a2*invDot;
	    out[3] = a3*invDot;
	    return out;
	};
	
	/**
	 * Calculates the conjugate of a quat
	 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate conjugate of
	 * @returns {quat} out
	 */
	quat.conjugate = function (out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Calculates the length of a quat
	 *
	 * @param {quat} a vector to calculate length of
	 * @returns {Number} length of a
	 * @function
	 */
	quat.length = vec4.length;
	
	/**
	 * Alias for {@link quat.length}
	 * @function
	 */
	quat.len = quat.length;
	
	/**
	 * Calculates the squared length of a quat
	 *
	 * @param {quat} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 * @function
	 */
	quat.squaredLength = vec4.squaredLength;
	
	/**
	 * Alias for {@link quat.squaredLength}
	 * @function
	 */
	quat.sqrLen = quat.squaredLength;
	
	/**
	 * Normalize a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quaternion to normalize
	 * @returns {quat} out
	 * @function
	 */
	quat.normalize = vec4.normalize;
	
	/**
	 * Creates a quaternion from the given 3x3 rotation matrix.
	 *
	 * NOTE: The resultant quaternion is not normalized, so you should be sure
	 * to renormalize the quaternion yourself where necessary.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {mat3} m rotation matrix
	 * @returns {quat} out
	 * @function
	 */
	quat.fromMat3 = function(out, m) {
	    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
	    // article "Quaternion Calculus and Fast Animation".
	    var fTrace = m[0] + m[4] + m[8];
	    var fRoot;
	
	    if ( fTrace > 0.0 ) {
	        // |w| > 1/2, may as well choose w > 1/2
	        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
	        out[3] = 0.5 * fRoot;
	        fRoot = 0.5/fRoot;  // 1/(4w)
	        out[0] = (m[5]-m[7])*fRoot;
	        out[1] = (m[6]-m[2])*fRoot;
	        out[2] = (m[1]-m[3])*fRoot;
	    } else {
	        // |w| <= 1/2
	        var i = 0;
	        if ( m[4] > m[0] )
	          i = 1;
	        if ( m[8] > m[i*3+i] )
	          i = 2;
	        var j = (i+1)%3;
	        var k = (i+2)%3;
	        
	        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
	        out[i] = 0.5 * fRoot;
	        fRoot = 0.5 / fRoot;
	        out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
	        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
	        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
	    }
	    
	    return out;
	};
	
	/**
	 * Returns a string representation of a quatenion
	 *
	 * @param {quat} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	quat.str = function (a) {
	    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	module.exports = quat;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(4);
	
	/**
	 * @class 3 Dimensional Vector
	 * @name vec3
	 */
	var vec3 = {};
	
	/**
	 * Creates a new, empty vec3
	 *
	 * @returns {vec3} a new 3D vector
	 */
	vec3.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec3 initialized with values from an existing vector
	 *
	 * @param {vec3} a vector to clone
	 * @returns {vec3} a new 3D vector
	 */
	vec3.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};
	
	/**
	 * Creates a new vec3 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} a new 3D vector
	 */
	vec3.fromValues = function(x, y, z) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Copy the values from one vec3 to another
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the source vector
	 * @returns {vec3} out
	 */
	vec3.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};
	
	/**
	 * Set the components of a vec3 to the given values
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} out
	 */
	vec3.set = function(out, x, y, z) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Adds two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.subtract}
	 * @function
	 */
	vec3.sub = vec3.subtract;
	
	/**
	 * Multiplies two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.multiply}
	 * @function
	 */
	vec3.mul = vec3.multiply;
	
	/**
	 * Divides two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.divide}
	 * @function
	 */
	vec3.div = vec3.divide;
	
	/**
	 * Returns the minimum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    return out;
	};
	
	/**
	 * Scales a vec3 by a scalar number
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec3} out
	 */
	vec3.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    return out;
	};
	
	/**
	 * Adds two vec3's after scaling the second operand by a scalar value
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec3} out
	 */
	vec3.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec3.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return Math.sqrt(x*x + y*y + z*z);
	};
	
	/**
	 * Alias for {@link vec3.distance}
	 * @function
	 */
	vec3.dist = vec3.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec3.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return x*x + y*y + z*z;
	};
	
	/**
	 * Alias for {@link vec3.squaredDistance}
	 * @function
	 */
	vec3.sqrDist = vec3.squaredDistance;
	
	/**
	 * Calculates the length of a vec3
	 *
	 * @param {vec3} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec3.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return Math.sqrt(x*x + y*y + z*z);
	};
	
	/**
	 * Alias for {@link vec3.length}
	 * @function
	 */
	vec3.len = vec3.length;
	
	/**
	 * Calculates the squared length of a vec3
	 *
	 * @param {vec3} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec3.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return x*x + y*y + z*z;
	};
	
	/**
	 * Alias for {@link vec3.squaredLength}
	 * @function
	 */
	vec3.sqrLen = vec3.squaredLength;
	
	/**
	 * Negates the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to negate
	 * @returns {vec3} out
	 */
	vec3.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to invert
	 * @returns {vec3} out
	 */
	vec3.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  return out;
	};
	
	/**
	 * Normalize a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to normalize
	 * @returns {vec3} out
	 */
	vec3.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    var len = x*x + y*y + z*z;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	        out[2] = a[2] * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec3.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	};
	
	/**
	 * Computes the cross product of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.cross = function(out, a, b) {
	    var ax = a[0], ay = a[1], az = a[2],
	        bx = b[0], by = b[1], bz = b[2];
	
	    out[0] = ay * bz - az * by;
	    out[1] = az * bx - ax * bz;
	    out[2] = ax * by - ay * bx;
	    return out;
	};
	
	/**
	 * Performs a linear interpolation between two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    return out;
	};
	
	/**
	 * Performs a hermite interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.hermite = function (out, a, b, c, d, t) {
	  var factorTimes2 = t * t,
	      factor1 = factorTimes2 * (2 * t - 3) + 1,
	      factor2 = factorTimes2 * (t - 2) + t,
	      factor3 = factorTimes2 * (t - 1),
	      factor4 = factorTimes2 * (3 - 2 * t);
	  
	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	  
	  return out;
	};
	
	/**
	 * Performs a bezier interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.bezier = function (out, a, b, c, d, t) {
	  var inverseFactor = 1 - t,
	      inverseFactorTimesTwo = inverseFactor * inverseFactor,
	      factorTimes2 = t * t,
	      factor1 = inverseFactorTimesTwo * inverseFactor,
	      factor2 = 3 * t * inverseFactorTimesTwo,
	      factor3 = 3 * factorTimes2 * inverseFactor,
	      factor4 = factorTimes2 * t;
	  
	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	  
	  return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec3} out
	 */
	vec3.random = function (out, scale) {
	    scale = scale || 1.0;
	
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    var z = (glMatrix.RANDOM() * 2.0) - 1.0;
	    var zScale = Math.sqrt(1.0-z*z) * scale;
	
	    out[0] = Math.cos(r) * zScale;
	    out[1] = Math.sin(r) * zScale;
	    out[2] = z * scale;
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a mat4.
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat4 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2],
	        w = m[3] * x + m[7] * y + m[11] * z + m[15];
	    w = w || 1.0;
	    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a mat3.
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m the 3x3 matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat3 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2];
	    out[0] = x * m[0] + y * m[3] + z * m[6];
	    out[1] = x * m[1] + y * m[4] + z * m[7];
	    out[2] = x * m[2] + y * m[5] + z * m[8];
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a quat
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec3} out
	 */
	vec3.transformQuat = function(out, a, q) {
	    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
	
	    var x = a[0], y = a[1], z = a[2],
	        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
	
	        // calculate quat * vec
	        ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;
	
	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    return out;
	};
	
	/**
	 * Rotate a 3D vector around the x-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateX = function(out, a, b, c){
	   var p = [], r=[];
		  //Translate point to the origin
		  p[0] = a[0] - b[0];
		  p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	
		  //perform rotation
		  r[0] = p[0];
		  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
		  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);
	
		  //translate to correct position
		  out[0] = r[0] + b[0];
		  out[1] = r[1] + b[1];
		  out[2] = r[2] + b[2];
	
	  	return out;
	};
	
	/**
	 * Rotate a 3D vector around the y-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateY = function(out, a, b, c){
	  	var p = [], r=[];
	  	//Translate point to the origin
	  	p[0] = a[0] - b[0];
	  	p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	  
	  	//perform rotation
	  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
	  	r[1] = p[1];
	  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
	  
	  	//translate to correct position
	  	out[0] = r[0] + b[0];
	  	out[1] = r[1] + b[1];
	  	out[2] = r[2] + b[2];
	  
	  	return out;
	};
	
	/**
	 * Rotate a 3D vector around the z-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateZ = function(out, a, b, c){
	  	var p = [], r=[];
	  	//Translate point to the origin
	  	p[0] = a[0] - b[0];
	  	p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	  
	  	//perform rotation
	  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
	  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
	  	r[2] = p[2];
	  
	  	//translate to correct position
	  	out[0] = r[0] + b[0];
	  	out[1] = r[1] + b[1];
	  	out[2] = r[2] + b[2];
	  
	  	return out;
	};
	
	/**
	 * Perform some operation over an array of vec3s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec3.forEach = (function() {
	    var vec = vec3.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 3;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Get the angle between two 3D vectors
	 * @param {vec3} a The first operand
	 * @param {vec3} b The second operand
	 * @returns {Number} The angle in radians
	 */
	vec3.angle = function(a, b) {
	   
	    var tempA = vec3.fromValues(a[0], a[1], a[2]);
	    var tempB = vec3.fromValues(b[0], b[1], b[2]);
	 
	    vec3.normalize(tempA, tempA);
	    vec3.normalize(tempB, tempB);
	 
	    var cosine = vec3.dot(tempA, tempB);
	
	    if(cosine > 1.0){
	        return 0;
	    } else {
	        return Math.acos(cosine);
	    }     
	};
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec3} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec3.str = function (a) {
	    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
	};
	
	module.exports = vec3;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(4);
	
	/**
	 * @class 4 Dimensional Vector
	 * @name vec4
	 */
	var vec4 = {};
	
	/**
	 * Creates a new, empty vec4
	 *
	 * @returns {vec4} a new 4D vector
	 */
	vec4.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec4 initialized with values from an existing vector
	 *
	 * @param {vec4} a vector to clone
	 * @returns {vec4} a new 4D vector
	 */
	vec4.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Creates a new vec4 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} a new 4D vector
	 */
	vec4.fromValues = function(x, y, z, w) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};
	
	/**
	 * Copy the values from one vec4 to another
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the source vector
	 * @returns {vec4} out
	 */
	vec4.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Set the components of a vec4 to the given values
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} out
	 */
	vec4.set = function(out, x, y, z, w) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};
	
	/**
	 * Adds two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.subtract}
	 * @function
	 */
	vec4.sub = vec4.subtract;
	
	/**
	 * Multiplies two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    out[3] = a[3] * b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.multiply}
	 * @function
	 */
	vec4.mul = vec4.multiply;
	
	/**
	 * Divides two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    out[3] = a[3] / b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.divide}
	 * @function
	 */
	vec4.div = vec4.divide;
	
	/**
	 * Returns the minimum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    out[3] = Math.min(a[3], b[3]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    out[3] = Math.max(a[3], b[3]);
	    return out;
	};
	
	/**
	 * Scales a vec4 by a scalar number
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec4} out
	 */
	vec4.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    return out;
	};
	
	/**
	 * Adds two vec4's after scaling the second operand by a scalar value
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec4} out
	 */
	vec4.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec4.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return Math.sqrt(x*x + y*y + z*z + w*w);
	};
	
	/**
	 * Alias for {@link vec4.distance}
	 * @function
	 */
	vec4.dist = vec4.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec4.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return x*x + y*y + z*z + w*w;
	};
	
	/**
	 * Alias for {@link vec4.squaredDistance}
	 * @function
	 */
	vec4.sqrDist = vec4.squaredDistance;
	
	/**
	 * Calculates the length of a vec4
	 *
	 * @param {vec4} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec4.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return Math.sqrt(x*x + y*y + z*z + w*w);
	};
	
	/**
	 * Alias for {@link vec4.length}
	 * @function
	 */
	vec4.len = vec4.length;
	
	/**
	 * Calculates the squared length of a vec4
	 *
	 * @param {vec4} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec4.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return x*x + y*y + z*z + w*w;
	};
	
	/**
	 * Alias for {@link vec4.squaredLength}
	 * @function
	 */
	vec4.sqrLen = vec4.squaredLength;
	
	/**
	 * Negates the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to negate
	 * @returns {vec4} out
	 */
	vec4.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = -a[3];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to invert
	 * @returns {vec4} out
	 */
	vec4.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  out[3] = 1.0 / a[3];
	  return out;
	};
	
	/**
	 * Normalize a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to normalize
	 * @returns {vec4} out
	 */
	vec4.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    var len = x*x + y*y + z*z + w*w;
	    if (len > 0) {
	        len = 1 / Math.sqrt(len);
	        out[0] = x * len;
	        out[1] = y * len;
	        out[2] = z * len;
	        out[3] = w * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec4.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	};
	
	/**
	 * Performs a linear interpolation between two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec4} out
	 */
	vec4.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    out[3] = aw + t * (b[3] - aw);
	    return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec4} out
	 */
	vec4.random = function (out, scale) {
	    scale = scale || 1.0;
	
	    //TODO: This is a pretty awful way of doing this. Find something better.
	    out[0] = glMatrix.RANDOM();
	    out[1] = glMatrix.RANDOM();
	    out[2] = glMatrix.RANDOM();
	    out[3] = glMatrix.RANDOM();
	    vec4.normalize(out, out);
	    vec4.scale(out, out, scale);
	    return out;
	};
	
	/**
	 * Transforms the vec4 with a mat4.
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec4} out
	 */
	vec4.transformMat4 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2], w = a[3];
	    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
	    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
	    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
	    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
	    return out;
	};
	
	/**
	 * Transforms the vec4 with a quat
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec4} out
	 */
	vec4.transformQuat = function(out, a, q) {
	    var x = a[0], y = a[1], z = a[2],
	        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
	
	        // calculate quat * vec
	        ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;
	
	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Perform some operation over an array of vec4s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec4.forEach = (function() {
	    var vec = vec4.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 4;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec4} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec4.str = function (a) {
	    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	module.exports = vec4;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(4);
	
	/**
	 * @class 2 Dimensional Vector
	 * @name vec2
	 */
	var vec2 = {};
	
	/**
	 * Creates a new, empty vec2
	 *
	 * @returns {vec2} a new 2D vector
	 */
	vec2.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = 0;
	    out[1] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with values from an existing vector
	 *
	 * @param {vec2} a vector to clone
	 * @returns {vec2} a new 2D vector
	 */
	vec2.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} a new 2D vector
	 */
	vec2.fromValues = function(x, y) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Copy the values from one vec2 to another
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the source vector
	 * @returns {vec2} out
	 */
	vec2.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Set the components of a vec2 to the given values
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} out
	 */
	vec2.set = function(out, x, y) {
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Adds two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.subtract}
	 * @function
	 */
	vec2.sub = vec2.subtract;
	
	/**
	 * Multiplies two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.multiply}
	 * @function
	 */
	vec2.mul = vec2.multiply;
	
	/**
	 * Divides two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.divide}
	 * @function
	 */
	vec2.div = vec2.divide;
	
	/**
	 * Returns the minimum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Scales a vec2 by a scalar number
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec2} out
	 */
	vec2.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    return out;
	};
	
	/**
	 * Adds two vec2's after scaling the second operand by a scalar value
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec2} out
	 */
	vec2.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec2.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.distance}
	 * @function
	 */
	vec2.dist = vec2.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec2.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredDistance}
	 * @function
	 */
	vec2.sqrDist = vec2.squaredDistance;
	
	/**
	 * Calculates the length of a vec2
	 *
	 * @param {vec2} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec2.length = function (a) {
	    var x = a[0],
	        y = a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.length}
	 * @function
	 */
	vec2.len = vec2.length;
	
	/**
	 * Calculates the squared length of a vec2
	 *
	 * @param {vec2} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec2.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredLength}
	 * @function
	 */
	vec2.sqrLen = vec2.squaredLength;
	
	/**
	 * Negates the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to negate
	 * @returns {vec2} out
	 */
	vec2.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to invert
	 * @returns {vec2} out
	 */
	vec2.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  return out;
	};
	
	/**
	 * Normalize a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to normalize
	 * @returns {vec2} out
	 */
	vec2.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1];
	    var len = x*x + y*y;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec2.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	};
	
	/**
	 * Computes the cross product of two vec2's
	 * Note that the cross product must by definition produce a 3D vector
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec3} out
	 */
	vec2.cross = function(out, a, b) {
	    var z = a[0] * b[1] - a[1] * b[0];
	    out[0] = out[1] = 0;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Performs a linear interpolation between two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec2} out
	 */
	vec2.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec2} out
	 */
	vec2.random = function (out, scale) {
	    scale = scale || 1.0;
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    out[0] = Math.cos(r) * scale;
	    out[1] = Math.sin(r) * scale;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y;
	    out[1] = m[1] * x + m[3] * y;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2d
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2d} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2d = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y + m[4];
	    out[1] = m[1] * x + m[3] * y + m[5];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat3
	 * 3rd vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat3} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat3 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[3] * y + m[6];
	    out[1] = m[1] * x + m[4] * y + m[7];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat4
	 * 3rd vector component is implicitly '0'
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat4 = function(out, a, m) {
	    var x = a[0], 
	        y = a[1];
	    out[0] = m[0] * x + m[4] * y + m[12];
	    out[1] = m[1] * x + m[5] * y + m[13];
	    return out;
	};
	
	/**
	 * Perform some operation over an array of vec2s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec2.forEach = (function() {
	    var vec = vec2.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 2;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec2} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec2.str = function (a) {
	    return 'vec2(' + a[0] + ', ' + a[1] + ')';
	};
	
	module.exports = vec2;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A color
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Color = exports.Color = function () {
	  /**
	   * Constructor
	   *
	   * @param {number} r Red color in the range [0-255]
	   * @param {number} g Green color in the range [0-255]
	   * @param {number} b Blue color in the range [0-255]
	   * @param {number=} a Opacity in the range [0-255]
	   */
	
	  function Color(r, g, b) {
	    var a = arguments.length <= 3 || arguments[3] === undefined ? 1.0 : arguments[3];
	
	    _classCallCheck(this, Color);
	
	    /**
	     * Red color in the range [0-1]
	     *
	     * @type {number}
	     * @public
	     */
	    this.r = r / 255.0;
	
	    /**
	     * Green color in the range [0-1]
	     *
	     * @type {number}
	     * @public
	     */
	    this.g = g / 255.0;
	
	    /**
	     * Red color in the range [0-1]
	     *
	     * @type {number}
	     * @public
	     */
	    this.b = b / 255.0;
	
	    /**
	     * Opacity in the range [0-1]
	     *
	     * @type {number}
	     * @public
	     */
	    this.a = a ? a / 255.0 : 1.0;
	  }
	
	  /**
	   * Set color
	   *
	   * @param {number} r Red color in the range [0-255]
	   * @param {number} g Green color in the range [0-255]
	   * @param {number} b Blue color in the range [0-255]
	   * @param {number=} a Opacity in the range [0-255]
	   */
	
	  _createClass(Color, [{
	    key: "set",
	    value: function set(r, g, b) {
	      var a = arguments.length <= 3 || arguments[3] === undefined ? 1.0 : arguments[3];
	
	      this.r = r / 255.0;
	      this.g = g / 255.0;
	      this.b = b / 255.0;
	      this.a = a ? a / 255.0 : 1.0;
	    }
	
	    /**
	     * Check if the given Color instance is equal to this one
	     *
	     * @param {Color} color A Color instance
	     * @return {boolean} True if the two colors are equals, otherwise false
	     */
	
	  }, {
	    key: "isEqual",
	    value: function isEqual(color) {
	      return this.r == color.r && this.g == color.g && this.b == color.b && this.a == color.a;
	    }
	  }]);
	
	  return Color;
	}();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DirectionalLight = undefined;
	
	var _Light2 = __webpack_require__(15);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A directional light
	 *
	 * @extends {Light}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var DirectionalLight = exports.DirectionalLight = function (_Light) {
	  _inherits(DirectionalLight, _Light);
	
	  /**
	   * Constructor
	   */
	
	  function DirectionalLight() {
	    _classCallCheck(this, DirectionalLight);
	
	    /**
	     * Light's direction
	     *
	     * @type {Array.<number>}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DirectionalLight).call(this));
	
	    _this.direction = [];
	    return _this;
	  }
	
	  /**
	   * Set direction
	   *
	   * @param {number} x Direction on X
	   * @param {number} y Direction on Y
	   * @param {number} z Direction on Z
	   */
	
	  _createClass(DirectionalLight, [{
	    key: 'setDirection',
	    value: function setDirection(x, y, z) {
	      this.direction = [x, y, z];
	    }
	
	    /**
	     * Get direction
	     *
	     * @return {Array.<number>} A vector with values for each axis
	     */
	
	  }, {
	    key: 'getDirection',
	    value: function getDirection() {
	      return this.direction;
	    }
	  }]);
	
	  return DirectionalLight;
	}(_Light2.Light);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Light = undefined;
	
	var _Color = __webpack_require__(13);
	
	var _Node2 = __webpack_require__(16);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A light
	
	 * @extends {Node}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Light = exports.Light = function (_Node) {
	  _inherits(Light, _Node);
	
	  /**
	   * Constructor
	   */
	
	  function Light() {
	    _classCallCheck(this, Light);
	
	    /**
	     * Ambient color
	     *
	     * @type {Color}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Light).call(this));
	
	    _this.ambient = new _Color.Color(255, 255, 255);
	
	    /**
	     * Diffuse color
	     *
	     * @type {Color}
	     * @private
	     */
	    _this.diffuse = new _Color.Color(255, 255, 255);
	
	    /**
	     * Specular color
	     *
	     * @type {Color}
	     * @private
	     */
	    _this.specular = new _Color.Color(255, 255, 255);
	    return _this;
	  }
	
	  /**
	   * Visit the node and his children
	   *
	   * @param {RenderTarget} renderTarget Renderer who called this method
	   */
	
	  _createClass(Light, [{
	    key: 'visit',
	    value: function visit(renderTarget) {
	      renderTarget.getRenderAPI().bindLight(this);
	    }
	
	    /**
	     * Set ambient color
	     *
	     * @param {number} r Red value in the range 0 to 255
	     * @param {number} g Green value in the range 0 to 255
	     * @param {number} b Blue value in the range 0 to 255
	     */
	
	  }, {
	    key: 'setAmbientColor',
	    value: function setAmbientColor(r, g, b) {
	      this.ambient.set(r, g, b);
	    }
	
	    /**
	     * Set diffuse color
	     *
	     * @param {number} r Red value in the range 0 to 255
	     * @param {number} g Green value in the range 0 to 255
	     * @param {number} b Blue value in the range 0 to 255
	     */
	
	  }, {
	    key: 'setDiffuseColor',
	    value: function setDiffuseColor(r, g, b) {
	      this.diffuse.set(r, g, b);
	    }
	
	    /**
	     * Set specular color
	     *
	     * @param {number} r Red value in the range 0 to 255
	     * @param {number} g Green value in the range 0 to 255
	     * @param {number} b Blue value in the range 0 to 255
	     */
	
	  }, {
	    key: 'setSpecularColor',
	    value: function setSpecularColor(r, g, b) {
	      this.specular.set(r, g, b);
	    }
	
	    /**
	     * Get ambient color
	     *
	     * @return {Color} A color instance
	     */
	
	  }, {
	    key: 'getAmbientColor',
	    value: function getAmbientColor() {
	      return this.ambient;
	    }
	
	    /**
	     * Get diffuse color
	     *
	     * @return {Color} A color instance
	     */
	
	  }, {
	    key: 'getDiffuseColor',
	    value: function getDiffuseColor() {
	      return this.diffuse;
	    }
	
	    /**
	     * Get specular color
	     *
	     * @return {Color} A color instance
	     */
	
	  }, {
	    key: 'getSpecularColor',
	    value: function getSpecularColor() {
	      return this.specular;
	    }
	  }]);
	
	  return Light;
	}(_Node2.Node);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Node = undefined;
	
	var _Transformable2 = __webpack_require__(17);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A node element is an element of a scene
	 *
	 * @description A Node can represent something like a light, a mesh, a sprite, a camera or a text
	 * @extends {Transformable}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Node = exports.Node = function (_Transformable) {
	    _inherits(Node, _Transformable);
	
	    /**
	     * Constructor
	     *
	     * @param {string=} name A string
	     */
	
	    function Node() {
	        var name = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	        _classCallCheck(this, Node);
	
	        /**
	         * Node's children
	         *
	         * @type {Array.<Node>}
	         * @private
	         */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this));
	
	        _this.children = [];
	
	        /**
	         * Name, useful to retrieve the node
	         *
	         * @type {string}
	         * @private
	         */
	        _this.name = name;
	
	        /**
	         * Node's parent
	         *
	         * @type {?Node}
	         * @private
	         */
	        _this.parent = null;
	        return _this;
	    }
	
	    /**
	     * Add a child to the node
	     *
	     * @param {Node} node A Node instance
	     */
	
	    _createClass(Node, [{
	        key: 'addChild',
	        value: function addChild(node) {
	            if (node == this) return;
	
	            // Detach node from his previous parent
	            if (node.parent) node.parent.removeChild(node);
	
	            // Add as a child
	            this.children.push(node);
	            node.parent = this;
	        }
	
	        /**
	         * Find the child with the given name
	         *
	         * @param {string} name A string
	         * @return {?Node} A Node instance of null
	         */
	
	    }, {
	        key: 'findChild',
	        value: function findChild(name) {
	            for (var i = 0; i < this.children.length; i++) {
	                if (this.children[i].name == name) return this.children[i];else {
	                    var child = this.children[i].findChild(name);
	                    if (child) return child;
	                }
	            }
	
	            return null;
	        }
	
	        /**
	         * Remove a child from the node
	         *
	         * @param {Node} node A Node instance
	         * @return {boolean} True if the operation is a success
	         */
	
	    }, {
	        key: 'removeChild',
	        value: function removeChild(node) {
	            var index = this.children.indexOf(node);
	            if (index != -1) {
	                this.children.splice(index, 1);
	                node.parent = null;
	
	                return true;
	            }
	
	            return false;
	        }
	
	        /**
	         * Set the name to easily retrieve it later
	         *
	         * @param {string} name A string
	         */
	
	    }, {
	        key: 'setName',
	        value: function setName(name) {
	            this.name = name;
	        }
	
	        /**
	         * Update the node and his children
	         *
	         * @param {number} deltaTime A floating value representing time elapsed between two frames
	         * @param {boolean} parentUpdated Indicate if the parent element have been updated
	         * @return {boolean} True if the node have been updated
	         */
	
	    }, {
	        key: 'update',
	        value: function update(deltaTime, parentUpdated) {
	            var parentMatrix = this.parent ? this.parent.getTransformationMatrix() : null;
	            return this.computeTransformationMatrix(parentMatrix, parentUpdated);
	        }
	
	        /**
	         * Visit the node and his children
	         *
	         * @param {RenderTarget} renderTarget Renderer who called this method
	         */
	
	    }, {
	        key: 'visit',
	        value: function visit(renderTarget) {}
	    }, {
	        key: 'getChildren',
	
	        /**
	         * Return Node's children
	         *
	         * @return {Array.<Node>} An array of Node
	         */
	        value: function getChildren() {
	            return this.children;
	        }
	
	        /**
	         * Indicate if the current node is the scene's root
	         *
	         * @return {boolean} True if it's the root node, otherwise false
	         */
	
	    }, {
	        key: 'isRoot',
	        value: function isRoot() {
	            return this.parent === null;
	        }
	    }]);
	
	    return Node;
	}(_Transformable2.Transformable);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var glMatrix = __webpack_require__(3);
	
	/**
	 * Transformable: Manage matrix's transformations
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Transformable = exports.Transformable = function () {
	  /**
	   * Constructor
	   */
	
	  function Transformable() {
	    _classCallCheck(this, Transformable);
	
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
	
	  _createClass(Transformable, [{
	    key: 'lookAt',
	    value: function lookAt() {
	      var position = arguments.length <= 0 || arguments[0] === undefined ? [0, 0, 0] : arguments[0];
	      var up = arguments.length <= 1 || arguments[1] === undefined ? [0, 1, 0] : arguments[1];
	
	      // Useful variables
	      var xAxis = glMatrix.vec3.create();
	      var yAxis = glMatrix.vec3.create();
	      var zAxis = glMatrix.vec3.create();
	
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
	      var matrix = glMatrix.mat4.create();
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
	    }
	
	    /**
	     * Set origin
	     *
	     * @param {number} x Origin on X
	     * @param {number} y Origin on Y
	     * @param {number} z Origin on Z
	     */
	
	  }, {
	    key: 'setOrigin',
	    value: function setOrigin(x, y, z) {
	      glMatrix.vec3.set(this.origin, x, y, z);
	      this.needTransformUpdate = true;
	    }
	
	    /**
	     * Set position
	     *
	     * @param {number} x Position on X
	     * @param {number} y Position on Y
	     * @param {number} z Position on Z
	     */
	
	  }, {
	    key: 'setPosition',
	    value: function setPosition(x, y, z) {
	      glMatrix.vec3.set(this.position, x, y, z);
	      this.needTransformUpdate = true;
	    }
	
	    /**
	     * Set rotation using values in degrees
	     *
	     * @param {number} x Rotation on X in degrees
	     * @param {number} y Rotation on Y in degrees
	     * @param {number} z Rotation on Z in degrees
	     */
	
	  }, {
	    key: 'setRotation',
	    value: function setRotation(x, y, z) {
	      // Compute rotation matrix
	      glMatrix.mat4.identity(this.rotationMatrix);
	      glMatrix.mat4.rotateX(this.rotationMatrix, this.rotationMatrix, glMatrix.glMatrix.toRadian(x));
	      glMatrix.mat4.rotateY(this.rotationMatrix, this.rotationMatrix, glMatrix.glMatrix.toRadian(y));
	      glMatrix.mat4.rotateZ(this.rotationMatrix, this.rotationMatrix, glMatrix.glMatrix.toRadian(z));
	
	      // Compute quaterion
	      var m3 = glMatrix.mat3.create();
	      glMatrix.mat3.fromMat4(m3, this.rotationMatrix);
	      glMatrix.quat.fromMat3(this.rotation, m3);
	
	      this.needTransformUpdate = true;
	    }
	
	    /**
	     * Set rotation from a quaternion
	     *
	     * @param {glMatrix.quat} quaternion A quaternion
	     */
	
	  }, {
	    key: 'setRotationFromQuaternion',
	    value: function setRotationFromQuaternion(quaternion) {
	      glMatrix.mat4.fromQuat(this.rotationMatrix, quaternion);
	
	      this.rotation = quaternion;
	      this.needTransformUpdate = true;
	    }
	
	    /**
	     * Set rotation from a rotation matrix
	     *
	     * @param {glMatrix.mat4} matrix A Matrix
	     */
	
	  }, {
	    key: 'setRotationFromMatrix',
	    value: function setRotationFromMatrix(matrix) {
	      glMatrix.quat.fromMat3(this.rotation, matrix);
	
	      this.rotationMatrix = matrix;
	      this.needTransformUpdate = true;
	    }
	
	    /**
	     * Set scale
	     *
	     * @param {number} x Position on X
	     * @param {number} y Position on Y
	     * @param {number} z Position on Z
	     */
	
	  }, {
	    key: 'setScale',
	    value: function setScale(x, y, z) {
	      glMatrix.vec3.set(this.scale, x, y, z);
	      this.needTransformUpdate = true;
	    }
	
	    /**
	     * Update matrix
	     *
	     * @param {?glMatrix.mat4} parentMatrix Parent transformable's matrix
	     * @param {boolean} forceUpdate True to force an update
	     * @return {boolean} True if the matrix have been updated, otherwise false
	     */
	
	  }, {
	    key: 'computeTransformationMatrix',
	    value: function computeTransformationMatrix(parentMatrix, forceUpdate) {
	      // Avoid useless updates
	      if (!forceUpdate && !this.needTransformUpdate) return false;
	
	      // Compute matrix
	      glMatrix.mat4.identity(this.matrix);
	      glMatrix.mat4.translate(this.matrix, this.matrix, this.position);
	      glMatrix.mat4.multiply(this.matrix, this.matrix, this.rotationMatrix);
	      glMatrix.mat4.scale(this.matrix, this.matrix, this.scale);
	
	      // Apply parent's transformations
	      if (parentMatrix) glMatrix.mat4.multiply(this.matrix, parentMatrix, this.matrix);
	
	      // Compute inverse matrix
	      glMatrix.mat4.invert(this.normalMatrix, this.matrix);
	      glMatrix.mat4.transpose(this.normalMatrix, this.normalMatrix);
	
	      this.needTransformUpdate = false;
	
	      return true;
	    }
	
	    /**
	     * Return computed matrix
	     *
	     * @return {glMatrix.mat4} A reference to the object's matrix
	     */
	
	  }, {
	    key: 'getTransformationMatrix',
	    value: function getTransformationMatrix() {
	      return this.matrix;
	    }
	
	    /**
	     * Return computed normal matrix
	     *
	     * @return {glMatrix.mat4} A matrix
	     */
	
	  }, {
	    key: 'getNormalMatrix',
	    value: function getNormalMatrix() {
	      return this.normalMatrix;
	    }
	
	    /**
	     * Return the origin
	     *
	     * @return {glMatrix.vec3} A vector with the value for each axis
	     */
	
	  }, {
	    key: 'getOrigin',
	    value: function getOrigin() {
	      return this.origin;
	    }
	
	    /**
	     * Return relative position
	     *
	     * @return {glMatrix.vec3} A vector with the value for each axis
	     */
	
	  }, {
	    key: 'getPosition',
	    value: function getPosition() {
	      return this.position;
	    }
	
	    /**
	     * Return the rotation in degrees
	     *
	     * @return {Array.<number>} A vector with the value for each axis in degrees
	     * @todo Implement this function
	     */
	
	  }, {
	    key: 'getRotation',
	    value: function getRotation() {
	      throw '\'getRotation\' is not implemented for now …';
	    }
	
	    /**
	     * Return the scale
	     *
	     * @return {glMatrix.vec3} A vector with the value for each axis
	     */
	
	  }, {
	    key: 'getScale',
	    value: function getScale() {
	      return this.scale;
	    }
	  }]);
	
	  return Transformable;
	}();

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StencilOperation = exports.StencilFunction = exports.FaceCulling = exports.DrawingMode = exports.DepthFunction = exports.StateBlock = undefined;
	
	var _BlendMode = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A rendering state
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var StateBlock = exports.StateBlock = function () {
	  /**
	   * Constructor
	   */
	
	  function StateBlock() {
	    _classCallCheck(this, StateBlock);
	
	    /**
	     * Blend mode
	     *
	     * @type {BlendMode}
	     * @public
	     */
	    this.blendMode = new _BlendMode.BlendMode();
	
	    /**
	     * Depth function to use
	     *
	     * @type {DepthFunction}
	     * @default {DepthFunction.Less}
	     * @public
	     */
	    this.depthFunction = DepthFunction.Less;
	
	    /**
	     * Indicate if we want to write in the depth buffer
	     *
	     * @type {boolean}
	     * @default {true}
	     * @public
	     */
	    this.depthWrite = true;
	
	    /**
	     * Indicate if we want to test pixels with values in the depth buffer
	     *
	     * @type {boolean}
	     * @default {true}
	     * @public
	     */
	    this.depthTest = true;
	
	    /**
	     * Drawing mode
	     *
	     * @type {DrawingMode}
	     * @default {DrawingMode.Triangles}
	     * @public
	     */
	    this.drawingMode = DrawingMode.Triangles;
	
	    /**
	     * Face culling
	     *
	     * @type {FaceCulling}
	     * @default {FaceCulling.Back}
	     * @public
	     */
	    this.faceCulling = FaceCulling.Back;
	
	    /**
	     * Stencil function to use
	     *
	     * @type {StencilFunction}
	     * @default {StencilFunction.Less}
	     * @public
	     */
	    this.stencilFunction = StencilFunction.Less;
	
	    /**
	     * Stencil reference value
	     *
	     * @type {number}
	     * @default {0}
	     * @public
	     */
	    this.stencilReference = 0;
	
	    /**
	     * Stencil mask value
	     *
	     * @type {number}
	     * @default {255}
	     * @public
	     */
	    this.stencilMask = 255;
	
	    /**
	     * Indicate if stencil test is active
	     *
	     * @type {boolean}
	     * @default {false}
	     * @public
	     */
	    this.stencilTest = false;
	
	    /**
	     * Value to write in the stencil buffer when stencil is active
	     *
	     * @type {number}
	     * @default {0xFF}
	     * @public
	     */
	    this.stencilWrite = 0xFF;
	
	    /**
	     * Operation to execute when stencil test failed
	     *
	     * @type {StencilOperation}
	     * @default {StencilOperation.Keep}
	     * @public
	     */
	    this.stencilTestFail = StencilOperation.Keep;
	
	    /**
	     * Operation to execute when stencil test failed using depth buffer
	     *
	     * @type {StencilOperation}
	     * @default {StencilOperation.Keep}
	     * @public
	     */
	    this.stencilDepthTestFail = StencilOperation.Keep;
	
	    /**
	     * Operation to execute when stencil test is a success
	     *
	     * @type {StencilOperation}
	     * @default {StencilOperation.Keep}
	     * @public
	     */
	    this.stencilSuccess = StencilOperation.Keep;
	  }
	
	  /**
	   * Check if the given StateBlock instance is equal to this one
	   *
	   * @param {StateBlock} state A StateBlock instance
	   * @return {boolean} True if the two states are equals, otherwise false
	   */
	
	  _createClass(StateBlock, [{
	    key: 'isEqual',
	    value: function isEqual(state) {
	      return this.blendMode.isEqual(state.blendMode) && this.depthFunction == state.depthFunction && this.depthWrite == state.depthWrite && this.depthTest == state.depthTest && this.stencilFunction == state.stencilFunction && this.stencilReference == state.stencilReference && this.stencilMask == state.stencilMask && this.stencilTest == state.stencilTest && this.stencilWrite == state.stencilWrite && this.stencilTestFail == state.stencilTestFail && this.stencilDepthTestFail == state.stencilDepthTestFail && this.stencilSuccess == state.stencilSuccess;
	    }
	  }]);
	
	  return StateBlock;
	}();
	
	/**
	 * Depth function to use
	 */
	
	var DepthFunction = exports.DepthFunction = function DepthFunction() {
	  _classCallCheck(this, DepthFunction);
	};
	
	/**
	 * Never
	 *
	 * @type {number}
	 */
	
	DepthFunction.Never = 0;
	
	/**
	 * Less
	 *
	 * @type {number}
	 */
	DepthFunction.Less = 1;
	
	/**
	 * Equal
	 *
	 * @type {number}
	 */
	DepthFunction.Equal = 2;
	
	/**
	 * LessEqual
	 *
	 * @type {number}
	 */
	DepthFunction.LessEqual = 3;
	
	/**
	 * Greater
	 *
	 * @type {number}
	 */
	DepthFunction.Greater = 4;
	
	/**
	 * NotEqual
	 *
	 * @type {number}
	 */
	DepthFunction.NotEqual = 5;
	
	/**
	 * GreaterEqual
	 *
	 * @type {number}
	 */
	DepthFunction.GreaterEqual = 6;
	
	/**
	 * Always
	 *
	 * @type {number}
	 */
	DepthFunction.Always = 7;
	
	/**
	* Drawing modes
	*/
	
	var DrawingMode = exports.DrawingMode = function DrawingMode() {
	  _classCallCheck(this, DrawingMode);
	};
	
	/**
	 * Draw as points
	 *
	 * @type {number}
	 */
	
	DrawingMode.Points = 0;
	
	/**
	 * Draw as lines
	 *
	 * @type {number}
	 */
	DrawingMode.Lines = 1;
	
	/**
	 * Draw as lines strip
	 *
	 * @type {number}
	 */
	DrawingMode.LinesStrip = 2;
	
	/**
	 * Draw as lines loop
	 *
	 * @type {number}
	 */
	DrawingMode.LinesLoop = 3;
	
	/**
	 * Draw as triangles
	 *
	 * @type {number}
	 */
	DrawingMode.Triangles = 4;
	
	/**
	 * Draw as triangles strip
	 *
	 * @type {number}
	 */
	DrawingMode.TrianglesStrip = 5;
	
	/**
	 * Draw as triangles fan
	 *
	 * @type {number}
	 */
	DrawingMode.TrianglesFan = 6;
	
	/**
	 * Face culling
	 */
	
	var FaceCulling = exports.FaceCulling = function FaceCulling() {
	  _classCallCheck(this, FaceCulling);
	};
	
	/**
	 * Don't draw back face
	 *
	 * @type {number}
	 */
	
	FaceCulling.Back = 0;
	
	/**
	 * Don't draw front face
	 *
	 * @type {number}
	 */
	FaceCulling.Front = 1;
	
	/**
	 * Draw both faces, disable face culling
	 *
	 * @type {number}
	 */
	FaceCulling.None = 2;
	
	/**
	 * Stencil functions
	 */
	
	var StencilFunction = exports.StencilFunction = function StencilFunction() {
	  _classCallCheck(this, StencilFunction);
	};
	
	/**
	 * Never
	 *
	 * @type {number}
	 */
	
	StencilFunction.Never = 0;
	
	/**
	 * Less
	 *
	 * @type {number}
	 */
	StencilFunction.Less = 1;
	
	/**
	 * Equal
	 *
	 * @type {number}
	 */
	StencilFunction.Equal = 2;
	
	/**
	 * LessEqual
	 *
	 * @type {number}
	 */
	StencilFunction.LessEqual = 3;
	
	/**
	 * Greater
	 *
	 * @type {number}
	 */
	StencilFunction.Greater = 4;
	
	/**
	 * NotEqual
	 *
	 * @type {number}
	 */
	StencilFunction.NotEqual = 5;
	
	/**
	 * GreaterEqual
	 *
	 * @type {number}
	 */
	StencilFunction.GreaterEqual = 6;
	
	/**
	 * Always
	 *
	 * @type {number}
	 */
	StencilFunction.Always = 7;
	
	/**
	 * Stencil operations
	 */
	
	var StencilOperation = exports.StencilOperation = function StencilOperation() {
	  _classCallCheck(this, StencilOperation);
	};
	
	/**
	 * Keep
	 *
	 * @type {number}
	 */
	
	StencilOperation.Keep = 0;
	
	/**
	 * Zero
	 *
	 * @type {number}
	 */
	StencilOperation.Zero = 1;
	
	/**
	 * Replace
	 *
	 * @type {number}
	 */
	StencilOperation.Replace = 2;
	
	/**
	 * Increment
	 *
	 * @type {number}
	 */
	StencilOperation.Increment = 3;
	
	/**
	 * Decrement
	 *
	 * @type {number}
	 */
	StencilOperation.Decrement = 4;
	
	/**
	 * Invert
	 *
	 * @type {number}
	 */
	StencilOperation.Invert = 5;
	
	/**
	 * IncrementWrap
	 *
	 * @type {number}
	 */
	StencilOperation.IncrementWrap = 6;
	
	/**
	 * DecrementWrap
	 *
	 * @type {number}
	 */
	StencilOperation.DecrementWrap = 7;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A class to load file using Ajax
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var FileLoader = exports.FileLoader = function () {
	    function FileLoader() {
	        _classCallCheck(this, FileLoader);
	    }
	
	    _createClass(FileLoader, null, [{
	        key: 'load',
	
	        /**
	         * Load a file
	         *
	         * @param {string} filePath Path to the file to load
	         * @param {function(boolean, string, Object=)} callback Callback
	         * @param {Object=} userData User data
	         */
	        value: function load(filePath, callback, userData) {
	            var reader = new XMLHttpRequest();
	            reader.onreadystatechange = function () {
	                if (reader.readyState === 4 && (reader.status === 200 || reader.status === 0)) callback(true, reader.responseText, userData);
	            };
	            reader.open('GET', filePath, true);
	            reader.send();
	        }
	    }]);
	
	    return FileLoader;
	}();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Geometry = undefined;
	
	var _ContextResource2 = __webpack_require__(21);
	
	var _VertexFormat = __webpack_require__(22);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A geometry
	 *
	 * @extends {ContextResource}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Geometry = exports.Geometry = function (_ContextResource) {
	    _inherits(Geometry, _ContextResource);
	
	    /**
	     * Constructor
	     */
	
	    function Geometry() {
	        _classCallCheck(this, Geometry);
	
	        /**
	         * Colors
	         *
	         * @type {Float32Array}
	         * @private
	         */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Geometry).call(this));
	
	        _this.colors = null;
	
	        /**
	         * Indices
	         *
	         * @type {Uint16Array}
	         * @private
	         */
	        _this.indices = null;
	
	        /**
	         * Normals
	         *
	         * @type {Float32Array}
	         * @private
	         */
	        _this.normals = null;
	
	        /**
	         * Positions
	         *
	         * @type {Float32Array}
	         * @private
	         */
	        _this.positions = null;
	
	        /**
	         * Uvs
	         *
	         * @type {Float32Array}
	         * @private
	         */
	        _this.uvs = null;
	
	        /**
	         * Format
	         *
	         * @type {VertexFormat}
	         * @private
	         */
	        _this.vertexFormat = null;
	        return _this;
	    }
	
	    /**
	     * Set vertices colors
	     *
	     * @param {Float32Array} colors An array of float values representing colors (r, g, b, a, r, g, b, a, …)
	     */
	
	    _createClass(Geometry, [{
	        key: 'setColors',
	        value: function setColors(colors) {
	            this.colors = new Float32Array(colors);
	
	            // Indicate that an attribute of the geometry need an update.
	            if (this.vertexFormat) this.vertexFormat.setStreamAsWaitingUpdate(_VertexFormat.VertexElement.Usage.Color, true);
	        }
	
	        /**
	         * Set indices
	         *
	         * @param {Uint16Array} indices An array of unsigned integer values representing indices order
	         */
	
	    }, {
	        key: 'setIndices',
	        value: function setIndices(indices) {
	            this.indices = new Uint16Array(indices);
	
	            // Indicate that indices need an update.
	            if (this.vertexFormat) this.vertexFormat.setIndicesAsWaitingUpdate(true);
	        }
	
	        /**
	         * Set vertices normals
	         *
	         * @param {Float32Array} normals An array of float values representing normals (x, y, z, x, y, z, …)
	         */
	
	    }, {
	        key: 'setNormals',
	        value: function setNormals(normals) {
	            this.normals = new Float32Array(normals);
	
	            // Indicate that an attribut of the geometry need an update.
	            if (this.vertexFormat) this.vertexFormat.setStreamAsWaitingUpdate(_VertexFormat.VertexElement.Usage.Normal, true);
	        }
	
	        /**
	         * Set vertices positions
	         *
	         * @param {Float32Array} positions An array of float values representing positions (x, y, z, x, y, z, …)
	         */
	
	    }, {
	        key: 'setPositions',
	        value: function setPositions(positions) {
	            this.positions = new Float32Array(positions);
	
	            // Indicate that an attribute of the geometry need an update.
	            if (this.vertexFormat) this.vertexFormat.setStreamAsWaitingUpdate(_VertexFormat.VertexElement.Usage.Position, true);
	        }
	
	        /**
	         * Set texture coordinates (uvs) for each vertex
	         *
	         * @param {Float32Array} uvs An array of float values representing texture coordinates (u, v, u, v, …)
	         */
	
	    }, {
	        key: 'setTextureUVs',
	        value: function setTextureUVs(uvs) {
	            this.uvs = new Float32Array(uvs);
	
	            // Indicate that an attribute of the geometry need an update
	            if (this.vertexFormat) this.vertexFormat.setStreamAsWaitingUpdate(_VertexFormat.VertexElement.Usage.UVS, true);
	        }
	    }, {
	        key: 'setVertexFormat',
	
	        /**
	         * Set geometry's format
	         *
	         * @param {VertexFormat} vertexFormat A VertexFormat instance
	         */
	        value: function setVertexFormat(vertexFormat) {
	            this.vertexFormat = vertexFormat;
	        }
	
	        /**
	         * Get format
	         *
	         * @return {VertexFormat} A VertexFormat instance
	         */
	
	    }, {
	        key: 'getVertexFormat',
	        value: function getVertexFormat() {
	            return this.vertexFormat;
	        }
	
	        /**
	         * Return index count
	         *
	         * @return {number} Indices array's length
	         */
	
	    }, {
	        key: 'getIndexCount',
	        value: function getIndexCount() {
	            return this.indices.length;
	        }
	
	        /**
	         * Return the indices
	         *
	         * @return {Uint16Array} Indices array
	         */
	
	    }, {
	        key: 'getIndices',
	        value: function getIndices() {
	            return this.indices;
	        }
	
	        /**
	         * Return an array with the color for each vertex
	         *
	         * @return {Float32Array} An array with the format [r, g, b, a, r, g, b, a, …]
	         */
	
	    }, {
	        key: 'getVerticesColors',
	        value: function getVerticesColors() {
	            return this.colors;
	        }
	
	        /**
	         * Return an array with the position for each vertex
	         *
	         * @return {Float32Array} An array with the format [x, y, z, x, y, z, …]
	         */
	
	    }, {
	        key: 'getVerticesPositions',
	        value: function getVerticesPositions() {
	            return this.positions;
	        }
	
	        /**
	         * Return an array with the normal for each vertex
	         *
	         * @return {Float32Array} An array with the format [x, y, z, x, y, z, …]
	         */
	
	    }, {
	        key: 'getVerticesNormals',
	        value: function getVerticesNormals() {
	            return this.normals;
	        }
	
	        /**
	         * Return an array with the texture coordinates for each vertex
	         *
	         * @return {Float32Array} An array with the format [u, v, u, v, …]
	         */
	
	    }, {
	        key: 'getVerticesUVs',
	        value: function getVerticesUVs() {
	            return this.uvs;
	        }
	
	        /**
	         * Create a cube
	         *
	         * @param {number} width Width
	         * @param {number} height Height
	         * @param {number} depth Depth
	         * @return {Geometry} A Geometry instance
	         */
	
	    }], [{
	        key: 'createCube',
	        value: function createCube(width, height, depth) {
	            var geometry = new Geometry();
	
	            // Set format
	            var format = new _VertexFormat.VertexFormat();
	            format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.Position, 0, _VertexFormat.VertexElement.Type.Float, 3, false));
	            format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.Color, 2, _VertexFormat.VertexElement.Type.Float, 4, false));
	            format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.UVS, 1, _VertexFormat.VertexElement.Type.Float, 2, false));
	            format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.Normal, 3, _VertexFormat.VertexElement.Type.Float, 3, false));
	            geometry.setVertexFormat(format);
	
	            // Set positions
	            var positions = new Float32Array([-width, -height, depth, width, -height, depth, width, height, depth, -width, height, depth, -width, -height, -depth, -width, height, -depth, width, height, -depth, width, -height, -depth, -width, height, -depth, -width, height, depth, width, height, depth, width, height, -depth, -width, -height, -depth, width, -height, -depth, width, -height, depth, -width, -height, depth, width, -height, -depth, width, height, -depth, width, height, depth, width, -height, depth, -width, -height, -depth, -width, -height, depth, -width, height, depth, -width, height, -depth]);
	            geometry.setPositions(positions);
	
	            // Set colors
	            var colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
	            geometry.setColors(colors);
	
	            // Texture uvs
	            var uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1]);
	            geometry.setTextureUVs(uvs);
	
	            // Normals
	            var normals = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0]);
	            geometry.setNormals(normals);
	
	            // Indices.
	            var indices = new Uint16Array([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]);
	            geometry.setIndices(indices);
	
	            return geometry;
	        }
	
	        /**
	         * Create a rectangle
	         *
	         * @param {number} width Width
	         * @param {number} height Height
	         * @return {Geometry} A Geometry instance
	         */
	
	    }, {
	        key: 'createRectangle',
	        value: function createRectangle(width, height) {
	            var geometry = new Geometry();
	
	            // Set format
	            var format = new _VertexFormat.VertexFormat();
	            format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.Position, 0, _VertexFormat.VertexElement.Type.Float, 3, false));
	            format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.Color, 1, _VertexFormat.VertexElement.Type.Float, 4, false));
	            format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.UVS, 2, _VertexFormat.VertexElement.Type.Float, 2, false));
	            format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.Normal, 3, _VertexFormat.VertexElement.Type.Float, 3, false));
	            geometry.setVertexFormat(format);
	
	            // Set positions
	            var positions = new Float32Array([-width, -height, 0, -width, height, 0, width, -height, 0, width, height, 0]);
	            geometry.setPositions(positions);
	
	            // Set colors
	            var colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
	            geometry.setColors(colors);
	
	            // Texture uvs
	            var uvs = new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]);
	            geometry.setTextureUVs(uvs);
	
	            // Normals
	            var normals = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0]);
	            geometry.setNormals(normals);
	
	            // Indices
	            geometry.setIndices(new Uint16Array([0, 2, 1, 3]));
	
	            return geometry;
	        }
	    }]);
	
	    return Geometry;
	}(_ContextResource2.ContextResource);

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A context resource:
	 * - Indicate that the object have a refence to the graphic API.
	 * - The object have a unique ID.
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var ContextResource = exports.ContextResource = function () {
	  /**
	   * Constructor
	   */
	
	  function ContextResource() {
	    _classCallCheck(this, ContextResource);
	
	    /**
	     * Unique identifier
	     *
	     * @type {number}
	     * @public
	     */
	    this.UID = ++ContextResource.globalID;
	  }
	
	  /**
	   * Get unique ID
	   *
	   * @return {number} An unsigned integer
	   */
	
	  _createClass(ContextResource, [{
	    key: "getUID",
	    value: function getUID() {
	      return this.UID;
	    }
	  }]);
	
	  return ContextResource;
	}();
	
	/**
	* Global ID
	 *
	* @type {number}
	*/
	
	ContextResource.globalID = -1;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Represent one of the element of a vertex.
	 * It can be a position, a normal, a color, ….
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var VertexElement =
	/**
	 * Constructor
	 *
	 * @param {VertexElement.Usage} usage Element usage
	 * @param {number} stream Stream index
	 * @param {VertexElement.Type} type Type of element
	 * @param {number?} count Value count, ex: A "vec2" will have "2" for this parameter
	 * @param {boolean?} normalize True to ask rendering API to normalize values
	 */
	exports.VertexElement = function VertexElement(usage, stream, type) {
	  var count = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	  var normalize = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	
	  _classCallCheck(this, VertexElement);
	
	  /**
	   * Value count for this element
	   *
	   * @type {number}
	   * @public
	   */
	  this.count = count;
	
	  /**
	   * Indicate if the value need to be normalized by the graphic API
	   *
	   * @type {boolean}
	   * @public
	   */
	  this.normalize = normalize;
	
	  /**
	   * Offset in the vertex data
	   *
	   * @type {number}
	   * @public
	   */
	  this.offset = 0;
	
	  /**
	   * Stream index
	   *
	   * @type {number}
	   * @public
	   */
	  this.stream = stream;
	
	  /**
	   * Stream stride.
	   * @type {number}
	   * @public
	   */
	  this.stride = 0;
	
	  /**
	   * Type of value
	   *
	   * @type {VertexElement.Type}
	   * @public
	   */
	  this.type = type;
	
	  /**
	   * Type of element
	   *
	   * @type {VertexElement.Usage}
	   * @public
	   */
	  this.usage = usage;
	};
	
	/**
	 * Type of stream available
	 *
	 * @enum {number}
	 */
	
	VertexElement.StreamType = { Static: 0, Dynamic: 1, Stream: 2 };
	
	/**
	 * VertexElement's types
	 *
	 * @enum {number}
	 */
	VertexElement.Type = { Byte: 0, Float: 1, Int: 2, Short: 3 };
	
	/**
	 * VertexElement's usage
	 *
	 * @enum {number}
	 */
	VertexElement.Usage = { Position: 0, Color: 1, UVS: 2, Normal: 3, Tangent: 4 };
	
	/**
	 * Indicate the format of a vertex
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var VertexFormat = exports.VertexFormat = function () {
	  /**
	   * Constructor
	   */
	
	  function VertexFormat() {
	    _classCallCheck(this, VertexFormat);
	
	    /**
	     * Elements inside this format
	     *
	     * @type {Array.<VertexElement>}
	     * @private
	     */
	    this.elements = [];
	
	    /**
	     * Stream's strides
	     *
	     * @type {Array.<VertexElement.StreamType>}
	     * @private
	     */
	    this.streamType = [];
	
	    /**
	     * Stream's strides
	     *
	     * @type {Array.<number>}
	     * @private
	     */
	    this.streamStride = [];
	
	    /**
	     * Stream's state
	     *
	     * @type {Array.<boolean>}
	     * @private
	     */
	    this.streamNeedUpdate = [];
	
	    /**
	     * Indicate if the indices have changed
	     *
	     * @type {boolean}
	     * @private
	     */
	    this.indicesNeedUpdate = true;
	  }
	
	  /**
	   * Add an element to the format
	   *
	   * @param {VertexElement} element A VertexElement instance
	   */
	
	  _createClass(VertexFormat, [{
	    key: "add",
	    value: function add(element) {
	      this.elements.push(element);
	      this.compute();
	    }
	  }, {
	    key: "set",
	
	    /**
	     * Set elements
	     *
	     * @param {Array.<VertexElement>} elements An array of VertexElement instance
	     */
	    value: function set(elements) {
	      this.elements = elements;
	      this.compute();
	    }
	
	    /**
	     * Get stream's type
	     *
	     * @param {number} index Stream index
	     * @param {VertexElement.StreamType} type A type
	     */
	
	  }, {
	    key: "setStreamType",
	    value: function setStreamType(index, type) {
	      this.streamType[index] = type;
	    }
	
	    /**
	     * Compute offset and vertex format's data
	     *
	     * @private
	     */
	
	  }, {
	    key: "compute",
	    value: function compute() {
	      var offset = 0;
	      var size = 0;
	      var previousStream = 0;
	
	      // Sort elements by stream (ascending)
	      this.elements.sort(function (a, b) {
	        if (a.stream < b.stream) return -1;else if (a.stream > b.stream) return 1;
	
	        return 0;
	      });
	
	      // Compute values
	      for (var i = 0; i < this.elements.length; i++) {
	        // Reset offset and stride when we change stream
	        if (previousStream != this.elements[i].stream) {
	          this.streamStride[previousStream] = offset;
	          offset = 0;
	        }
	
	        switch (this.elements[i].type) {
	          case VertexElement.Type.Float:
	          case VertexElement.Type.Int:
	            size = 4;
	            break;
	          case VertexElement.Type.Short:
	            size = 2;
	            break;
	          case VertexElement.Type.Byte:
	            size = 1;
	            break;
	          default:
	            size = 1;
	            break;
	        }
	
	        this.elements[i].offset = offset;
	        size *= this.elements[i].count;
	        offset += size;
	        previousStream = this.elements[i].stream;
	      }
	
	      this.streamStride[previousStream] = offset;
	    }
	
	    /**
	     * Indicate if the indices need an update
	     *
	     * @param {boolean} state True to ask an update
	     */
	
	  }, {
	    key: "setIndicesAsWaitingUpdate",
	    value: function setIndicesAsWaitingUpdate(state) {
	      this.indicesNeedUpdate = state;
	    }
	
	    /**
	     * Indicate if the stream need an update.
	     * @param {VertexElement.Usage } usage Stream usage.
	     * @param {boolean} state True to ask an update.
	     */
	
	  }, {
	    key: "setStreamAsWaitingUpdate",
	    value: function setStreamAsWaitingUpdate(usage, state) {
	      for (var i = 0; i < this.elements.length; i++) {
	        if (this.elements[i].usage == usage) this.streamNeedUpdate[this.elements[i].stream] = state;
	      }
	    }
	
	    /**
	     * Get elements
	     *
	     * @return {Array.<VertexElement>} An array of VertexElement
	     */
	
	  }, {
	    key: "getElements",
	    value: function getElements() {
	      return this.elements;
	    }
	
	    /**
	     * Get stride of the asked stream
	     *
	     * @param {number} index Stream index
	     * @return {number} A stride value, 0 if the stream don't exist
	     */
	
	  }, {
	    key: "getStreamStride",
	    value: function getStreamStride(index) {
	      return this.streamStride[index] || 0;
	    }
	
	    /**
	     * Get stream's type
	     *
	     * @param {number} index Stream index
	     * @return {VertexElement.StreamType} A type, default: stream
	     */
	
	  }, {
	    key: "getStreamType",
	    value: function getStreamType(index) {
	      return this.streamType[index] || VertexElement.StreamType.Stream;
	    }
	
	    /**
	     * Check if indices need an update
	     *
	     * @return {boolean} True if the indices need an update, otherwise false
	     */
	
	  }, {
	    key: "isIndicesWaitingUpdate",
	    value: function isIndicesWaitingUpdate() {
	      return this.indicesNeedUpdate;
	    }
	
	    /**
	     * Check if the asked stream need an update
	     *
	     * @param {number} index Stream index
	     * @return {boolean} True if the stream need an update, otherwise false
	     */
	
	  }, {
	    key: "isStreamWaitingUpdate",
	    value: function isStreamWaitingUpdate(index) {
	      return this.streamNeedUpdate[index];
	    }
	  }]);
	
	  return VertexFormat;
	}();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Material = undefined;
	
	var _Pass = __webpack_require__(24);
	
	var _Types = __webpack_require__(25);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A material
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Material = exports.Material = function () {
	    /**
	     * Constructor
	     */
	
	    function Material() {
	        _classCallCheck(this, Material);
	
	        /**
	         * Index of the technique to use
	         *
	         * @type {number}
	         * @private
	         */
	        this.activeTechnique = 0;
	
	        /**
	         * An array of passes per technique
	         * By default, we have at least one technique available
	         *
	         * @type {Array.<Array.<Pass>>}
	         * @private
	         */
	        this.techniques = [];
	
	        // Add a default technique
	        this.createTechnique();
	    }
	
	    /**
	     * Shortcut to create common materials
	     *
	     * @return {Material} A Material instance
	     */
	
	    _createClass(Material, [{
	        key: 'createPass',
	
	        /**
	         * Add a pass to a technique
	         *
	         * @param {number=} techniqueIndex Targeted technique's index (default: 0)
	         * @return {Pass} A Pass instance.
	         */
	        value: function createPass() {
	            var techniqueIndex = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	            var pass = new _Pass.Pass();
	            this.techniques[techniqueIndex].push(pass);
	
	            return pass;
	        }
	
	        /**
	         * Create a new technique
	         *
	         * @return {number} The technique index.
	         */
	
	    }, {
	        key: 'createTechnique',
	        value: function createTechnique() {
	            this.techniques.push([]);
	            return this.techniques.length - 1;
	        }
	
	        /**
	         * Set technique to use
	         *
	         * @param {number} techniqueIndex Targeted technique's index
	         */
	
	    }, {
	        key: 'setActiveTechnique',
	        value: function setActiveTechnique(techniqueIndex) {
	            this.activeTechnique = techniqueIndex;
	        }
	
	        /**
	         * Get active technique's index
	         *
	         * @return {number} A positive integer
	         */
	
	    }, {
	        key: 'getActiveTechnique',
	        value: function getActiveTechnique() {
	            return this.activeTechnique;
	        }
	
	        /**
	         * Get a pass
	         *
	         * @param {number} techniqueIndex Targeted technique's index
	         * @param {number} passIndex Pass's index
	         * @return {?Pass} A Pass instance or null if the technique or the pass don't exist
	         */
	
	    }, {
	        key: 'getPass',
	        value: function getPass(techniqueIndex, passIndex) {
	            if (techniqueIndex >= this.techniques.length) return null;
	
	            return this.techniques[techniqueIndex][passIndex] || null;
	        }
	
	        /**
	         * Get pass count
	         *
	         * @param {number} techniqueIndex Targeted technique's index
	         * @return {number} A signed integer
	         */
	
	    }, {
	        key: 'getPassCount',
	        value: function getPassCount() {
	            var techniqueIndex = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	            if (techniqueIndex >= this.techniques.length) return 0;
	
	            return this.techniques[techniqueIndex].length;
	        }
	    }], [{
	        key: 'create',
	        value: function create(name) {
	            var material = new Material();
	            var pass = material.createPass();
	
	            if (name == 'default') {
	                pass.add("material.ambient", _Types.Type.Float, [0.0, 0.0, 0.0]);
	                pass.add("material.diffuse", _Types.Type.Float, [0.55, 0.55, 0.55]);
	                pass.add("material.specular", _Types.Type.Float, [0.7, 0.7, 0.7]);
	                pass.add("material.shininess", _Types.Type.Float, 38.4);
	            }
	
	            return material;
	        }
	    }]);
	
	    return Material;
	}();

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Pass = exports.PassParameter = undefined;
	
	var _StateBlock2 = __webpack_require__(18);
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A pass parameter
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var PassParameter =
	/**
	 * Constructor
	 *
	 * @param {string} name Name to assign
	 * @param {Type} type Element's type
	 * @param {Array.<number>|number|boolean|Texture|Float32Array} value Element's value
	 */
	exports.PassParameter = function PassParameter(name, type, value) {
	    _classCallCheck(this, PassParameter);
	
	    /**
	     * Name
	     *
	     * @type {string}
	     * @public
	     */
	    this.name = name;
	
	    /**
	     * Type
	     *
	     * @type {Type}
	     * @public
	     */
	    this.type = type;
	
	    /**
	     * Value
	     *
	     * @type {Array.<number>|number|boolean|Texture|Float32Array}
	     * @public
	     */
	    this.value = value;
	};
	
	/**
	 * A pass
	 *
	 * @extends {StateBlock}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Pass = exports.Pass = function (_StateBlock) {
	    _inherits(Pass, _StateBlock);
	
	    /**
	     * Constructor
	     *
	     * @param {string} name Name to assign
	     * @param {Type} type Element's type
	     * @param {Array.<number>|number|boolean|Texture|Float32Array} value Element's value
	     */
	
	    function Pass(name, type, value) {
	        _classCallCheck(this, Pass);
	
	        /**
	        * Parameters: elements to send to the GPU
	        *
	        * @type {Array.<PassParameter>}
	        * @private
	        */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pass).call(this));
	
	        _this.parameters = [];
	        return _this;
	    }
	
	    /**
	     * Add a parameter to the material
	     *
	     * @param {string} name Parameter's name
	     * @param {Type} type Parameter's type
	     * @param {Array.<number>|number|boolean|Texture|Float32Array} value Parameter's value
	     */
	
	    _createClass(Pass, [{
	        key: 'add',
	        value: function add(name, type, value) {
	            // A value with this name already exist? We erase previous data …
	            for (var i = 0; i < this.parameters.length; i++) {
	                if (this.parameters[i].name == name) {
	                    this.parameters[i].value = value;
	                    this.parameters[i].type = type;
	                    return;
	                }
	            }
	
	            // … otherwise we create a new one
	            this.parameters.push(new PassParameter(name, type, value));
	        }
	
	        /**
	         * Set parameter's value
	         *
	         * @param {string} name Parameter's name
	         * @param {Array.<number>|number|boolean|Texture|Float32Array} value Parameter's value
	         */
	
	    }, {
	        key: 'set',
	        value: function set(name, value) {
	            for (var i = 0; i < this.parameters.length; i++) {
	                if (this.parameters[i].name == name) {
	                    this.parameters[i].value = value;
	                    break;
	                }
	            }
	        }
	
	        /**
	         * Return an array with all material's parameters
	         *
	         * @return {Array.<PassParameter>} An array of PassParameter
	         */
	
	    }, {
	        key: 'getParameters',
	        value: function getParameters() {
	            return this.parameters;
	        }
	    }]);
	
	    return Pass;
	}(_StateBlock2.StateBlock);

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Types available
	 */
	
	var Type = exports.Type = function Type() {
	  _classCallCheck(this, Type);
	};
	
	/**
	 * Float
	 *
	 * @type {number}
	 */
	
	Type.Float = 0;
	
	/**
	 * Integer
	 *
	 * @type {number}
	 */
	Type.Int = 1;
	
	/**
	 * Bool
	 *
	 * @type {number}
	 */
	Type.Bool = 2;
	
	/**
	 * Matrix
	 *
	 * @type {number}
	 */
	Type.Matrix = 3;
	
	/**
	 * 2D Texture
	 *
	 * @type {number}
	 */
	Type.Texture2D = 4;
	
	/**
	 * 3D Texture
	 *
	 * @type {number}
	 */
	Type.TextureCube = 5;
	
	/**
	 * Byte
	 *
	 * @type {number}
	 */
	Type.Byte = 6;
	
	/**
	 * u_Byte
	 *
	 * @type {number}
	 */
	Type.u_Byte = 7;
	
	/**
	 * Short
	 *
	 * @type {number}
	 */
	Type.Short = 8;
	
	/**
	 * u_Short
	 *
	 * @type {number}
	 */
	Type.u_Short = 9;
	
	/**
	 * u_Int
	 * 
	 * @type {number}
	 */
	Type.u_Int = 10;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Mesh = undefined;
	
	var _Drawable2 = __webpack_require__(27);
	
	var _MeshCommand = __webpack_require__(28);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A mesh
	 *
	 * @extends {Drawable}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Mesh = exports.Mesh = function (_Drawable) {
	  _inherits(Mesh, _Drawable);
	
	  /**
	   * Constructor
	   */
	
	  function Mesh() {
	    _classCallCheck(this, Mesh);
	
	    /**
	     * Geometry
	     *
	     * @type {Geometry}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mesh).call(this));
	
	    _this.geometry = null;
	
	    /**
	     * Material
	     *
	     * @type {Material}
	     * @private
	     */
	    _this.material = null;
	
	    /**
	     * Program
	     *
	     * @type {Program}
	     * @private
	     */
	    _this.program = null;
	    return _this;
	  }
	
	  /**
	   * Draw the element
	   *
	   * @param {RenderTarget} renderTarget Renderer who called this method
	   */
	
	  _createClass(Mesh, [{
	    key: 'draw',
	    value: function draw(renderTarget) {
	      if (!this.geometry || !this.material || !this.program) return;
	
	      var task = renderTarget.getActiveTask();
	      var activeTechnique = this.material.getActiveTechnique();
	      var passCount = this.material.getPassCount(activeTechnique);
	
	      for (var i = 0; i < passCount; i++) {
	        task.addCommand(new _MeshCommand.MeshCommand(this.geometry, this.material.getPass(activeTechnique, i), this.program, this.getTransformationMatrix(), this.getNormalMatrix(), 0, this.geometry.getIndexCount()));
	      }
	    }
	  }, {
	    key: 'setGeometry',
	
	    /**
	     * Set geometry
	     *
	     * @param {Geometry} geometry A Geometry instance
	     */
	    value: function setGeometry(geometry) {
	      this.geometry = geometry;
	    }
	
	    /**
	     * Set material
	     *
	     * @param {Material} material A Material instance
	     */
	
	  }, {
	    key: 'setMaterial',
	    value: function setMaterial(material) {
	      this.material = material;
	    }
	  }, {
	    key: 'setProgram',
	
	    /**
	     * Set program
	     *
	     * @param {Program} program A Program instance
	     */
	    value: function setProgram(program) {
	      this.program = program;
	    }
	
	    /**
	     * Return a reference to the program use by this mesh
	     *
	     * @return {Program} A Program instance
	     */
	
	  }, {
	    key: 'getProgram',
	    value: function getProgram() {
	      return this.program;
	    }
	  }]);
	
	  return Mesh;
	}(_Drawable2.Drawable);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Drawable = undefined;
	
	var _Node2 = __webpack_require__(16);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A drawable element
	 *
	 * @extends {Node}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Drawable = exports.Drawable = function (_Node) {
	  _inherits(Drawable, _Node);
	
	  function Drawable() {
	    _classCallCheck(this, Drawable);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Drawable).apply(this, arguments));
	  }
	
	  _createClass(Drawable, [{
	    key: 'draw',
	
	    /**
	     * Draw the element
	     *
	     * @param {RenderTarget} renderTarget Renderer who called this method
	     */
	    value: function draw(renderTarget) {}
	  }, {
	    key: 'visit',
	
	    /**
	     * Visit the node and his children
	     *
	     * @param {RenderTarget} renderTarget Renderer who called this method
	     */
	    value: function visit(renderTarget) {
	      this.draw(renderTarget);
	    }
	  }]);
	
	  return Drawable;
	}(_Node2.Node);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MeshCommand = undefined;
	
	var _Program = __webpack_require__(29);
	
	var _RenderCommand2 = __webpack_require__(30);
	
	var _Types = __webpack_require__(25);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Draw meshes
	 *
	 * @extends {RenderCommand}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var MeshCommand = exports.MeshCommand = function (_RenderCommand) {
	  _inherits(MeshCommand, _RenderCommand);
	
	  /**
	   * Constructor
	   *
	   * @param {Geometry} geometry A Geometry instance
	   * @param {Pass} pass A Pass instance
	   * @param {Program} program A Program instance
	   * @param {mat4} modelMatrix A Matrix with model's transformations (scale, rotate, translate)
	   * @param {mat4} normalMatrix A Matrix with model's normals transformed
	   * @param {number} startVertex First vertex to draw
	   * @param {number} endVertex Last vertex to draw
	   */
	
	  function MeshCommand(geometry, pass, program, modelMatrix, normalMatrix, startVertex, endVertex) {
	    _classCallCheck(this, MeshCommand);
	
	    /**
	     * Last vertex to draw
	     *
	     * @type {number}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MeshCommand).call(this));
	
	    _this.endVertex = endVertex;
	
	    /**
	     * Geometry
	     *
	     * @type {Geometry}
	     * @private
	     */
	    _this.geometry = geometry;
	
	    /**
	     * Model's matrix
	     *
	     * @type {mat4}
	     * @private
	     */
	    _this.modelMatrix = modelMatrix;
	
	    /**
	     * Model's normal matrix
	     *
	     * @type {mat4}
	     * @private
	     */
	    _this.normalMatrix = normalMatrix;
	
	    /**
	     * Pass
	     *
	     * @type {Pass}
	     * @private
	     */
	    _this.pass = pass;
	
	    /**
	     * Program
	     *
	     * @type {Program}
	     * @private
	     */
	    _this.program = program;
	
	    /**
	     * First vertex to draw
	     *
	     * @type {number}
	     * @private
	     */
	    _this.startVertex = startVertex;
	    return _this;
	  }
	
	  /**
	   * Execute the command
	   *
	   * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
	   */
	
	  _createClass(MeshCommand, [{
	    key: 'execute',
	    value: function execute(renderAPI) {
	      // Program
	      var programCode = renderAPI.setProgram(this.program);
	      if (programCode == -1) return;
	
	      // Must send/update shared uniforms
	      if (programCode == 1) renderAPI.setUniform(this.program, 'uCamera', _Types.Type.Matrix, renderAPI.getActiveCamera().getViewProjectionMatrix());
	
	      // Send uniforms.
	      renderAPI.setUniform(this.program, 'uModel', _Types.Type.Matrix, this.modelMatrix);
	      renderAPI.setUniform(this.program, 'uModelNormal', _Types.Type.Matrix, this.normalMatrix);
	
	      // State.
	      renderAPI.applyStateBlock(this.pass);
	
	      // Material.
	      var parameters = this.pass.getParameters();
	      var slot = 0;
	      for (var i = 0; i < parameters.length; i++) {
	        var parameter = parameters[i];
	        switch (parameter.type) {
	          case _Types.Type.Texture2D:
	            {
	              renderAPI.setUniform(this.program, parameter.name, _Types.Type.Int, slot);
	              renderAPI.bindTexture(slot, /** @type {TextureInterface} */parameter.value);
	              slot++;
	              break;
	            }
	          default:
	            {
	              renderAPI.setUniform(this.program, parameter.name, parameter.type, parameter.value);
	              break;
	            }
	        }
	      }
	
	      // Bind geometry
	      renderAPI.setGeometry(this.geometry);
	
	      // Draw object
	      renderAPI.drawIndexedPrimitives(this.pass.drawingMode, this.startVertex, this.endVertex);
	    }
	  }]);
	
	  return MeshCommand;
	}(_RenderCommand2.RenderCommand);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ProgramElement = exports.Program = undefined;
	
	var _ContextResource2 = __webpack_require__(21);
	
	var _FileLoader = __webpack_require__(19);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A program
	 *
	 * @extends {ContextResource}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Program = exports.Program = function (_ContextResource) {
	  _inherits(Program, _ContextResource);
	
	  /**
	   * Constructor
	   *
	   * @constructor
	   */
	
	  function Program() {
	    _classCallCheck(this, Program);
	
	    /**
	     * Attributes
	     *
	     * @type {Array.<ProgramElement>}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Program).call(this));
	
	    _this.attributes = [];
	
	    /**
	     * Shader sources
	     *
	     * - First index is for the vertex shader
	     * - Second index is for the fragment shader
	     *
	     * @type {Array.<string>}
	     * @private
	     */
	    _this.sources = [null, null];
	
	    /**
	     * Uniforms
	     *
	     * @type {Array.<Program.Element>}
	     * @private
	     */
	    _this.uniforms = [];
	    return _this;
	  }
	
	  /**
	   * Load program from shader files
	   *
	   * @param {string} vertexFile Path to the vertex shader file
	   * @param {string} fragmentFile Path to the fragment shader file
	   */
	
	  _createClass(Program, [{
	    key: 'loadFromFiles',
	    value: function loadFromFiles(vertexFile, fragmentFile) {
	      var _this2 = this;
	
	      // Vertex file.
	      _FileLoader.FileLoader.load(vertexFile, function (status, data) {
	        _this2.sources[0] = data;
	      });
	
	      // Fragment file.
	      _FileLoader.FileLoader.load(fragmentFile, function (status, data) {
	        _this2.sources[1] = data;
	      });
	    }
	  }, {
	    key: 'loadFromData',
	
	    /**
	     * Load program from data
	     *
	     * @param {string} vertexSource Vertex shader code
	     * @param {string} fragmentSource Fragment shader code
	     */
	    value: function loadFromData(vertexSource, fragmentSource) {
	      this.sources[0] = vertexSource;
	      this.sources[1] = fragmentSource;
	    }
	
	    /**
	     * Get attributes
	     *
	     * @return {Array.<ProgramElement>} An array of attribute
	     */
	
	  }, {
	    key: 'getAttributes',
	    value: function getAttributes() {
	      return this.attributes;
	    }
	
	    /**
	     * Get program's sources
	     *
	     * @return {Array.<string>} Index 0: Vertex shader, Index 1: Fragment shader
	     */
	
	  }, {
	    key: 'getSources',
	    value: function getSources() {
	      return this.sources;
	    }
	
	    /**
	     * Get uniform
	     *
	     * @param {string} name Name of the uniform
	     * @return {?ProgramElement} A program Element or null if uniform doesn't exist
	     */
	
	  }, {
	    key: 'getUniform',
	    value: function getUniform(name) {
	      return this.uniforms[name] || null;
	    }
	
	    /**
	     * Get uniforms
	     *
	     * @return {Array.<ProgramElement>} An array of uniforms
	     */
	
	  }, {
	    key: 'getUniforms',
	    value: function getUniforms() {
	      return this.uniforms;
	    }
	
	    /**
	     * Say if program is ready to be use
	     *
	     * Source array must have two elements: the fragment and the vertex shaders
	     * @return {boolean} True if program is ready, otherwise false
	     */
	
	  }, {
	    key: 'isReady',
	    value: function isReady() {
	      return this.sources.length === 2 && this.sources[0] !== null && this.sources[1] !== null;
	    }
	  }]);
	
	  return Program;
	}(_ContextResource2.ContextResource);
	
	/**
	 * An element from the shader
	 *
	 * @constructor
	 */
	
	var ProgramElement =
	/**
	 * Constructor
	 *
	 * @param {number} location Location in the shader
	 * @param {string} name His name
	 * @param {Type} type Element's type (float, vec, …)
	 * @param {number} size Element's size
	 */
	exports.ProgramElement = function ProgramElement(location, name, type, size) {
	  _classCallCheck(this, ProgramElement);
	
	  /**
	   * Location in the shader
	   *
	   * @type {number}
	   * @public
	   */
	  this.location = location;
	
	  /**
	   * Name
	   *
	   * @type {string}
	   * @public
	   */
	  this.name = name;
	
	  /**
	   * Type
	   *
	   * @type {Type}
	   * @public
	   */
	  this.type = type;
	
	  /**
	   * Size/Count
	   *
	   * @type {number}
	   * @public
	   */
	  this.size = size;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * An abstract rendering command
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var RenderCommand = exports.RenderCommand = function () {
	  function RenderCommand() {
	    _classCallCheck(this, RenderCommand);
	  }
	
	  _createClass(RenderCommand, [{
	    key: "isOpaque",
	
	    /**
	     * Indicate if the command concern an opaque element
	     *
	     * @return {boolean} True if command must be in the opaque queue
	     */
	    value: function isOpaque() {
	      return true;
	    }
	  }, {
	    key: "execute",
	
	    /**
	     * Execute the command
	     *
	     * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
	     */
	    value: function execute(renderAPI) {}
	  }]);
	
	  return RenderCommand;
	}();

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Model = undefined;
	
	var _Drawable2 = __webpack_require__(27);
	
	var _ModelLoader = __webpack_require__(32);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A model
	 *
	 * @extends {Drawable}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Model = exports.Model = function (_Drawable) {
	  _inherits(Model, _Drawable);
	
	  /**
	   * Constructor
	   *
	   * @param {string} filePath Path to the file with model's data
	   */
	
	  function Model() {
	    var filePath = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	    _classCallCheck(this, Model);
	
	    /**
	     * Meshes
	     *
	     * @type {Array.<Mesh>}
	     * @public
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Model).call(this));
	
	    _this.meshes = [];
	
	    if (filePath.length) _this.loadFromFile(filePath);
	    return _this;
	  }
	
	  /**
	   * Update the node and his children
	   *
	   * @param {number} deltaTime A floating value representing time elapsed between two frames
	   * @param {boolean} parentUpdated Indicate if the parent element have been updated
	   * @return {boolean} True if the node have been updated
	   */
	
	  _createClass(Model, [{
	    key: 'update',
	    value: function update(deltaTime, parentUpdated) {
	      // Call parent method
	      var updated = _get(Object.getPrototypeOf(Model.prototype), 'update', this).call(this, deltaTime, parentUpdated);
	
	      // Update meshes.
	      for (var i = 0; i < this.meshes.length; i++) {
	        this.meshes[i].computeTransformationMatrix(this.getTransformationMatrix(), updated);
	      }return updated;
	    }
	
	    /**
	     * Draw the element
	     *
	     * @param {RenderTarget} renderTarget Renderer who called this method
	     */
	
	  }, {
	    key: 'draw',
	    value: function draw(renderTarget) {
	      for (var i = 0; i < this.meshes.length; i++) {
	        this.meshes[i].draw(renderTarget);
	      }
	    }
	
	    /**
	     * Load model from a file
	     *
	     * @param {string} filePath Path to the file with model's data
	     */
	
	  }, {
	    key: 'loadFromFile',
	    value: function loadFromFile(filePath) {
	      _ModelLoader.ModelLoader.loadFromFile(filePath, this);
	    }
	  }]);
	
	  return Model;
	}(_Drawable2.Drawable);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ModelLoader = undefined;
	
	var _StateBlock = __webpack_require__(18);
	
	var _FileLoader = __webpack_require__(19);
	
	var _Geometry = __webpack_require__(20);
	
	var _Material = __webpack_require__(23);
	
	var _Mesh = __webpack_require__(26);
	
	var _ProgramLibrary = __webpack_require__(33);
	
	var _Texture = __webpack_require__(34);
	
	var _Types = __webpack_require__(25);
	
	var _VertexFormat = __webpack_require__(22);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A class to load 3D models
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var ModelLoader = exports.ModelLoader = function () {
	    function ModelLoader() {
	        _classCallCheck(this, ModelLoader);
	    }
	
	    _createClass(ModelLoader, null, [{
	        key: 'loadFromFile',
	
	        /**
	         * Load a 3D model from a JSON file
	         *
	         * @see https://github.com/acgessler/assimp2json
	         * @param {string} filePath Path to the file with the 3D model
	         * @param {Model} model Model to fill with data
	         */
	        value: function loadFromFile(filePath, model) {
	            _FileLoader.FileLoader.load(filePath, function (status, data, userData) {
	                // Compute path to the parent folder
	                var folder = userData.filePath.replace(/[^\/]*$/, '');
	
	                // Parse file.
	                ModelLoader.parseJSON(data, userData.model, folder);
	            }, { model: model, filePath: filePath });
	        }
	
	        /**
	         * Parse given data and fill model with it
	         *
	         * @param {string} data JSON data
	         * @param {Model} model Model to fill with data
	         * @param {string?} relativePath Relative path to the externals assets
	         * @see https://github.com/acgessler/assimp2json
	         * @private
	         */
	
	    }, {
	        key: 'parseJSON',
	        value: function parseJSON(data, model) {
	            var relativePath = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
	
	            // Get JSON data
	            var obj = /** @type {{materials:Array<{properties: Array<{index: number, key:string, semantic: number, type:number, value: (Array|number)}>}>, meshes: Array<{vertices: Array, normals: Array, faces: Array, texturecoords: Array, numuvcomponents: Array, materialindex: number}>}} */JSON.parse(data);
	
	            // Materials.
	            var materials = [];
	            var i = undefined,
	                j = undefined,
	                k = undefined,
	                l = undefined;
	
	            for (i = 0; i < obj.materials.length; i++) {
	                var material = new _Material.Material();
	                var pass = material.createPass();
	
	                // Default data
	                pass.drawingMode = _StateBlock.DrawingMode.Triangles;
	
	                var properties = obj.materials[i].properties;
	                for (j = 0; j < properties.length; j++) {
	                    var property = properties[j];
	
	                    // Colors.
	                    if (property.type == 1) {
	                        if (property.key == '$mat.twosided' && property.value == 1) pass.faceCulling = FaceCulling.None;else if (property.key == '$mat.shininess') pass.add('material.shininess', _Types.Type.Float, /** @type {number} */property.value);else if (property.key == '$clr.ambient') pass.add('material.ambient', _Types.Type.Float, [property.value[0], property.value[1], property.value[2]]);else if (property.key == '$clr.diffuse') pass.add('material.diffuse', _Types.Type.Float, [property.value[0], property.value[1], property.value[2]]);else if (property.key == '$clr.specular') pass.add('material.specular', _Types.Type.Float, [property.value[0], property.value[1], property.value[2]]);else if (property.key == '$clr.emissive') pass.add('material.emissive', _Types.Type.Float, [property.value[0], property.value[1], property.value[2]]);
	                    }
	                    // Textures.
	                    else if (property.type == 3 && property.key != '?mat.name') {
	                            var texture = new _Texture.Texture();
	                            texture.loadFromFile(relativePath + property.value);
	
	                            var name = 'material.diffuseTexture';
	                            switch (property.semantic) {
	                                default:
	                                case 1:
	                                    name = 'material.diffuseTexture';
	                                    break;
	                                case 2:
	                                    name = 'material.specularTexture';
	                                    break;
	                                case 3:
	                                    name = 'material.ambientTexture';
	                                    break;
	                                case 4:
	                                    name = 'material.emissiveTexture';
	                                    break;
	                                case 5:
	                                    name = 'material.heightTexture';
	                                    break;
	                                case 6:
	                                    name = 'material.normalsTexture';
	                                    break;
	                                case 7:
	                                    name = 'material.shininessTexture';
	                                    break;
	                                case 8:
	                                    name = 'material.opacityTexture';
	                                    break;
	                                case 9:
	                                    name = 'material.displacementTexture';
	                                    break;
	                            }
	
	                            pass.add(name, _Types.Type.Texture2D, texture);
	                        }
	                }
	
	                materials.push(material);
	            }
	
	            // Geometries
	            for (i = 0; i < obj.meshes.length; i++) {
	                // Create a new mesh
	                var mesh = new _Mesh.Mesh();
	                model.meshes.push(mesh);
	
	                // Add data
	                var meshData = obj.meshes[i];
	
	                // Geometry
	                {
	                    var geometry = new _Geometry.Geometry();
	
	                    // Format
	                    var format = new _VertexFormat.VertexFormat();
	                    geometry.setVertexFormat(format);
	
	                    // Positions
	                    var positions = new Float32Array(meshData.vertices);
	                    format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.Position, 0, _VertexFormat.VertexElement.Type.Float, 3, false));
	                    geometry.setPositions(positions);
	
	                    // Normals
	                    var normals = new Float32Array(meshData.normals);
	                    format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.Normal, 1, _VertexFormat.VertexElement.Type.Float, 3, false));
	                    geometry.setNormals(normals);
	
	                    // UVs
	                    if (meshData.texturecoords) {
	                        var uvs = new Float32Array(meshData.texturecoords[0]);
	                        format.add(new _VertexFormat.VertexElement(_VertexFormat.VertexElement.Usage.UVS, 2, _VertexFormat.VertexElement.Type.Float, meshData.numuvcomponents[0], false));
	                        geometry.setTextureUVs(uvs);
	                    }
	
	                    // Indices
	                    var indices = new Uint16Array(meshData.faces.length * 3);
	                    for (k = 0, l = 0; k < meshData.faces.length; k++, l += 3) {
	                        indices[l + 0] = meshData.faces[k][0];
	                        indices[l + 1] = meshData.faces[k][1];
	                        indices[l + 2] = meshData.faces[k][2];
	                    }
	                    geometry.setIndices(indices);
	
	                    mesh.setGeometry(geometry);
	                }
	
	                // Material.
	                if (meshData.materialindex !== undefined && materials[meshData.materialindex]) mesh.setMaterial(materials[meshData.materialindex]);else {
	                    var material = new _Material.Material();
	                    var pass = material.createPass();
	                    pass.drawingMode = _StateBlock.DrawingMode.Triangles;
	                    pass.add('material.ambient', _Types.Type.Float, [0.0, 0.0, 0.0]);
	                    pass.add('material.diffuse', _Types.Type.Float, [0.55, 0.55, 0.55]);
	                    pass.add('material.specular', _Types.Type.Float, [0.7, 0.7, 0.7]);
	                    pass.add('material.shininess', _Types.Type.Float, 38.4);
	                    mesh.setMaterial(material);
	                }
	
	                // Program
	                mesh.setProgram(_ProgramLibrary.ProgramLibrary.get('PhongShader'));
	            }
	        }
	    }]);
	
	    return ModelLoader;
	}();

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ProgramLibrary = undefined;
	
	var _FileLoader = __webpack_require__(19);
	
	var _Program = __webpack_require__(29);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A class to manage programs/shaders
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var ProgramLibrary = exports.ProgramLibrary = function () {
	    function ProgramLibrary() {
	        _classCallCheck(this, ProgramLibrary);
	    }
	
	    _createClass(ProgramLibrary, null, [{
	        key: 'get',
	
	        /**
	         * Get the program with the given name
	         *
	         * @param {string} name Program's name
	         * @return {Program} A Program instance, otherwise null is the program doesn't exist
	         */
	        value: function get(name) {
	            var program = ProgramLibrary.programs[name];
	            if (!program) {
	                program = new _Program.Program();
	                ProgramLibrary.programs[name] = program;
	            }
	
	            return program;
	        }
	
	        /**
	         * Load a new program
	         *
	         * @param {string} name Program's name
	         * @param {string} vertexShaderFile Path to the vertex shader file
	         * @param {string} fragmentShaderFile Path to the fragment shader file
	         * @param {Array.<string>=} defines An array with defines data
	         * @return {?Program} A Program instance
	         */
	
	    }, {
	        key: 'load',
	        value: function load(name, vertexShaderFile, fragmentShaderFile, defines) {
	            // Get/Create program
	            var program = ProgramLibrary.get(name);
	
	            // Chunck variables
	            var chunkPatterns = /include\[([^\]]*)\]/g;
	
	            // Prepare cache
	            ProgramLibrary.cache[name] = { data: null, ready: false, sources: [] };
	
	            /**
	            * Callback for chunks
	            *
	            * @param {boolean} status Load status
	            * @param {string} chunkData Chunk data
	            * @param {Object=} userData Additional data
	            */
	            var chunkCallback = function chunkCallback(status, chunkData, userData) {
	                // Put chunk data in cache
	                ProgramLibrary.chunks[userData].data = chunkData;
	                ProgramLibrary.chunks[userData].ready = true;
	
	                // Try to update
	                ProgramLibrary.tryUpdateWaitingPrograms();
	            };
	
	            // Callback processing chunk
	            var callback = function callback(type, programName, data) {
	                var program = ProgramLibrary.programs[name];
	                var sources = program.getSources();
	                var chunks = data.match(chunkPatterns);
	
	                // Analyse if the file ask external chunks
	                if (chunks) {
	                    var missingChunkCount = chunks.length;
	
	                    for (var i = 0; i < chunks.length; i++) {
	                        var chunk = chunks[i];
	                        var chunkPath = chunk.substring(chunk.lastIndexOf('[') + 1, chunk.lastIndexOf(']'));
	
	                        if (ProgramLibrary.chunks[chunkPath] && ProgramLibrary.chunks[chunkPath].ready) missingChunkCount--;else if (!ProgramLibrary.chunks[chunkPath]) {
	                            ProgramLibrary.chunks[chunkPath] = { data: '', ready: false };
	                            _FileLoader.FileLoader.load(ProgramLibrary.folderPath + chunkPath + '?' + new Date().getTime(), chunkCallback, chunkPath);
	                        }
	                    }
	
	                    // Everything is in memory? We can fill the program directly
	                    var result = ProgramLibrary.replaceChunks(data);
	                    if (missingChunkCount === 0) ProgramLibrary.fillProgram(sources, program, name, type, result || '');
	                } else ProgramLibrary.fillProgram(sources, program, name, type, data);
	            };
	
	            // Load vertex file
	            _FileLoader.FileLoader.load(ProgramLibrary.folderPath + vertexShaderFile + '?' + new Date().getTime(), function (status, data) {
	                data = ProgramLibrary.addDefines(data, defines || []);
	                ProgramLibrary.cache[name].sources[0] = data;
	                callback(ProgramLibrary.Target.Vertex, name, data);
	            });
	
	            // Load fragment file
	            _FileLoader.FileLoader.load(ProgramLibrary.folderPath + fragmentShaderFile + '?' + new Date().getTime(), function (status, data) {
	                data = ProgramLibrary.addDefines(data, defines || []);
	
	                ProgramLibrary.cache[name].sources[1] = data;
	                callback(ProgramLibrary.Target.Fragment, name, data);
	            });
	
	            return program;
	        }
	
	        /**
	         * Shortcut to fill program with sources and clear the cache.
	         * @private
	         * @param {Array.<string>} sources Vertex and fragment sources.
	         * @param {Program} program A Program instance.
	         * @param {string} name Program's name.
	         * @param {ProgramLibrary.Target} type Type of data.
	         * @param {string} data Data to add to the program.
	         */
	
	    }, {
	        key: 'fillProgram',
	        value: function fillProgram(sources, program, name, type, data) {
	            if (type == ProgramLibrary.Target.Vertex) program.loadFromData(data, sources[1]);else program.loadFromData(sources[0], data);
	
	            if (program.isReady()) delete ProgramLibrary.cache[name];
	        }
	    }, {
	        key: 'tryUpdateWaitingPrograms',
	
	        /**
	         * Update waiting programs
	         *
	         * @private
	         */
	        value: function tryUpdateWaitingPrograms() {
	            for (var i in ProgramLibrary.programs) {
	                if (!ProgramLibrary.programs[i].isReady()) {
	                    var sources = ProgramLibrary.programs[i].getSources();
	                    for (var j = 0; j < 2; j++) {
	                        if (!sources[j]) {
	                            var source = ProgramLibrary.replaceChunks(ProgramLibrary.cache[i].sources[j]);
	                            if (source) ProgramLibrary.fillProgram(sources, ProgramLibrary.programs[i], i, j === 0 ? ProgramLibrary.Target.Vertex : ProgramLibrary.Target.Fragment, source);
	                        }
	                    }
	                }
	            }
	        }
	
	        /**
	         * Fill programs with chunks data
	         *
	         * @private
	         * @param {string} data Data to process
	         * @return {?string} A string if everything is ok, otherwise null
	         */
	
	    }, {
	        key: 'replaceChunks',
	        value: function replaceChunks(data) {
	            var chunkPattern = /include\[([^\]]*)\]/;
	            var result = data;
	
	            while (chunkPattern.test(result)) {
	                var chunk = result.match(chunkPattern);
	                var chunkName = chunk[0].substring(chunk[0].lastIndexOf('[') + 1, chunk[0].lastIndexOf(']'));
	
	                // We need to wait all chunks to continue.
	                if (!ProgramLibrary.chunks[chunkName] || !ProgramLibrary.chunks[chunkName].ready) return null;
	
	                result = result.replace(chunk[0], ProgramLibrary.chunks[chunkName].data || '');
	            }
	
	            return result;
	        }
	
	        /**
	         * Add defines to the program
	         *
	         * @private
	         * @param {string} source Source data
	         * @param {Array.<string>} defines An array with defines to add to the source parameter
	         * @return {string} The new string
	         */
	
	    }, {
	        key: 'addDefines',
	        value: function addDefines(source, defines) {
	            if (!defines) return source;
	
	            var defineString = '';
	            for (var i = 0; i < defines.length; i++) {
	                defineString += '#define ' + defines[i] + '\n';
	            }return defineString + source;
	        }
	    }]);
	
	    return ProgramLibrary;
	}();
	
	/**
	 * Put data in cache due to asynchrone loading
	 *
	 * @type {Array.<{data: null, ready: boolean, sources: Array<string>}>}
	 */
	
	ProgramLibrary.cache = [];
	
	/**
	 * Chunks in cache
	 *
	 * @type {Array.<{data: string, ready: boolean}>}
	 */
	ProgramLibrary.chunks = [];
	
	/**
	 * Path to the folder with shaders
	 *
	 * @type {string}
	 */
	ProgramLibrary.folderPath = '../shaders/';
	
	/**
	 * Shaders
	 *
	 * @type {Array.<Program>}
	 */
	ProgramLibrary.programs = [];
	
	/**
	 * Target
	 *
	 * @enum {number}
	 */
	ProgramLibrary.Target = { Vertex: 0, Fragment: 1 };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Texture = undefined;
	
	var _TextureInterface2 = __webpack_require__(35);
	
	var _Image = __webpack_require__(36);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A texture
	 *
	 * @extends {TextureInterface}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Texture = exports.Texture = function (_TextureInterface) {
	  _inherits(Texture, _TextureInterface);
	
	  /**
	   * Constructor
	   *
	   * @param {string} path Path to the texture file
	   */
	
	  function Texture() {
	    var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	    _classCallCheck(this, Texture);
	
	    /**
	     * Image instance
	     *
	     * @type {Image}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Texture).call(this));
	
	    _this.image = null;
	
	    /**
	     * Repeat the texture
	     *
	     * @type {boolean}
	     * @private
	     */
	    _this.repeat = true;
	
	    /**
	     * Smooth the texture
	     *
	     * @type {boolean}
	     * @private
	     */
	    _this.smooth = true;
	
	    if (path.length) _this.loadFromFile(path);
	    return _this;
	  }
	
	  /**
	   * Load texture from a file
	   *
	   * @param {string} path Path to the texture file
	   */
	
	  _createClass(Texture, [{
	    key: 'loadFromFile',
	    value: function loadFromFile(path) {
	      this.image = new _Image.Img();
	      this.image.loadFromFile(path);
	    }
	
	    /**
	     * Load texture from an Image
	     *
	     * @param {Image} image An Image instance
	     */
	
	  }, {
	    key: 'loadFromImage',
	    value: function loadFromImage(image) {
	      this.image = image;
	    }
	
	    /**
	     * Repeat the texture
	     *
	     * @param {boolean} value True to repeat, otherwise false
	     */
	
	  }, {
	    key: 'setRepeated',
	    value: function setRepeated(value) {
	      this.repeat = value;
	    }
	
	    /**
	     * Smooth the texture
	     *
	     * @param {boolean} value True to smooth, otherwise false
	     */
	
	  }, {
	    key: 'setSmooth',
	    value: function setSmooth(value) {
	      this.smooth = value;
	    }
	
	    /**
	     * Get image instance
	     *
	     * @return {?Image} An Image instance
	     */
	
	  }, {
	    key: 'getImage',
	    value: function getImage() {
	      return this.image;
	    }
	
	    /**
	     * Indicate if texture is ready
	     *
	     * @return {boolean} True if the texture is ready to be use
	     */
	
	  }, {
	    key: 'isReady',
	    value: function isReady() {
	      if (!this.image) return false;
	
	      var textureSize = this.image.getSize();
	      if (textureSize[0] === 0 || textureSize[1] === 0) return false;
	
	      return true;
	    }
	
	    /**
	     * Indicate if the texture is repeated
	     *
	     * @return {boolean} True if the texture is repeated
	     * @override
	     */
	
	  }, {
	    key: 'isRepeated',
	    value: function isRepeated() {
	      return this.repeat;
	    }
	
	    /**
	     * Indicate if the texture is smoothed
	     *
	     * @return {boolean} True if the texture is smoothed
	     * @override
	     */
	
	  }, {
	    key: 'isSmoothed',
	    value: function isSmoothed() {
	      return this.smooth;
	    }
	  }]);
	
	  return Texture;
	}(_TextureInterface2.TextureInterface);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TextureInterface = undefined;
	
	var _ContextResource2 = __webpack_require__(21);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A texture
	 *
	 * @extends {ContextResource}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var TextureInterface = exports.TextureInterface = function (_ContextResource) {
	  _inherits(TextureInterface, _ContextResource);
	
	  /**
	   * Constructor
	   */
	
	  function TextureInterface() {
	    _classCallCheck(this, TextureInterface);
	
	    /**
	     * State
	     *
	     * @type {boolean}
	     * @protected
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextureInterface).call(this));
	
	    _this.ready = false;
	
	    /**
	     * Mipmap state
	     *
	     * @type {boolean}
	     * @protected
	     */
	    _this.mipmap = true;
	    return _this;
	  }
	
	  /**
	   * Indicate if texture is ready
	   *
	   * @return {boolean} True if the texture is ready to be use
	   */
	
	  _createClass(TextureInterface, [{
	    key: 'isReady',
	    value: function isReady() {
	      return this.ready;
	    }
	
	    /**
	     * Indicate if the texture use mip-mapping
	     *
	     * @return {boolean} True if the texture is mip-mapped
	     */
	
	  }, {
	    key: 'isMipmaped',
	    value: function isMipmaped() {
	      return this.mipmap;
	    }
	
	    /**
	     * Indicate if the texture is repeated
	     *
	     * @return {boolean} True if the texture is repeated
	     */
	
	  }, {
	    key: 'isRepeated',
	    value: function isRepeated() {
	      return false;
	    }
	
	    /**
	     * Indicate if the texture is smoothed
	     *
	     * @return {boolean} True if the texture is smoothed
	     */
	
	  }, {
	    key: 'isSmoothed',
	    value: function isSmoothed() {
	      return false;
	    }
	
	    /**
	     * Indicate if the texture must use mip-mapping
	     *
	     * @param {boolean} value True to use mip-mapping
	     */
	
	  }, {
	    key: 'useMipmap',
	    value: function useMipmap(value) {
	      this.mipmap = value;
	    }
	  }]);
	
	  return TextureInterface;
	}(_ContextResource2.ContextResource);

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * An image
	 * Use a weird name due to the lack of namespace in Javascript :(
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Img = exports.Img = function () {
	  /**
	   * Constructor
	   */
	
	  function Img() {
	    _classCallCheck(this, Img);
	
	    /**
	     * Native instance
	     *
	     * @type {Image}
	     * @private
	     */
	    this.data = new Image();
	
	    /**
	     * Height
	     *
	     * @type {number}
	     * @private
	     */
	    this.height = 0;
	
	    /**
	     * Pixels
	     *
	     * @type {Uint8Array}
	     * @private
	     */
	    this.pixels = null;
	
	    /**
	     * Status
	     *
	     * @type {Img.Status}
	     * @private
	     */
	    this.status = Img.Status.Unload;
	
	    /**
	     * Width
	     *
	     * @type {number}
	     * @private
	     */
	    this.width = 0;
	  }
	
	  /**
	   * Load image from a file
	   *
	   * @param {string} path Path to the image file
	   */
	
	  _createClass(Img, [{
	    key: "loadFromFile",
	    value: function loadFromFile(path) {
	      var _this = this;
	
	      this.data.onload = function () {
	        _this.status = Img.Status.Loaded;
	        _this.width = _this.data.width;
	        _this.height = _this.data.height;
	        _this.pixels = null;
	      };
	
	      this.data.src = path;
	    }
	
	    /**
	     * Create a new image
	     *
	     * @param {number} width Image's width
	     * @param {number} height Image's height
	     * @param {Uint8Array?} data An array with pixels (r, g, b, a)
	     */
	
	  }, {
	    key: "create",
	    value: function create(width, height) {
	      var data = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	      this.pixels = data ? data : new Uint8Array(width * height * 4);
	      this.data = null;
	      this.width = width;
	      this.height = height;
	      this.status = Img.Status.Loaded;
	    }
	
	    /**
	     * Get image's dimensions
	     *
	     * @return {Array.<number>} Image's width and height in pixel
	     */
	
	  }, {
	    key: "getSize",
	    value: function getSize() {
	      return [this.width, this.height];
	    }
	
	    /**
	     * Get Image's data
	     *
	     * @return {Image|Uint8Array} A native Image object or an array depending method use to load the image
	     */
	
	  }, {
	    key: "getData",
	    value: function getData() {
	      return this.data || this.pixels;
	    }
	
	    /**
	     * Indicate if the image is ready to be use
	     *
	     * @return {boolean} True if image is ready, otherwise false
	     */
	
	  }, {
	    key: "isReady",
	    value: function isReady() {
	      return this.status == Img.Status.Loaded;
	    }
	  }]);
	
	  return Img;
	}();
	
	/**
	 * Status
	 *
	 * @enum {number}
	 */
	
	Img.Status = { Unload: 0, Loading: 1, Loaded: 2 };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PointLight = undefined;
	
	var _Light2 = __webpack_require__(15);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A point light
	 *
	 * @extends {Light}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var PointLight = exports.PointLight = function (_Light) {
	  _inherits(PointLight, _Light);
	
	  /**
	   * Constructor
	   */
	
	  function PointLight() {
	    _classCallCheck(this, PointLight);
	
	    /**
	     * Constant value
	     *
	     * @type {number}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PointLight).call(this));
	
	    _this.constant = 1.0;
	
	    /**
	     * Lieanr value
	     *
	     * @type {number}
	     * @private
	     */
	    _this.linear = 0.09;
	
	    /**
	     * Quadratic value
	     *
	     * @type {number}
	     * @private
	     */
	    _this.quadratic = 0.032;
	    return _this;
	  }
	
	  /**
	   * Set point light's values
	   *
	   * @param {number} constant The constant value
	   * @param {number} linear The linear value
	   * @param {number} quadratic The quadratic value
	   */
	
	  _createClass(PointLight, [{
	    key: 'setValues',
	    value: function setValues(constant, linear, quadratic) {
	      this.constant = constant;
	      this.linear = linear;
	      this.quadratic = quadratic;
	    }
	
	    /**
	     * Get values
	     *
	     * @return {Array.<number>} An array with constant, linear and quadratic values
	     */
	
	  }, {
	    key: 'getValues',
	    value: function getValues() {
	      return [this.constant, this.linear, this.quadratic];
	    }
	  }]);
	
	  return PointLight;
	}(_Light2.Light);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PostEffect = undefined;
	
	var _Color = __webpack_require__(13);
	
	var _RenderTexture = __webpack_require__(39);
	
	var _Sprite = __webpack_require__(50);
	
	var _SpriteCommand = __webpack_require__(51);
	
	var _RenderWebGL = __webpack_require__(43);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A class to create post-effects
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var PostEffect = exports.PostEffect = function () {
	    /**
	     * Constructor
	     *
	     * @param {Program} program A Program instance.
	     */
	
	    function PostEffect(program) {
	        _classCallCheck(this, PostEffect);
	
	        /**
	        * The render API to use
	        *
	        * @type {RenderAPI}
	        * @protected
	        */
	        this.renderApi = _RenderWebGL.WebGL.getInstance();
	
	        /**
	        * Textures where we will apply effects
	        *
	        * @type {RenderTexture}
	        * @private
	        */
	        this.renderTexture = null;
	
	        /**
	        * Full screen sprite with the resulting effects
	        *
	        * @type {Sprite}
	        * @private
	        */
	        this.sprite = new _Sprite.Sprite();
	        this.sprite.setCustomProgram(program);
	    }
	
	    /**
	     * Init the post effect composer
	     *
	     * @param {number} width Resulting effect width
	     * @param {number} height Resulting effect height
	     * @param {boolean=} useDepthBuffer True to use depth buffer (useful in 3D)
	     * @param {boolean=} userStencilBuffer True to use stencil buffer
	     */
	
	    _createClass(PostEffect, [{
	        key: 'init',
	        value: function init(width, height) {
	            var useDepthBuffer = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	            var userStencilBuffer = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	            // Init texture
	            this.renderTexture = new _RenderTexture.RenderTexture(width, height, 1, useDepthBuffer, userStencilBuffer);
	
	            // Link resulting texture to the sprite
	            this.sprite.setSize(1, 1);
	            this.sprite.setTexture(this.renderTexture.getTextures()[0]);
	            this.sprite.setTextureRect(0, 0, width, height);
	        }
	
	        /**
	         * Begin
	         *
	         * @param {Color=} color A Color instance
	         */
	
	    }, {
	        key: 'begin',
	        value: function begin() {
	            var color = arguments.length <= 0 || arguments[0] === undefined ? new _Color.Color(30, 30, 30) : arguments[0];
	
	            if (!this.renderTexture) return;
	
	            this.renderTexture.clear(color);
	        }
	
	        /**
	         * End
	         */
	
	    }, {
	        key: 'end',
	        value: function end() {
	            if (!this.renderTexture) return;
	
	            // Display result
	            this.renderTexture.display();
	
	            // Draw the full screen quad
	            _SpriteCommand.SpriteCommand.draw(this.renderApi, this.sprite);
	        }
	    }, {
	        key: 'render',
	
	        /**
	         * Render the given scene
	         *
	         * @param {Scene} scene A Scene instance
	         * @param {Camera} camera A Camera instance
	         */
	        value: function render(scene, camera) {
	            this.renderTexture.render(scene, camera);
	        }
	
	        /**
	         * Set program to use
	         *
	         * @param {Program} program A Program instance
	         */
	
	    }, {
	        key: 'setProgram',
	        value: function setProgram(program) {
	            this.sprite.setCustomProgram(program);
	        }
	
	        /**
	         * Set value of an element from the program
	         *
	         * @param {string} name Element's name in the shader
	         * @param {Type} type Type of value to send
	         * @param {Array.<number>|number|boolean|Texture|Float32Array} value A value
	         */
	
	    }, {
	        key: 'setEffectValue',
	        value: function setEffectValue(name, type, value, groupCount) {
	            this.renderApi.setUniform(this.sprite.getCustomProgram(), name, type, value, groupCount);
	        }
	    }]);
	
	    return PostEffect;
	}();

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RenderTexture = undefined;
	
	var _Image = __webpack_require__(36);
	
	var _RenderTarget2 = __webpack_require__(40);
	
	var _Texture = __webpack_require__(34);
	
	var _RenderWebGL = __webpack_require__(43);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A rendering texture: Supported by WebGL only.
	 *
	 * @extends {RenderTarget}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var RenderTexture = exports.RenderTexture = function (_RenderTarget) {
	    _inherits(RenderTexture, _RenderTarget);
	
	    /**
	     * Constructor
	     *
	     * @param {number} width Texture's width
	     * @param {number} height Texture's height
	     * @param {number} textureCount Texture count
	     * @param {boolean=} useDepthBuffer True to use a depth buffer
	     * @param {boolean=} useStencilBuffer True to use a stencil buffer
	     */
	
	    function RenderTexture(width, height, textureCount) {
	        var useDepthBuffer = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
	        var useStencilBuffer = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	
	        _classCallCheck(this, RenderTexture);
	
	        /**
	        * The render API to use
	        *
	        * @type {RenderAPI}
	        * @protected
	        */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RenderTexture).call(this));
	
	        _this.renderApi = _RenderWebGL.WebGL.getInstance();
	
	        /**
	        * Frame buffer identifier
	        *
	        * @type {number}
	        * @private
	        */
	        _this.framebuffer = _this.renderApi.createFrameBuffer();
	
	        /**
	        * An array with the textures to draw in
	        *
	        * @type {Array.<Texture>}
	        * @private
	        */
	        _this.textures = [];
	
	        // Init the render texture
	        _this.init(width, height, textureCount, useDepthBuffer, useStencilBuffer);
	        return _this;
	    }
	
	    /**
	     * Init
	     *
	     * @param {number} width Texture's width
	     * @param {number} height Texture's height
	     * @param {number} textureCount Texture count
	     * @param {boolean=} useDepthBuffer True to use a depth buffer
	     * @param {boolean=} useStencilBuffer True to use a depth buffer
	     * @private
	     */
	
	    _createClass(RenderTexture, [{
	        key: 'init',
	        value: function init(width, height, textureCount) {
	            var useDepthBuffer = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
	            var useStencilBuffer = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	
	            // Create textures.
	            for (var i = 0; i < textureCount; i++) {
	                var image = new _Image.Img();
	                image.create(width, height, null);
	
	                var texture = new _Texture.Texture();
	                texture.setRepeated(false);
	                texture.setSmooth(true);
	                texture.useMipmap(false);
	                texture.loadFromImage(image);
	                this.textures.push(texture);
	            }
	
	            // Attach the texture to the frame buffer
	            this.renderApi.initFrameBuffer(this.framebuffer, this.textures, useDepthBuffer, useStencilBuffer);
	        }
	
	        /**
	         * Clear the texture
	         *
	         * @param {Color} color A Color instance
	         */
	
	    }, {
	        key: 'clear',
	        value: function clear(color) {
	            // Remove previous tasks.
	            this.removeTasks();
	
	            // Bind frame buffer.
	            this.begin();
	
	            // Clear screen.
	            this.renderApi.clear(color);
	        }
	
	        /**
	         * Begin rendering to texture
	         */
	
	    }, {
	        key: 'begin',
	        value: function begin() {
	            this.renderApi.bindFrameBuffer(this.framebuffer);
	        }
	
	        /**
	         * Display
	         */
	
	    }, {
	        key: 'display',
	        value: function display() {
	            _get(Object.getPrototypeOf(RenderTexture.prototype), 'display', this).call(this);
	
	            // Go back to the default buffer
	            this.renderApi.bindFrameBuffer(-1);
	        }
	
	        /**
	         * Output Textures
	         *
	         * @return {Array.<Texture>} An array of Texture
	         */
	
	    }, {
	        key: 'getTextures',
	        value: function getTextures() {
	            return this.textures;
	        }
	    }]);
	
	    return RenderTexture;
	}(_RenderTarget2.RenderTarget);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RenderTarget = undefined;
	
	var _Context = __webpack_require__(41);
	
	var _RenderTask = __webpack_require__(42);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A rendering target
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var RenderTarget = exports.RenderTarget = function () {
	    /**
	     * Constructor
	     */
	
	    function RenderTarget() {
	        _classCallCheck(this, RenderTarget);
	
	        /**
	        * A reference to the active task
	        *
	        * @type {null|RenderTask} 
	        * @protected
	        */
	        this.activeTask = null;
	
	        /**
	        * Context instance
	        *
	        * @type {Context} 
	        * @protected
	        */
	        this.context = new _Context.Context();
	
	        /**
	        * Tasks to execute
	        *
	        * @type {Array.<RenderTask>} 
	        * @protected
	        */
	        this.tasks = [];
	
	        /**
	        * The render API to use
	        *
	        * @type {RenderAPI}
	        * @protected
	        */
	        this.renderApi = null;
	    }
	
	    /**
	     * Clear the rendering target
	     *
	     * @param {Color} color A Color instance
	     */
	
	    _createClass(RenderTarget, [{
	        key: 'clear',
	        value: function clear(color) {}
	    }, {
	        key: 'display',
	
	        /**
	         * Display
	         */
	        value: function display() {
	            for (var i = 0; i < this.tasks.length; i++) {
	                this.tasks[i].execute(this.renderApi);
	            }
	        }
	
	        /**
	         * Create a new task
	         *
	         * @return {number} RenderTask's index
	         */
	
	    }, {
	        key: 'createTask',
	        value: function createTask() {
	            this.tasks.push(new _RenderTask.RenderTask());
	            return this.tasks.length - 1;
	        }
	
	        /**
	         * Render the given scene
	         *
	         * @param {Scene} scene A Scene instance
	         * @param {Camera} camera A Camera instance
	         */
	
	    }, {
	        key: 'render',
	        value: function render(scene, camera) {
	            // Clear render API cache
	            this.renderApi.clearCache();
	
	            // Set default camera
	            this.renderApi.setActiveCamera(camera);
	
	            // Ensure at least one task is alive
	            if (!this.getActiveTask()) this.setActiveTask(this.createTask());
	
	            // Manage the scene
	            scene.visit(this);
	        }
	
	        /**
	         * Set the task with the given index active
	         *
	         * @param {number} index An integer representing task's index
	         */
	
	    }, {
	        key: 'setActiveTask',
	        value: function setActiveTask(index) {
	            if (index >= 0 && index < this.tasks.length) this.activeTask = this.tasks[index];
	        }
	
	        /**
	         * Get the active task
	         *
	         * @return {?RenderTask} A RenderTask or null
	         */
	
	    }, {
	        key: 'getActiveTask',
	        value: function getActiveTask() {
	            return this.activeTask;
	        }
	
	        /**
	         * Remove all the tasks in memory
	         */
	
	    }, {
	        key: 'removeTasks',
	        value: function removeTasks() {
	            this.tasks.length = 0;
	            this.activeTask = null;
	        }
	
	        /**
	         * Get the render API
	         *
	         * @return {RenderAPI} A Render API instance
	         */
	
	    }, {
	        key: 'getRenderAPI',
	        value: function getRenderAPI() {
	            return this.renderApi;
	        }
	
	        /**
	         * Get size
	         *
	         * @return {Array.<number>} A array with size on x and y
	         */
	
	    }, {
	        key: 'getSize',
	        value: function getSize() {
	            return this.context.getSize();
	        }
	    }]);
	
	    return RenderTarget;
	}();

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A context
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Context = exports.Context = function () {
	  /**
	   * Constructor
	   */
	
	  function Context() {
	    _classCallCheck(this, Context);
	
	    /**
	     * The DOM element
	     *
	     * @type {Element}
	     */
	    this.domElement = null;
	
	    /**
	     * Context instance
	     *
	     * @type {WebGLRenderingContext|Object}
	     * @public
	     */
	    this.instance = null;
	  }
	
	  /**
	   * Shortcut to the active context's instance
	   *
	   * @enum {Object}
	   */
	
	  _createClass(Context, [{
	    key: 'init',
	
	    /**
	     * Init
	     *
	     * @param {Context.Type} type Type of context
	     * @param {{antialiasing: boolean, width: (number|undefined), height: (number|undefined)}} options Options
	     * @param {string} targetID Targeted DOM element
	     */
	    value: function init(type, options, targetID) {
	      // Get DOM element.
	      var target = document.getElementById(targetID);
	      if (!target) throw '404 - Canvas with the name ' + targetID + ' not found.';
	
	      // Init webgl context.
	      if (type == Context.Type.WebGL) {
	        // Create canvas.
	        this.domElement = document.createElement('canvas');
	        this.domElement.width = target.offsetWidth;
	        this.domElement.height = target.offsetHeight;
	        target.appendChild(this.domElement);
	
	        // Init WebGL.
	        this.instance = this.domElement.getContext('webgl', { antialias: options.antialiasing || true });
	        this.instance.viewportWidth = this.domElement.width;
	        this.instance.viewportHeight = this.domElement.height;
	      }
	
	      // Set as active context.
	      if (!Context.current) Context.current = this;
	    }
	
	    /**
	     * Resize context
	     *
	     * @param {number} width Width to assign in pixel
	     * @param {number} height Height to assign in pixel
	     */
	
	  }, {
	    key: 'resize',
	    value: function resize(width, height) {
	      if (!this.domElement || !this.instance) return;
	
	      // DOM
	      this.domElement.width = width;
	      this.domElement.height = height;
	
	      // WebGL
	      this.instance.viewportWidth = width;
	      this.instance.viewportHeight = height;
	    }
	
	    /**
	     * Activate the context
	     *
	     * The context become the one used by the renderer
	     */
	
	  }, {
	    key: 'activate',
	    value: function activate() {
	      Context.current = this;
	    }
	
	    /**
	     * Get size
	     *
	     * @return {Array.<number>} A array with size on x and y
	     */
	
	  }, {
	    key: 'getSize',
	    value: function getSize() {
	      return [this.domElement.width, this.domElement.height];
	    }
	  }], [{
	    key: 'getActive',
	    value: function getActive() {
	      return Context.current.instance;
	    }
	  }]);
	
	  return Context;
	}();
	
	/**
	 * Type of context
	 *
	 * @enum {number}
	 */
	
	Context.Type = { WebGL: 0 };
	
	/**
	 * Active context
	 *
	 * @type {Context}
	 */
	Context.current = null;

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A rendering task
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var RenderTask = exports.RenderTask = function () {
	    /**
	     * Constructor
	     */
	
	    function RenderTask() {
	        _classCallCheck(this, RenderTask);
	
	        /**
	        * Queue with opaques commands to process
	        *
	        * @type {Array.<Array.<RenderCommand>>}
	        * @private
	        */
	        this.opaqueQueue = [];
	
	        /**
	        * Queue with transparents commands to process
	        *
	        * @type {Array.<Array.<RenderCommand>>}
	        * @private
	        */
	        this.transparentQueue = [];
	    }
	
	    /**
	     * Add a command to the task
	     *
	     * @param {RenderCommand} command A RenderCommand instance
	     * @param {number=} queue ID of the queue
	     */
	
	    _createClass(RenderTask, [{
	        key: "addCommand",
	        value: function addCommand(command) {
	            var queue = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	
	            if (command.isOpaque()) {
	                this.opaqueQueue[queue] = this.opaqueQueue[queue] || [];
	                this.opaqueQueue[queue].push(command);
	            } else {
	                this.transparentQueue[queue] = this.transparentQueue[queue] || [];
	                this.transparentQueue[queue].push(command);
	            }
	        }
	
	        /**
	         * Execute the task
	         *
	         * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
	         */
	
	    }, {
	        key: "execute",
	        value: function execute(renderAPI) {
	            var i = 0,
	                j = 0;
	
	            // First we execute opaque commands
	            for (i = 0; i < this.opaqueQueue.length; i++) {
	                for (j = 0; j < this.opaqueQueue[i].length; j++) {
	                    this.opaqueQueue[i][j].execute(renderAPI);
	                }
	            }
	
	            // Secondly, we execute non-opaque ones
	            for (i = 0; i < this.transparentQueue.length; i++) {
	                for (j = 0; j < this.transparentQueue[i].length; j++) {
	                    this.transparentQueue[i][j].execute(renderAPI);
	                }
	            }
	        }
	    }]);
	
	    return RenderTask;
	}();

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.WebGL = undefined;
	
	var _Cache = __webpack_require__(44);
	
	var _Context = __webpack_require__(41);
	
	var _DirectionalLight = __webpack_require__(14);
	
	var _Instances = __webpack_require__(45);
	
	var _PointLight = __webpack_require__(37);
	
	var _Program = __webpack_require__(29);
	
	var _RenderAPI2 = __webpack_require__(46);
	
	var _StateBlock = __webpack_require__(18);
	
	var _TextureCube = __webpack_require__(47);
	
	var _TextureVideo = __webpack_require__(48);
	
	var _Types = __webpack_require__(25);
	
	var _VertexFormat = __webpack_require__(22);
	
	var _WebGL = __webpack_require__(49);
	
	var WebGLConst = _interopRequireWildcard(_WebGL);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Unique instance
	var instance = null;
	
	/**
	 * WebGL renderer
	 *
	 * @extends {RenderAPI}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var WebGL = exports.WebGL = function (_RenderAPI) {
	    _inherits(WebGL, _RenderAPI);
	
	    /**
	     * Constructor
	     */
	
	    function WebGL() {
	        var _ret;
	
	        _classCallCheck(this, WebGL);
	
	        // Singleton
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WebGL).call(this));
	
	        if (!instance) instance = _this;
	
	        /**
	         * Cache
	         *
	         * @type {WebGL.Cache}
	         * @private
	         */
	        _this.cache = new _Cache.Cache();
	
	        /**
	         * Array with enabled attribut
	         *
	         * @type {Array.<boolean>}
	         * @private
	         */
	        _this.enabledVertexAttribArray = [];
	
	        /**
	         * WebGL instances
	         *
	         * @type {Instances}
	         * @private
	         */
	        _this.instances = new _Instances.Instances();
	
	        /**
	         * Active states
	         *
	         * @type {StateBlock}
	         * @private
	         */
	        _this.state = new _StateBlock.StateBlock();
	
	        // Init state block
	        _this.initStateBlockWithDefaultValues(_this.state);
	
	        return _ret = instance, _possibleConstructorReturn(_this, _ret);
	    }
	
	    /**
	     * Get unique instance
	     */
	
	    _createClass(WebGL, [{
	        key: 'bindLight',
	
	        /**
	         * Bind light
	         *
	         * @param {Light} light A Light instance
	         */
	        value: function bindLight(light) {
	            this.cache.lights.push(light);
	        }
	
	        /**
	         * Bind the given framebuffer
	         *
	         * @param {number} framebufferID An identifier, -1 to bind default the frame buffer
	         */
	
	    }, {
	        key: 'bindFrameBuffer',
	        value: function bindFrameBuffer(framebufferID) {
	            var gl = _Context.Context.getActive();
	
	            if (framebufferID == -1) gl.bindFramebuffer(WebGLConst.FRAMEBUFFER, null);else {
	                var webGLBuffer = this.instances.frameBuffers[framebufferID];
	                if (!webGLBuffer) return;
	
	                gl.bindFramebuffer(WebGLConst.FRAMEBUFFER, webGLBuffer);
	            }
	        }
	
	        /**
	         * Bind texture to the the given slot
	         *
	         * @param {number} slot Targeted slot's index
	         * @param {Private.TextureInterface} texture A Texture instance
	         */
	
	    }, {
	        key: 'bindTexture',
	        value: function bindTexture(slot, texture) {
	            if (!texture.isReady()) return;
	
	            var isTextureVideo = texture instanceof _TextureVideo.TextureVideo;
	            var needUpdate = false;
	
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	
	            // Create WebGL instance
	            var webGLTexture = this.instances.textures[texture.getUID()];
	            if (!webGLTexture) {
	                webGLTexture = gl.createTexture();
	                this.instances.textures[texture.getUID()] = webGLTexture;
	                needUpdate = true;
	            }
	
	            // Bind it!
	            if (this.cache.texture != texture) {
	                gl.activeTexture(WebGLConst.TEXTURE0 + slot);
	                gl.bindTexture(WebGLConst.TEXTURE_2D, webGLTexture);
	            }
	
	            // Need to update the texture?
	            if (needUpdate) {
	                var imageSize = [0, 0];
	
	                gl.pixelStorei(WebGLConst.UNPACK_FLIP_Y_WEBGL, true);
	
	                // Upload to the GPU
	                if (isTextureVideo) gl.texImage2D(WebGLConst.TEXTURE_2D, 0, WebGLConst.RGBA, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, texture.getVideoData());else {
	                    // WebGL support image loading from HTMLImage instance and from array of pixels
	                    var image = texture.getImage();
	                    var data = image.getData();
	                    imageSize = image.getSize();
	
	                    if (data instanceof Image) gl.texImage2D(WebGLConst.TEXTURE_2D, 0, WebGLConst.RGBA, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, data);else gl.texImage2D(WebGLConst.TEXTURE_2D, 0, WebGLConst.RGBA, imageSize[0], imageSize[1], 0, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, data);
	                }
	
	                var isPOT = (imageSize[0] & imageSize[0] - 1) === 0 && (imageSize[1] & imageSize[1] - 1) === 0;
	
	                // Apply filters.
	                gl.texParameteri(WebGLConst.TEXTURE_2D, WebGLConst.TEXTURE_WRAP_S, texture.isRepeated() ? WebGLConst.REPEAT : WebGLConst.CLAMP_TO_EDGE);
	                gl.texParameteri(WebGLConst.TEXTURE_2D, WebGLConst.TEXTURE_WRAP_T, texture.isRepeated() ? WebGLConst.REPEAT : WebGLConst.CLAMP_TO_EDGE);
	
	                gl.texParameteri(WebGLConst.TEXTURE_2D, WebGLConst.TEXTURE_MAG_FILTER, texture.isSmoothed() ? WebGLConst.LINEAR : WebGLConst.NEAREST);
	
	                var min_filter = isPOT && texture.isMipmaped() ? WebGLConst.LINEAR_MIPMAP_NEAREST : WebGLConst.LINEAR;
	                gl.texParameteri(WebGLConst.TEXTURE_2D, WebGLConst.TEXTURE_MIN_FILTER, texture.isSmoothed() ? min_filter : WebGLConst.NEAREST);
	
	                if (!isTextureVideo && isPOT && texture.isMipmaped()) gl.generateMipmap(WebGLConst.TEXTURE_2D);
	            }
	            // Video need to be updated continuously
	            else if (isTextureVideo) gl.texImage2D(WebGLConst.TEXTURE_2D, 0, WebGLConst.RGBA, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, texture.getVideoData());
	
	            this.cache.texture = texture;
	        }
	
	        /**
	         * Bind texture cube to the the given slot
	         *
	         * @param {number} slot Targeted slot's index
	         * @param {TextureCube} texture A TextureCube instance
	         */
	
	    }, {
	        key: 'bindTextureCube',
	        value: function bindTextureCube(slot, texture) {
	            // Cache
	            if (!texture.isReady()) return;
	
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	
	            // Create geometry's data
	            var needUpdate = false;
	            var webGLTexture = this.instances.textures[texture.getUID()];
	            if (!webGLTexture) {
	                webGLTexture = gl.createTexture();
	                this.instances.textures[texture.getUID()] = webGLTexture;
	                needUpdate = true;
	            }
	
	            if (this.cache.texture != texture) {
	                gl.activeTexture(WebGLConst.TEXTURE0 + slot);
	                gl.bindTexture(WebGLConst.TEXTURE_CUBE_MAP, webGLTexture);
	            }
	
	            // Need to update the texture?
	            if (needUpdate) {
	                var images = texture.getImages();
	
	                // Upload to the GPU
	                gl.texImage2D(WebGLConst.TEXTURE_CUBE_MAP_POSITIVE_X, 0, WebGLConst.RGBA, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, images[_TextureCube.TextureCube.Face.Left].getData());
	                gl.texImage2D(WebGLConst.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, WebGLConst.RGBA, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, images[_TextureCube.TextureCube.Face.Right].getData());
	                gl.texImage2D(WebGLConst.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, WebGLConst.RGBA, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, images[_TextureCube.TextureCube.Face.Up].getData());
	                gl.texImage2D(WebGLConst.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, WebGLConst.RGBA, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, images[_TextureCube.TextureCube.Face.Down].getData());
	                gl.texImage2D(WebGLConst.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, WebGLConst.RGBA, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, images[_TextureCube.TextureCube.Face.Front].getData());
	                gl.texImage2D(WebGLConst.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, WebGLConst.RGBA, WebGLConst.RGBA, WebGLConst.UNSIGNED_BYTE, images[_TextureCube.TextureCube.Face.Back].getData());
	
	                // Apply filters
	                gl.texParameteri(WebGLConst.TEXTURE_CUBE_MAP, WebGLConst.TEXTURE_MAG_FILTER, WebGLConst.NEAREST);
	                gl.texParameteri(WebGLConst.TEXTURE_CUBE_MAP, WebGLConst.TEXTURE_MIN_FILTER, WebGLConst.NEAREST);
	            }
	
	            this.cache.texture = texture;
	        }
	
	        /**
	         * Clear the rendering target
	         *
	         * @param {Color} color A Color instance
	         */
	
	    }, {
	        key: 'clear',
	        value: function clear(color) {
	            // Apply color.
	            if (!color.isEqual(this.cache.clearColor)) {
	                _Context.Context.getActive().clearColor(color.r, color.g, color.b, color.a);
	                this.cache.clearColor = color;
	            }
	
	            // Clear buffers
	            _Context.Context.getActive().clear(WebGLConst.COLOR_BUFFER_BIT | WebGLConst.DEPTH_BUFFER_BIT | WebGLConst.DEPTH_BUFFER_BIT);
	        }
	
	        /**
	         * Clear cache.
	         */
	
	    }, {
	        key: 'clearCache',
	        value: function clearCache() {
	            this.cache.program = null;
	            this.cache.lights.length = 0;
	        }
	
	        /**
	         * Create a new frame buffer
	         *
	         * @return {number} An identifier to work with it later
	         */
	
	    }, {
	        key: 'createFrameBuffer',
	        value: function createFrameBuffer() {
	            var identifier = this.instances.frameBuffers.length;
	
	            var frameBuffer = _Context.Context.getActive().createFramebuffer();
	            this.instances.frameBuffers.push(frameBuffer);
	
	            return identifier;
	        }
	
	        /**
	        * Draw indexed primitives
	        *
	        * @param {DrawingMode} drawingMode Drawing mode to use
	        * @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts
	        * @param {number} vertexCount Vertex count to draw
	        */
	
	    }, {
	        key: 'drawIndexedPrimitives',
	        value: function drawIndexedPrimitives(drawingMode, firstVertexIndex, vertexCount) {
	            _Context.Context.getActive().drawElements(this.convertDrawingModeToConstant(drawingMode), vertexCount, WebGLConst.UNSIGNED_SHORT, firstVertexIndex);
	            this.disableVertexAttribArray();
	        }
	
	        /**
	        * Draw primitives
	        *
	        * @param {DrawingMode} drawingMode Drawing mode to use
	        * @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts
	        * @param {number} vertexCount Vertex count to draw
	        */
	
	    }, {
	        key: 'drawPrimitives',
	        value: function drawPrimitives(drawingMode, firstVertexIndex, vertexCount) {
	            _Context.Context.getActive().drawArrays(this.convertDrawingModeToConstant(drawingMode), firstVertexIndex, vertexCount);
	            this.disableVertexAttribArray();
	        }
	
	        /**
	        * Disable enabled vertex attributs array
	        *
	        * @private
	        */
	
	    }, {
	        key: 'disableVertexAttribArray',
	        value: function disableVertexAttribArray() {
	            // Retrieve context.
	            var gl = _Context.Context.getActive();
	
	            // Disable attributs
	            for (var i in this.enabledVertexAttribArray) {
	                gl.disableVertexAttribArray(i);
	            }
	        }
	
	        /**
	         * Init frame buffer: attach it to textures, depth buffer and/or a stencil buffer
	         *
	         * @param {number} framebufferID Targeted slot's index
	         * @param {Array.<Texture>} textures An array of Texture instances
	         * @param {boolean=} useDepthBuffer True to use a depth buffer
	         * @param {boolean=} useStencilBuffer True to use a stencil buffer
	         */
	
	    }, {
	        key: 'initFrameBuffer',
	        value: function initFrameBuffer(framebufferID, textures) {
	            var useDepthBuffer = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	            var useStencilBuffer = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	            // Ensure FBO is ready
	            var webGLBuffer = this.instances.frameBuffers[framebufferID];
	            if (!webGLBuffer) return;
	
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	            var size = [0, 0]; // We will retrieve FBO's size from his textures
	
	            // Bind frame buffer
	            this.bindFrameBuffer(framebufferID);
	
	            // Attach textures.
	            for (var i = 0; i < textures.length; i++) {
	                // Force texture creation
	                this.bindTexture(i, textures[i]);
	
	                // Retrieve size
	                size = textures[i].getImage().getSize();
	
	                // Attach texture
	                var webGLTexture = this.instances.textures[textures[i].getUID()];
	
	                // Multiple attachements are not supported by WebGL
	                gl.framebufferTexture2D(WebGLConst.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, WebGLConst.TEXTURE_2D, webGLTexture, 0);
	            }
	
	            // Attach depth and/or stencil buffers.
	            if (useDepthBuffer || useStencilBuffer) {
	                var renderBuffer = gl.createRenderbuffer();
	                gl.bindRenderbuffer(WebGLConst.RENDERBUFFER, renderBuffer);
	
	                if (!useStencilBuffer) {
	                    gl.renderbufferStorage(WebGLConst.RENDERBUFFER, WebGLConst.DEPTH_COMPONENT16, size[0], size[1]);
	                    gl.framebufferRenderbuffer(WebGLConst.FRAMEBUFFER, WebGLConst.DEPTH_ATTACHMENT, WebGLConst.RENDERBUFFER, renderBuffer);
	                } else {
	                    gl.renderbufferStorage(WebGLConst.RENDERBUFFER, WebGLConst.DEPTH_STENCIL, size[0], size[1]);
	                    gl.framebufferRenderbuffer(WebGLConst.FRAMEBUFFER, WebGLConst.DEPTH_STENCIL_ATTACHMENT, WebGLConst.RENDERBUFFER, renderBuffer);
	                }
	
	                gl.bindRenderbuffer(WebGLConst.RENDERBUFFER, null);
	            }
	
	            // Unbind FBO safely
	            this.bindFrameBuffer(-1);
	        }
	
	        /**
	        * Set default values on the state block instance
	        *
	        * @private
	        */
	
	    }, {
	        key: 'initStateBlockWithDefaultValues',
	        value: function initStateBlockWithDefaultValues(stateBlock) {
	            this.state.depthTest = false;
	            this.state.depthWrite = false;
	            this.state.stencilTest = false;
	        }
	
	        /**
	         * Send lights to the given program
	         *
	         * @param {Program} program A Program instance
	         * @private
	         */
	
	    }, {
	        key: 'sendLights',
	        value: function sendLights(program) {
	            var webGLProgram = this.instances.programs[program.getUID()];
	            if (!webGLProgram) return;
	
	            var lightCount = this.cache.lights.length;
	
	            // Fill arrays.
	            var light = this.cache.lights[0];
	            var needData = false;
	            var needDirection = false;
	            for (var i = 0, j = 0; i < this.cache.lights.length; i++, j += 3) {
	                light = this.cache.lights[i];
	
	                // Type of light
	                if (light instanceof _PointLight.PointLight) this.cache.lightsType[i] = 0;else if (light instanceof _DirectionalLight.DirectionalLight) this.cache.lightsType[i] = 1;else this.cache.lightsType[i] = 2;
	
	                // Ambient
	                var ambient = light.getAmbientColor();
	                this.cache.lightsAmbient[j] = ambient.r;
	                this.cache.lightsAmbient[j + 1] = ambient.g;
	                this.cache.lightsAmbient[j + 2] = ambient.b;
	
	                // Data (linear, quadratic and constant data)
	                if (this.cache.lightsType[i] != 1) {
	                    var values = light.getValues();
	                    this.cache.lightsData[j] = values[0];
	                    this.cache.lightsData[j + 1] = values[1];
	                    this.cache.lightsData[j + 2] = values[2];
	                    needData = true;
	                } else {
	                    this.cache.lightsData[j] = 0;
	                    this.cache.lightsData[j + 1] = 0;
	                    this.cache.lightsData[j + 2] = 0;
	                }
	
	                // Diffuse.
	                var diffuse = light.getDiffuseColor();
	                this.cache.lightsDiffuse[j] = diffuse.r;
	                this.cache.lightsDiffuse[j + 1] = diffuse.g;
	                this.cache.lightsDiffuse[j + 2] = diffuse.b;
	
	                // Direction.
	                if (this.cache.lightsType[i] !== 0) {
	                    var direction = light.getDirection();
	                    this.cache.lightsDirection[j] = direction[0];
	                    this.cache.lightsDirection[j + 1] = direction[1];
	                    this.cache.lightsDirection[j + 2] = direction[2];
	                    needDirection = true;
	                } else {
	                    this.cache.lightsDirection[j] = 0;
	                    this.cache.lightsDirection[j + 1] = 0;
	                    this.cache.lightsDirection[j + 2] = 0;
	                }
	
	                var position = light.getPosition();
	                this.cache.lightsPosition[j] = position[0];
	                this.cache.lightsPosition[j + 1] = position[1];
	                this.cache.lightsPosition[j + 2] = position[2];
	
	                // Specular.
	                var specular = light.getSpecularColor();
	                this.cache.lightsSpecular[j] = specular.r;
	                this.cache.lightsSpecular[j + 1] = specular.g;
	                this.cache.lightsSpecular[j + 2] = specular.b;
	            }
	
	            // Send data.
	            if (this.cache.lights.length) {
	                this.setUniform(program, 'uCameraPosition', _Types.Type.Float, this.activeCamera.getPosition());
	                this.setUniform(program, 'lights.count', _Types.Type.Int, lightCount);
	                this.setUniform(program, 'lights.ambient', _Types.Type.Float, this.cache.lightsAmbient, 3);
	
	                if (needData) this.setUniform(program, 'lights.data', _Types.Type.Float, this.cache.lightsData, 3);
	
	                this.setUniform(program, 'lights.diffuse', _Types.Type.Float, this.cache.lightsDiffuse, 3);
	
	                if (needDirection) this.setUniform(program, 'lights.direction', _Types.Type.Float, this.cache.lightsDirection, 3);
	
	                this.setUniform(program, 'lights.position', _Types.Type.Float, this.cache.lightsPosition, 3);
	                this.setUniform(program, 'lights.specular', _Types.Type.Float, this.cache.lightsSpecular, 3);
	                this.setUniform(program, 'lights.type', _Types.Type.Int, this.cache.lightsType, 1);
	            }
	        }
	
	        /**
	         * Set camera to use
	         *
	         * @param {Camera} camera A Camera instance
	         */
	
	    }, {
	        key: 'setActiveCamera',
	        value: function setActiveCamera(camera) {
	            _get(Object.getPrototypeOf(WebGL.prototype), 'setActiveCamera', this).call(this, camera);
	
	            var viewport = camera.getViewport();
	            _Context.Context.getActive().viewport(viewport[0], viewport[1], viewport[2], viewport[3]);
	        }
	
	        /**
	         * Set blend mode to apply
	         *
	         * @param {BlendMode} blendMode A BlendMode instance
	         */
	
	    }, {
	        key: 'setBlendMode',
	        value: function setBlendMode(blendMode) {
	            // Avoid useless operations
	            if (blendMode.isEqual(this.state.blendMode)) return;
	
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	
	            // Disable blending.
	            if (blendMode.colorSourceFactor == BlendMode.Factor.One && blendMode.colorDestinationFactor == BlendMode.Factor.Zero) gl.disable(WebGLConst.BLEND);else {
	                // Enable it
	                gl.enable(WebGLConst.BLEND);
	
	                // Apply functions and equations
	                gl.blendEquationSeparate(this.convertBlendingEquationToConstant(blendMode.colorEquation), this.convertBlendingEquationToConstant(blendMode.alphaEquation));
	
	                gl.blendFuncSeparate(this.convertBlendingFactorToConstant(blendMode.colorSourceFactor), this.convertBlendingFactorToConstant(blendMode.colorDestinationFactor), this.convertBlendingFactorToConstant(blendMode.alphaSourceFactor), this.convertBlendingFactorToConstant(blendMode.alphaDestinationFactor));
	            }
	
	            this.state.blendMode = blendMode;
	        }
	
	        /**
	         * Set depth state
	         *
	         * @param {boolean} depthTest True to activate depth testing, otherwise false
	         * @param {boolean} writeTest True to activate depth writing otherwise false
	         * @param {DepthFunction} depthFunction Depth function to apply
	         */
	
	    }, {
	        key: 'setDepthState',
	        value: function setDepthState(depthTest, writeTest, depthFunction) {
	            var gl = _Context.Context.getActive();
	
	            if (!depthTest && this.state.depthTest) gl.disable(WebGLConst.DEPTH_TEST);else if (depthTest) {
	                if (!this.state.depthTest) gl.enable(WebGLConst.DEPTH_TEST);
	
	                if (this.state.writeTest != writeTest) {
	                    gl.depthMask(writeTest);
	                    this.state.writeTest = writeTest;
	                }
	
	                if (this.state.depthFunction != depthFunction) {
	                    gl.depthFunc(this.convertDepthFunctionToConstant(depthFunction));
	                    this.state.depthFunction = depthFunction;
	                }
	            }
	
	            this.state.depthTest = depthTest;
	        }
	
	        /**
	         * Set face culling state
	         *
	         * @param {FaceCulling} mode Face culling mode to set
	         */
	
	    }, {
	        key: 'setFaceCulling',
	        value: function setFaceCulling(mode) {
	            // Avoid useless operations
	            if (this.state.faceCulling == mode) return;
	
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	
	            // Apply state
	            if (mode == FaceCulling.None) gl.disable(WebGLConst.CULL_FACE);else {
	                if (this.state.faceCulling == FaceCulling.None) gl.enable(WebGLConst.CULL_FACE);
	
	                if (mode == FaceCulling.Front) gl.cullFace(WebGLConst.FRONT);else gl.cullFace(WebGLConst.BACK);
	            }
	
	            this.state.faceCulling = mode;
	        }
	
	        /**
	         * Set index buffer to use
	         *
	         * @param {number|WebGLBuffer} buffer A buffer instance
	         */
	
	    }, {
	        key: 'setIndexBuffer',
	        value: function setIndexBuffer(buffer) {
	            _Context.Context.getActive().bindBuffer(WebGLConst.ELEMENT_ARRAY_BUFFER, buffer);
	        }
	
	        /**
	         * Set geometry to use
	         *
	         * @param {Geometry} geometry A Geometry instance
	         */
	
	    }, {
	        key: 'setGeometry',
	        value: function setGeometry(geometry) {
	            // Ensure valid format is present
	            if (!geometry.getVertexFormat()) return;
	
	            // Set vertex format to use
	            this.setVertexFormat(geometry.getVertexFormat());
	
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	
	            // Create geometry's data
	            var geometryInstances = this.instances.buffers[geometry.getUID()];
	            if (!geometryInstances) {
	                geometryInstances = new _Instances.BufferData();
	                this.instances.buffers[geometry.getUID()] = geometryInstances;
	            }
	
	            // Prepare/Set index buffer
	            {
	                if (!geometryInstances.indexBuffer) geometryInstances.indexBuffer = gl.createBuffer();
	
	                this.setIndexBuffer(geometryInstances.indexBuffer);
	
	                // Update buffer data
	                if (this.cache.vertexFormat.isIndicesWaitingUpdate()) {
	                    gl.bufferData(WebGLConst.ELEMENT_ARRAY_BUFFER, geometry.getIndices(), WebGLConst.STATIC_DRAW);
	                    this.cache.vertexFormat.setIndicesAsWaitingUpdate(false);
	                }
	            }
	
	            // Prepare/Set vertex buffer
	            var vertexElements = this.cache.vertexFormat.getElements();
	            for (var i = 0; i < vertexElements.length; i++) {
	                if (!geometryInstances.vertexBuffers[i]) geometryInstances.vertexBuffers[i] = gl.createBuffer();
	
	                // Apply buffer
	                this.setVertexBuffer(i, geometryInstances.vertexBuffers[i]);
	
	                // Fill it
	                if (this.cache.vertexFormat.isStreamWaitingUpdate(vertexElements[i].stream)) {
	                    var streamType = this.convertStreamTypeToConstant(this.cache.vertexFormat.getStreamType(vertexElements[i].stream));
	
	                    switch (vertexElements[i].usage) {
	                        case _VertexFormat.VertexElement.Usage.Position:
	                            gl.bufferData(WebGLConst.ARRAY_BUFFER, geometry.getVerticesPositions(), streamType);
	                            break;
	                        case _VertexFormat.VertexElement.Usage.Color:
	                            gl.bufferData(WebGLConst.ARRAY_BUFFER, geometry.getVerticesColors(), streamType);
	                            break;
	                        case _VertexFormat.VertexElement.Usage.UVS:
	                            gl.bufferData(WebGLConst.ARRAY_BUFFER, geometry.getVerticesUVs(), streamType);
	                            break;
	                        case _VertexFormat.VertexElement.Usage.Normal:
	                            gl.bufferData(WebGLConst.ARRAY_BUFFER, geometry.getVerticesNormals(), streamType);
	                            break;
	                        default:
	                        case _VertexFormat.VertexElement.Usage.Tangent:
	                            console.log('Given vertex element is not supported for now.');
	                            break;
	                    }
	
	                    this.cache.vertexFormat.setStreamAsWaitingUpdate(vertexElements[i].usage, false);
	                }
	            }
	        }
	
	        /**
	         * Set program to use
	         *
	         * @param {Program} program A Program instance to use
	         * @return {number} -1: an error occured, 0: everything is ok, 1 : program have been changed
	         */
	
	    }, {
	        key: 'setProgram',
	        value: function setProgram(program) {
	            var webGLProgram = this.instances.programs[program.getUID()];
	
	            // Retrieve context.
	            var gl = _Context.Context.getActive();
	
	            // Create program.
	            if (!webGLProgram) {
	                if (!program.isReady()) return -1;
	
	                var sources = program.getSources();
	                var programID = gl.createProgram();
	
	                // Load vertex and fragment shaders
	                var vertexShader = gl.createShader(WebGLConst.VERTEX_SHADER);
	                gl.shaderSource(vertexShader, sources[0]);
	                gl.compileShader(vertexShader);
	
	                var fragmentShader = gl.createShader(WebGLConst.FRAGMENT_SHADER);
	                gl.shaderSource(fragmentShader, sources[1]);
	                gl.compileShader(fragmentShader);
	
	                // Link to the program
	                gl.attachShader(programID, vertexShader);
	                gl.attachShader(programID, fragmentShader);
	
	                // Bind default locations
	                gl.bindAttribLocation(programID, _VertexFormat.VertexElement.Usage.Position, 'aPosition');
	                gl.bindAttribLocation(programID, _VertexFormat.VertexElement.Usage.UVS, 'aTexCoord');
	                gl.bindAttribLocation(programID, _VertexFormat.VertexElement.Usage.Color, 'aColor');
	                gl.bindAttribLocation(programID, _VertexFormat.VertexElement.Usage.Normal, 'aNormal');
	                gl.bindAttribLocation(programID, _VertexFormat.VertexElement.Usage.Tangent, 'aTangent');
	
	                // Link program
	                gl.linkProgram(programID);
	
	                // Remove vertex and fragment from memory
	                gl.deleteShader(vertexShader);
	                gl.deleteShader(fragmentShader);
	
	                // Save it
	                this.instances.programs[program.getUID()] = programID;
	                webGLProgram = programID;
	
	                // Get uniforms and attributs informations
	                {
	                    var i = undefined;
	                    var activeUniforms = gl.getProgramParameter(programID, WebGLConst.ACTIVE_UNIFORMS);
	                    var uniforms = program.getUniforms();
	                    for (i = 0; i < activeUniforms; i++) {
	                        var uniform = gl.getActiveUniform(programID, i);
	
	                        var finalName = uniform.name;
	                        var arrayPos = uniform.name.indexOf('[', uniform.name.length - 3);
	                        if (arrayPos >= 0) finalName = uniform.name.substring(0, arrayPos);
	
	                        uniforms[finalName] = new _Program.ProgramElement(gl.getUniformLocation(programID, uniform.name), finalName, this.convertConstantToShaderTypes(uniform.type), uniform.size);
	                    }
	
	                    var activeAttributes = gl.getProgramParameter(programID, WebGLConst.ACTIVE_ATTRIBUTES);
	                    var attributes = program.getAttributes();
	                    for (i = 0; i < activeAttributes; i++) {
	                        var attribute = gl.getActiveAttrib(programID, i);
	                        attributes[attribute.name] = new _Program.ProgramElement(gl.getAttribLocation(programID, attribute.name), attribute.name, this.convertConstantToShaderTypes(attribute.type), attribute.size);
	                    }
	                }
	            }
	
	            // Bind program.
	            if (this.cache.program != webGLProgram) {
	                // Use Program
	                gl.useProgram(webGLProgram);
	                this.cache.program = webGLProgram;
	
	                // Send lights's informations
	                this.sendLights(program);
	
	                return 1;
	            }
	
	            return 0;
	        }
	
	        /**
	         * Set uniform value
	         *
	         * @param {Program} program A Program instance to use
	         * @param {string} name Uniform's name
	         * @param {Type} type Type of value to send
	         * @param {?Array<number>|Texture|boolean|number|Float32Array} value A value
	         * @param {number=} groupCount When an element is an array, you can create group (like sub-array)
	         * @return {boolean} True if uniform has been set successfully, otherwise false
	         */
	
	    }, {
	        key: 'setUniform',
	        value: function setUniform(program, name, type, value) {
	            var groupCount = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
	
	            // Check if program need to be set
	            this.setProgram(program);
	
	            var uniform = program.getUniform(name);
	            if (!uniform || !value) return false;
	
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	
	            // Send value to the program/shaders
	            switch (type) {
	                case _Types.Type.Float:
	                    {
	                        if (value instanceof Array) {
	                            if (groupCount && groupCount >= 1) {
	                                if (groupCount == 2) gl.uniform2fv(uniform.location, value);else if (groupCount == 3) gl.uniform3fv(uniform.location, value);else if (groupCount == 4) gl.uniform4fv(uniform.location, value);else if (groupCount == 1) gl.uniform1fv(uniform.location, value);
	                            } else {
	                                if (value.length == 3) gl.uniform3f(uniform.location, value[0], value[1], value[2]);else if (value.length == 4) gl.uniform4f(uniform.location, value[0], value[1], value[2], value[3]);else if (value.length == 3) gl.uniform2f(uniform.location, value[0], value[1]);
	                            }
	                        } else gl.uniform1f(uniform.location, value);
	
	                        break;
	                    }
	                case _Types.Type.Int:
	                    {
	                        if (value instanceof Array) {
	                            if (groupCount && groupCount >= 1) {
	                                if (groupCount == 2) gl.uniform2iv(uniform.location, value);else if (groupCount == 3) gl.uniform3iv(uniform.location, value);else if (groupCount == 4) gl.uniform4iv(uniform.location, value);else if (groupCount == 1) gl.uniform1iv(uniform.location, value);
	                            } else {
	                                if (value.length == 3) gl.uniform3i(uniform.location, value[0], value[1], value[2]);else if (value.length == 4) gl.uniform4i(uniform.location, value[0], value[1], value[2], value[3]);else if (value.length == 2) gl.uniform2i(uniform.location, value[0], value[1]);
	                            }
	                        } else gl.uniform1i(uniform.location, value);
	
	                        break;
	                    }
	                case _Types.Type.Matrix:
	                    {
	                        if (value.length == 16) gl.uniformMatrix4fv(uniform.location, false, value);else if (value.length == 4) gl.uniformMatrix2fv(uniform.location, false, value);else if (value.length == 9) gl.uniformMatrix3fv(uniform.location, false, value);
	
	                        break;
	                    }
	                default:
	                    break;
	            }
	
	            return true;
	        }
	
	        /**
	         * Set scissor test state
	         *
	         * @param {boolean} state True to activate scissor testing, otherwise false
	         * @param {number} x Position on x from the left of the screen
	         * @param {number} y Position on y from the bottom of the screen
	         * @param {number} w Width of the rectangle
	         * @param {number} h Height of the rectangle
	         */
	
	    }, {
	        key: 'setScissorTest',
	        value: function setScissorTest(state, x, y, w, h) {
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	
	            if (!state) gl.disable(WebGLConst.SCISSOR_TEST);else {
	                gl.enable(WebGLConst.SCISSOR_TEST);
	                gl.scissor(x, y, w, h);
	            }
	        }
	
	        /**
	         * Set stencil test state
	         *
	         * @param {boolean} activate True to activate stencil test, otherwise false
	         * @param {number} writeMask Stencil writing value
	         */
	
	    }, {
	        key: 'setStencilState',
	        value: function setStencilState(activate, writeMask) {
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	
	            if (!activate && this.state.stencilTest) gl.disable(WebGLConst.STENCIL_TEST);else if (activate) {
	                if (!this.state.stencilTest) gl.enable(WebGLConst.STENCIL_TEST);
	
	                if (this.state.stencilWrite != writeMask) {
	                    gl.stencilMask(writeMask);
	                    this.state.stencilWrite = writeMask;
	                }
	            }
	
	            this.state.stencilTest = activate;
	        }
	
	        /**
	         * Set stencil function to use
	         *
	         * @param {StencilFunction} stencilFunction Function to use
	         * @param {number} reference Reference value
	         * @param {number} mask Mask to use
	         */
	
	    }, {
	        key: 'setStencilFunction',
	        value: function setStencilFunction(stencilFunction, reference, mask) {
	            if (this.state.stencilFunction != stencilFunction || this.state.stencilReference != reference || this.state.stencilMask != mask) {
	                _Context.Context.getActive().stencilFunc(this.convertStencilFunctionToConstant(stencilFunction), reference, mask);
	                this.state.stencilFunction = stencilFunction;
	                this.state.stencilReference = reference;
	                this.state.stencilMask = mask;
	            }
	        }
	
	        /**
	         * Set stencil operations to use
	         *
	         * @param {StencilOperation} sFail Function to use
	         * @param {StencilOperation} dpFail Reference value
	         * @param {StencilOperation} dppPass Mask to use
	         */
	
	    }, {
	        key: 'setStencilOperations',
	        value: function setStencilOperations(sFail, dpFail, dppPass) {
	            if (this.state.stencilTestFail != sFail || this.state.stencilDepthTestFail != dpFail || this.state.stencilSuccess != dppPass) {
	                _Context.Context.getActive().stencilOp(this.convertStencilOperationToConstant(sFail), this.convertStencilOperationToConstant(dpFail), this.convertStencilOperationToConstant(dppPass));
	
	                this.state.stencilTestFail = sFail;
	                this.state.stencilDepthTestFail = dpFail;
	                this.state.stencilSuccess = dppPass;
	            }
	        }
	
	        /**
	         * Set vertex buffer to use
	         *
	         * Warning: You must call "setVertexFormat" before!
	         * @param {number} stream An integer representing stream to use
	         * @param {number|WebGLBuffer} buffer A buffer instance
	         */
	
	    }, {
	        key: 'setVertexBuffer',
	        value: function setVertexBuffer(stream, buffer) {
	            // Retrieve context
	            var gl = _Context.Context.getActive();
	
	            // Bind buffer
	            gl.bindBuffer(WebGLConst.ARRAY_BUFFER, buffer);
	
	            // Enable vertex data
	            var vertexElements = this.cache.vertexFormat.getElements();
	            for (var i = 0; i < vertexElements.length; i++) {
	                if (vertexElements[i].stream == stream) {
	                    // Enable
	                    gl.enableVertexAttribArray(vertexElements[i].usage);
	                    gl.vertexAttribPointer(vertexElements[i].usage, vertexElements[i].count, this.convertVertexTypeToConstant(vertexElements[i].type), vertexElements[i].normalize, this.cache.vertexFormat.getStreamStride(vertexElements[i].stream), vertexElements[i].offset);
	
	                    // Save attribut's state
	                    this.enabledVertexAttribArray[vertexElements[i].usage] = true;
	                }
	            }
	        }
	
	        /**
	         * Set vertex format to use
	         *
	         * @param {VertexFormat} format A VertexFormat instance
	         */
	
	    }, {
	        key: 'setVertexFormat',
	        value: function setVertexFormat(format) {
	            this.cache.vertexFormat = format;
	        }
	
	        /* ------------------------------------------------------------------------------------------ */
	        ///
	        /// Conversions functions
	        ///
	        /* ------------------------------------------------------------------------------------------ */
	        /**
	         * Convert the given factor to a WebGL factor equivalent
	         *
	         * @param {BlendMode.Factor} factor A blending Factor instance
	         * @return {number} A WebGL value.
	         * @private
	         */
	
	    }, {
	        key: 'convertBlendingFactorToConstant',
	        value: function convertBlendingFactorToConstant(factor) {
	            switch (factor) {
	                default:
	                case BlendMode.Factor.Zero:
	                    return WebGLConst.ZERO;
	                case BlendMode.Factor.One:
	                    return WebGLConst.ONE;
	                case BlendMode.Factor.SourceColor:
	                    return WebGLConst.SRC_COLOR;
	                case BlendMode.Factor.OneMinusSourceColor:
	                    return WebGLConst.ONE_MINUS_SRC_COLOR;
	                case BlendMode.Factor.DestinationColor:
	                    return WebGLConst.DST_COLOR;
	                case BlendMode.Factor.OneMinusDestinationColor:
	                    return WebGLConst.ONE_MINUS_DST_COLOR;
	                case BlendMode.Factor.SourceAlpha:
	                    return WebGLConst.SRC_ALPHA;
	                case BlendMode.Factor.OneMinusSourceAlpha:
	                    return WebGLConst.ONE_MINUS_SRC_ALPHA;
	                case BlendMode.Factor.DestinationAlpha:
	                    return WebGLConst.DST_ALPHA;
	                case BlendMode.Factor.OneMinusDestinationAlpha:
	                    return WebGLConst.ONE_MINUS_DST_ALPHA;
	            }
	        }
	
	        /**
	         * Convert the given equation to an equivalent WebGL equation
	         *
	         * @param {BlendMode.Equation} equation A blending Equation value
	         * @return {number} A WebGL value.
	         * @private
	         */
	
	    }, {
	        key: 'convertBlendingEquationToConstant',
	        value: function convertBlendingEquationToConstant(equation) {
	            switch (equation) {
	                default:
	                case BlendMode.Equation.Add:
	                    return WebGLConst.FUNC_ADD;
	                case BlendMode.Equation.Subtract:
	                    return WebGLConst.FUNC_SUBTRACT;
	            }
	        }
	
	        /**
	         * Convert the given depth function to an equivalent WebGL function
	         *
	         * @param {DepthFunction} depthFunction A DepthFunction value
	         * @return {number} A WebGL value.
	         * @private
	         */
	
	    }, {
	        key: 'convertDepthFunctionToConstant',
	        value: function convertDepthFunctionToConstant(depthFunction) {
	            switch (depthFunction) {
	                case DepthFunction.Never:
	                    return WebGLConst.NEVER;
	                case DepthFunction.Less:
	                    return WebGLConst.LESS;
	                case DepthFunction.Equal:
	                    return WebGLConst.EQUAL;
	                case DepthFunction.LessEqual:
	                    return WebGLConst.LEQUAL;
	                case DepthFunction.Greater:
	                    return WebGLConst.GREATER;
	                case DepthFunction.NotEqual:
	                    return WebGLConst.NOTEQUAL;
	                case DepthFunction.GreaterEqual:
	                    return WebGLConst.GEQUAL;
	                case DepthFunction.Always:
	                    return WebGLConst.ALWAYS;
	                default:
	                    return WebGLConst.LEQUAL;
	            }
	        }
	
	        /**
	         * Convert the given drawing mode to an equivalent WebGL value
	         *
	         * @param {DrawingMode} drawingMode A drawing mode
	         * @return {number} A WebGL value.
	         * @private
	         */
	
	    }, {
	        key: 'convertDrawingModeToConstant',
	        value: function convertDrawingModeToConstant(drawingMode) {
	            switch (drawingMode) {
	                default:
	                case _StateBlock.DrawingMode.Points:
	                    return WebGLConst.POINTS;
	                case _StateBlock.DrawingMode.Lines:
	                    return WebGLConst.LINES;
	                case _StateBlock.DrawingMode.LinesStrip:
	                    return WebGLConst.LINE_STRIP;
	                case _StateBlock.DrawingMode.LinesLoop:
	                    return WebGLConst.LINE_LOOP;
	                case _StateBlock.DrawingMode.Triangles:
	                    return WebGLConst.TRIANGLES;
	                case _StateBlock.DrawingMode.TrianglesStrip:
	                    return WebGLConst.TRIANGLE_STRIP;
	                case _StateBlock.DrawingMode.TrianglesFan:
	                    return WebGLConst.TRIANGLE_FAN;
	            }
	        }
	
	        /**
	         * Convert the given stencil function to an equivalent WebGL function
	         *
	         * @param {StencilFunction} stencilFunction A StencilFunction value
	         * @return {number} A WebGL value
	         * @private
	         */
	
	    }, {
	        key: 'convertStencilFunctionToConstant',
	        value: function convertStencilFunctionToConstant(stencilFunction) {
	            switch (stencilFunction) {
	                case StencilFunction.Never:
	                    return WebGLConst.NEVER;
	                case StencilFunction.Less:
	                    return WebGLConst.LESS;
	                case StencilFunction.Equal:
	                    return WebGLConst.EQUAL;
	                case StencilFunction.LessEqual:
	                    return WebGLConst.LEQUAL;
	                case StencilFunction.Greater:
	                    return WebGLConst.GREATER;
	                case StencilFunction.NotEqual:
	                    return WebGLConst.NOTEQUAL;
	                case StencilFunction.GreaterEqual:
	                    return WebGLConst.GEQUAL;
	                case StencilFunction.Always:
	                    return WebGLConst.ALWAYS;
	                default:
	                    return WebGLConst.LEQUAL;
	            }
	        }
	
	        /**
	         * Convert the given stencil operation to an equivalent WebGL function
	         *
	         * @param {StencilOperation} operation A StencilOperation value
	         * @return {number} A WebGL value
	         * @private
	         */
	
	    }, {
	        key: 'convertStencilOperationToConstant',
	        value: function convertStencilOperationToConstant(operation) {
	            switch (operation) {
	                default:
	                case StencilOperation.Keep:
	                    return WebGLConst.KEEP;
	                case StencilOperation.Zero:
	                    return WebGLConst.ZERO;
	                case StencilOperation.Replace:
	                    return WebGLConst.REPLACE;
	                case StencilOperation.Increment:
	                    return WebGLConst.INCR;
	                case StencilOperation.Decrement:
	                    return WebGLConst.DECR;
	                case StencilOperation.Invert:
	                    return WebGLConst.INVERT;
	                case StencilOperation.IncrementWrap:
	                    return WebGLConst.INCR_WRAP;
	                case StencilOperation.DecrementWrap:
	                    return WebGLConst.DECR_WRAP;
	            }
	        }
	
	        /**
	         * Convert the given vertex type to an equivalent WebGL type
	         *
	         * @param {VertexElement.Type} type A VertexElement type
	         * @return {number} A WebGL value
	         * @private
	         */
	
	    }, {
	        key: 'convertVertexTypeToConstant',
	        value: function convertVertexTypeToConstant(type) {
	            switch (type) {
	                default:
	                case _VertexFormat.VertexElement.Type.Byte:
	                    return WebGLConst.BYTE;
	                case _VertexFormat.VertexElement.Type.Float:
	                    return WebGLConst.FLOAT;
	                case _VertexFormat.VertexElement.Type.Int:
	                    return WebGLConst.INT;
	                case _VertexFormat.VertexElement.Type.Short:
	                    return WebGLConst.SHORT;
	            }
	        }
	
	        /**
	         * Convert the given type of stream to an equivalent WebGL type
	         *
	         * @param {VertexElement.StreamType} type A StreamType
	         * @return {number} A WebGL value
	         * @private
	         */
	
	    }, {
	        key: 'convertStreamTypeToConstant',
	        value: function convertStreamTypeToConstant(type) {
	            switch (type) {
	                default:
	                case _VertexFormat.VertexElement.StreamType.Static:
	                    return WebGLConst.STATIC_DRAW;
	                case _VertexFormat.VertexElement.StreamType.Dynamic:
	                    return WebGLConst.DYNAMIC_DRAW;
	                case _VertexFormat.VertexElement.StreamType.Stream:
	                    return WebGLConst.STREAM_DRAW;
	            }
	        }
	
	        /**
	         * Convert the given type to a Lemon equivalent
	         *
	         * @param {number} type A WebGL value
	         * @return {Type} A custom type value
	         * @private
	         */
	
	    }, {
	        key: 'convertConstantToShaderTypes',
	        value: function convertConstantToShaderTypes(type) {
	            switch (type) {
	                default:
	                case WebGLConst.FLOAT:
	                case WebGLConst.FLOAT_VEC2:
	                case WebGLConst.FLOAT_VEC3:
	                case WebGLConst.FLOAT_VEC4:
	                    return _Types.Type.Float;
	                case WebGLConst.INT:
	                case WebGLConst.INT_VEC2:
	                case WebGLConst.INT_VEC3:
	                case WebGLConst.INT_VEC4:
	                    return _Types.Type.Int;
	                case WebGLConst.BOOL:
	                case WebGLConst.BOOL_VEC2:
	                case WebGLConst.BOOL_VEC3:
	                case WebGLConst.BOOL_VEC4:
	                    return _Types.Type.Bool;
	                case WebGLConst.FLOAT_MAT2:
	                case WebGLConst.FLOAT_MAT3:
	                case WebGLConst.FLOAT_MAT4:
	                    return _Types.Type.Matrix;
	                case WebGLConst.SAMPLER_2D:
	                    return _Types.Type.Texture2D;
	                case WebGLConst.SAMPLER_CUBE:
	                    return _Types.Type.TextureCube;
	                case WebGLConst.BYTE:
	                    return _Types.Type.Byte;
	                case WebGLConst.UNSIGNED_BYTE:
	                    return _Types.Type.u_Byte;
	                case WebGLConst.SHORT:
	                    return _Types.Type.Short;
	                case WebGLConst.UNSIGNED_SHORT:
	                    return _Types.Type.u_Short;
	                case WebGLConst.UNSIGNED_INT:
	                    return _Types.Type.u_Int;
	            }
	        }
	
	        /**
	         * Convert the given webgl shader's type to an equivalent Lemon value
	         *
	         * @param {number} type A WebGL value
	         * @return {number} A number representing element count for the given type
	         * @private
	         */
	
	    }, {
	        key: 'convertConstantToShaderCount',
	        value: function convertConstantToShaderCount(type) {
	            switch (type) {
	                default:
	                case WebGLConst.FLOAT:
	                case WebGLConst.INT:
	                case WebGLConst.BOOL:
	                case WebGLConst.SAMPLER_2D:
	                case WebGLConst.SAMPLER_CUBE:
	                case WebGLConst.BYTE:
	                case WebGLConst.UNSIGNED_BYTE:
	                case WebGLConst.SHORT:
	                case WebGLConst.UNSIGNED_SHORT:
	                case WebGLConst.UNSIGNED_INT:
	                    return 1;
	                case WebGLConst.FLOAT_VEC2:
	                case WebGLConst.INT_VEC2:
	                case WebGLConst.BOOL_VEC2:
	                case WebGLConst.FLOAT_MAT2:
	                    return 2;
	                case WebGLConst.FLOAT_VEC3:
	                case WebGLConst.INT_VEC3:
	                case WebGLConst.BOOL_VEC3:
	                case WebGLConst.FLOAT_MAT3:
	                    return 3;
	                case WebGLConst.FLOAT_VEC4:
	                case WebGLConst.INT_VEC4:
	                case WebGLConst.BOOL_VEC4:
	                case WebGLConst.FLOAT_MAT4:
	                    return 4;
	            }
	        }
	    }], [{
	        key: 'getInstance',
	        value: function getInstance() {
	            if (!instance) instance = new WebGL();
	
	            return instance;
	        }
	    }]);
	
	    return WebGL;
	}(_RenderAPI2.RenderAPI);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Cache = undefined;
	
	var _Color = __webpack_require__(13);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Cache for WebGL API
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Cache =
	/**
	 * Constructor
	 */
	exports.Cache = function Cache() {
	  _classCallCheck(this, Cache);
	
	  /**
	   * Active vertex format
	   *
	   * @type {Color}
	   * @public
	   */
	  this.clearColor = new _Color.Color(1, 1, 1, 255);
	
	  /**
	   * Active program
	   *
	   * @type {Program}
	   * @public
	   */
	  this.program = null;
	
	  /**
	   * Active texture
	   *
	   * @type {TextureInterface|TextureCube}
	   * @public
	   */
	  this.texture = null;
	
	  /**
	   * Active vertex format
	   *
	   * @type {VertexFormat}
	   * @public
	   */
	  this.vertexFormat = null;
	
	  /**
	   * Array with lights to send to the programs
	   *
	   * @type {Array.<Light>}
	   * @public
	   */
	  this.lights = [];
	
	  /**
	   * Lights positions
	   *
	   * @type {Array.<number>}
	   * @public
	   */
	  this.lightsAmbient = [];
	
	  /**
	   * Lights positions
	   *
	   * @type {Array.<number>}
	   * @public
	   */
	  this.lightsDiffuse = [];
	
	  /**
	   * Lights data: constant, linear and quadratic data
	   *
	   * @type {Array.<number>}
	   * @public
	   */
	  this.lightsData = [];
	
	  /**
	   * Lights directions
	   *
	   * @type {Array.<number>}
	   * @public
	   */
	  this.lightsDirection = [];
	
	  /**
	   * Lights positions
	   *
	   * @type {Array.<number>}
	   * @public
	   */
	  this.lightsPosition = [];
	
	  /**
	   * Lights positions
	   *
	   * @type {Array.<number>}
	   * @public
	   */
	  this.lightsSpecular = [];
	
	  /**
	   * Lights type
	   *
	   * @type {Array.<number>}
	   * @public
	   */
	  this.lightsType = [];
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A WebGL buffer
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var BufferData =
	/**
	 * Constructor
	 */
	exports.BufferData = function BufferData() {
	  _classCallCheck(this, BufferData);
	
	  /**
	   * Index buffer
	   *
	   * @type {WebGLBuffer}
	   * @public
	   */
	  this.indexBuffer = null;
	
	  /**
	   * Vertex buffers
	   *
	   * @type {Array.<WebGLBuffer>}
	   * @public
	   */
	  this.vertexBuffers = [];
	
	  /**
	   * Vertex array object
	   *
	   * @type {WebGLBuffer}
	   * @public
	   */
	  this.vao = null;
	};
	
	/**
	 * WebGL instances
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Instances =
	/**
	 * Constructor
	 */
	exports.Instances = function Instances() {
	  _classCallCheck(this, Instances);
	
	  /**
	   * WebGL buffers
	   *
	   * @type {Array.<BufferData>}
	   * @public
	   */
	  this.buffers = [];
	
	  /**
	   * WebGL frame buffers
	   *
	   * @type {Array.<WebGLFramebuffer>}
	   * @public
	   */
	  this.frameBuffers = [];
	
	  /**
	   * Programs/Shaders data
	   *
	   * @type {Array.<WebGLProgram>}
	   * @public
	   */
	  this.programs = [];
	
	  /**
	   * Textures data
	   *
	   * @type {Array.<WebGLTexture>}
	   * @public
	   */
	  this.textures = [];
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A rendering API
	 *
	 * Web technologies allow Canvas and WebGL rendering
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var RenderAPI = exports.RenderAPI = function () {
	  /**
	   * Constructor
	   */
	
	  function RenderAPI() {
	    _classCallCheck(this, RenderAPI);
	
	    /**
	     * Camera to use for next draw calls and graphics calculs
	     *
	     * @type {Camera} 
	     * @protected
	     */
	    this.activeCamera = null;
	  }
	
	  /**
	   * Bind light
	   *
	   * @param {Light} light A Light instance
	   */
	
	  _createClass(RenderAPI, [{
	    key: "bindLight",
	    value: function bindLight(light) {}
	  }, {
	    key: "applyStateBlock",
	
	    /**
	     * Apply the given state block
	     *
	     * @param {StateBlock} stateBlock A StateBlock instance
	     */
	    value: function applyStateBlock(stateBlock) {
	      this.setBlendMode(stateBlock.blendMode);
	      this.setDepthState(stateBlock.depthTest, stateBlock.depthWrite, stateBlock.depthFunction);
	      this.setFaceCulling(stateBlock.faceCulling);
	      this.setStencilState(stateBlock.stencilTest, stateBlock.stencilWrite);
	      this.setStencilFunction(stateBlock.stencilFunction, stateBlock.stencilReference, stateBlock.stencilMask);
	      this.setStencilOperations(stateBlock.stencilTestFail, stateBlock.stencilDepthTestFail, stateBlock.stencilSuccess);
	    }
	
	    /**
	     * Bind the given framebuffer
	     *
	     * @param {number} framebufferID An identifier, -1 to bind the default frame buffer
	     */
	
	  }, {
	    key: "bindFrameBuffer",
	    value: function bindFrameBuffer() {
	      var framebufferID = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];
	    }
	  }, {
	    key: "bindTexture",
	
	    /**
	     * Bind texture to the the given slot
	     *
	     * @param {number} slot Targeted slot's index
	     * @param {TextureInterface} texture A Texture instance
	     */
	    value: function bindTexture(slot, texture) {}
	  }, {
	    key: "bindTextureCube",
	
	    /**
	     * Bind texture cube to the the given slot
	     *
	     * @param {number} slot Targeted slot's index
	     * @param {TextureCube} texture A TextureCube instance
	     */
	    value: function bindTextureCube(slot, texture) {}
	  }, {
	    key: "clear",
	
	    /**
	     * Clear the rendering target
	     *
	     * @param {Color} color A Color instance
	     */
	    value: function clear(color) {}
	  }, {
	    key: "clearCache",
	
	    /**
	     * Clear cache
	     */
	    value: function clearCache() {}
	  }, {
	    key: "createFrameBuffer",
	
	    /**
	     * Create a new frame buffer
	     *
	     * @return {number} An identifier to work with it later
	     */
	    value: function createFrameBuffer() {
	      return 0;
	    }
	  }, {
	    key: "drawIndexedPrimitives",
	
	    /**
	    * Draw indexed primitives
	    *
	    * @param {DrawingMode} drawingMode Drawing mode to use
	    * @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts
	    * @param {number} vertexCount Vertex count to draw
	    */
	    value: function drawIndexedPrimitives(drawingMode, firstVertexIndex, vertexCount) {}
	  }, {
	    key: "drawPrimitives",
	
	    /**
	    * Draw primitives
	    *
	    * @param {DrawingMode} drawingMode Drawing mode to use
	    * @param {number} firstVertexIndex Index of the first vertex to draw, useful to draw some parts
	    * @param {number} vertexCount Vertex count to draw
	    */
	    value: function drawPrimitives(drawingMode, firstVertexIndex, vertexCount) {}
	  }, {
	    key: "initFrameBuffer",
	
	    /**
	     * Init frame buffer: attach it to textures, depth buffer and/or a stencil buffer
	     *
	     * @param {number} framebufferID Targeted slot's index
	     * @param {Array.<Texture>} textures An array of Texture instances
	     * @param {boolean=} useDepthBuffer True to use a depth buffer
	     * @param {boolean=} useStencilBuffer True to use a depth buffer
	     */
	    value: function initFrameBuffer(framebufferID, textures) {
	      var useDepthBuffer = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	      var useStencilBuffer = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	    }
	  }, {
	    key: "setActiveCamera",
	
	    /**
	     * Set camera to use
	     *
	     * @param {Camera} camera A Camera instance
	     */
	    value: function setActiveCamera(camera) {
	      this.activeCamera = camera;
	    }
	
	    /**
	     * Set blend mode to apply
	     *
	     * @param {BlendMode} blendMode A BlendMode instance
	     */
	
	  }, {
	    key: "setBlendMode",
	    value: function setBlendMode(blendMode) {}
	  }, {
	    key: "setDepthState",
	
	    /**
	     * Set depth state
	     *
	     * @param {boolean} depthTest True to activate depth testing, otherwise false
	     * @param {boolean} writeTest True to activate depth writing otherwise false
	     * @param {DepthFunction} depthFunction Depth function to apply
	     */
	    value: function setDepthState(depthTest, writeTest, depthFunction) {}
	  }, {
	    key: "setFaceCulling",
	
	    /**
	     * Set face culling state.
	     * @param {FaceCulling} mode Face culling mode to set.
	     */
	    value: function setFaceCulling(mode) {}
	  }, {
	    key: "setGeometry",
	
	    /**
	     * Set geometry to use
	     *
	     * @param {Geometry} geometry A Geometry instance
	     */
	    value: function setGeometry(geometry) {}
	  }, {
	    key: "setIndexBuffer",
	
	    /**
	     * Set index buffer to use
	     *
	     * @param {number|WebGLBuffer} buffer A buffer instance
	     */
	    value: function setIndexBuffer(buffer) {}
	  }, {
	    key: "setProgram",
	
	    /**
	     * Set program to use
	     *
	     * @param {Program} program A Program instance to use
	     * @return {number} -1: an error occured, 0: everything is ok, 2 : program have been changed
	     */
	    value: function setProgram(program) {
	      return -1;
	    }
	  }, {
	    key: "setUniform",
	
	    /**
	     * Set uniform value
	     *
	     * @param {Program} program A Program instance to use
	     * @param {string} name Uniform's name
	     * @param {Type} type Type of value to send
	     * @param {?Array<number>|Texture|boolean|number|Float32Array} value A value
	     * @param {number=} groupCount When an element is an array, you can create group (like sub-array)
	     * @return {boolean} True if uniform has been set successfully, otherwise false
	     */
	    value: function setUniform(program, name, type, value, groupCount) {
	      return false;
	    }
	  }, {
	    key: "setScissorTest",
	
	    /**
	     * Set scissor test state
	     *
	     * @param {boolean} state True to activate scissor testing, otherwise false
	     * @param {number} x Position on x from the left of the screen
	     * @param {number} y Position on y from the bottom of the screen
	     * @param {number} w Width of the rectangle
	     * @param {number} h Height of the rectangle
	     */
	    value: function setScissorTest(state, x, y, w, h) {}
	  }, {
	    key: "setStencilState",
	
	    /**
	     * Set stencil test state
	     *
	     * @param {boolean} activate True to active stencil testing, otherwise false
	     * @param {number} writeMask Stencil writing value
	     */
	    value: function setStencilState(activate, writeMask) {}
	  }, {
	    key: "setStencilFunction",
	
	    /**
	     * Set stencil function to use
	     *
	     * @param {StencilFunction} stencilFunction Function to use
	     * @param {number} reference Reference value
	     * @param {number} mask Mask to use
	     */
	    value: function setStencilFunction(stencilFunction, reference, mask) {}
	  }, {
	    key: "setStencilOperations",
	
	    /**
	     * Set stencil operations to use
	     *
	     * @param {StencilOperation} sFail Function to use
	     * @param {StencilOperation} dpFail Reference value
	     * @param {StencilOperation} dppPass Mask to use
	     */
	    value: function setStencilOperations(sFail, dpFail, dppPass) {}
	  }, {
	    key: "setVertexBuffer",
	
	    /**
	     * Set vertex buffer to use
	     *
	     * Warning: You must call "setVertexFormat" before!
	     * @param {number} stream An integer representing stream to use
	     * @param {number|WebGLBuffer} buffer A buffer instance
	     */
	    value: function setVertexBuffer(stream, buffer) {}
	  }, {
	    key: "setVertexFormat",
	
	    /**
	     * Set vertex format to use
	     *
	     * @param {VertexFormat} format A VertexFormat instance
	     */
	    value: function setVertexFormat(format) {}
	  }, {
	    key: "getActiveCamera",
	
	    /**
	     * Get the active camera
	     *
	     * @return {Camera} A Camera instance or null
	     */
	    value: function getActiveCamera() {
	      return this.activeCamera;
	    }
	  }]);
	
	  return RenderAPI;
	}();

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TextureCube = undefined;
	
	var _ContextResource2 = __webpack_require__(21);
	
	var _Image = __webpack_require__(36);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A texture cube to use with Sky-boxes
	 *
	 * @extends {ContextResource}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var TextureCube = exports.TextureCube = function (_ContextResource) {
	    _inherits(TextureCube, _ContextResource);
	
	    /**
	     * Constructor
	     *
	     * @param {Array.<string>} paths An array with the image's path for the right cube's face,
	     * Paths must be provided in the given order: up, down, left, right, back, front
	     */
	
	    function TextureCube() {
	        var paths = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
	        _classCallCheck(this, TextureCube);
	
	        /**
	         * Images (one per face)
	         *
	         * @type {Array.<Image>}
	         * @private
	         */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextureCube).call(this));
	
	        _this.images = [];
	
	        if (paths.length) _this.loadFromFiles(paths);
	        return _this;
	    }
	
	    /**
	     * Load images from the given paths
	     *
	     * @param {Array.<string>} paths An array with the image's path for the right cube's face,
	     * Paths must be provided in the given order: up, down, left, right, back, front
	     */
	
	    _createClass(TextureCube, [{
	        key: 'loadFromFiles',
	        value: function loadFromFiles(paths) {
	            for (var i in paths) {
	                var image = new _Image.Img();
	                image.loadFromFile(paths[i]);
	                this.images[i] = image;
	            }
	        }
	
	        /**
	         * Get images
	         *
	         * @return {Array.<Image>} An array with images instances
	         */
	
	    }, {
	        key: 'getImages',
	        value: function getImages() {
	            return this.images;
	        }
	
	        /**
	         * Check if texture cube is ready to be use
	         *
	         * @return {boolean} True if everything is ready
	         */
	
	    }, {
	        key: 'isReady',
	        value: function isReady() {
	            if (this.images.length === 0) return false;
	
	            for (var i = 0; i < this.images.length; i++) {
	                if (!this.images[i].isReady()) return false;
	            }return true;
	        }
	    }]);
	
	    return TextureCube;
	}(_ContextResource2.ContextResource);
	
	/**
	* Faces
	 *
	* @enum {number}
	*/
	
	TextureCube.Face = { Up: 0, Down: 1, Left: 2, Right: 3, Back: 4, Front: 5 };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TextureVideo = undefined;
	
	var _TextureInterface2 = __webpack_require__(35);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A texture to display video
	 *
	 * @extends {TextureInterface}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var TextureVideo = exports.TextureVideo = function (_TextureInterface) {
	  _inherits(TextureVideo, _TextureInterface);
	
	  /**
	   * Constructor
	   */
	
	  function TextureVideo() {
	    _classCallCheck(this, TextureVideo);
	
	    /**
	     * Video.
	     * @type {HTMLVideoElement}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextureVideo).call(this));
	
	    _this.data = document.createElement('video');
	    return _this;
	  }
	
	  /**
	   * Load the video from a file
	   *
	   * @param {string} path Path to the video file
	   */
	
	  _createClass(TextureVideo, [{
	    key: 'loadFromFile',
	    value: function loadFromFile(path) {
	      var _this2 = this;
	
	      // Detect when video is ready
	      this.data.addEventListener('canplaythrough', function () {
	        _this2.ready = true;
	      }, true);
	
	      // Load
	      this.data.preload = 'auto';
	      this.data.src = path;
	    }
	  }, {
	    key: 'pause',
	
	    /**
	     * Pause the video
	     */
	    value: function pause() {
	      this.data.pause();
	    }
	
	    /**
	     * Play the video
	     */
	
	  }, {
	    key: 'play',
	    value: function play() {
	      this.data.play();
	    }
	
	    /**
	     * Get video's duration
	     *
	     * @return {number} The duration property returns the length of the current audio/video, in seconds
	     */
	
	  }, {
	    key: 'getDuration',
	    value: function getDuration() {
	      return this.data.duration;
	    }
	
	    /**
	     * Get video's data
	     *
	     * @return {HTMLVideoElement} The HTML video element
	     */
	
	  }, {
	    key: 'getVideoData',
	    value: function getVideoData() {
	      return this.data;
	    }
	  }]);
	
	  return TextureVideo;
	}(_TextureInterface2.TextureInterface);

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_BUFFER_BIT = exports.DEPTH_BUFFER_BIT = 0x00000100;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_BUFFER_BIT = exports.STENCIL_BUFFER_BIT = 0x00000400;
	
	/**
	 * @const
	 * @type {number}
	 */
	var COLOR_BUFFER_BIT = exports.COLOR_BUFFER_BIT = 0x00004000;
	
	/**
	 * @const
	 * @type {number}
	 */
	var POINTS = exports.POINTS = 0x0000;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LINES = exports.LINES = 0x0001;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LINE_LOOP = exports.LINE_LOOP = 0x0002;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LINE_STRIP = exports.LINE_STRIP = 0x0003;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TRIANGLES = exports.TRIANGLES = 0x0004;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TRIANGLE_STRIP = exports.TRIANGLE_STRIP = 0x0005;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TRIANGLE_FAN = exports.TRIANGLE_FAN = 0x0006;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ZERO = exports.ZERO = 0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ONE = exports.ONE = 1;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SRC_COLOR = exports.SRC_COLOR = 0x0300;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ONE_MINUS_SRC_COLOR = exports.ONE_MINUS_SRC_COLOR = 0x0301;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SRC_ALPHA = exports.SRC_ALPHA = 0x0302;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ONE_MINUS_SRC_ALPHA = exports.ONE_MINUS_SRC_ALPHA = 0x0303;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DST_ALPHA = exports.DST_ALPHA = 0x0304;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ONE_MINUS_DST_ALPHA = exports.ONE_MINUS_DST_ALPHA = 0x0305;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DST_COLOR = exports.DST_COLOR = 0x0306;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ONE_MINUS_DST_COLOR = exports.ONE_MINUS_DST_COLOR = 0x0307;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SRC_ALPHA_SATURATE = exports.SRC_ALPHA_SATURATE = 0x0308;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FUNC_ADD = exports.FUNC_ADD = 0x8006;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BLEND_EQUATION = exports.BLEND_EQUATION = 0x8009;
	
	/**
	 * Same as BLEND_EQUATION
	 * @const
	 * @type {number}
	 */
	var BLEND_EQUATION_RGB = exports.BLEND_EQUATION_RGB = 0x8009;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BLEND_EQUATION_ALPHA = exports.BLEND_EQUATION_ALPHA = 0x883D;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FUNC_SUBTRACT = exports.FUNC_SUBTRACT = 0x800A;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FUNC_REVERSE_SUBTRACT = exports.FUNC_REVERSE_SUBTRACT = 0x800B;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BLEND_DST_RGB = exports.BLEND_DST_RGB = 0x80C8;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BLEND_SRC_RGB = exports.BLEND_SRC_RGB = 0x80C9;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BLEND_DST_ALPHA = exports.BLEND_DST_ALPHA = 0x80CA;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BLEND_SRC_ALPHA = exports.BLEND_SRC_ALPHA = 0x80CB;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CONSTANT_COLOR = exports.CONSTANT_COLOR = 0x8001;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ONE_MINUS_CONSTANT_COLOR = exports.ONE_MINUS_CONSTANT_COLOR = 0x8002;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CONSTANT_ALPHA = exports.CONSTANT_ALPHA = 0x8003;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ONE_MINUS_CONSTANT_ALPHA = exports.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BLEND_COLOR = exports.BLEND_COLOR = 0x8005;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ARRAY_BUFFER = exports.ARRAY_BUFFER = 0x8892;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ELEMENT_ARRAY_BUFFER = exports.ELEMENT_ARRAY_BUFFER = 0x8893;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ARRAY_BUFFER_BINDING = exports.ARRAY_BUFFER_BINDING = 0x8894;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ELEMENT_ARRAY_BUFFER_BINDING = exports.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STREAM_DRAW = exports.STREAM_DRAW = 0x88E0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STATIC_DRAW = exports.STATIC_DRAW = 0x88E4;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DYNAMIC_DRAW = exports.DYNAMIC_DRAW = 0x88E8;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BUFFER_SIZE = exports.BUFFER_SIZE = 0x8764;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BUFFER_USAGE = exports.BUFFER_USAGE = 0x8765;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CURRENT_VERTEX_ATTRIB = exports.CURRENT_VERTEX_ATTRIB = 0x8626;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRONT = exports.FRONT = 0x0404;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BACK = exports.BACK = 0x0405;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRONT_AND_BACK = exports.FRONT_AND_BACK = 0x0408;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CULL_FACE = exports.CULL_FACE = 0x0B44;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BLEND = exports.BLEND = 0x0BE2;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DITHER = exports.DITHER = 0x0BD0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_TEST = exports.STENCIL_TEST = 0x0B90;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_TEST = exports.DEPTH_TEST = 0x0B71;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SCISSOR_TEST = exports.SCISSOR_TEST = 0x0C11;
	
	/**
	 * @const
	 * @type {number}
	 */
	var POLYGON_OFFSET_FILL = exports.POLYGON_OFFSET_FILL = 0x8037;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SAMPLE_ALPHA_TO_COVERAGE = exports.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SAMPLE_COVERAGE = exports.SAMPLE_COVERAGE = 0x80A0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var NO_ERROR = exports.NO_ERROR = 0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INVALID_ENUM = exports.INVALID_ENUM = 0x0500;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INVALID_VALUE = exports.INVALID_VALUE = 0x0501;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INVALID_OPERATION = exports.INVALID_OPERATION = 0x0502;
	
	/**
	 * @const
	 * @type {number}
	 */
	var OUT_OF_MEMORY = exports.OUT_OF_MEMORY = 0x0505;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CW = exports.CW = 0x0900;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CCW = exports.CCW = 0x0901;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LINE_WIDTH = exports.LINE_WIDTH = 0x0B21;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ALIASED_POINT_SIZE_RANGE = exports.ALIASED_POINT_SIZE_RANGE = 0x846D;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ALIASED_LINE_WIDTH_RANGE = exports.ALIASED_LINE_WIDTH_RANGE = 0x846E;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CULL_FACE_MODE = exports.CULL_FACE_MODE = 0x0B45;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRONT_FACE = exports.FRONT_FACE = 0x0B46;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_RANGE = exports.DEPTH_RANGE = 0x0B70;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_WRITEMASK = exports.DEPTH_WRITEMASK = 0x0B72;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_CLEAR_VALUE = exports.DEPTH_CLEAR_VALUE = 0x0B73;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_FUNC = exports.DEPTH_FUNC = 0x0B74;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_CLEAR_VALUE = exports.STENCIL_CLEAR_VALUE = 0x0B91;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_FUNC = exports.STENCIL_FUNC = 0x0B92;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_FAIL = exports.STENCIL_FAIL = 0x0B94;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_PASS_DEPTH_FAIL = exports.STENCIL_PASS_DEPTH_FAIL = 0x0B95;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_PASS_DEPTH_PASS = exports.STENCIL_PASS_DEPTH_PASS = 0x0B96;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_REF = exports.STENCIL_REF = 0x0B97;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_VALUE_MASK = exports.STENCIL_VALUE_MASK = 0x0B93;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_WRITEMASK = exports.STENCIL_WRITEMASK = 0x0B98;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_BACK_FUNC = exports.STENCIL_BACK_FUNC = 0x8800;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_BACK_FAIL = exports.STENCIL_BACK_FAIL = 0x8801;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_BACK_PASS_DEPTH_FAIL = exports.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_BACK_PASS_DEPTH_PASS = exports.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_BACK_REF = exports.STENCIL_BACK_REF = 0x8CA3;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_BACK_VALUE_MASK = exports.STENCIL_BACK_VALUE_MASK = 0x8CA4;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_BACK_WRITEMASK = exports.STENCIL_BACK_WRITEMASK = 0x8CA5;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VIEWPORT = exports.VIEWPORT = 0x0BA2;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SCISSOR_BOX = exports.SCISSOR_BOX = 0x0C10;
	
	/**
	 * @const
	 * @type {number}
	 */
	var COLOR_CLEAR_VALUE = exports.COLOR_CLEAR_VALUE = 0x0C22;
	
	/**
	 * @const
	 * @type {number}
	 */
	var COLOR_WRITEMASK = exports.COLOR_WRITEMASK = 0x0C23;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNPACK_ALIGNMENT = exports.UNPACK_ALIGNMENT = 0x0CF5;
	
	/**
	 * @const
	 * @type {number}
	 */
	var PACK_ALIGNMENT = exports.PACK_ALIGNMENT = 0x0D05;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_TEXTURE_SIZE = exports.MAX_TEXTURE_SIZE = 0x0D33;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_VIEWPORT_DIMS = exports.MAX_VIEWPORT_DIMS = 0x0D3A;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SUBPIXEL_BITS = exports.SUBPIXEL_BITS = 0x0D50;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RED_BITS = exports.RED_BITS = 0x0D52;
	
	/**
	 * @const
	 * @type {number}
	 */
	var GREEN_BITS = exports.GREEN_BITS = 0x0D53;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BLUE_BITS = exports.BLUE_BITS = 0x0D54;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ALPHA_BITS = exports.ALPHA_BITS = 0x0D55;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_BITS = exports.DEPTH_BITS = 0x0D56;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_BITS = exports.STENCIL_BITS = 0x0D57;
	
	/**
	 * @const
	 * @type {number}
	 */
	var POLYGON_OFFSET_UNITS = exports.POLYGON_OFFSET_UNITS = 0x2A00;
	
	/**
	 * @const
	 * @type {number}
	 */
	var POLYGON_OFFSET_FACTOR = exports.POLYGON_OFFSET_FACTOR = 0x8038;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_BINDING_2D = exports.TEXTURE_BINDING_2D = 0x8069;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SAMPLE_BUFFERS = exports.SAMPLE_BUFFERS = 0x80A8;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SAMPLES = exports.SAMPLES = 0x80A9;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SAMPLE_COVERAGE_VALUE = exports.SAMPLE_COVERAGE_VALUE = 0x80AA;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SAMPLE_COVERAGE_INVERT = exports.SAMPLE_COVERAGE_INVERT = 0x80AB;
	
	/**
	 * @const
	 * @type {number}
	 */
	var COMPRESSED_TEXTURE_FORMATS = exports.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DONT_CARE = exports.DONT_CARE = 0x1100;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FASTEST = exports.FASTEST = 0x1101;
	
	/**
	 * @const
	 * @type {number}
	 */
	var NICEST = exports.NICEST = 0x1102;
	
	/**
	 * @const
	 * @type {number}
	 */
	var GENERATE_MIPMAP_HINT = exports.GENERATE_MIPMAP_HINT = 0x8192;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BYTE = exports.BYTE = 0x1400;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNSIGNED_BYTE = exports.UNSIGNED_BYTE = 0x1401;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SHORT = exports.SHORT = 0x1402;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNSIGNED_SHORT = exports.UNSIGNED_SHORT = 0x1403;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INT = exports.INT = 0x1404;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNSIGNED_INT = exports.UNSIGNED_INT = 0x1405;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FLOAT = exports.FLOAT = 0x1406;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_COMPONENT = exports.DEPTH_COMPONENT = 0x1902;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ALPHA = exports.ALPHA = 0x1906;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RGB = exports.RGB = 0x1907;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RGBA = exports.RGBA = 0x1908;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LUMINANCE = exports.LUMINANCE = 0x1909;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LUMINANCE_ALPHA = exports.LUMINANCE_ALPHA = 0x190A;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNSIGNED_SHORT_4_4_4_4 = exports.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNSIGNED_SHORT_5_5_5_1 = exports.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNSIGNED_SHORT_5_6_5 = exports.UNSIGNED_SHORT_5_6_5 = 0x8363;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAGMENT_SHADER = exports.FRAGMENT_SHADER = 0x8B30;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VERTEX_SHADER = exports.VERTEX_SHADER = 0x8B31;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_VERTEX_ATTRIBS = exports.MAX_VERTEX_ATTRIBS = 0x8869;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_VERTEX_UNIFORM_VECTORS = exports.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_VARYING_VECTORS = exports.MAX_VARYING_VECTORS = 0x8DFC;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_COMBINED_TEXTURE_IMAGE_UNITS = exports.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_VERTEX_TEXTURE_IMAGE_UNITS = exports.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_TEXTURE_IMAGE_UNITS = exports.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_FRAGMENT_UNIFORM_VECTORS = exports.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SHADER_TYPE = exports.SHADER_TYPE = 0x8B4F;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DELETE_STATUS = exports.DELETE_STATUS = 0x8B80;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LINK_STATUS = exports.LINK_STATUS = 0x8B82;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VALIDATE_STATUS = exports.VALIDATE_STATUS = 0x8B83;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ATTACHED_SHADERS = exports.ATTACHED_SHADERS = 0x8B85;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ACTIVE_UNIFORMS = exports.ACTIVE_UNIFORMS = 0x8B86;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ACTIVE_ATTRIBUTES = exports.ACTIVE_ATTRIBUTES = 0x8B89;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SHADING_LANGUAGE_VERSION = exports.SHADING_LANGUAGE_VERSION = 0x8B8C;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CURRENT_PROGRAM = exports.CURRENT_PROGRAM = 0x8B8D;
	
	/**
	 * @const
	 * @type {number}
	 */
	var NEVER = exports.NEVER = 0x0200;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LESS = exports.LESS = 0x0201;
	
	/**
	 * @const
	 * @type {number}
	 */
	var EQUAL = exports.EQUAL = 0x0202;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LEQUAL = exports.LEQUAL = 0x0203;
	
	/**
	 * @const
	 * @type {number}
	 */
	var GREATER = exports.GREATER = 0x0204;
	
	/**
	 * @const
	 * @type {number}
	 */
	var NOTEQUAL = exports.NOTEQUAL = 0x0205;
	
	/**
	 * @const
	 * @type {number}
	 */
	var GEQUAL = exports.GEQUAL = 0x0206;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ALWAYS = exports.ALWAYS = 0x0207;
	
	/**
	 * @const
	 * @type {number}
	 */
	var KEEP = exports.KEEP = 0x1E00;
	
	/**
	 * @const
	 * @type {number}
	 */
	var REPLACE = exports.REPLACE = 0x1E01;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INCR = exports.INCR = 0x1E02;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DECR = exports.DECR = 0x1E03;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INVERT = exports.INVERT = 0x150A;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INCR_WRAP = exports.INCR_WRAP = 0x8507;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DECR_WRAP = exports.DECR_WRAP = 0x8508;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VENDOR = exports.VENDOR = 0x1F00;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERER = exports.RENDERER = 0x1F01;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VERSION = exports.VERSION = 0x1F02;
	
	/**
	 * @const
	 * @type {number}
	 */
	var NEAREST = exports.NEAREST = 0x2600;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LINEAR = exports.LINEAR = 0x2601;
	
	/**
	 * @const
	 * @type {number}
	 */
	var NEAREST_MIPMAP_NEAREST = exports.NEAREST_MIPMAP_NEAREST = 0x2700;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LINEAR_MIPMAP_NEAREST = exports.LINEAR_MIPMAP_NEAREST = 0x2701;
	
	/**
	 * @const
	 * @type {number}
	 */
	var NEAREST_MIPMAP_LINEAR = exports.NEAREST_MIPMAP_LINEAR = 0x2702;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LINEAR_MIPMAP_LINEAR = exports.LINEAR_MIPMAP_LINEAR = 0x2703;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_MAG_FILTER = exports.TEXTURE_MAG_FILTER = 0x2800;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_MIN_FILTER = exports.TEXTURE_MIN_FILTER = 0x2801;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_WRAP_S = exports.TEXTURE_WRAP_S = 0x2802;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_WRAP_T = exports.TEXTURE_WRAP_T = 0x2803;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_2D = exports.TEXTURE_2D = 0x0DE1;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE = exports.TEXTURE = 0x1702;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_CUBE_MAP = exports.TEXTURE_CUBE_MAP = 0x8513;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_BINDING_CUBE_MAP = exports.TEXTURE_BINDING_CUBE_MAP = 0x8514;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_CUBE_MAP_POSITIVE_X = exports.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_CUBE_MAP_NEGATIVE_X = exports.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_CUBE_MAP_POSITIVE_Y = exports.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_CUBE_MAP_NEGATIVE_Y = exports.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_CUBE_MAP_POSITIVE_Z = exports.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE_CUBE_MAP_NEGATIVE_Z = exports.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_CUBE_MAP_TEXTURE_SIZE = exports.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE0 = exports.TEXTURE0 = 0x84C0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE1 = exports.TEXTURE1 = 0x84C1;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE2 = exports.TEXTURE2 = 0x84C2;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE3 = exports.TEXTURE3 = 0x84C3;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE4 = exports.TEXTURE4 = 0x84C4;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE5 = exports.TEXTURE5 = 0x84C5;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE6 = exports.TEXTURE6 = 0x84C6;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE7 = exports.TEXTURE7 = 0x84C7;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE8 = exports.TEXTURE8 = 0x84C8;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE9 = exports.TEXTURE9 = 0x84C9;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE10 = exports.TEXTURE10 = 0x84CA;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE11 = exports.TEXTURE11 = 0x84CB;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE12 = exports.TEXTURE12 = 0x84CC;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE13 = exports.TEXTURE13 = 0x84CD;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE14 = exports.TEXTURE14 = 0x84CE;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE15 = exports.TEXTURE15 = 0x84CF;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE16 = exports.TEXTURE16 = 0x84D0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE17 = exports.TEXTURE17 = 0x84D1;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE18 = exports.TEXTURE18 = 0x84D2;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE19 = exports.TEXTURE19 = 0x84D3;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE20 = exports.TEXTURE20 = 0x84D4;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE21 = exports.TEXTURE21 = 0x84D5;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE22 = exports.TEXTURE22 = 0x84D6;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE23 = exports.TEXTURE23 = 0x84D7;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE24 = exports.TEXTURE24 = 0x84D8;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE25 = exports.TEXTURE25 = 0x84D9;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE26 = exports.TEXTURE26 = 0x84DA;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE27 = exports.TEXTURE27 = 0x84DB;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE28 = exports.TEXTURE28 = 0x84DC;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE29 = exports.TEXTURE29 = 0x84DD;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE30 = exports.TEXTURE30 = 0x84DE;
	
	/**
	 * @const
	 * @type {number}
	 */
	var TEXTURE31 = exports.TEXTURE31 = 0x84DF;
	
	/**
	 * @const
	 * @type {number}
	 */
	var ACTIVE_TEXTURE = exports.ACTIVE_TEXTURE = 0x84E0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var REPEAT = exports.REPEAT = 0x2901;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CLAMP_TO_EDGE = exports.CLAMP_TO_EDGE = 0x812F;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MIRRORED_REPEAT = exports.MIRRORED_REPEAT = 0x8370;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FLOAT_VEC2 = exports.FLOAT_VEC2 = 0x8B50;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FLOAT_VEC3 = exports.FLOAT_VEC3 = 0x8B51;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FLOAT_VEC4 = exports.FLOAT_VEC4 = 0x8B52;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INT_VEC2 = exports.INT_VEC2 = 0x8B53;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INT_VEC3 = exports.INT_VEC3 = 0x8B54;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INT_VEC4 = exports.INT_VEC4 = 0x8B55;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BOOL = exports.BOOL = 0x8B56;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BOOL_VEC2 = exports.BOOL_VEC2 = 0x8B57;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BOOL_VEC3 = exports.BOOL_VEC3 = 0x8B58;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BOOL_VEC4 = exports.BOOL_VEC4 = 0x8B59;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FLOAT_MAT2 = exports.FLOAT_MAT2 = 0x8B5A;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FLOAT_MAT3 = exports.FLOAT_MAT3 = 0x8B5B;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FLOAT_MAT4 = exports.FLOAT_MAT4 = 0x8B5C;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SAMPLER_2D = exports.SAMPLER_2D = 0x8B5E;
	
	/**
	 * @const
	 * @type {number}
	 */
	var SAMPLER_CUBE = exports.SAMPLER_CUBE = 0x8B60;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VERTEX_ATTRIB_ARRAY_ENABLED = exports.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VERTEX_ATTRIB_ARRAY_SIZE = exports.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VERTEX_ATTRIB_ARRAY_STRIDE = exports.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VERTEX_ATTRIB_ARRAY_TYPE = exports.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VERTEX_ATTRIB_ARRAY_NORMALIZED = exports.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VERTEX_ATTRIB_ARRAY_POINTER = exports.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
	
	/**
	 * @const
	 * @type {number}
	 */
	var VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = exports.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
	
	/**
	 * @const
	 * @type {number}
	 */
	var COMPILE_STATUS = exports.COMPILE_STATUS = 0x8B81;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LOW_FLOAT = exports.LOW_FLOAT = 0x8DF0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MEDIUM_FLOAT = exports.MEDIUM_FLOAT = 0x8DF1;
	
	/**
	 * @const
	 * @type {number}
	 */
	var HIGH_FLOAT = exports.HIGH_FLOAT = 0x8DF2;
	
	/**
	 * @const
	 * @type {number}
	 */
	var LOW_INT = exports.LOW_INT = 0x8DF3;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MEDIUM_INT = exports.MEDIUM_INT = 0x8DF4;
	
	/**
	 * @const
	 * @type {number}
	 */
	var HIGH_INT = exports.HIGH_INT = 0x8DF5;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER = exports.FRAMEBUFFER = 0x8D40;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER = exports.RENDERBUFFER = 0x8D41;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RGBA4 = exports.RGBA4 = 0x8056;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RGB5_A1 = exports.RGB5_A1 = 0x8057;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RGB565 = exports.RGB565 = 0x8D62;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_COMPONENT16 = exports.DEPTH_COMPONENT16 = 0x81A5;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_INDEX = exports.STENCIL_INDEX = 0x1901;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_INDEX8 = exports.STENCIL_INDEX8 = 0x8D48;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_STENCIL = exports.DEPTH_STENCIL = 0x84F9;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_WIDTH = exports.RENDERBUFFER_WIDTH = 0x8D42;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_HEIGHT = exports.RENDERBUFFER_HEIGHT = 0x8D43;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_INTERNAL_FORMAT = exports.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_RED_SIZE = exports.RENDERBUFFER_RED_SIZE = 0x8D50;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_GREEN_SIZE = exports.RENDERBUFFER_GREEN_SIZE = 0x8D51;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_BLUE_SIZE = exports.RENDERBUFFER_BLUE_SIZE = 0x8D52;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_ALPHA_SIZE = exports.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_DEPTH_SIZE = exports.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_STENCIL_SIZE = exports.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = exports.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = exports.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
	
	/**
	 * @const
	 * @type {number}
	 */
	var COLOR_ATTACHMENT0 = exports.COLOR_ATTACHMENT0 = 0x8CE0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_ATTACHMENT = exports.DEPTH_ATTACHMENT = 0x8D00;
	
	/**
	 * @const
	 * @type {number}
	 */
	var STENCIL_ATTACHMENT = exports.STENCIL_ATTACHMENT = 0x8D20;
	
	/**
	 * @const
	 * @type {number}
	 */
	var DEPTH_STENCIL_ATTACHMENT = exports.DEPTH_STENCIL_ATTACHMENT = 0x821A;
	
	/**
	 * @const
	 * @type {number}
	 */
	var NONE = exports.NONE = 0;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_COMPLETE = exports.FRAMEBUFFER_COMPLETE = 0x8CD5;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_INCOMPLETE_ATTACHMENT = exports.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = exports.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_INCOMPLETE_DIMENSIONS = exports.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_UNSUPPORTED = exports.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
	
	/**
	 * @const
	 * @type {number}
	 */
	var FRAMEBUFFER_BINDING = exports.FRAMEBUFFER_BINDING = 0x8CA6;
	
	/**
	 * @const
	 * @type {number}
	 */
	var RENDERBUFFER_BINDING = exports.RENDERBUFFER_BINDING = 0x8CA7;
	
	/**
	 * @const
	 * @type {number}
	 */
	var MAX_RENDERBUFFER_SIZE = exports.MAX_RENDERBUFFER_SIZE = 0x84E8;
	
	/**
	 * @const
	 * @type {number}
	 */
	var INVALID_FRAMEBUFFER_OPERATION = exports.INVALID_FRAMEBUFFER_OPERATION = 0x0506;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNPACK_FLIP_Y_WEBGL = exports.UNPACK_FLIP_Y_WEBGL = 0x9240;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNPACK_PREMULTIPLY_ALPHA_WEBGL = exports.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
	
	/**
	 * @const
	 * @type {number}
	 */
	var CONTEXT_LOST_WEBGL = exports.CONTEXT_LOST_WEBGL = 0x9242;
	
	/**
	 * @const
	 * @type {number}
	 */
	var UNPACK_COLORSPACE_CONVERSION_WEBGL = exports.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
	
	/**
	 * @const
	 * @type {number}
	 */
	var BROWSER_DEFAULT_WEBGL = exports.BROWSER_DEFAULT_WEBGL = 0x9244;
	
	/**
	 * From the OES_texture_half_float extension.
	 * http://www.khronos.org/registry/webgl/extensions/OES_texture_half_float/
	 * @const
	 * @type {number}
	 */
	var HALF_FLOAT_OES = exports.HALF_FLOAT_OES = 0x8D61;
	
	/**
	 * From the OES_standard_derivatives extension.
	 * http://www.khronos.org/registry/webgl/extensions/OES_standard_derivatives/
	 * @const
	 * @type {number}
	 */
	var FRAGMENT_SHADER_DERIVATIVE_HINT_OES = exports.FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8B8B;
	
	/**
	 * From the OES_vertex_array_object extension.
	 * http://www.khronos.org/registry/webgl/extensions/OES_vertex_array_object/
	 * @const
	 * @type {number}
	 */
	var VERTEX_ARRAY_BINDING_OES = exports.VERTEX_ARRAY_BINDING_OES = 0x85B5;
	
	/**
	 * From the WEBGL_debug_renderer_info extension.
	 * http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
	 * @const
	 * @type {number}
	 */
	var UNMASKED_VENDOR_WEBGL = exports.UNMASKED_VENDOR_WEBGL = 0x9245;
	
	/**
	 * From the WEBGL_debug_renderer_info extension.
	 * http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
	 * @const
	 * @type {number}
	 */
	var UNMASKED_RENDERER_WEBGL = exports.UNMASKED_RENDERER_WEBGL = 0x9246;
	
	/**
	 * From the WEBGL_compressed_texture_s3tc extension.
	 * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
	 * @const
	 * @type {number}
	 */
	var COMPRESSED_RGB_S3TC_DXT1_EXT = exports.COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;
	
	/**
	 * From the WEBGL_compressed_texture_s3tc extension.
	 * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
	 * @const
	 * @type {number}
	 */
	var COMPRESSED_RGBA_S3TC_DXT1_EXT = exports.COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1;
	
	/**
	 * From the WEBGL_compressed_texture_s3tc extension.
	 * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
	 * @const
	 * @type {number}
	 */
	var COMPRESSED_RGBA_S3TC_DXT3_EXT = exports.COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;
	
	/**
	 * From the WEBGL_compressed_texture_s3tc extension.
	 * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
	 * @const
	 * @type {number}
	 */
	var COMPRESSED_RGBA_S3TC_DXT5_EXT = exports.COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;
	
	/**
	 * From the EXT_texture_filter_anisotropic extension.
	 * http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
	 * @const
	 * @type {number}
	 */
	var TEXTURE_MAX_ANISOTROPY_EXT = exports.TEXTURE_MAX_ANISOTROPY_EXT = 0x84FE;
	
	/**
	 * From the EXT_texture_filter_anisotropic extension.
	 * http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
	 * @const
	 * @type {number}
	 */
	var MAX_TEXTURE_MAX_ANISOTROPY_EXT = exports.MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84FF;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Sprite = undefined;
	
	var _BlendMode = __webpack_require__(1);
	
	var _Color = __webpack_require__(13);
	
	var _Drawable2 = __webpack_require__(27);
	
	var _SpriteCommand = __webpack_require__(51);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A sprite
	 *
	 * @description Draw 2D textured element efficiently.
	 * @extends {Drawable}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Sprite = exports.Sprite = function (_Drawable) {
	  _inherits(Sprite, _Drawable);
	
	  /**
	   * Constructor
	   */
	
	  function Sprite() {
	    _classCallCheck(this, Sprite);
	
	    /**
	     * Blend mode
	     *
	     * @type {BlendMode}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sprite).call(this));
	
	    _this.blendMode = new _BlendMode.BlendMode(_BlendMode.BlendMode.Mode.Alpha);
	
	    /**
	     * Color
	     *
	     * @type {Color}
	     * @private
	     */
	    _this.color = new _Color.Color(255, 255, 255, 255);
	
	    /**
	     * Texture's area to show.
	     * - Two first values represents x and y offset
	     * - Two last values represents width and height (relative to offset)
	     *
	     * @type {Array.<number>}
	     * @private
	     */
	    _this.rect = [0.0, 0.0, 0.0, 0.0];
	
	    /**
	     * Size
	     *
	     * @type {Array.<number>}
	     * @private
	     */
	    _this.size = [0.5, 0.5];
	
	    /**
	     * Program
	     *
	     * @type {Program}
	     * @private
	     */
	    _this.customProgram = null;
	
	    /**
	     * Texture
	     *
	     * @type {TextureInterface}
	     * @private
	     */
	    _this.texture = null;
	    return _this;
	  }
	
	  /**
	   * Set blend mode to use
	   *
	   * @param {BlendMode} blendMode A BlendMode instance
	   */
	
	  _createClass(Sprite, [{
	    key: 'setBlendMode',
	    value: function setBlendMode(blendMode) {
	      this.blendMode = blendMode;
	    }
	
	    /**
	     * Set program to use
	     *
	     * @param {number} r Red color in the range [0-255]
	     * @param {number} g Green color in the range [0-255]
	     * @param {number} b Blue color in the range [0-255]
	     * @param {number=} a Opacity in the range [0-255]
	     */
	
	  }, {
	    key: 'setColor',
	    value: function setColor(r, g, b, a) {
	      this.color.set(r, g, b, a);
	    }
	
	    /**
	     * Draw the element
	     *
	     * @param {RenderTarget} renderTarget Renderer who called this method
	     */
	
	  }, {
	    key: 'draw',
	    value: function draw(renderTarget) {
	      if (this.texture) renderTarget.getActiveTask().addCommand(new _SpriteCommand.SpriteCommand(this));
	    }
	
	    /**
	     * Set program to use
	     *
	     * @param {Program} program A Program instance
	     */
	
	  }, {
	    key: 'setCustomProgram',
	    value: function setCustomProgram(program) {
	      this.customProgram = program;
	    }
	
	    /**
	     * Set sprite's size
	     *
	     * @param {number} x Size on X
	     * @param {number} y Size on Y
	     */
	
	  }, {
	    key: 'setSize',
	    value: function setSize(x, y) {
	      this.size[0] = x;
	      this.size[1] = y;
	    }
	
	    /**
	     * Set texture to use
	     *
	     * @param {TextureInterface} texture Can be a Texture or a TextureVideo
	     */
	
	  }, {
	    key: 'setTexture',
	    value: function setTexture(texture) {
	      this.texture = texture;
	    }
	
	    /**
	     * Set texture's area to show
	     *
	     * @param {number} x Start position on x
	     * @param {number} y Start position on y
	     * @param {number} w Area's width
	     * @param {number} h Area's height
	     */
	
	  }, {
	    key: 'setTextureRect',
	    value: function setTextureRect(x, y, w, h) {
	      this.rect = [x, y, w, h];
	    }
	
	    /**
	     * Get sprite's blend mode
	     *
	     * @return {BlendMode} A BlendMode instance
	     */
	
	  }, {
	    key: 'getBlendMode',
	    value: function getBlendMode() {
	      return this.blendMode;
	    }
	
	    /**
	     * Get sprite's color
	     *
	     * @return {Color} A Color instance
	     */
	
	  }, {
	    key: 'getColor',
	    value: function getColor() {
	      return this.color;
	    }
	
	    /**
	     * Get program
	     *
	     * @return {?Program} A Program instance or null if the sprite use the default program
	     */
	
	  }, {
	    key: 'getCustomProgram',
	    value: function getCustomProgram() {
	      return this.customProgram;
	    }
	
	    /**
	     * Get size
	     *
	     * @return {Array.<number>} An array with index 0 for size on X and index 1 for size on y
	     */
	
	  }, {
	    key: 'getSize',
	    value: function getSize() {
	      return this.size;
	    }
	
	    /**
	     * Get texture
	     *
	     * @return {TextureInterface} A texture
	     */
	
	  }, {
	    key: 'getTexture',
	    value: function getTexture() {
	      return this.texture;
	    }
	
	    /**
	     * Get texture's area to show
	     *
	     * @return {Array.<number>} An array representing area to show (x, y, w, h)
	     */
	
	  }, {
	    key: 'getTextureRect',
	    value: function getTextureRect() {
	      return this.rect;
	    }
	  }]);
	
	  return Sprite;
	}(_Drawable2.Drawable);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SpriteCommand = undefined;
	
	var _StateBlock = __webpack_require__(18);
	
	var _Geometry = __webpack_require__(20);
	
	var _Program = __webpack_require__(29);
	
	var _RenderCommand2 = __webpack_require__(30);
	
	var _TextureVideo = __webpack_require__(48);
	
	var _Types = __webpack_require__(25);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Draw sprites
	 *
	 * @extends {RenderCommand}
	 */
	
	var SpriteCommand = exports.SpriteCommand = function (_RenderCommand) {
	    _inherits(SpriteCommand, _RenderCommand);
	
	    /**
	     * Constructor
	     *
	     * @param {Sprite} sprite A Sprite instance
	     */
	
	    function SpriteCommand(sprite) {
	        _classCallCheck(this, SpriteCommand);
	
	        /**
	         * The Sprite instance to draw
	         *
	         * @type {Sprite}
	         * @private
	         */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SpriteCommand).call(this));
	
	        _this.sprite = sprite;
	        return _this;
	    }
	
	    /**
	     * Execute the command
	     *
	     * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
	     */
	
	    _createClass(SpriteCommand, [{
	        key: 'execute',
	        value: function execute(renderAPI) {
	            SpriteCommand.draw(renderAPI, this.sprite);
	        }
	
	        /**
	         * Draw the given sprite
	         *
	         * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
	         * @param {Sprite} sprite Sprite instance to draw
	         */
	
	    }], [{
	        key: 'draw',
	        value: function draw(renderAPI, sprite) {
	            var spriteTexture = sprite.getTexture();
	            if (!spriteTexture.isReady()) return;
	
	            // Use custom or default program
	            var program = sprite.getCustomProgram();
	            if (!program) {
	                if (SpriteCommand.isDefaultProgramLoaded()) program = SpriteCommand.sharedProgram;else return;
	            }
	
	            // Program.
	            var programCode = renderAPI.setProgram(program);
	            if (programCode === -1) return;
	
	            var spriteRect = sprite.getTextureRect();
	            var spriteSize = sprite.getSize();
	
	            // Must send/update shared uniforms
	            if (programCode === 1) renderAPI.setUniform(program, 'uCamera', _Types.Type.Matrix, renderAPI.getActiveCamera().getViewProjectionMatrix());
	
	            // Send uniforms
	            renderAPI.setUniform(program, 'uModel', _Types.Type.Matrix, sprite.getTransformationMatrix());
	
	            // States and apparence
	            renderAPI.setBlendMode(sprite.getBlendMode());
	            renderAPI.setDepthState(true, true, _StateBlock.DepthFunction.Less);
	            renderAPI.bindTexture(0, spriteTexture);
	
	            // Set visible area
	            var uvs = null;
	            if (spriteTexture instanceof _TextureVideo.TextureVideo) uvs = new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]);else {
	                var textureSize = spriteTexture.getImage().getSize();
	
	                var x1 = spriteRect[0] / textureSize[0];
	                var y1 = (spriteRect[1] + spriteRect[3]) / textureSize[1];
	                var x2 = (spriteRect[0] + spriteRect[2]) / textureSize[0];
	                var y2 = spriteRect[1] / textureSize[1];
	
	                if (spriteRect[2] === 0 && spriteRect[3] === 0) x2 = y2 = 1.0;
	
	                uvs = new Float32Array([x1, y2, x1, y1, x2, y2, x2, y1]);
	            }
	            SpriteCommand.sharedGeometry.setTextureUVs(uvs);
	
	            // Set color
	            var spriteColor = sprite.getColor();
	            var colors = new Float32Array([spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a, spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a, spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a, spriteColor.r, spriteColor.g, spriteColor.b, spriteColor.a]);
	            SpriteCommand.sharedGeometry.setColors(colors);
	
	            // Set positions
	            var positions = new Float32Array([-spriteSize[0], -spriteSize[1], 0, -spriteSize[0], spriteSize[1], 0, spriteSize[0], -spriteSize[1], 0, spriteSize[0], spriteSize[1], 0]);
	            SpriteCommand.sharedGeometry.setPositions(positions);
	
	            // Bind geometry
	            renderAPI.setGeometry(SpriteCommand.sharedGeometry);
	
	            // Draw object
	            renderAPI.drawIndexedPrimitives(_StateBlock.DrawingMode.TrianglesStrip, 0, 4);
	        }
	
	        /**
	         * Check if the default program is ready, otherwise the function load it
	         *
	         * @return {boolean} Return true if the default program is loaded
	         */
	
	    }, {
	        key: 'isDefaultProgramLoaded',
	        value: function isDefaultProgramLoaded() {
	            // Everything is ok?
	            if (SpriteCommand.sharedProgram.isReady()) return true;
	
	            var vertexShader = 'uniform mat4 uCamera;' + 'uniform mat4 uModel;' + 'attribute vec4 aPosition;' + 'attribute vec4 aColor;' + 'attribute vec2 aTexCoord;' + 'varying vec4 vColor;' + 'varying vec2 vUV;' + 'void main() {' + 'gl_Position = (uCamera * uModel) * aPosition;' + 'vColor      = aColor;' + 'vUV         = aTexCoord;' + '}';
	
	            var fragmentShader = 'uniform lowp sampler2D texture;' + 'varying lowp vec4 vColor;' + 'varying mediump vec2 vUV;' + 'void main() {' + 'gl_FragColor = texture2D(texture, vUV) * vColor;' + '}';
	
	            SpriteCommand.sharedProgram.loadFromData(vertexShader, fragmentShader);
	
	            return false;
	        }
	    }]);
	
	    return SpriteCommand;
	}(_RenderCommand2.RenderCommand);
	
	/**
	 * Default geometry for sprite rendering
	 *
	 * @type {Geometry}
	 * @private
	 */
	
	SpriteCommand.sharedGeometry = _Geometry.Geometry.createRectangle(0.5, 0.5);
	
	/**
	 * Default program for sprite rendering
	 *
	 * @type {Program}
	 * @private
	 */
	SpriteCommand.sharedProgram = new _Program.Program();

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RenderCanvas = undefined;
	
	var _Context = __webpack_require__(41);
	
	var _RenderTarget2 = __webpack_require__(40);
	
	var _RenderWebGL = __webpack_require__(43);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A rendering canvas
	 *
	 * @extends {RenderTarget}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var RenderCanvas = exports.RenderCanvas = function (_RenderTarget) {
	  _inherits(RenderCanvas, _RenderTarget);
	
	  /**
	   * Constructor
	   *
	   * @param {string} canvas Id of the container
	   * @param {{antialiasing: boolean, width: (number|undefined), height: (number|undefined)}} options Options
	   * @param {string=} type A string with the value "webgl" or "canvas"
	   */
	
	  function RenderCanvas(canvas) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var type = arguments.length <= 2 || arguments[2] === undefined ? 'webgl' : arguments[2];
	
	    _classCallCheck(this, RenderCanvas);
	
	    /**
	     * The render API to use: For now we support WebGL 1.0.3 only
	     *
	     * @type {RenderAPI}
	     * @protected
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RenderCanvas).call(this));
	
	    _this.renderApi = _RenderWebGL.WebGL.getInstance();
	
	    // Init the context
	    _this.context.init(_Context.Context.Type.WebGL, options, canvas);
	    return _this;
	  }
	
	  /**
	   * Clear the canvas
	   *
	   * @param {Color} color A Color instance
	   */
	
	  _createClass(RenderCanvas, [{
	    key: 'clear',
	    value: function clear(color) {
	      // Remove previous tasks
	      this.removeTasks();
	
	      // Activate context
	      this.context.activate();
	
	      // Clear screen
	      this.renderApi.clear(color);
	    }
	  }]);
	
	  return RenderCanvas;
	}(_RenderTarget2.RenderTarget);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Scene = undefined;
	
	var _Node = __webpack_require__(16);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A scene
	 *
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Scene = exports.Scene = function () {
	    /**
	     * Constructor
	     */
	
	    function Scene() {
	        _classCallCheck(this, Scene);
	
	        /**
	         * Root node
	         *
	         * @type {Node}
	         * @private
	         */
	        this.root = new _Node.Node('root');
	    }
	
	    /**
	     * Add a node element to the scene
	     *
	     * @param {Node} node A Node instance
	     */
	
	    _createClass(Scene, [{
	        key: 'add',
	        value: function add(node) {
	            this.root.addChild(node);
	        }
	
	        /**
	         * Find the node with the given name
	         *
	         * @param {string} name A string
	         * @return {?Node} A Node instance of null
	         */
	
	    }, {
	        key: 'find',
	        value: function find(name) {
	            return this.root.findChild(name);
	        }
	
	        /**
	         * Remove a node element from the scene
	         *
	         * @param {Node} node A Node instance
	         * @return {boolean} True if the operation is a success
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(node) {
	            return this.root.removeChild(node);
	        }
	
	        /**
	         * Update the graph
	         *
	         * @param {number} deltaTime A floating value representing time elapsed between two frames
	         */
	
	    }, {
	        key: 'update',
	        value: function update(deltaTime) {
	            // Recursive function to roam the graph
	            function update(node, deltaTime, parentUpdated) {
	                // Update node
	                var updated = node.update(deltaTime, parentUpdated);
	
	                // Update his children
	                var children = node.getChildren();
	                for (var i = 0; i < children.length; i++) {
	                    update(children[i], deltaTime, updated || parentUpdated);
	                }
	            }
	
	            // Start the recursive method
	            update(this.root, deltaTime, false);
	        }
	
	        /**
	         * Visit the graph
	         *
	         * @param {RenderTarget} renderTarget Renderer who called this method
	         */
	
	    }, {
	        key: 'visit',
	        value: function visit(renderTarget) {
	            // Recursive function to roam the graph
	            function visit(node, target) {
	                // Visit node
	                node.visit(target);
	
	                // Visit his children
	                var children = node.getChildren();
	                for (var i = 0; i < children.length; i++) {
	                    visit(children[i], target);
	                }
	            }
	
	            // Start the recursive method
	            visit(this.root, renderTarget);
	        }
	    }]);
	
	    return Scene;
	}();

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Skybox = undefined;
	
	var _Drawable2 = __webpack_require__(27);
	
	var _SkyboxCommand = __webpack_require__(55);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A Skybox
	 *
	 * @extends {Drawable}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var Skybox = exports.Skybox = function (_Drawable) {
	  _inherits(Skybox, _Drawable);
	
	  /**
	   * Constructor
	   */
	
	  function Skybox() {
	    _classCallCheck(this, Skybox);
	
	    /**
	     * Program
	     *
	     * @type {Program}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Skybox).call(this));
	
	    _this.customProgram = null;
	
	    /**
	     * Texture cube linked
	     *
	     * @type {TextureCube}
	     * @private
	     */
	    _this.texture = null;
	    return _this;
	  }
	
	  /**
	   * Draw the element
	   *
	   * @param {RenderTarget} renderTarget Renderer who called this method
	   */
	
	  _createClass(Skybox, [{
	    key: 'draw',
	    value: function draw(renderTarget) {
	      if (this.texture) renderTarget.getActiveTask().addCommand(new _SkyboxCommand.SkyboxCommand(this));
	    }
	
	    /**
	     * Set program to use
	     *
	     * @param {Program} program A Program instance.
	     */
	
	  }, {
	    key: 'setCustomProgram',
	    value: function setCustomProgram(program) {
	      this.customProgram = program;
	    }
	
	    /**
	     * Set texture
	     *
	     * @param {TextureCube} texture A TextureCube instance
	     */
	
	  }, {
	    key: 'setTexture',
	    value: function setTexture(texture) {
	      this.texture = texture;
	    }
	
	    /**
	     * Get program
	     *
	     * @return {?Program} A Program instance or null if the Skybox use the default program
	     */
	
	  }, {
	    key: 'getCustomProgram',
	    value: function getCustomProgram() {
	      return this.customProgram;
	    }
	
	    /**
	     * Get the linked TextureCube instance
	     *
	     * @return {TextureCube} A TextureCube instances
	     */
	
	  }, {
	    key: 'getTexture',
	    value: function getTexture() {
	      return this.texture;
	    }
	  }]);
	
	  return Skybox;
	}(_Drawable2.Drawable);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SkyboxCommand = undefined;
	
	var _StateBlock = __webpack_require__(18);
	
	var _Geometry = __webpack_require__(20);
	
	var _Program = __webpack_require__(29);
	
	var _RenderCommand2 = __webpack_require__(30);
	
	var _TextureCube = __webpack_require__(47);
	
	var _Types = __webpack_require__(25);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var glMatrix = __webpack_require__(3);
	
	/**
	 * Draw Skyboxes
	 *
	 * @extends {RenderCommand}
	 */
	
	var SkyboxCommand = exports.SkyboxCommand = function (_RenderCommand) {
	    _inherits(SkyboxCommand, _RenderCommand);
	
	    /**
	     * Constructor
	     *
	     * @param {Skybox} skybox A Skybox instance
	     */
	
	    function SkyboxCommand(skybox) {
	        _classCallCheck(this, SkyboxCommand);
	
	        /**
	         * The Skybox instance to draw
	         *
	         * @type {Skybox}
	         * @private
	         */
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SkyboxCommand).call(this));
	
	        _this.skybox = skybox;
	        return _this;
	    }
	
	    /**
	     * Execute the command
	     *
	     * @param {RenderAPI} renderAPI RenderAPI instance used to process the commands
	     */
	
	    _createClass(SkyboxCommand, [{
	        key: 'execute',
	        value: function execute(renderAPI) {
	            var texture = this.skybox.getTexture();
	            if (!texture || !texture.isReady()) return;
	
	            // Use custom or default program.
	            var program = this.skybox.getCustomProgram();
	            if (!program) {
	                if (SkyboxCommand.isDefaultProgramLoaded()) program = SkyboxCommand.sharedProgram;else return;
	            }
	
	            // Program
	            var programCode = renderAPI.setProgram(program);
	            if (programCode == -1) return;
	
	            // Must send/update shared uniforms
	            if (programCode == 1) {
	                var toMat4 = function toMat4(mat) {
	                    var result = glMatrix.mat4.create();
	                    result[15] = 1;result[14] = 0;result[13] = 0;result[12] = 0;
	                    result[11] = 0;result[10] = mat[8];result[9] = mat[7];result[8] = mat[6];
	                    result[7] = 0;result[6] = mat[5];result[5] = mat[4];result[4] = mat[3];
	                    result[3] = 0;result[2] = mat[2];result[1] = mat[1];result[0] = mat[0];
	
	                    return result;
	                };
	
	                renderAPI.setUniform(program, 'projection', _Types.Type.Matrix, renderAPI.getActiveCamera().getProjectionMatrix());
	
	                // Tip: Remove last row and col from the matrix to get an infinite Skybox
	                var viewMatrix = renderAPI.getActiveCamera().getViewMatrix();
	                var m = glMatrix.mat3.fromMat4([], viewMatrix);
	
	                renderAPI.setUniform(program, 'view', _Types.Type.Matrix, toMat4(m));
	            }
	
	            // Send uniforms
	            renderAPI.setUniform(program, 'uModel', _Types.Type.Matrix, this.skybox.getTransformationMatrix());
	
	            // States and apparence
	            renderAPI.setDepthState(false, false, _StateBlock.DepthFunction.Less);
	            renderAPI.bindTextureCube(0, texture);
	
	            // Bind geometry
	            renderAPI.setGeometry(SkyboxCommand.sharedGeometry);
	
	            // Draw object
	            renderAPI.drawIndexedPrimitives(_StateBlock.DrawingMode.Triangles, 0, SkyboxCommand.sharedGeometry.getIndexCount());
	        }
	
	        /**
	         * Check if the default program is ready, otherwise the function load it
	         *
	         * @return {boolean} Return true if the default program is loaded
	         */
	
	    }], [{
	        key: 'isDefaultProgramLoaded',
	        value: function isDefaultProgramLoaded() {
	            if (SkyboxCommand.sharedProgram.isReady()) return true;
	
	            var vertexShader = 'uniform mat4 projection;' + 'uniform mat4 view;' + 'uniform mat4 uModel;' + 'attribute vec4 aPosition;' + 'attribute vec4 aColor;' + 'varying vec4 vColor;' + 'varying vec4 vUV;' + 'void main() {' + 'gl_Position = projection * view * aPosition;' + 'vColor      = aColor;' + 'vUV         = aPosition;' + '}';
	
	            var fragmentShader = 'uniform lowp samplerCube skybox;' + 'varying lowp vec4 vColor;' + 'varying mediump vec4 vUV;' + 'void main() {' + 'gl_FragColor = textureCube(skybox, vUV.xyz) * vColor;' + '}';
	
	            SkyboxCommand.sharedProgram.loadFromData(vertexShader, fragmentShader);
	
	            return false;
	        }
	    }]);
	
	    return SkyboxCommand;
	}(_RenderCommand2.RenderCommand);
	
	/**
	 * Default geometry for skybox rendering
	 *
	 * @type {Geometry}
	 * @private
	 */
	
	SkyboxCommand.sharedGeometry = _Geometry.Geometry.createCube(0.5, 0.5, 0.5);
	
	/**
	 * Default program for skybox rendering
	 *
	 * @type {Program}
	 * @private
	 */
	SkyboxCommand.sharedProgram = new _Program.Program();

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SpotLight = undefined;
	
	var _Light2 = __webpack_require__(15);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A spotlight
	 *
	 * @extends {Light}
	 * @author Donovan ORHAN <dono.orhan@gmail.com>
	 */
	
	var SpotLight = exports.SpotLight = function (_Light) {
	  _inherits(SpotLight, _Light);
	
	  /**
	   * Constructor
	   */
	
	  function SpotLight() {
	    _classCallCheck(this, SpotLight);
	
	    /**
	     * Constant
	     *
	     * @type {number}
	     * @private
	     */
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SpotLight).call(this));
	
	    _this.constant = 1.0;
	
	    /**
	     * Cutoff angle
	     *
	     * @type {number}
	     * @private
	     */
	    _this.cutoff = 12.5;
	
	    /**
	     * Light's direction
	     *
	     * @type {Array.<number>}
	     * @private
	     */
	    _this.direction = [];
	
	    /**
	     * Linear value
	     *
	     * @type {number}
	     * @private
	     */
	    _this.linear = 0.09;
	
	    /**
	     * Quadratic value
	     *
	     * @type {number}
	     * @private
	     */
	    _this.quadratic = 0.032;
	    return _this;
	  }
	
	  /**
	   * Set direction
	   *
	   * @param {number} x Direction on X
	   * @param {number} y Direction on Y
	   * @param {number} z Direction on Z
	   */
	
	  _createClass(SpotLight, [{
	    key: 'setDirection',
	    value: function setDirection(x, y, z) {
	      this.direction = [x, y, z];
	    }
	
	    /**
	     * Set cut off
	     *
	     * @param {number} value The cutoff value
	     */
	
	  }, {
	    key: 'setCutoff',
	    value: function setCutoff(value) {
	      this.cutoff = value;
	    }
	
	    /**
	     * Set point light's values
	     *
	     * @param {number} constant The constant value
	     * @param {number} linear The linear value
	     * @param {number} quadratic The quadratic value
	     */
	
	  }, {
	    key: 'setValues',
	    value: function setValues(constant, linear, quadratic) {
	      this.constant = constant;
	      this.linear = linear;
	      this.quadratic = quadratic;
	    }
	
	    /**
	     * Get direction
	     *
	     * @return {Array.<number>} A vector with values for each axis
	     */
	
	  }, {
	    key: 'getDirection',
	    value: function getDirection() {
	      return this.direction;
	    }
	
	    /**
	     * Get values
	     *
	     * @return {Array.<number>} An array with constant, linear and quadratic values
	     */
	
	  }, {
	    key: 'getValues',
	    value: function getValues() {
	      return [this.constant, this.linear, this.quadratic];
	    }
	  }]);
	
	  return SpotLight;
	}(_Light2.Light);

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Lemon.js.map