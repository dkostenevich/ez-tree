import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

/**
 * 
 * @param {string} url Path to texture
 * @param {THREE.Vector2} scale Scale of the texture repeat
 * @param {boolean} srgb Set to true to set texture color space to SRGB
 * @returns {THREE.Texture}
 */
const loadTexture = async (url, srgb = true) => {
  const texture = await textureLoader.loadAsync(url);
  texture.premultiplyAlpha = true;
  if (srgb) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  return texture;
};

const barksConfiguration = {};
const leaveTextures = {};

export async function loadBarkTextures(type, imageSet, force) {
  if (barksConfiguration[type] && !force) {
    return Promise.resolve();
  }

  const [ao, color, normal, roughness] = await Promise.all([
    loadTexture(imageSet.ao, false),
    loadTexture(imageSet.color, false),
    loadTexture(imageSet.normal, false),
    loadTexture(imageSet.roughness, false),
  ]);

  barksConfiguration[type] = { ao, color, normal, roughness };
}

export async function loadLeaveTextures(type, image, force) {
  if (leaveTextures[type] && !force) {
    return Promise.resolve();
  }

  const textures = await loadTexture(image);

  leaveTextures[type] = textures;
}

/**
 * Gets a bark texture for the specified bark type
 * @param {string} barkType 
 * @param {'ao' | 'color' | 'normal' | 'roughness'} fileType 
 * @param {THREE.Vector2} scale 
 * @returns 
 */
export function getBarkTexture(barkType, fileType, scale = { x: 1, y: 1 }) {
  const texture = barksConfiguration[barkType][fileType];
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = scale.x;
  texture.repeat.y = 1 / scale.y;
  return texture;
}

/**
 * Gets the leaf texture for the specified leaf type
 * @param {string} leafType 
 * @returns 
 */
export function getLeafTexture(leafType) {
  return leaveTextures[leafType];
}