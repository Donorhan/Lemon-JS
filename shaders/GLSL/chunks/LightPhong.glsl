// Light's data.
struct LightData 
{
    lowp int  count;
    lowp vec3 ambient[8];
    lowp vec3 data[8];
    lowp vec3 diffuse[8];
    lowp vec3 position[8];
    lowp vec3 direction[8];
    lowp vec3 specular[8];
    lowp int  type[8];
};
uniform LightData lights;

// Camera data.
uniform lowp vec3 uCameraPosition;

// Compute pixel's color from lights.
lowp vec3 computeLights( const lowp vec3 cameraPosition )
{
    // Common.
    lowp vec3 normal  = normalize(vNormal);
    lowp vec3 viewDir = normalize(cameraPosition - vFragPosition);

    // Result.
    lowp vec3 result = vec3(0.0, 0.0, 0.0);

    // Add lights.
    for( lowp int i = 0; i < 8; i++)
    {
        if( i >= lights.count )
            break;

        // Point light.
        if( lights.type[i] == 0 )
        {
            lowp vec3  lightDir         = normalize(lights.position[i] - vFragPosition);
            lowp float diff             = max(dot(normal, lightDir), 0.0);
            lowp vec3  reflectDir       = reflect(-lightDir, normal);  
            lowp float spec             = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);
            lowp float distance         = length(lights.position[i] - vFragPosition);
            lowp float attenuation      = 1.0 / (lights.data[i].x + lights.data[i].y * distance + lights.data[i].z * (distance * distance)); 

        #ifdef USE_TEXTURE
            lowp vec3 ambient            = lights.ambient[i] * texture2D(material.diffuseTexture, vUV).rgb;
            lowp vec3 diffuse            = lights.diffuse[i] * diff * texture2D(material.diffuseTexture, vUV).rgb;
        #else
            lowp vec3 ambient            = lights.ambient[i] * material.ambient;
            lowp vec3 diffuse            = lights.diffuse[i] * (diff * material.diffuse);
        #endif

        #ifdef USE_SPECULAR_TEXTURE
            lowp vec3 specular           = lights.specular[i] * spec * texture2D(material.specularTexture, vUV).rgb;
        #else
            lowp vec3 specular           = lights.specular[i] * (spec * material.specular); 
        #endif

            ambient                     *= attenuation;
            diffuse                     *= attenuation;
            specular                    *= attenuation;

            result                      += ambient + diffuse + specular;
        }
        else if( lights.type[i] == 1 )
        {
            lowp vec3  lightDir          = normalize(-lights.direction[i]);
            lowp float diff              = max(dot(normal, lightDir), 0.0);
            lowp vec3  reflectDir        = reflect(-lightDir, normal);
            lowp float spec              = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);

        #ifdef USE_TEXTURE
            lowp vec3 ambient            = lights.ambient[i] * texture2D(material.diffuseTexture, vUV).rgb;
            lowp vec3 diffuse            = lights.diffuse[i] * diff * texture2D(material.diffuseTexture, vUV).rgb;
        #else
            lowp vec3 ambient            = lights.ambient[i]  * material.ambient;
            lowp vec3 diffuse            = lights.diffuse[i]  * (diff * material.diffuse);
        #endif

        #ifdef USE_SPECULAR_TEXTURE
            lowp vec3 specular           = lights.specular[i] * spec * texture2D(material.specularTexture, vUV).rgb;
        #else
            lowp vec3 specular           = lights.specular[i] * (spec * material.specular); 
        #endif

            result                      += ambient + diffuse + specular;
        }
        else if( lights.type[i] == 2 )
        {
            lowp vec3  lightDir          = normalize(lights.position[i] - vFragPosition);
            lowp float diff              = max(dot(normal, lightDir), 0.0);
            lowp vec3  reflectDir        = reflect(-lightDir, normal);
            lowp float spec              = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);
            lowp float distance          = length(lights.position[i] - vFragPosition);
            lowp float attenuation       = 1.0 / (lights.data[i].x + lights.data[i].y * distance + lights.data[i].z * (distance * distance));    
            lowp float theta             = dot(lightDir, normalize(-lights.direction[i])); 
            lowp float epsilon           = 12.5 - 17.5;
            lowp float intensity         = clamp((theta - 17.5) / epsilon, 0.0, 1.0);

        #ifdef USE_TEXTURE
            lowp vec3 ambient            = lights.ambient[i] * texture2D(material.diffuseTexture, vUV).rgb;
            lowp vec3 diffuse            = lights.diffuse[i] * diff * texture2D(material.diffuseTexture, vUV).rgb;
        #else
            lowp vec3 ambient            = lights.ambient[i]  * material.ambient;
            lowp vec3 diffuse            = lights.diffuse[i]  * (diff * material.diffuse);
        #endif

        #ifdef USE_SPECULAR_TEXTURE
            lowp vec3 specular           = lights.specular[i] * spec * texture2D(material.specularTexture, vUV).rgb;
        #else
            lowp vec3 specular           = lights.specular[i] * (spec * material.specular); 
        #endif

            ambient                     *= attenuation;
            diffuse                     *= attenuation * intensity;
            specular                    *= attenuation * intensity;

            result                      += ambient + diffuse + specular;
        }
    }

#ifdef USE_EMISSIVE_TEXTURE
    return result + texture2D(material.emissiveTexture, vUV).rgb;
#else
    return result;
#endif
}
