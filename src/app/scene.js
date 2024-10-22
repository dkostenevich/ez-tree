import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Tree } from '@dkostenevich/ez-tree';
import { Environment } from './environment/high/environment';
import { TreePreset } from './presets';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

/**
 * Creates a new instance of the Three.js scene
 * @param {THREE.WebGLRenderer} renderer 
 * @returns 
 */
export async function createScene(renderer) {
  const loader = new FontLoader();
  const font = await loader.loadAsync('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json');

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x94b9f8, 0.0015);

  const environment = new Environment();
  scene.add(environment);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    2000,
  );
  camera.position.set(100, 20, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = true;
  controls.minPolarAngle = Math.PI / 2 - 0.2;
  controls.maxPolarAngle = Math.PI / 2 + 0.13;
  controls.minDistance = 10;
  controls.maxDistance = 150;
  controls.target.set(0, 25, 0);
  controls.update();

  const tree = new Tree();
  await tree.loadFromJson(TreePreset['Ash Medium']);

  tree.generate();
  tree.castShadow = true;
  tree.receiveShadow = true;

  addLabel(tree, getRandomName(), font);

  scene.add(tree);


  // Add a forest of trees in the background
  const forest = new THREE.Group();
  forest.name = 'Forest';

  const logoElement = document.getElementById('logo');
  const progressElement = document.getElementById('loading-text');

  logoElement.style.clipPath = `inset(100% 0% 0% 0%)`;
  progressElement.innerHTML = 'LOADING... 0%';

  const treeCount = 100;
  const minDistance = 175;
  const maxDistance = 500;

  async function createTree() {
    const r = minDistance + Math.random() * maxDistance;
    const theta = 2 * Math.PI * Math.random();
    const presets = Object.keys(TreePreset);
    const index = Math.floor(Math.random() * presets.length);

    const t = new Tree();
    t.position.set(r * Math.cos(theta), 0, r * Math.sin(theta));
    await t.loadFromJson(TreePreset[presets[index]]);
    t.options.seed = 10000 * Math.random();
    t.generate();
    t.castShadow = true;
    t.receiveShadow = true;

    addLabel(t, getRandomName(), font);

    forest.add(t);
  }

  function getRandomName() {
    const names = [
      "John", "Jack", "Alice", "Bob", "Charlie", "David", "Eve", "Frank",
      "Grace", "Hannah", "Ivy", "Jack", "Kathy", "Leo", "Mia", "Nick",
      "Olivia", "Paul", "Quinn", "Rita", "Steve", "Tina", "Uma",
      "Vera", "Will", "Xena", "Yara", "Zoe", "Aaron", "Bella", "Cody"
    ];

    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  function addLabel(tree, labelText, font) {
    const geometry = new TextGeometry(labelText, {
      font: font,
      size: 4,
      depth: 1,
      curveSegments: 4,
      bevelEnabled: false,
    });

    geometry.computeBoundingBox();

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xf5e251, flatShading: true }), // front
      new THREE.MeshPhongMaterial({ color: 0x000000 }) // side
    ];

    const textMesh = new THREE.Mesh(geometry, materials);
    const centerOffset = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

    textMesh.position.set(centerOffset, 5, 10);

    textMesh.rotation.x = 0;
    textMesh.rotation.y = Math.PI * 2;

    tree.add(textMesh);
  }

  async function loadTrees(i) {
    while (i < treeCount) {
      await createTree();

      const progress = Math.floor(100 * (i + 1) / treeCount);

      // Update progress UI
      logoElement.style.clipPath = `inset(${100 - progress}% 0% 0% 0%)`;
      progressElement.innerText = `LOADING... ${progress}%`;

      i++;
    }

    logoElement.style.clipPath = `inset(0% 0% 0% 0%)`;
    document.getElementById('loading-screen').style.display = 'none';
  }

  // Start the tree loading process
  await loadTrees(0);

  scene.add(forest);

  return {
    scene,
    environment,
    tree,
    camera,
    controls
  }
}