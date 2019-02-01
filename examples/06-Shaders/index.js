import {
    Camera, Color, Geometry, Material, Mesh, PointLight, Program, ProgramLibrary, RenderCanvas, Scene, Type,
} from '../../src/Lemon';
import startRenderingLoop from '../assets/scripts/helpers';

class App {
    constructor() {
        this.camera = null;
        this.cube1 = null;
        this.cube2 = null;
        this.cube3 = null;
        this.scene = null;
        this.rotation = 0;
        this.time = 0;

        this.init();
    }

    init() {
        this.renderer = new RenderCanvas('simulation');

        this.camera = new Camera();
        this.camera.move(0, 3, 6);
        this.camera.lookAt(0, 0, 0);
        this.camera.setViewport(0, 0, this.renderer.getWidth(), this.renderer.getHeight());
        this.scene = new Scene();

        // Shaders/program to use
        this.customProgram = new Program();
        this.customProgram.loadFromFiles('../assets/shaders/effect2-VS.txt', '../assets/shaders/effect2-FS.txt');

        this.createCubes();

        // Add a light
        this.light = new PointLight();
        this.scene.add(this.light);
    }

    createCubes() {
        const geometry = Geometry.createCube(0.5, 0.5, 0.5);

        // Shared material
        const material = new Material.Create('default');

        // Cube
        this.cube1 = new Mesh(geometry, material, this.customProgram);
        this.cube1.setPosition(-2, 0, 0);
        this.scene.add(this.cube1);

        this.cube2 = new Mesh(geometry, material, this.customProgram);
        this.cube2.setPosition(0, 0, 0);
        this.scene.add(this.cube2);

        this.cube3 = new Mesh(geometry, material, this.customProgram);
        this.cube3.setPosition(2, 0, 0);
        this.scene.add(this.cube3);
    }

    render(deltatime) {
        // Update logic
        this.time += deltatime / 100;
        if (this.time > 100) {
            this.time = 0;
        }

        // Rotate cube.
        this.rotation += 0.05 * deltatime;
        this.cube1.setRotation(45, this.rotation, 0);
        this.cube2.setRotation(45, this.rotation, 45);
        this.cube3.setRotation(0, this.rotation, 45);
        this.renderer.getRenderAPI().setUniform(this.customProgram, 'time', Type.Float, this.time);
        this.scene.update(deltatime);

        // Draw scene
        this.renderer.clear(new Color(30, 30, 30));
        this.renderer.render(this.scene, this.camera);
        this.renderer.display();
    }
}

const app = new App();
startRenderingLoop(deltatime => app.render(deltatime));
