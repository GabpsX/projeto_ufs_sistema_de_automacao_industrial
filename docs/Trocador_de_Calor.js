import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls';
import {
     GLTFLoader
} from './js/GLTFLoader.js'




const canvas = document.querySelector('.webgl');

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
 document.exitFullscreen();
 



const scene = new THREE.Scene()
scene.background = new THREE.Color(0xdddddd)
const loader = new GLTFLoader()
loader.load('assets/trocador de calor.glb', function(glb){
     console.log(glb)
     const root = glb.scene;
     scene.add(root);
     root.scale.set(500,500,500)

     root.position.y = -15; //ajuste a posição do objeto de acordo com a distância

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

