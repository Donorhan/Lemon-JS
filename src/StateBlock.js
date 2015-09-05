goog.provide('Lemon.DepthFunction');
goog.provide('Lemon.FaceCulling');
goog.provide('Lemon.StateBlock');
goog.provide('Lemon.StencilFunction');
goog.provide('Lemon.StencilOperation');
goog.require('Lemon.BlendMode');

/**
 * A rendering state.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.StateBlock = function() 
{
    /**
    * Blend mode.
    * @type {Lemon.BlendMode}
    * @public
    */
    this.blendMode = new Lemon.BlendMode();

    /**
    * Depth function to use.
    * @type {Lemon.DepthFunction}
    * @default {Lemon.DepthFunction.Less}
    * @public
    */
    this.depthFunction = Lemon.DepthFunction.Less;

    /**
    * Indicate if we want to write in the depth buffer.
    * @type {boolean}
    * @default {true}
    * @public
    */
    this.depthWrite = true;

    /**
    * Indicate if we want to test pixels with values in the depth buffer.
    * @type {boolean}
    * @default {true}
    * @public
    */
    this.depthTest = true;

    /**
    * Drawing mode.
    * @type {Lemon.DrawingMode}
    * @default {Lemon.DrawingMode.Triangles}
    * @public
    */
    this.drawingMode = Lemon.DrawingMode.Triangles;

    /**
    * Face culling.
    * @type {Lemon.FaceCulling}
    * @default {Lemon.FaceCulling.Back}
    * @public
    */
    this.faceCulling = Lemon.FaceCulling.Back;

    /**
    * Stencil function to use.
    * @type {Lemon.StencilFunction}
    * @default {Lemon.StencilFunction.Less}
    * @public
    */
    this.stencilFunction = Lemon.StencilFunction.Less;

    /**
    * Stencil reference value. 
    * @type {number}
    * @default {0}
    * @public
    */
    this.stencilReference = 0;

    /**
    * Stencil mask value. 
    * @type {number}
    * @default {255}
    * @public
    */
    this.stencilMask = 255;

    /**
    * Indicate if stencil test is actif.
    * @type {boolean}
    * @default {false}
    * @public
    */
    this.stencilTest = false;

    /**
    * Value to write in the stencil buffer when stencil is actif. 
    * @type {number}
    * @default {0xFF}
    * @public
    */
    this.stencilWrite = 0xFF;

    /**
    * Operation to execute when stencil test failed. 
    * @type {Lemon.StencilOperation}
    * @default {Lemon.StencilOperation.Keep}
    * @public
    */
    this.stencilTestFail = Lemon.StencilOperation.Keep;

    /**
    * Operation to execute when stencil test failed using depth buffer. 
    * @type {Lemon.StencilOperation}
    * @default {Lemon.StencilOperation.Keep}
    * @public
    */
    this.stencilDepthTestFail = Lemon.StencilOperation.Keep;

    /**
    * Operation to execute when stencil test is a success. 
    * @type {Lemon.StencilOperation}
    * @default {Lemon.StencilOperation.Keep}
    * @public
    */
    this.stencilSuccess = Lemon.StencilOperation.Keep;
};

/**
 * Depth functions.
 * @enum {number}
 */
Lemon.DepthFunction = { Never: 0, Less: 1, Equal: 2, LessEqual: 3, Greater: 4, NotEqual: 5, GreaterEqual: 6, Always: 7 };

/**
* Drawing modes.
* @enum {number}
*/
Lemon.DrawingMode = { Points: 0, Lines: 1, LinesStrip: 2, LinesLoop: 3, Triangles: 4, TrianglesStrip: 5, TrianglesFan: 6 };

/**
 * Blend factors.
 * @enum {number}
 */
Lemon.FaceCulling = { Back: 0, Front: 1, None: 2 };

/**
 * Stencil functions.
 * @enum {number}
 */
Lemon.StencilFunction = { Never: 0, Less: 1, Equal: 2, LessEqual: 3, Greater: 4, NotEqual: 5, GreaterEqual: 6, Always: 7 };

/**
 * Stencil operations.
 * @enum {number}
 */
Lemon.StencilOperation = { Keep: 0, Zero: 1, Replace: 2, Increment: 3, Decrement: 4, Invert: 5, IncrementWrap: 6, DecrementWrap: 7 };

/**
 * Check if the given StateBlock instance is equal to this one.
 * @param {Lemon.StateBlock} state A StateBlock instance.
 * @return {boolean} True if the two states are equals, otherwise false.
 */
Lemon.StateBlock.prototype.isEqual = function( state ) 
{
    return (this.blendMode.isEqual(state.blendMode)                     &&
            this.depthFunction          == state.depthFunction          && 
            this.depthWrite             == state.depthWrite             &&
            this.depthTest              == state.depthTest              &&
            this.stencilFunction        == state.stencilFunction        &&
            this.stencilReference       == state.stencilReference       &&
            this.stencilMask            == state.stencilMask            &&
            this.stencilTest            == state.stencilTest            &&
            this.stencilWrite           == state.stencilWrite           &&
            this.stencilTestFail        == state.stencilTestFail        &&
            this.stencilDepthTestFail   == state.stencilDepthTestFail   &&
            this.stencilSuccess         == state.stencilSuccess );
};
