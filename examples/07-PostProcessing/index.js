import {
    Camera, Color, Model, PointLight, PostEffect, Program, ProgramLibrary, RenderCanvas, Scene, Type,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';

class App {
    constructor() {
        this.camera = null;
        this.scene = null;
        this.rotation = 0;
        this.renderer = null;
        this.postEffect = null;
        this.cameraRotation = 0.005;
        this.time = 0;
        this.light = null;

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
        model
            .loadFromFile('../assets/models/lee-perry-smith/model.json')
            .setPosition(0, 2, 0)
            .setScale(5, 5, 5)
            .setRotation(-90, 0, 0);

        // Add a light
        this.light = new PointLight();
        this.scene.add(this.light);

        // Create a post-effect
        const program = new Program();
        program.loadFromFiles('../assets/shaders/effect1-VS.txt', '../assets/shaders/effect1-FS.txt');

        // Prepare post-effect.
        this.postEffect = new PostEffect(program);
        this.postEffect.init(this.renderer.getWidth(), this.renderer.getHeight());

        this.scene.add(model);
    }

    render(deltatime) {
        // Update logic
        this.time += deltatime / 100;
        if (this.time > 100) {
            this.time = 0;
        }

        this.rotation += 0.0005 * deltatime;
        this.camera.rotate(this.cameraRotation, 0);
        this.light.setPosition(Math.cos(this.rotation) * 5, Math.sin(this.rotation) * 6, 3);
        this.scene.update(deltatime);

        // Start post-effect, everything draw here will be affected by the post-effect
        this.postEffect.begin(new Color(230, 230, 230));
        this.postEffect.setEffectValue('time', Type.Float, this.time / 10.0);
        this.postEffect.render(this.scene, this.camera);
        this.postEffect.end();

        // Draw scene
        this.renderer.clear(new Color(230, 230, 230));
        this.renderer.setActiveTask(this.renderer.createTask());
        this.postEffect.sprite.draw(this.renderer);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
