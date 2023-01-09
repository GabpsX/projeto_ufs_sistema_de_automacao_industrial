import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls';
import {
     GLTFLoader
} from './js/GLTFLoader.js'





const canvas = document.querySelector('.webgl2');
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xdddddd)
const loader = new GLTFLoader()
loader.load('assets/tanque.glb', function(glb){
     console.log(glb)
     const root = glb.scene;
     scene.add(root);
     root.scale.set(16,16,16)

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

const light1 = new THREE.PointLight(0x9999999,1)
light1.position.set(50,2, 100)
scene.add(light1)


const light2 = new THREE.PointLight(0x9999999,1)
light2.position.set(-50,-2, -100)
scene.add(light2)


const spotLight = new THREE.SpotLight(0xFFFFFF)
scene.add(spotLight)
spotLight.position.set(0,8,4)
spotLight.intensity = 1.2
spotLight.angle = 0.45
spotLight.penumbra = 0.3
spotLight.castShadow = true
spotLight.shadow.mapSize.width = 1024
spotLight.shadow.mapSize.height = 1024
spotLight.shadow.camera.near = 5
spotLight.shadow.camera.far = 10
spotLight.shadow.focus = 1


const sizes = {
     width: window.innerWidth,
     height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height,0.1,100)
camera.position.set(1,1.5,-1)
scene.add(camera)



const renderer  = new THREE.WebGLRenderer(
     {    antialias: true,
          canvas: canvas
     }
)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true
renderer.gammaOuput = true




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


