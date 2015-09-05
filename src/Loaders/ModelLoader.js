goog.provide('Lemon.Loaders.ModelLoader');
goog.require('Lemon.Geometry');
goog.require('Lemon.Loaders.FileLoader');
goog.require('Lemon.Mesh');

/**
 * A class to load 3D models.
 * @constructor
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Loaders.ModelLoader = function() { };

/**
 * Load a 3D model from a file.
 * @param {string} filePath Path to the file with the 3D model.
 * @param {Lemon.Model} model Model to fill with data.
 */
Lemon.Loaders.ModelLoader.loadFromFile = function( filePath, model )
{
    Lemon.Loaders.FileLoader.load(filePath, function( status, data, userData )
    {
        // Compute path to the parent folder.
        var folder = userData.filePath.replace(/[^\/]*$/, '');

        // Parse file.
        Lemon.Loaders.ModelLoader.parse(data, /** @type {Lemon.Model} */(userData.model), folder);
    }, { model: model, filePath: filePath });
};

/**
 * Parse given data and fill model with it.
 * @param {string} data JSON data.
 * @param {Lemon.Model} model Model to fill with data.
 * @param {string} relativePath Relative path to the externals assets.
 * @see https://github.com/acgessler/assimp2json
 * @private
 */
Lemon.Loaders.ModelLoader.parse = function( data, model, relativePath )
{
    // Compute path to textures.
    relativePath = relativePath || '';

    // Get JSON data.
    var obj = /** @type {{materials:Array<{properties: Array<{index: number, key:string, semantic: number, type:number, value: (Array|number)}>}>, meshes: Array<{vertices: Array, normals: Array, faces: Array, texturecoords: Array, numuvcomponents: Array, materialindex: number}>}} */(JSON.parse(data));

    // Materials.
    var materials = [];
    var i, j, k, l;

    for( i = 0; i < obj.materials.length; i++ )
    {
        var material    = new Lemon.Material();
        var pass        = material.createPass();

        // Default data.
        pass.drawingMode = Lemon.DrawingMode.Triangles;

        var properties = obj.materials[i].properties;
        for( j = 0; j < properties.length; j++ )
        {
            var property = properties[j];

            // Colors.
            if( property.type == 1 )
            {
                if( property.key == '$mat.twosided' && property.value == 1 )
                    pass.faceCulling = Lemon.FaceCulling.None;
                else if( property.key == '$mat.shininess' )
                    pass.add('material.shininess', Lemon.Type.Float, /** @type {number} */(property.value));
                else if( property.key == '$clr.ambient' )
                    pass.add('material.ambient', Lemon.Type.Float, [property.value[0], property.value[1], property.value[2]]);
                else if( property.key == '$clr.diffuse' )
                    pass.add('material.diffuse', Lemon.Type.Float, [property.value[0], property.value[1], property.value[2]]);
                else if( property.key == '$clr.specular' )
                    pass.add('material.specular', Lemon.Type.Float, [property.value[0], property.value[1], property.value[2]]);
                else if( property.key == '$clr.emissive' )
                    pass.add('material.emissive', Lemon.Type.Float, [property.value[0], property.value[1], property.value[2]]);
            }
            // Textures.
            else if( property.type == 3 && property.key != '?mat.name' )
            {
                var texture = new Lemon.Texture();
                texture.loadFromFile(relativePath + property.value);

                var name = 'material.diffuseTexture';
                switch(property.semantic)
                {
                    default:
                    case 1:
                        name = 'material.diffuseTexture';
                        break;
                    case 2:
                        name = 'material.specularTexture';
                        break;
                    case 3:
                        name = 'material.ambientTexture';
                        break;
                    case 4:
                        name = 'material.emissiveTexture';
                        break;
                    case 5:
                        name = 'material.heightTexture';
                        break;
                    case 6:
                        name = 'material.normalsTexture';
                        break;
                    case 7:
                        name = 'material.shininessTexture';
                        break;
                    case 8:
                        name = 'material.opacityTexture';
                        break;
                    case 9:
                        name = 'material.displacementTexture';
                        break;
                }

                pass.add(name, Lemon.Type.Texture2D, texture);
            }
        }

        materials.push(material);
    }

    // Geometries.
    for( i = 0; i < obj.meshes.length; i++ )
    {
        // Create a new mesh.
        var mesh = new Lemon.Mesh();
        model.meshes.push(mesh);

        // Add data.
        var meshData = obj.meshes[i];

        // Geometry.
        {
            var geometry = new Lemon.Geometry();

            // Format.
            var format = new Lemon.VertexFormat();
            geometry.setVertexFormat(format);

            // Positions.
            var positions = new Float32Array(meshData.vertices);
            format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.Position, 0, Lemon.VertexElement.Type.Float, 3, false));
            geometry.setPositions(positions);

            // Normals.
            var normals = new Float32Array(meshData.normals);
            format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.Normal, 1, Lemon.VertexElement.Type.Float, 3, false));
            geometry.setNormals(normals);

            // UVs.
            if( meshData.texturecoords )
            {
                var uvs = new Float32Array(meshData.texturecoords[0]);
                format.add(new Lemon.VertexElement(Lemon.VertexElement.Usage.UVS, 2, Lemon.VertexElement.Type.Float, meshData.numuvcomponents[0], false));
                geometry.setTextureUVs(uvs);
            }

            // Indices.
            var indices = new Uint16Array(meshData.faces.length * 3);
            for( k = 0, l = 0; k < meshData.faces.length; k++, l += 3 )
            {
                indices[l+0] = meshData.faces[k][0];
                indices[l+1] = meshData.faces[k][1];
                indices[l+2] = meshData.faces[k][2];
            }
            geometry.setIndices(indices);

            mesh.setGeometry(geometry);
        }

        // Material.
        if( meshData.materialindex !== undefined && materials[meshData.materialindex] )
            mesh.setMaterial(materials[meshData.materialindex]);
        else
        {
            var material = new Lemon.Material();
            var pass     = material.createPass();
            pass.drawingMode = Lemon.DrawingMode.Triangles;
            pass.add('material.ambient', Lemon.Type.Float, [0.0, 0.0, 0.0]);
            pass.add('material.diffuse', Lemon.Type.Float, [0.55, 0.55, 0.55]);
            pass.add('material.specular', Lemon.Type.Float, [0.7, 0.7, 0.7]);
            pass.add('material.shininess', Lemon.Type.Float, 38.4);
            mesh.setMaterial(material);
        }

        // Program.
        mesh.setProgram(Lemon.ProgramLibrary.get('PhongShader'));
    }
};
