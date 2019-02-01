import {
    Camera, Color, Model, PointLight, ProgramLibrary, RenderCanvas, Scene,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';

class App {
    constructor() {
        this.camera = null;
        this.scene = null;
        this.rotation = 0;

        this.init();
    }

    init() {
        ProgramLibrary.loadFromFile('PhongShader', '../../shaders/GLSL/default.vert', '../../shaders/GLSL/default.frag', ['USE_TEXTURE', 'USE_LIGHT']);

        this.renderer = new RenderCanvas('simulation');
        this.camera = new Camera();
        this.camera.move(0, 1.7, 3);
        this.camera.lookAt(0, 1.7, 0);
        this.camera.setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());
        this.scene = new Scene();

        // Create it
        const model = new Model();
        model.loadFromFile('../assets/models/lee-perry-smith/model.json')
            .setPosition(0, 2, 0)
            .setScale(5, 5, 5)
            .setRotation(-90, 0, 0);

        // Add a light
        this.light = new PointLight();
        this.scene.add(this.light);

        this.scene.add(model);
    }

    render(deltatime) {
        // Update logic
        this.rotation += 0.001 * deltatime;
        this.light.setPosition(Math.cos(this.rotation) * 5, Math.sin(this.rotation) * 6, 3);
        this.scene.update(deltatime);

        // Draw scene
        this.renderer.clear(new Color(30, 30, 30));
        this.renderer.render(this.scene, this.camera);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
