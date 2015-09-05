Lemon-JS
======
An accessible rendering engine in Javascript. ([Demonstrations here](http://dorhan.fr/Demos/Lemon/exemples))

### Installation
- Get Lemon.min.js from the build directory
- Copy "shaders" folder to your project
- See the next step.

### Hello world

 ```javascript
// Create a new renderer using div's "id".
var renderer = new Lemon.RenderCanvas("simulation");

// A camera to draw the scene.
var camera = new Lemon.Camera();
camera.move(3, 3, 3);
camera.setViewport(0, 0, renderer.getSize()[0], renderer.getSize()[1]);

// Create a scene where we can add sprites, lights, objects, ….
var scene = new Lemon.Scene(); 

// Load default shader with texture and light support.
Lemon.ProgramLibrary.load('DefaultShader', 'default.vert', 'default.frag', ['USE_LIGHT']);

// Now we can create our first cube.
var cube = new Lemon.Mesh();
cube.setMaterial(Material::create('default'));
cube.setGeometry(Lemon.Geometry.createCube(0.5, 0.5, 0.5));
cube.setProgram(Lemon.ProgramLibrary.get('DefaultShader'));
scene.add(cube);

// A light to see something.
var light = new Lemon.PointLight();
light.setPosition(0, 3, 0);
scene.add(light);
```

 ```javascript
function applicationLoop( deltatime )
{
    // Update scene …
    scene.update(deltatime);

    // … then draw it!
    renderer.clear(new Lemon.Color(30, 30, 30));
    renderer.render(scene, camera);
    renderer.display();
}
```
### Advanced: How to build
- [Get closure.jar](https://github.com/google/closure-compiler) and copy the file to "libs"
- Run "build.sh" from the "build" directory 

### License
[Creative Commons 4.0](http://creativecommons.org/licenses/by/4.0/)
