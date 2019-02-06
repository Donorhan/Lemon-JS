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
        this.currentTechnique = 0;
        this.timeElapsed = 0;

        this.init();
    }

    init() {
        // Create a new renderer
        this.renderer = new RenderCanvas('simulation');

        // A camera to draw the scene
        this.camera = new Camera();
        this.camera
            .move(3, 3, 3)
            .setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());

        // Create a scene where you can add sprites, lights, objects, …
        this.scene = new Scene();

        // Load default shader
        ProgramLibrary.loadFromFile('DefaultShader', '../../shaders/GLSL/default.vert', '../../shaders/GLSL/default.frag', ['USE_LIGHT']);

        // Texture to apply
        const boxTexture = new Texture('../assets/images/box.jpg');
        const characterTexture = new Texture('../assets/images/adventurer.png');
        characterTexture.setRepeated(false);

        // Create material
        const material = new Material();
        material.createPass(0, [
            ['material.ambient', Type.Float, [0, 1, 0]],
            ['material.diffuse', Type.Float, [0.55, 0.55, 0.55]],
            ['material.specular', Type.Float, [0.7, 0.7, 0.7]],
            ['material.shininess', Type.Float, 5.4],
        ]);
        material.createPass(1, [
            ['material.ambient', Type.Float, [1, 0, 0]],
            ['material.diffuse', Type.Float, [0.55, 0.55, 0.55]],
            ['material.specular', Type.Float, [0.7, 0.7, 0.7]],
            ['material.shininess', Type.Float, 5.4],
        ]);
        material.createPass(2, [
            ['material.ambient', Type.Float, [0, 0, 2]],
            ['material.diffuse', Type.Float, [0.55, 0.55, 0.55]],
            ['material.specular', Type.Float, [0.7, 0.7, 0.7]],
            ['material.shininess', Type.Float, 5.4],
        ]);

        // Create the cube
        this.mesh = new Mesh(
            Geometry.createCube(),
            material,
            ProgramLibrary.get('DefaultShader'),
        );
        this.mesh.getMaterial().setActiveTechnique(0);
        this.scene.add(this.mesh);

        // Add a light
        const light = new PointLight();
        light.setPosition(0, 2, 3);
        this.scene.add(light);
    }

    render(deltatime) {
        // Update logic
        this.rotation += 0.1 * deltatime;
        this.mesh.setRotation(this.rotation, this.rotation, this.rotation);

        // Change technique to use after 500ms
        this.timeElapsed += deltatime;
        if (this.timeElapsed >= 500) {
            this.currentTechnique = this.currentTechnique >= 2 ? 0 : this.currentTechnique + 1;
            this.mesh.getMaterial().setActiveTechnique(this.currentTechnique);
            this.timeElapsed = 0;
        }

        this.scene.update(deltatime);

        // Draw scene
        this.renderer.clear(new Color(30, 30, 30));
        this.renderer.render(this.scene, this.camera);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
