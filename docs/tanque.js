import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls';
import {
     GLTFLoader
} from './js/GLTFLoader.js'




const canvas = document.querySelector('.webgl2');

let button = document.getElementById("fullscreen3");
button.addEventListener('click', function() {
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
    }
});
 document.exitFullscreen();
 



const scene = new THREE.Scene()
scene.background = new THREE.Color(0xdddddd)
const loader = new GLTFLoader()
loader.load('assets/tanque.glb', function(glb){
     console.log(glb)
     const root = glb.scene;
     scene.add(root);
     root.scale.set(500,500,500)

     root.position.y = -30; //ajuste a posição do objeto de acordo com a distância

     root.rotation.y += 120;
     root.traverse(function(node){
          if (node.isMesh){
               node.castShadow = true
          }
     })
}, function(xhr){
     console.log((xhr.loaded/xhr.total * 100) + "% Loaded")
}, function(error){
     console.log('Erro!')
}
)



const topLight = new THREE.DirectionalLight(0xffffff, 0.6);
topLight.position.set(0, 1, 0);
scene.add(topLight);
const bottomLight = new THREE.DirectionalLight(0xffffff, 0.6);
bottomLight.position.set(0, -1, 0);
scene.add(bottomLight);
const leftLight = new THREE.DirectionalLight(0xffffff, 0.6);
leftLight.position.set(-1, 0, 0);
scene.add(leftLight);
const rightLight = new THREE.DirectionalLight(0xffffff, 0.6);
rightLight.position.set(1, 0, 0);
scene.add(rightLight);
const frontLight = new THREE.DirectionalLight(0xffffff, 0.6);
frontLight.position.set(0, 0, 1);
scene.add(frontLight);
const backLight = new THREE.DirectionalLight(0xffffff, 0.6);
backLight.position.set(0, 0, -1);
scene.add(backLight);





const sizes = {
     width: window.innerWidth,
     height: window.innerHeight
}

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );
camera.position.set( 0, 0, 100 ); //Ajuste a posição da câmera de acordo com a posição do objeto
camera.lookAt( 0, 0, 0 ); //Faz a câmera olhar para o centro do objeto


scene.add( camera );





const renderer  = new THREE.WebGLRenderer(
     {    antialias: true,
          canvas: canvas
     }
)
renderer.setSize(sizes.width, sizes.height)

renderer.setPixelRatio( window.devicePixelRatio );


renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;




/*Effects*/

function animate(){
     requestAnimationFrame(animate)
 
     renderer.render(scene,camera)

}
animate()

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change',() => {
     renderer.render(scene, camera)
})
controls.target.set(0,0,0)
controls.update()


