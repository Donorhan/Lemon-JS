var renderer, scene, camera, rotation = 0, light;

function init()
{
    // Create a new renderer.
    renderer = new Lemon.RenderCanvas("simulation");

    // A camera to draw the scene.
    camera = new Lemon.Camera();
    camera.move(0, 1.7, 3);
    camera.lookAt(0, 1.7, 0);
    camera.setViewport(0, 0, renderer.getSize()[0], renderer.getSize()[1]);

    // Create a scene where you can add sprites, lights, objects, ….
    scene = new Lemon.Scene();

    // Our first model!
    {
        // Load default shader.
        Lemon.ProgramLibrary.load('PhongShader', 'default.vert', 'default.frag', ['USE_TEXTURE', 'USE_LIGHT']);

        // Create it.
        var model = new Lemon.Model();
        model.loadFromFile('../assets/models/lee-perry-smith/model.json');
        model.setPosition(0, 2, 0);
        model.setScale(5, 5, 5);
        model.setRotation(-90, 0, 0);
        scene.add(model);
    }

    // Add a simple light.
    {
        light = new Lemon.PointLight();
        scene.add(light);
    }

    // Start simulation.
    startLoop(loop);
};

function loop( deltatime )
{
    // Update logic.
    rotation += 0.001 * deltatime;
    light.setPosition(Math.cos(rotation) * 5, Math.sin(rotation) * 6, 3);
    scene.update(deltatime);

    // Draw scene.
    renderer.clear(new Lemon.Color(230, 230, 230));
    renderer.render(scene, camera);
    renderer.display();
}
