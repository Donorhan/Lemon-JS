struct Material 
{
    lowp vec3 ambient;

    #ifdef USE_TEXTURE 
        lowp sampler2D diffuseTexture;
    #else
        lowp vec3 diffuse;
    #endif

    #ifdef USE_SPECULAR_TEXTURE
        lowp sampler2D specularTexture;
    #else
        lowp vec3 specular;    
    #endif

    #ifdef USE_EMISSIVE_TEXTURE
        lowp sampler2D emissiveTexture;
    #else
        lowp vec3 emissive;    
    #endif

    lowp float shininess;
}; 
uniform Material material;