import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

let loaded = false;
let _pumpkin1Mesh = null;
let _scarecrowPumpkinMesh = null;
let _trickOrTreatMesh = null;
let _catMesh = null;
let _ghost1Mesh = null;
let _graveMesh = null;
let _cemetaryMesh = null;
let _skeletonMesh = null;
let _treeDeadMesh = null;
let _bone1Mesh = null;
let _bone2Mesh = null;
let _bone3Mesh = null;
let _bone4Mesh = null;

/**
 *
 * @returns {Promise<THREE.Geometry>}
 */
async function fetchAssets() {
  if (loaded) return;

  const gltfLoader = new GLTFLoader();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(
    'https://www.gstatic.com/draco/versioned/decoders/1.5.7/',
  );
  gltfLoader.setDRACOLoader(dracoLoader);

  const [pumpkin1, scarecrowPumpkin, trickOrTreat, cat, ghost1, grave, cementary, skeleton, treeDead, bone1, bone2, bone3, bone4] = await Promise.all([
    gltfLoader.loadAsync('/assets/halloween/pumpkin1.glb'),
    gltfLoader.loadAsync('/assets/halloween/scarecrow-pumpkin.glb'),
    gltfLoader.loadAsync('/assets/halloween/trick-or-reat.glb'),
    gltfLoader.loadAsync('/assets/halloween/cat.glb'),
    gltfLoader.loadAsync('/assets/halloween/ghost1.glb'),
    gltfLoader.loadAsync('/assets/halloween/grave.glb'),
    gltfLoader.loadAsync('/assets/halloween/cemetary.glb'),
    gltfLoader.loadAsync('/assets/halloween/skeleton.glb'),
    gltfLoader.loadAsync('/assets/halloween/tree-dead.glb'),
    gltfLoader.loadAsync('/assets/halloween/bone1.glb'),
    gltfLoader.loadAsync('/assets/halloween/bone2.glb'),
    gltfLoader.loadAsync('/assets/halloween/bone3.glb'),
    gltfLoader.loadAsync('/assets/halloween/bone4.glb'),
  ]);

  _pumpkin1Mesh = pumpkin1.scene;
  _scarecrowPumpkinMesh = scarecrowPumpkin.scene;
  _trickOrTreatMesh = trickOrTreat.scene;
  _catMesh = cat.scene;
  _ghost1Mesh = ghost1.scene;
  _graveMesh = grave.scene;
  _cemetaryMesh = cementary.scene;
  _skeletonMesh = skeleton.scene;
  _treeDeadMesh = treeDead.scene;
  _bone1Mesh = bone1.scene;
  _bone2Mesh = bone2.scene;
  _bone3Mesh = bone3.scene;
  _bone4Mesh = bone4.scene;

  loaded = true;
}

export class HalloweenOptions {}

export class Halloween extends THREE.Group {
  constructor(options = new HalloweenOptions()) {
    super();

    /**
     * @type {HalloweenOptions}
     */
    this.options = options;

    fetchAssets().then(() => {
      this.add(this.generateInstances(_pumpkin1Mesh, 50, { base: 30, min: 25, max: 35 }));
      this.add(this.generateScarecrowPumpkin(_scarecrowPumpkinMesh));
      this.add(this.generateTrickOrTreat(_trickOrTreatMesh));
      this.add(this.generateInstances(_cemetaryMesh, 5, { base: 15, min: 15, max: 15 }, { y: 3 }));
      this.add(this.generateInstances(_graveMesh, 10, { base: 5, min: 5, max: 5 }));
      this.add(this.generateInstances(_ghost1Mesh, 5, { base: 15, min: 15, max: 15 }, { y: 20 }));
      this.add(this.generateInstances(_treeDeadMesh, 15, { base: 4, min: 3, max: 6 }));
      this.add(this.generateInstances(_bone1Mesh, 50, { base: 0.3, min: 0.2, max: 0.5 }, { y: 2 }));
      this.add(this.generateInstances(_bone2Mesh, 50, { base: 10, min: 10, max: 10 }));
      this.add(this.generateInstances(_bone3Mesh, 10, { base: 2, min: 1, max: 4 }));
      this.add(this.generateInstances(_bone4Mesh, 15, { base: 10, min: 10, max: 10 }, { y: 2 }));
      this.add(this.generateCat(_catMesh));
    });
  }

  generateScarecrowPumpkin(mesh) {
    const p = new THREE.Vector3(20, 20, -20);
    mesh.scale.set(10, 10, 10);
    mesh.rotation.set(0, 0, 0);
    mesh.updateMatrix();
    mesh.position.copy(p);
    return mesh;
  }

  generateCat(mesh) {
    const p = new THREE.Vector3(10, 0, -10);
    mesh.scale.set(7, 7, 7);
    mesh.rotation.set(0, 1.2, 0);
    mesh.updateMatrix();
    mesh.position.copy(p);
    return mesh;
  }

  generateTrickOrTreat(mesh) {
    const p = new THREE.Vector3(20, 5, 20);
    mesh.scale.set(3, 3, 3);
    mesh.rotation.set(0, 5, 0);
    mesh.updateMatrix();
    mesh.position.copy(p);
    return mesh;
  }

  generateInstances(mesh, totalCount, size, position) {
    const instancedMesh = new THREE.InstancedMesh(
      mesh.geometry,
      mesh.material,
      200,
    );

    let count = 0;
    for (let i = 0; i < totalCount; i++) {
      const dummy = mesh.clone();

      const r = 50 + Math.random() * 500;
      const theta = Math.random() * 2.0 * Math.PI;

      // Set position randomly
      const p = new THREE.Vector3(r * Math.cos(theta), position?.y || 0, r * Math.sin(theta));

      dummy.position.copy(p);

      // Set rotation randomly
      dummy.rotation.set(0, 2 * Math.PI * Math.random(), 0);

      // Set scale randomly
      const q = Math.random();
      const s = Math.min(Math.max(size.base * q, size.min), size.max);
      dummy.scale.set(s, s, s);

      // Apply the transformation to the instance
      dummy.updateMatrix();

      instancedMesh.setMatrixAt(count, dummy.matrix);
      count++;

      instancedMesh.add(dummy);
    }
    instancedMesh.count = count;

    // Ensure the transformation is updated in the GPU
    //instancedMesh.instanceMatrix.needsUpdate = true;

    //instancedMesh.castShadow = this.options.castShadow;

    return instancedMesh;
  }
}
