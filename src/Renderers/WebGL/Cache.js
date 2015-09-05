goog.provide('Lemon.WebGL.Cache');
goog.require('Lemon.Light');

/**
 * Cache for WebGL API.
 * @constructor.
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.WebGL.Cache = function() 
{

    /**
    * Active vertex format.
    * @type {Lemon.Color}
    * @public
    */
    this.clearColor = new Lemon.Color(1, 1, 1, 255);

    /**
    * Active program.
    * @type {Lemon.Program}
    * @public
    */
    this.program = null;

    /**
    * Active texture.
    * @type {Lemon.Private.TextureInterface|Lemon.TextureCube}
    * @public
    */
    this.texture = null;

    /**
    * Active vertex format.
    * @type {Lemon.VertexFormat}
    * @public
    */
    this.vertexFormat = null;

    /**
    * Array with lights to send to the programs.
    * @type {Array.<Lemon.Light>}
    * @public
    */
    this.lights = [];

    /**
    * Lights positions.
    * @type {Array.<number>}
    * @public
    */
    this.lightsAmbient = [];

    /**
    * Lights positions.
    * @type {Array.<number>}
    * @public
    */
    this.lightsDiffuse = [];

    /**
    * Lights data: constant, linear and quadratic data.
    * @type {Array.<number>}
    * @public
    */
    this.lightsData = [];

    /**
    * Lights positions.
    * @type {Array.<number>}
    * @public
    */
    this.lightsDirection = [];

    /**
    * Lights positions.
    * @type {Array.<number>}
    * @public
    */
    this.lightsPosition = [];

    /**
    * Lights positions.
    * @type {Array.<number>}
    * @public
    */
    this.lightsSpecular = [];

    /**
    * Lights type.
    * @type {Array.<number>}
    * @public
    */
    this.lightsType = [];
};
