import * as THREE from 'three';

let loaded = false;
let _dirtTexture = null;

/**
 * 
 * @returns {Promise<THREE.Geometry>}
 */
async function fetchAssets() {
  if (loaded) return;

  const textureLoader = new THREE.TextureLoader();

  _dirtTexture = await textureLoader.loadAsync('grass.jpg');
  _dirtTexture.wrapS = THREE.RepeatWrapping;
  _dirtTexture.wrapT = THREE.RepeatWrapping;
  _dirtTexture.repeat.set(15, 15);
  _dirtTexture.colorSpace = THREE.SRGBColorSpace;

  loaded = true;
}

export class Ground extends THREE.Mesh {
  constructor() {
    super();


    fetchAssets().then(() => {
      var floorMaterial = new THREE.MeshBasicMaterial({ map: _dirtTexture, side: THREE.FrontSide });
      var floorGeometry = new THREE.PlaneGeometry(2000, 2000);
      this.rotation.x = -Math.PI / 2;
      this.material = floorMaterial;
      this.geometry = floorGeometry;
    });
  }
}