import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls';
import {
     GLTFLoader
} from './js/GLTFLoader.js'





const canvas = document.querySelector('.webgl1');
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xdddddd)
const loader = new GLTFLoader()
loader.load('assets/Torre de Resfriamento v1.glb', function(glb){
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







const light3 = new THREE.SpotLight(0xffffff,2)
light3.position.set(-100,50,50)
light3.castShadow = true
light3.shadow.bias = -0.0001
light3.shadow.mapSize.width = 1024*4
light3.shadow.mapSize.height = 1024*4
scene.add(light3)

const ambient_light = new THREE.AmbientLight(0xffffff,1.5)
ambient_light.position.set(5,12,0)
scene.add(ambient_light)


const hemiLight = new THREE.HemisphereLight(0xffff80,0x4040ff,1)
hemiLight.position.set(5,12,0)
scene.add(hemiLight)

const light = new THREE.DirectionalLight(0xffffff,2.0)
light.position.set(2,10,1)
scene.add(light)
scene.add(light.target)



const distance = 25.0
const angle = Math.PI / 4.0
const penumbra = 0.5
const decay = 1 
const light1 = new THREE.SpotLight(
     0xff8080, 1, distance, angle, penumbra , decay
) 
light.position.set(5,12,0)
light1.target.position.set(-1,0,0)



const light2 = new THREE.SpotLight(0xffffff,4)
light.position.set(30,-50,20)
light.castShadow = true
light.shadow.bias = -0.0001
light.shadow.mapSize.width = 1024*4
light.shadow.mapSize.height = 1024*4
scene.add(light2)






const sizes = {
     width: window.innerWidth,
     height: window.innerHeight
}



const camera = new THREE.PerspectiveCamera(50, sizes.width/sizes.height,1,5000)
camera.position.set(0,2,4)
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
     renderer.render(scene,camera)
     requestAnimationFrame(animate)



}
animate()

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change',() => {
     renderer.render(scene, camera)
})
controls.target.set(0,0,0)
controls.update()


