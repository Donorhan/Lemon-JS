var renderer, scene, camera, cubes = [], rotation = 0, time = 0, lights = [];

function init()
{
    // Create a new renderer.
    renderer = new Lemon.RenderCanvas("simulation");

    // A camera to draw the scene.
    camera = new Lemon.Camera();
    camera.move(0, 3.0, 9);
    camera.lookAt(0, 1.7, 0);
    camera.setViewport(0, 0, renderer.getSize()[0], renderer.getSize()[1]);

    // Create a scene where you can add sprites, lights, objects, ….
    scene = new Lemon.Scene();

    // Load default shader.
    Lemon.ProgramLibrary.load('DefaultShader', 'default.vert', 'default.frag', ['USE_LIGHT']);

    // Create 3D scene
    {
        // Shared material.
        var cubeMaterial = new Lemon.Material();
        var pass         = cubeMaterial.createPass();
        pass.add("material.ambient", Lemon.Type.Float, [0.05, 0.05, 0.05]);
        pass.add("material.diffuse", Lemon.Type.Float, [0.5, 0.5, 0.5]);
        pass.add("material.specular", Lemon.Type.Float, [0.7, 0.7, 0.7]);
        pass.add("material.shininess", Lemon.Type.Float, 38.4);

        // Cubes.
        for( var i = 0; i < 5; i++ )
        {
            var cubeMesh = new Lemon.Mesh();
            cubeMesh.setPosition(0, 2, 0);
            cubeMesh.setMaterial(cubeMaterial);
            cubeMesh.setGeometry(Lemon.Geometry.createCube(0.5, 0.5, 0.5));
            cubeMesh.setProgram(Lemon.ProgramLibrary.get('DefaultShader'));
            scene.add(cubeMesh);

            cubes.push(cubeMesh);
        }

        // Shared geometry and material.
        var wallGeometry    = Lemon.Geometry.createRectangle(5.0, 5.0);
        var wallMaterial    = new Lemon.Material();
        var pass            = wallMaterial.createPass();
        pass.drawingMode    = Lemon.DrawingMode.TrianglesStrip;
        pass.add("material.ambient", Lemon.Type.Float, [0.05, 0.05, 0.05]);
        pass.add("material.diffuse", Lemon.Type.Float, [0.55, 0.55, 0.55]);
        pass.add("material.specular", Lemon.Type.Float, [0.7, 0.7, 0.7]);
        pass.add("material.shininess", Lemon.Type.Float, 38.4);

        // Ground.
        {
            var quad = new Lemon.Mesh();
            quad.setRotation(-90, 0, 0);
            quad.setMaterial(wallMaterial);
            quad.setProgram(Lemon.ProgramLibrary.get('DefaultShader'));
            quad.setGeometry(wallGeometry);
            scene.add(quad);
        }

        // Back wall.
        {
            var quad = new Lemon.Mesh();
            quad.setPosition(0, 2.5, -5);
            quad.setMaterial(wallMaterial);
            quad.setProgram(Lemon.ProgramLibrary.get('DefaultShader'));
            quad.setGeometry(wallGeometry);
            scene.add(quad);
        }

        // Left wall.
        {
            var quad = new Lemon.Mesh();
            quad.setRotation(0, 90, 0);
            quad.setPosition(-5, 2.5, 0);
            quad.setMaterial(wallMaterial);
            quad.setProgram(Lemon.ProgramLibrary.get('DefaultShader'));
            quad.setGeometry(wallGeometry);
            scene.add(quad);
        }

        // Right wall.
        {
            var quad = new Lemon.Mesh();
            quad.setRotation(0, -90, 0);
            quad.setPosition(5, 2.5, 0);
            quad.setMaterial(wallMaterial);
            quad.setProgram(Lemon.ProgramLibrary.get('DefaultShader'));
            quad.setGeometry(wallGeometry);
            scene.add(quad);
        }
    }

    // Add lights
    {
        // Ambient light (the sun)
        var light = new Lemon.DirectionalLight();
        light.setDirection(0, -1, -0.5);
        scene.add(light);

        // Some point lights.
        for( var i = 0; i < 3; i++ )
        {
            var light = new Lemon.PointLight();
            light.setPosition(0, 4, 3);

            if( i == 0 )
            {
                light.setAmbientColor(255, 0, 0);
                light.setDiffuseColor(255, 0, 0);                
            }
            else if( i == 1 )
            {
                light.setAmbientColor(0, 255, 0);
                light.setDiffuseColor(0, 255, 0);                
            }
            else if( i == 2 )
            {
                light.setAmbientColor(0, 0, 255);
                light.setDiffuseColor(0, 0, 255);                
            }

            scene.add(light);

            lights.push(light);
        }
    }

    // Start simulation.
    startLoop(loop);
};

function loop( deltatime )
{
    // Update logic.
    time += deltatime / 100;
    if( time > 100 )
        time = 0;

    // Move lights.
    for( var i = 0; i < this.lights.length; i++ )
        this.lights[i].setPosition(Math.cos(time / 4.0 + (i * 2)) * 3, 2, Math.sin(time / 4.0 + (i * 4)) * 3);

    // Rotate cube.
    rotation += 0.05 * deltatime;
    for( var i = 0; i < this.cubes.length; i++ )
        this.cubes[i].setRotation(45, rotation * (i + 3), 45);

    // Update scene.
    scene.update(deltatime);

    // Draw scene.
    renderer.clear(new Lemon.Color(230, 230, 230));
    renderer.setActiveTask(renderer.createTask());
    renderer.render(scene, camera);
    renderer.display();
}
