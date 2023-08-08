import "./styles.css";
import * as THREE from 'three'

// const scene = new THREE.Scene()

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
// camera.position.z = 5
// scene.add(camera)

// const geometry = new THREE.BoxGeometry(1, 1, 1)

// const material = new THREE.MeshNormalMaterial()

// const cube = new THREE.Mesh(geometry, material)

// scene.add(cube)

// const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('.webgl'), alpha: true, antialias: true })

// renderer.setSize(window.innerWidth, window.innerHeight)

// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// const clock = new THREE.Clock()
// const loop = () => {
//     cube.position.y = Math.cos(clock.getElapsedTime())
//     cube.position.x = Math.sin(clock.getElapsedTime())
//     cube.rotation.x = (clock.getElapsedTime())
//     cube.rotation.z = (clock.getElapsedTime())
//     // camera.lookAt(cube.position)
//     renderer.render(scene, camera)
//     requestAnimationFrame(loop)
// }
// loop()



const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100)
camera.position.z = 5
scene.add(camera)

const cube_geometry = new THREE.BoxGeometry(1, 1, 1)
const cube_mesh = new THREE.MeshNormalMaterial()
const cube = new THREE.Mesh(cube_geometry, cube_mesh)
scene.add(cube)
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('.webgl'), antialias: true, alpha: true })
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
const clock = new THREE.Clock()
const loop = () => {
    cube.position.x = Math.cos(clock.getElapsedTime())
    cube.position.y = Math.sin(clock.getElapsedTime())
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
}
requestAnimationFrame(loop)