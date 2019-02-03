import {
    Camera, Color, CullingManager, Geometry, Material, Mesh, PointLight, ProgramLibrary, RenderCanvas, Scene, Texture, Type,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';

class App {
    constructor() {
        this.camera = null;
        this.cameraMesh = null;
        this.cameraWithoutCulling = null;
        this.cullingManager = new CullingManager();
        this.mesh = null;
        this.renderer = null;
        this.rotation = 0;
        this.scene = new Scene();

        this.init();
    }

    init() {
        ProgramLibrary.loadFromFile('DefaultShader', '../../shaders/GLSL/default.vert', '../../shaders/GLSL/default.frag', ['USE_LIGHT', 'USE_TEXTURE']);

        this.renderer = new RenderCanvas('simulation');
        const simulationWidth = this.renderer.getWidth() / 2;

        this.camera = new Camera();
        this.camera.setViewport(0, 0, simulationWidth, this.renderer.getHeight());

        this.cameraWithoutCulling = new Camera();
        this.cameraWithoutCulling.setViewport(simulationWidth, 0, simulationWidth, this.renderer.getHeight());
        this.cameraWithoutCulling.move(25, 3, 25).lookAt(15, 0, 15);

        this.createScene();
    }

    createScene() {
        const geometry = Geometry.createCube(0.5, 0.5, 0.5);
        const program = ProgramLibrary.get('DefaultShader');
        const material = new Material();
        const boxTexture = new Texture('../assets/images/box.jpg');

        material.createPass(0, [
            ['texture', Type.Texture2D, boxTexture],
            ['material.ambient', Type.Float, [0.0, 0.0, 0.0]],
            ['material.diffuse', Type.Float, [0.55, 0.55, 0.55]],
            ['material.specular', Type.Float, [0.7, 0.7, 0.7]],
            ['material.shininess', Type.Float, 38.4],
        ]);

        // Add cubes
        for (let i = 0; i < 15; i += 1) {
            for (let j = 0; j < 15; j += 1) {
                const mesh = new Mesh(geometry, material, program);
                mesh.setPosition(i + (i * 1), 0, j + (j * 1));
                this.scene.add(mesh);
            }
        }

        this.createCameraMesh(geometry, program);

        // Add a light
        const light = new PointLight();
        light.setPosition(15, 1, 15);
        this.scene.add(light);
    }

    createCameraMesh(geometry, program) {
        const material = new Material();
        material.createPass(0, [
            ['material.ambient', Type.Float, [1.0, 0.0, 0.0]],
            ['material.diffuse', Type.Float, [1, 0.55, 0.55]],
            ['material.specular', Type.Float, [1, 0.7, 0.7]],
            ['material.shininess', Type.Float, 1.4],
        ]);

        // A mesh to show camera's position
        this.cameraMesh = new Mesh(geometry, material, program);
        this.cameraMesh.setScale(0.05, 0.05, 0.05);
        this.scene.add(this.cameraMesh);
    }

    render(deltatime) {
        // Update logic
        this.rotation += 0.0005 * deltatime;

        this.camera
            .move(15 + Math.cos(this.rotation) * 3, 3 + Math.cos(this.rotation) * 3, 15 + Math.sin(this.rotation) * 3)
            .lookAt(15, 0, 15);

        const cameraPosition = this.camera.getPosition();
        this.cameraMesh.setPosition(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
        this.scene.update(deltatime);

        // Draw scene
        const visibleNodes = this.cullingManager.execute(this.scene.getRoot(), this.camera);
        const newScene = new Scene();
        newScene.getRoot().setChildren(visibleNodes);

        this.renderer.clear(new Color(30, 30, 30));
        this.renderer.render(newScene, this.camera);
        this.renderer.display();
        this.renderer.render(newScene, this.cameraWithoutCulling);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
