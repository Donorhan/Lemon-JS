Lemon-JS
======
An accessible rendering engine in Javascript. 

### Demonstrations
 - [A simple cube](https://www.dorhan.fr/Demos/Lemon/exemples/01-Cube/)
 - [A custom mesh](https://www.dorhan.fr/Demos/Lemon/exemples/02-Mesh/)
 - [Billboard sprites](https://www.dorhan.fr/Demos/Lemon/exemples/03-Sprites/)
 - [A 3D model](https://www.dorhan.fr/Demos/Lemon/exemples/04-Model/)
 - [Scene management](https://www.dorhan.fr/Demos/Lemon/exemples/05-Scene/)
 - [Lights](https://www.dorhan.fr/Demos/Lemon/exemples/06-Lights/)
 - [Make blob using shaders](https://www.dorhan.fr/Demos/Lemon/exemples/07-Shaders/)
 - [Post processing stack](https://www.dorhan.fr/Demos/Lemon/exemples/08-Processing/)

### Installation
- Download [the latest version](https://github.com/DonoSybrix/Lemon-JS/releases) of LemonJS
- Insert Lemon.min.js file to our website
- Copy "shaders" folder to your project to get default shaders
- Enjoy!

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

// Load default shader with light support.
Lemon.ProgramLibrary.load('DefaultShader', 'default.vert', 'default.frag', ['USE_LIGHT']);

// Now we can create our first cube.
var cube = new Lemon.Mesh();
cube.setMaterial(Lemon.Material.create('default'));
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

### How to contribute
- Clone this repository
- npm install from the folder
- 'npm run dev' (developement) or 'npm run build' (production)
- Enjoy!

### License
[MIT](https://github.com/DonoSybrix/Lemon-JS/blob/master/LICENSE.md)
