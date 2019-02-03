import {
    Camera, Color, RenderCanvas, Scene, Skybox, TextureCube,
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
        this.camera
            .move(3, 3, 3)
            .setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());

        // Create a scene where you can add sprites, lights, objects, …
        this.scene = new Scene();

        // Texture to apply
        const skyTexture = new TextureCube([
            '../assets/images/TropicalSkyBox/Up.jpg',
            '../assets/images/TropicalSkyBox/Down.jpg',
            '../assets/images/TropicalSkyBox/Left.jpg',
            '../assets/images/TropicalSkyBox/Right.jpg',
            '../assets/images/TropicalSkyBox/Back.jpg',
            '../assets/images/TropicalSkyBox/Front.jpg',
        ]);

        const skybox = new Skybox();
        skybox.setTexture(skyTexture);
        this.scene.add(skybox);
    }

    render(deltatime) {
        // Update logic
        this.rotation += 0.001 * deltatime;
        this.camera
            .move(3, 3, 3)
            .rotate(this.rotation, this.rotation, this.rotation);
        this.scene.update(deltatime);

        // Draw scene
        this.renderer.clear(new Color(30, 30, 30));
        this.renderer.render(this.scene, this.camera);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
