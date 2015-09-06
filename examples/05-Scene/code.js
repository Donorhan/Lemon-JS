var renderer, scene, camera, geometry = null, cube1, cube2, rotation = 0;

function init()
{
    // Create a new renderer.
    renderer = new Lemon.RenderCanvas("simulation");

    // A camera to draw the scene.
    camera = new Lemon.Camera();
    camera.move(0, 4, 8);
    camera.lookAt(0, 0, 0);
    camera.setViewport(0, 0, renderer.getSize()[0], renderer.getSize()[1]);

    // Create a scene where you can add sprites, lights, objects, ….
    scene = new Lemon.Scene();

    // Load default shader.
    Lemon.ProgramLibrary.load('PhongShader', 'default.vert', 'default.frag', ['USE_LIGHT']);

    // Create cubes.
    {
        cube1 = createCube([1.0, 0.0, 0.0]);
        scene.add(cube1);

        // Cube 2 : child of cube 1.
        cube2 = createCube([0.0, 1.0, 0.0]);
        cube2.setPosition(2, 0, 0);
        cube1.addChild(cube2);

        // Cube 3 : child of cube 2.
        cube3 = createCube([0.0, 0.0, 1.0]);
        cube3.setPosition(0, 2, 0);
        cube2.addChild(cube3);
    }

    // Add a simple light.
    {
        light = new Lemon.PointLight();
        light.setPosition(0, 2, 0);
        scene.add(light);
    }

    // Start simulation.
    startLoop(loop);
};

function loop( deltatime )
{
    // Update logic.
    rotation += 0.1 * deltatime;
    cube1.setRotation(0, rotation, 0);
    cube2.setRotation(rotation, 0, 0);
    cube3.setRotation(0, 0, Math.cos(rotation / 100.0) * 360);
    scene.update(deltatime);

    // Draw scene.
    renderer.clear(new Lemon.Color(230, 230, 230));
    renderer.render(scene, camera);
    renderer.display();
}

function createCube( color )
{
    if( !geometry )
        geometry = Lemon.Geometry.createCube(0.5, 0.5, 0.5);

    var material = new Lemon.Material();
    var pass     = material.createPass();
    pass.add("material.ambient", Lemon.Type.Float, color);
    pass.add("material.diffuse", Lemon.Type.Float, color);
    pass.add("material.specular", Lemon.Type.Float, [0.7, 0.7, 0.7]);
    pass.add("material.shininess", Lemon.Type.Float, 38.4);

    var cube = new Lemon.Mesh();
    cube.setMaterial(material);
    cube.setGeometry(geometry);
    cube.setProgram(Lemon.ProgramLibrary.get('PhongShader'));

    return cube;
}