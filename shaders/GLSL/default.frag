varying lowp vec4 vColor;
varying lowp vec3 vNormal;
varying lowp vec3 vFragPosition;
varying lowp vec2 vUV;

#ifdef USE_TEXTURE 
    uniform lowp sampler2D texture;
#endif

include[chunks/Material.glsl]
include[chunks/LightPhong.glsl]

void main()
{
    #ifdef USE_LIGHT
        gl_FragColor = vec4(computeLights(uCameraPosition), 1.0);
    #elif defined USE_TEXTURE
        gl_FragColor = texture2D(texture, vUV) * vColor;
    #else
        gl_FragColor = vColor * vec4(material.ambient, 1.0);
    #endif
}