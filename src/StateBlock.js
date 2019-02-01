import BlendMode from './BlendMode';

/**
 * Depth function to use
 *
 * @category Types
 */
export class DepthFunction {}

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
 *
 * @category Types
 */
export class DrawingMode {}

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
 *
 * @category Types
 */
export class FaceCulling {}

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
 *
 * @category Types
 */
export class StencilFunction {}

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
 *
 * @category Types
 */
export class StencilOperation {}

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

/**
 * A rendering state
 *
 * @category Core
 */
export class StateBlock {
    /**
     * Constructor
     */
    constructor() {
        /**
         * Blend mode
         *
         * @type {BlendMode}
         * @public
         */
        this.blendMode = new BlendMode();

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
    isEqual(state) {
        return (this.blendMode.isEqual(state.blendMode)
                && this.depthFunction === state.depthFunction
                && this.depthWrite === state.depthWrite
                && this.depthTest === state.depthTest
                && this.stencilFunction === state.stencilFunction
                && this.stencilReference === state.stencilReference
                && this.stencilMask === state.stencilMask
                && this.stencilTest === state.stencilTest
                && this.stencilWrite === state.stencilWrite
                && this.stencilTestFail === state.stencilTestFail
                && this.stencilDepthTestFail === state.stencilDepthTestFail
                && this.stencilSuccess === state.stencilSuccess);
    }
}
