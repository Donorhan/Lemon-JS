import {
    Camera, Color, PointLight, ProgramLibrary, RenderCanvas, Scene, TextureVideo, Sprite,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';

const randomInRange = (min, max) => Math.random() * (max - min) + min;

class App {
    constructor() {
        this.camera = null;
        this.renderer = null;
        this.rotation = 0;
        this.scene = null;

        this.init();
    }

    init() {
        // We need a shader with texture only but we can add light support if we want to
        ProgramLibrary.loadFromFile('DefaultShader', '../../shaders/GLSL/default.vert', '../../shaders/GLSL/default.frag', ['USE_TEXTURE']);

        this.renderer = new RenderCanvas('simulation');
        this.camera = new Camera();
        this.camera
            .move(1.5, 1, 4)
            .lookAt(1.5, 1, 0)
            .setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());
        this.scene = new Scene();

        // Texture to apply
        const videoURL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
        const videoTexture = new TextureVideo(videoURL);
        videoTexture.setSpeed(3);
        videoTexture.play();

        // Create the cube
        let row = 0;
        for (let i = 0; i < 9; i += 1) {
            const col = (i % 3) * 1.5;

            const sprite = new Sprite(videoTexture);
            sprite
                .setPosition(
                    col + (col * 0.02),
                    row + (row * 0.02),
                    0,
                )
                .setScale(
                    1.5,
                    -1,
                    1,
                )
                .setColor(
                    randomInRange(30, 255),
                    randomInRange(30, 255),
                    randomInRange(30, 255),
                );
            this.scene.add(sprite);

            if (i % 3 === 2) {
                row += 1;
            }
        }

        // Add a light
        const light = new PointLight();
        light.setPosition(0, 3, 0);
        this.scene.add(light);
    }

    render(deltatime) {
        // Update logic
        this.scene.update(deltatime);

        // Draw scene
        this.renderer.clear(new Color(30, 30, 30));
        this.renderer.render(this.scene, this.camera);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
