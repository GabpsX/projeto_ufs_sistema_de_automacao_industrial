import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls';
import {
     GLTFLoader
} from './js/GLTFLoader.js'

import { 
     EffectComposer 
} from './js/EffectComposer.js';



import { 
     RenderPass 
} from './js/RenderPass.js';


let button = document.getElementById("fullscreen");
button.addEventListener('click', function() {
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
    }
});


const canvas = document.querySelector('.webgl');






const renderer = new THREE.WebGLRenderer({ canvas });


const composer = new EffectComposer(renderer);




// Define a default resolution 1080p
const defaultWidth = 1920;
const defaultHeight = 1080;
renderer.setSize(1920, 1080);
let currentWidth = defaultWidth;
let currentHeight = defaultHeight;

// Obtenha os botões
const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");

const resolutionAlert = document.getElementById("resolution-alert");

increaseButton.addEventListener("click", function(){
    currentWidth = currentWidth + (currentWidth * 0.1);
    currentHeight = currentHeight + (currentHeight * 0.1);
    renderer.setSize(currentWidth, currentHeight);

    resolutionAlert.innerHTML = `3D:${currentHeight.toFixed(0)} p`;
    resolutionAlert.style.display = "block";
    setTimeout(() => {
        resolutionAlert.style.display = "none";
    }, 2000);
});

decreaseButton.addEventListener("click", function(){
    currentWidth = currentWidth - (currentWidth * 0.1);
    currentHeight = currentHeight - (currentHeight * 0.1);
    renderer.setSize(currentWidth, currentHeight);

    resolutionAlert.innerHTML = `3D:${currentHeight.toFixed(0)} p`;
    resolutionAlert.style.display = "block";
    setTimeout(() => {
        resolutionAlert.style.display = "none";
    }, 2000);
});

const scene = new THREE.Scene();
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1);
scene.add(light);
const loader = new GLTFLoader();
loader.load('assets/trocador de calor.glb', function (gltf) {
    const root = gltf.scene;
    scene.add(root);
    root.scale.set(500, 500, 500);
    root.position.y = -15;
    root.rotation.y += 120;
}, undefined, function (error) {
    console.error(error);
});

const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
scene.add(camera);
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 1000;
controls.enablePan = true;
controls.enableZoom = true;
controls.enableDamping = true;
controls.rotateSpeed = 0.5;


 

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;
scene.add( spotLight );


const lightBottom = new THREE.DirectionalLight( 0xffffff, 0.4);
lightBottom.position.set( 0, -1, 0 );
const lightLeft = new THREE.DirectionalLight( 0xffffff, 0.4);
lightLeft.position.set( -1, 0, 0 );
const lightRight = new THREE.DirectionalLight( 0xffffff, 0.4);
lightRight.position.set( 1, 0, 0 );
scene.add( lightBottom );
scene.add( lightLeft );
scene.add( lightRight );

const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);


function animate() {
     requestAnimationFrame(animate);
     controls.update();
     spotLight.position.copy( camera.position );
     renderer.render(scene, camera);
 }
 animate();
 

