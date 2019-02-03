import {
    Camera, Color, CullingManager, Geometry, FrustumCuller, Material, Mesh, PointLight, ProgramLibrary, RenderCanvas, Scene, Type,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';

class App {
    constructor() {
        this.camera = null;
        this.cullingManager = null;
        this.mesh = null;
        this.renderer = null;
        this.rotation = 0;
        this.scene = null;

        this.init();
    }

    init() {
        ProgramLibrary.loadFromFile('DefaultShader', '../../shaders/GLSL/default.vert', '../../shaders/GLSL/default.frag', ['USE_LIGHT']);

        this.renderer = new RenderCanvas('simulation');
        this.camera = new Camera();
        this.camera
            .move(3, 3, 3)
            .setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());
        this.scene = new Scene();

        // Create material
        const material = new Material();
        material.createPass(0, [
            ['material.ambient', Type.Float, [0.0, 0.0, 0.0]],
            ['material.diffuse', Type.Float, [0.55, 0.55, 0.55]],
            ['material.specular', Type.Float, [0.7, 0.7, 0.7]],
            ['material.shininess', Type.Float, 38.4],
        ]);

        // Create the cube
        this.mesh = new Mesh(
            Geometry.createCube(0.5, 0.5, 0.5),
            material,
            ProgramLibrary.get('DefaultShader'),
        );
        this.scene.add(this.mesh);

        this.cullingManager = new CullingManager();

        // Add a light
        const light = new PointLight();
        light.setPosition(0, 3, 0);
        this.scene.add(light);
    }

    render(deltatime) {
        // Update logic
        this.rotation += 0.1 * deltatime;
        this.mesh.setRotation(this.rotation, this.rotation, this.rotation);
        this.cullingManager.execute(this.scene, this.camera);
        this.scene.update(deltatime);

        this.camera.move(0, 0, 6 + Math.sin(this.rotation / 30) * 4);

        // Draw scene
        this.renderer.clear(new Color(30, 30, 30));
        this.renderer.render(this.scene, this.camera);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
