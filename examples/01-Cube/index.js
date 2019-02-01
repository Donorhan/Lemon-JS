import {
    Camera, Color, Geometry, Material, Mesh, PointLight, ProgramLibrary, RenderCanvas, Scene, Texture, Type,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';

class App {
    constructor() {
        this.rotation = 0;
        this.camera = null;
        this.mesh = null;
        this.renderer = null;
        this.scene = null;

        this.init();
    }

    init() {
        // Create a new renderer
        this.renderer = new RenderCanvas('simulation');

        // A camera to draw the scene
        this.camera = new Camera();
        this.camera.move(3, 3, 3);
        this.camera.setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());

        // Create a scene where you can add sprites, lights, objects, …
        this.scene = new Scene();

        // Load default shader
        ProgramLibrary.load('DefaultShader', '../../shaders/GLSL/default.vert', '../../shaders/GLSL/default.frag', ['USE_TEXTURE', 'USE_LIGHT']);

        // Texture to apply
        const boxTexture = new Texture('../assets/images/box.jpg');

        // Create material
        const material = new Material();
        const pass = material.createPass();
        pass.add('texture', Type.Texture2D, boxTexture);
        pass.add('material.ambient', Type.Float, [0.0, 0.0, 0.0]);
        pass.add('material.diffuse', Type.Float, [0.55, 0.55, 0.55]);
        pass.add('material.specular', Type.Float, [0.7, 0.7, 0.7]);
        pass.add('material.shininess', Type.Float, 38.4);

        // Create the cube
        this.mesh = new Mesh();
        this.mesh.setMaterial(material);
        this.mesh.setGeometry(Geometry.createCube(0.5, 0.5, 0.5));
        this.mesh.setProgram(ProgramLibrary.get('DefaultShader'));
        this.scene.add(this.mesh);

        // Add a light
        const light = new PointLight();
        light.setPosition(0, 3, 0);
        this.scene.add(light);
    }

    render(deltatime) {
        // Update logic
        this.rotation += 0.1 * deltatime;
        this.mesh.setRotation(this.rotation, this.rotation, this.rotation);
        this.scene.update(deltatime);

        // Draw scene
        this.renderer.clear(new Color(30, 30, 30));
        this.renderer.render(this.scene, this.camera);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
