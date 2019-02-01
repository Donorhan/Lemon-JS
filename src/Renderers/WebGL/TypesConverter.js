import * as WebGLConst from 'webgl-constants';

import BlendMode from '../../BlendMode';
import {
    DepthFunction,
    DrawingMode,
    StencilFunction,
    StencilOperation,
} from '../../StateBlock';
import Type from '../../Types';
import { VertexElement } from '../../VertexFormat';

/**
 * Class to convert types between the library and WebGL
 *
 * @category WebGL
 */
class TypesConverter {
    static init() {
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.Zero, WebGLConst.GL_ZERO);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.One, WebGLConst.GL_ONE);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.SourceColor, WebGLConst.GL_SRC_COLOR);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.OneMinusSourceColor, WebGLConst.GL_ONE_MINUS_SRC_COLOR);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.DestinationColor, WebGLConst.GL_DST_COLOR);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.OneMinusDestinationColor, WebGLConst.GL_ONE_MINUS_DST_COLOR);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.SourceAlpha, WebGLConst.GL_SRC_ALPHA);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.OneMinusSourceAlpha, WebGLConst.GL_ONE_MINUS_SRC_ALPHA);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.DestinationAlpha, WebGLConst.GL_DST_ALPHA);
        TypesConverter.blendingFactorToConstant.set(BlendMode.Factor.OneMinusDestinationAlpha, WebGLConst.GL_ONE_MINUS_DST_ALPHA);

        TypesConverter.blendingEquationToConstant.set(BlendMode.Equation.Add, WebGLConst.GL_FUNC_ADD);
        TypesConverter.blendingEquationToConstant.set(BlendMode.Equation.Subtract, WebGLConst.GL_FUNC_SUBSTRACT);

        TypesConverter.depthFunctionToConstant.set(DepthFunction.Never, WebGLConst.GL_NEVER);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.Less, WebGLConst.GL_LESS);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.Equal, WebGLConst.GL_EQUAL);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.LessEqual, WebGLConst.GL_LEQUAL);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.Greater, WebGLConst.GL_GREATER);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.NotEqual, WebGLConst.GL_NOTEQUAL);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.GreaterEqual, WebGLConst.GL_GEQUAL);
        TypesConverter.depthFunctionToConstant.set(DepthFunction.Always, WebGLConst.GL_ALWAYS);

        TypesConverter.drawingModeToConstant.set(DrawingMode.Points, WebGLConst.GL_POINTS);
        TypesConverter.drawingModeToConstant.set(DrawingMode.Lines, WebGLConst.GL_LINES);
        TypesConverter.drawingModeToConstant.set(DrawingMode.LinesStrip, WebGLConst.GL_LINE_STRIP);
        TypesConverter.drawingModeToConstant.set(DrawingMode.LinesLoop, WebGLConst.GL_LINE_LOOP);
        TypesConverter.drawingModeToConstant.set(DrawingMode.Triangles, WebGLConst.GL_TRIANGLES);
        TypesConverter.drawingModeToConstant.set(DrawingMode.TrianglesStrip, WebGLConst.GL_TRIANGLE_STRIP);
        TypesConverter.drawingModeToConstant.set(DrawingMode.TrianglesFan, WebGLConst.GL_TRIANGLE_FAN);

        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Never, WebGLConst.GL_NEVER);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Less, WebGLConst.GL_LESS);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Equal, WebGLConst.GL_EQUAL);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.LessEqual, WebGLConst.GL_LEQUAL);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Greater, WebGLConst.GL_GREATER);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.NotEqual, WebGLConst.GL_NOTEQUAL);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.GreaterEqual, WebGLConst.GL_GEQUAL);
        TypesConverter.stencilFunctionToConstant.set(StencilFunction.Always, WebGLConst.GL_ALWAYS);

        TypesConverter.stencilOperationToConstant.set(StencilOperation.Keep, WebGLConst.GL_KEEP);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Zero, WebGLConst.GL_ZERO);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Replace, WebGLConst.GL_REPLACE);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Increment, WebGLConst.GL_INCR);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Decrement, WebGLConst.GL_DECR);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.Invert, WebGLConst.GL_INVERT);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.IncrementWrap, WebGLConst.GL_INCR_WRAP);
        TypesConverter.stencilOperationToConstant.set(StencilOperation.DecrementWrap, WebGLConst.GL_DECR_WRAP);

        TypesConverter.vertexTypeToConstant.set(VertexElement.Type.Byte, WebGLConst.GL_DATA_BYTE);
        TypesConverter.vertexTypeToConstant.set(VertexElement.Type.Float, WebGLConst.GL_DATA_FLOAT);
        TypesConverter.vertexTypeToConstant.set(VertexElement.Type.Int, WebGLConst.GL_DATA_INT);
        TypesConverter.vertexTypeToConstant.set(VertexElement.Type.Short, WebGLConst.GL_DATA_SHORT);

        TypesConverter.streamTypeToConstant.set(VertexElement.StreamType.Static, WebGLConst.GL_STATIC_DRAW);
        TypesConverter.streamTypeToConstant.set(VertexElement.StreamType.Dynamic, WebGLConst.GL_DYNAMIC_DRAW);
        TypesConverter.streamTypeToConstant.set(VertexElement.StreamType.Stream, WebGLConst.GL_STREAM_DRAW);
    }

    /**
     * Convert the given type to an equivalent
     *
     * @param {number} type A WebGL value
     * @return {Type} A custom type value
     * @private
     */
    static toShaderTypes(type) {
        switch (type) {
        default:
        case WebGLConst.GL_DATA_FLOAT:
        case WebGLConst.GL_FLOAT_VEC2:
        case WebGLConst.GL_FLOAT_VEC3:
        case WebGLConst.GL_FLOAT_VEC4:
            return Type.Float;
        case WebGLConst.GL_DATA_INT:
        case WebGLConst.GL_INT_VEC2:
        case WebGLConst.GL_INT_VEC3:
        case WebGLConst.GL_INT_VEC4:
            return Type.Int;
        case WebGLConst.GL_BOOL:
        case WebGLConst.GL_BOOL_VEC2:
        case WebGLConst.GL_BOOL_VEC3:
        case WebGLConst.GL_BOOL_VEC4:
            return Type.Bool;
        case WebGLConst.GL_FLOAT_MAT2:
        case WebGLConst.GL_FLOAT_MAT3:
        case WebGLConst.GL_FLOAT_MAT4:
            return Type.Matrix;
        case WebGLConst.GL_SAMPLER_2D:
            return Type.Texture2D;
        case WebGLConst.GL_SAMPLER_CUBE:
            return Type.TextureCube;
        case WebGLConst.GL_DATA_BYTE:
            return Type.Byte;
        case WebGLConst.GL_DATA_UNSIGNED_BYTE:
            return Type.u_Byte;
        case WebGLConst.GL_DATA_SHORT:
            return Type.Short;
        case WebGLConst.GL_DATA_UNSIGNED_SHORT:
            return Type.u_Short;
        case WebGLConst.GL_DATA_UNSIGNED_INT:
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

export default TypesConverter;
