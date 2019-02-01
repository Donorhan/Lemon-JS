uniform mat4 uCamera;
uniform mat4 uModel;
uniform mat4 uModelNormal;

attribute vec4 aPosition;
attribute vec4 aColor;
attribute vec2 aTexCoord;
attribute vec3 aNormal;

varying lowp vec4 vColor;
varying lowp vec2 vUV;
varying lowp vec3 vFragPosition;
varying lowp vec3 vNormal;

void main()
{
    gl_Position     = (uCamera * uModel) * aPosition;
    vFragPosition   = vec3(uModel * vec4(aPosition.xyz, 1.0));
    vColor          = aColor;
    vUV             = aTexCoord;
    vNormal         = mat3(uModelNormal) * aNormal;
}
