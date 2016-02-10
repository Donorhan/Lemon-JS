import {BlendMode} from '../../BlendMode.js';
import {DepthFunction, DrawingMode, StencilFunction, StencilOperation} from '../../StateBlock.js';
import {Type} from '../../Types.js';
import {VertexElement} from '../../VertexFormat.js';
import * as WebGLConst from './WebGL.js';

/**
 * Class to convert types between the library and WebGL
 *
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
export class TypesConverter
{
    static init()
    {
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.Zero, WebGLConst.ZERO);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.One, WebGLConst.ONE);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.SourceColor, WebGLConst.SRC_COLOR);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.OneMinusSourceColor, WebGLConst.ONE_MINUS_SRC_COLOR);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.DestinationColor, WebGLConst.DST_COLOR);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.OneMinusDestinationColor, WebGLConst.ONE_MINUS_DST_COLOR);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.SourceAlpha, WebGLConst.SRC_ALPHA);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.OneMinusSourceAlpha, WebGLConst.ONE_MINUS_SRC_ALPHA);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.DestinationAlpha, WebGLConst.DST_ALPHA);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.OneMinusDestinationAlpha, WebGLConst.ONE_MINUS_DST_ALPHA);

        TypesConverter.blendingEquationToConstant.set(BlendMode.Equation.Add, WebGLConst.FUNC_ADD);
        TypesConverter.blendingEquationToConstant.set(BlendMode.Equation.Subtract, WebGLConst.FUNC_SUBTRACT);

        TypesConverter.depthFunctionToConstant.set(DepthFunction.Never, WebGLConst.NEVER);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.Less, WebGLConst.LESS);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.Equal, WebGLConst.EQUAL);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.LessEqual, WebGLConst.LEQUAL);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.Greater, WebGLConst.GREATER);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.NotEqual, WebGLConst.NOTEQUAL);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.GreaterEqual, WebGLConst.GEQUAL);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.Always, WebGLConst.ALWAYS);

        TypesConverter.drawingModeToConstant.set(DrawingMode.Points, WebGLConst.POINTS);
        TypesConverter.drawingModeToConstant.set(DrawingMode.Lines, WebGLConst.LINES);
        TypesConverter.drawingModeToConstant.set(DrawingMode.LinesStrip, WebGLConst.LINE_STRIP);
        TypesConverter.drawingModeToConstant.set(DrawingMode.LinesLoop, WebGLConst.LINE_LOOP);
        TypesConverter.drawingModeToConstant.set(DrawingMode.Triangles, WebGLConst.TRIANGLES);
        TypesConverter.drawingModeToConstant.set(DrawingMode.TrianglesStrip, WebGLConst.TRIANGLE_STRIP);
        TypesConverter.drawingModeToConstant.set(DrawingMode.TrianglesFan, WebGLConst.TRIANGLE_FAN);

        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Never, WebGLConst.NEVER);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Less, WebGLConst.LESS);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Equal, WebGLConst.EQUAL);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.LessEqual, WebGLConst.LEQUAL);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Greater, WebGLConst.GREATER);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.NotEqual, WebGLConst.NOTEQUAL);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.GreaterEqual, WebGLConst.GEQUAL);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Always, WebGLConst.ALWAYS);

        TypesConverter.stencilOperationToConstant.set(StencilOperation.Keep, WebGLConst.KEEP);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Zero, WebGLConst.ZERO);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Replace, WebGLConst.REPLACE);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Increment, WebGLConst.INCR);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Decrement, WebGLConst.DECR);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Invert, WebGLConst.INVERT);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.IncrementWrap, WebGLConst.INCR_WRAP);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.DecrementWrap, WebGLConst.DECR_WRAP);

        TypesConverter.vertexTypeToConstant.set(VertexElement.Type.Byte, WebGLConst.BYTE);
        TypesConverter.vertexTypeToConstant.set(VertexElement.Type.Float, WebGLConst.FLOAT);
        TypesConverter.vertexTypeToConstant.set(VertexElement.Type.Int, WebGLConst.INT);
        TypesConverter.vertexTypeToConstant.set(VertexElement.Type.Short, WebGLConst.SHORT);

        TypesConverter.streamTypeToConstant.set(VertexElement.StreamType.Static, WebGLConst.STATIC);
        TypesConverter.streamTypeToConstant.set(VertexElement.StreamType.Dynamic, WebGLConst.DYNAMIC_DRAW);
        TypesConverter.streamTypeToConstant.set(VertexElement.StreamType.Stream, WebGLConst.STREAM_DRAW);
    }

    /**
     * Convert the given type to an equivalent
     *
     * @param {number} type A WebGL value
     * @return {Type} A custom type value
     * @private
     */
    static toShaderTypes(type) 
    {
        switch(type)
        {
            default:
            case WebGLConst.FLOAT:
            case WebGLConst.FLOAT_VEC2:
            case WebGLConst.FLOAT_VEC3:
            case WebGLConst.FLOAT_VEC4:
                return Type.Float;
            case WebGLConst.INT:
            case WebGLConst.INT_VEC2:
            case WebGLConst.INT_VEC3:
            case WebGLConst.INT_VEC4:
                return Type.Int;
            case WebGLConst.BOOL:
            case WebGLConst.BOOL_VEC2:
            case WebGLConst.BOOL_VEC3:
            case WebGLConst.BOOL_VEC4:
                return Type.Bool;
            case WebGLConst.FLOAT_MAT2:
            case WebGLConst.FLOAT_MAT3:
            case WebGLConst.FLOAT_MAT4:
                return Type.Matrix;
            case WebGLConst.SAMPLER_2D:
                return Type.Texture2D;
            case WebGLConst.SAMPLER_CUBE:
                return Type.TextureCube;
            case WebGLConst.BYTE:
                return Type.Byte;
            case WebGLConst.UNSIGNED_BYTE:
                return Type.u_Byte;
            case WebGLConst.SHORT:
                return Type.Short;
            case WebGLConst.UNSIGNED_SHORT:
                return Type.u_Short;
            case WebGLConst.UNSIGNED_INT:
                return Type.u_Int;
        }
    }
}

/**
 * Correspondance between blending value and WebGL constants.
 *
 * @type {Map}
 */
TypesConverter.blendingFactorToConstant = new Map();

/**
 * Correspondance between a blending equation and an equivalent WebGL equation
 *
 * @type {Map}
 */
TypesConverter.blendingEquationToConstant = new Map();

/**
 * Correspondance between a depth function and an equivalent WebGL function
 *
 * @type {Map}
 */
TypesConverter.depthFunctionToConstant = new Map();

/**
 * Correspondance between a drawing mode and an equivalent WebGL mode
 *
 * @type {Map}
 */
TypesConverter.drawingModeToConstant = new Map();

/**
 * Correspondance between a stencil function and an equivalent WebGL function
 *
 * @type {Map}
 */
TypesConverter.stencilFunctionToConstant = new Map();

/**
 * Correspondance between a stencil operation and an equivalent WebGL operation
 *
 * @type {Map}
 */
TypesConverter.stencilOperationToConstant = new Map();

/**
 * Correspondance between a vertex type and an equivalent WebGL type
 *
 * @type {Map}
 */
TypesConverter.vertexTypeToConstant = new Map();

/**
 * Correspondance between a stream type and an equivalent WebGL type
 *
 * @type {Map}
 */
TypesConverter.streamTypeToConstant = new Map();
