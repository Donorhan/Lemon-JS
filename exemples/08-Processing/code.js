var renderer, scene, camera, postEffect, cameraRotation = 0.005, rotation = 0, time = 0, light;

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

    // Load the model.
    {
        // Load default shader.
        Lemon.ProgramLibrary.load('PhongShader', 'default.vert', 'default.frag', ['USE_TEXTURE', 'USE_LIGHT']);

        // Test 3D model.
        var model = new Lemon.Model();
        model.loadFromFile('../assets/models/lee-perry-smith/model.json');
        model.setPosition(0, 2, 0);
        model.setScale(5, 5, 5);
        model.setRotation(-90, 0, 0);
        scene.add(model);
    }

    // Add lights
    {
        light = new Lemon.PointLight();
        scene.add(light);
    }

    // Create a post-effect.
    {
        // Shaders/program to use.
        var program = new Lemon.Program();
        program.loadFromFiles('../assets/shaders/effect1-VS.txt', '../assets/shaders/effect1-FS.txt');

        // Prepare post-effect.
        postEffect = new Lemon.PostEffect(program);
        postEffect.init(renderer.getSize()[0], renderer.getSize()[1]);
    }

    // Start simulation.
    startLoop(loop);
};

function loop( deltatime )
{
    // Update logic.
    time     += deltatime / 100;
    if( time > 100 )
        time = 0;

    rotation        += 0.001 * deltatime;
    camera.rotate(cameraRotation, 0);
    light.setPosition(Math.cos(rotation) * 5, Math.sin(rotation) * 6, 3);
    scene.update(deltatime);

    // Start post-effect, everything draw here will be affected by the post-effect.
    postEffect.begin(new Lemon.Color(230, 230, 230));
    postEffect.setEffectValue('time', Lemon.Type.Float, time);
    postEffect.render(scene, camera);
    postEffect.end();

    // Draw scene.
    renderer.clear(new Lemon.Color(230, 230, 230));
    renderer.setActiveTask(renderer.createTask());
    postEffect.sprite.draw(renderer);
    renderer.display();
}
