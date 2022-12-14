import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup
var today = new Date()
var seconds = new Date().getTime() / 1000;
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff00cc ,wireframe:true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);



function animate() {
  requestAnimationFrame(animate);
  var seconds = new Date().getTime() / 1000;

  torus.rotation.x =seconds*0.4
  torus.rotation.y =seconds*0.6
  torus.rotation.z =seconds*0.2


  // controls.update();

  renderer.render(scene, camera);
}

animate();