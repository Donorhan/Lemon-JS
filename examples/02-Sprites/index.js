import {
    Camera, Color, RenderCanvas, Scene, Sprite, Texture,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';
import BlendMode from '../../src/BlendMode';

class App {
    constructor() {
        this.camera = null;
        this.cameraPosition = 0;
        this.scene = null;
        this.sprites = [];

        this.init();
    }

    init() {
        this.renderer = new RenderCanvas('simulation');

        this.camera = new Camera();
        this.camera.move(0, 4, 6);
        this.camera.setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());

        this.scene = new Scene();

        const texture = new Texture('../assets/images/adventurer.png');
        texture.setRepeated(false); // Disable repeat for non-pow2 images
        const angle = Math.PI / 3.0;
        const radius = 2;

        for (let i = 0; i < 6; i += 1) {
            const sprite = new Sprite();
            sprite
                .setTexture(texture)
                .setPosition(Math.cos(i * angle) * radius, 0, Math.sin(i * angle) * radius)
                .setScale(0.8, 1, 1);
            this.scene.add(sprite);
            this.sprites.push(sprite);
        }
    }

    render(deltatime) {
        // Update logic
        this.cameraPosition += 0.001 * deltatime;
        this.camera.move(Math.cos(this.cameraPosition) * 8, 4, 6);

        // Ask sprite to look at camera
        const viewMatrix = this.camera.getViewMatrix();
        for (let i = 0; i < this.sprites.length; i += 1) {
            this.sprites[i].lookAt(this.camera.getPosition(), [viewMatrix[1], viewMatrix[5], viewMatrix[9]]);
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
