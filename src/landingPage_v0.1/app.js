/*
---------------------------------------------
TheOasis Interactive 2022 All Rights Reserved,
Do Not Distribute Without Express Permission. 
Version V0.1
Lasted Updated 31/01/2022
---------------------------------------------
*/
// Variables For Setup

let container;
let camera;
let scene;
let house;
let renderer;


function init()
{
    container = document.querySelector('.scene')

    // Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    // Camera Setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(22, 15, 500);

    // Lighting
    const ambient = new THREE.AmbientLight(0x404040,2);
    scene.add(ambient);
    const light = new THREE.DirectionalLight(0xffffff,3);
    light.position.set(10,10,70);
    scene.add(light);

    // Renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    // Load Model
    let loader = new THREE.GLTFLoader();
    loader.load('./3d/scene.gltf', function(gltf)
    {
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        
    })
}
function animate()
{
    requestAnimationFrame(animate);
    house.rotation.z += 0.005;
    renderer.render(scene,camera);
}

init();
animate();

