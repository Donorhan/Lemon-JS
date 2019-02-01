import { DrawingMode, FaceCulling } from '../StateBlock';
import FileLoader from './FileLoader';
import Geometry from '../Geometry';
import Material from '../Material/Material';
import Mesh from '../Objects/Mesh';
import ProgramLibrary from '../Extra/ProgramLibrary';
import Texture from '../Textures/Texture';
import Type from '../Types';
import { VertexFormat, VertexElement } from '../VertexFormat';

/**
 * A class to load 3D models
 *
 * @category Loaders
 */
class ModelLoader {
    /**
     * Load a 3D model from a JSON file
     *
     * @param {string} filePath Path to the file with the 3D model
     * @param {Model} model Model to fill with data
     */
    static loadFromFile(filePath, model) {
        FileLoader.load(filePath, (status, data, userData) => {
            // Compute path to the parent folder
            const folder = userData.filePath.replace(/[^/]*$/, '');

            // Parse file.
            ModelLoader.parseJSON(data, userData.model, folder);
        }, { model, filePath });
    }

    /**
     * Parse given data and fill model with it
     *
     * @param {string} data JSON data
     * @param {Model} model Model to fill with data
     * @param {string?} relativePath Relative path to the externals assets
     * @see https://github.com/acgessler/assimp2json
     * @private
     */
    static parseJSON(data, model, relativePath = '') {
        // Get JSON data
        /* eslint max-len: ["error", { "code": 400 }] */
        const obj = /** @type {{materials:Array<{properties: Array<{index: number, key:string, semantic: number, type:number, value: (Array|number)}>}>, meshes: Array<{vertices: Array, normals: Array, faces: Array, texturecoords: Array, numuvcomponents: Array, materialindex: number}>}} */(JSON.parse(data));

        // Materials.
        const materials = [];
        let i = 0;
        let j = 0;
        let k = 0;
        let l = 0;

        for (i = 0; i < obj.materials.length; i += 1) {
            const material = new Material();
            const pass = material.createPass();

            // Default data
            pass.drawingMode = DrawingMode.Triangles;

            const properties = obj.materials[i].properties;
            for (j = 0; j < properties.length; j += 1) {
                const property = properties[j];

                // Colors.
                if (property.type === 1) {
                    if (property.key === '$mat.twosided' && property.value === 1) {
                        pass.faceCulling = FaceCulling.None;
                    } else if (property.key === '$mat.shininess') {
                        pass.add('material.shininess', Type.Float, /** @type {number} */(property.value));
                    } else if (property.key === '$clr.ambient') {
                        pass.add('material.ambient', Type.Float, [property.value[0], property.value[1], property.value[2]]);
                    } else if (property.key === '$clr.diffuse') {
                        pass.add('material.diffuse', Type.Float, [property.value[0], property.value[1], property.value[2]]);
                    } else if (property.key === '$clr.specular') {
                        pass.add('material.specular', Type.Float, [property.value[0], property.value[1], property.value[2]]);
                    } else if (property.key === '$clr.emissive') {
                        pass.add('material.emissive', Type.Float, [property.value[0], property.value[1], property.value[2]]);
                    }
                } else if (property.type === 3 && property.key !== '?mat.name') {
                    const texture = new Texture();
                    texture.loadFromFile(relativePath + property.value);

                    let name = 'material.diffuseTexture';
                    switch (property.semantic) {
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

                    pass.add(name, Type.Texture2D, texture);
                }
            }

            materials.push(material);
        }

        // Geometries
        for (i = 0; i < obj.meshes.length; i += 1) {
            // Create a new mesh
            const mesh = new Mesh();
            model.meshes.push(mesh);

            // Add data
            const meshData = obj.meshes[i];

            // Geometry
            {
                const geometry = new Geometry();

                // Format
                const format = new VertexFormat();
                geometry.setVertexFormat(format);

                // Positions
                const positions = new Float32Array(meshData.vertices);
                format.add(new VertexElement(VertexElement.Usage.Position, 0, VertexElement.Type.Float, 3, false));
                geometry.setPositions(positions);

                // Normals
                const normals = new Float32Array(meshData.normals);
                format.add(new VertexElement(VertexElement.Usage.Normal, 1, VertexElement.Type.Float, 3, false));
                geometry.setNormals(normals);

                // UVs
                if (meshData.texturecoords) {
                    const uvs = new Float32Array(meshData.texturecoords[0]);
                    format.add(new VertexElement(VertexElement.Usage.UVS, 2, VertexElement.Type.Float, meshData.numuvcomponents[0], false));
                    geometry.setTextureUVs(uvs);
                }

                // Indices
                const indices = new Uint16Array(meshData.faces.length * 3);
                for (k = 0, l = 0; k < meshData.faces.length; k += 1, l += 3) {
                    indices[l + 0] = meshData.faces[k][0];
                    indices[l + 1] = meshData.faces[k][1];
                    indices[l + 2] = meshData.faces[k][2];
                }
                geometry.setIndices(indices);

                mesh.setGeometry(geometry);
            }

            // Material.
            if (meshData.materialindex !== undefined && materials[meshData.materialindex]) {
                mesh.setMaterial(materials[meshData.materialindex]);
            } else {
                const material = new Material();
                const pass = material.createPass();
                pass.drawingMode = DrawingMode.Triangles;
                pass.add('material.ambient', Type.Float, [0.0, 0.0, 0.0]);
                pass.add('material.diffuse', Type.Float, [0.55, 0.55, 0.55]);
                pass.add('material.specular', Type.Float, [0.7, 0.7, 0.7]);
                pass.add('material.shininess', Type.Float, 38.4);
                mesh.setMaterial(material);
            }

            // Program
            mesh.setProgram(ProgramLibrary.get('PhongShader'));
        }
    }
}

export default ModelLoader;
