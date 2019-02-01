import * as mat4 from 'gl-matrix/mat4';
import * as vec3 from 'gl-matrix/vec3';
import * as vec4 from 'gl-matrix/vec4';

/**
 * Multiplies a vec4 with a matrix
 *
 * @category Math
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {mat4} m matrix to multiply with (in column major order)
 * @return {vec4} out
 */
export const multiplyWithMat4 = (a, m) => [
    m[0] * a[0] + m[4] * a[1] + m[8] * a[2] + m[12] * a[3],
    m[1] * a[0] + m[5] * a[1] + m[9] * a[2] + m[13] * a[3],
    m[2] * a[0] + m[6] * a[1] + m[10] * a[2] + m[14] * a[3],
    m[3] * a[0] + m[7] * a[1] + m[11] * a[2] + m[15] * a[3],
];

/**
 * Project a point from 3D space to 2D space
 *
 * @category Math
 * @param {vec2} source 2D point on screen
 * @param {mat4} model Camera view matrix
 * @param {mat4} projection Camera projection matrix
 * @return {vec4} viewport Viewport
 */
export const project = (source, model, projection, viewport) => {
    let tmp = vec4.fromValues(source[0], source[1], source[2], 1.0);
    const tmp2 = multiplyWithMat4(tmp, model);
    tmp = multiplyWithMat4(tmp2, projection);

    tmp[0] = (tmp[0] / tmp[3]) * 0.5 + 0.5;
    tmp[1] = (tmp[1] / tmp[3]) * 0.5 + 0.5;
    tmp[2] = (tmp[2] / tmp[3]) * 0.5 + 0.5;

    tmp[0] = tmp[0] * viewport[2] + viewport[0];
    tmp[1] = tmp[1] * viewport[3] + viewport[1];

    return vec3.fromValues(tmp[0], tmp[1], tmp[2]);
};

/**
 * Un-project a point from 2D space to 3D space
 *
 * Z value must have one of this two values:
 * - 0 for near plane
 * - 1 for far plane
 *
 * @category Math
 * @param {vec3} source 2D point on screen
 * @param {mat4} model Camera view matrix
 * @param {mat4} projection Camera projection matrix
 * @return {vec4} viewport Viewport
 */
export const unproject = (source, model, projection, viewport) => {
    // Calculate using viewport
    const tmp = vec4.fromValues(source[0], source[1], source[2], 1.0);
    tmp[0] = (tmp[0] - viewport[0]) / viewport[2];
    tmp[1] = (tmp[1] - viewport[1]) / viewport[3];
    tmp[0] = tmp[0] * 2 - 1;
    tmp[1] = tmp[1] * 2 - 1;
    tmp[2] = tmp[2] * 2 - 1;

    // Compute inverse matrix
    const matrix = mat4.create();
    mat4.multiply(matrix, projection, model);
    mat4.invert(matrix, matrix);

    // Apply inverse matrix
    let obj = mat4.create();
    obj = multiplyWithMat4(tmp, matrix);
    obj[0] /= obj[3];
    obj[1] /= obj[3];
    obj[2] /= obj[3];

    return vec3.fromValues(obj[0], obj[1], obj[2]);
};
