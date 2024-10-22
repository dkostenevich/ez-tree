import * as THREE from 'three';
import { Ground } from './ground';
import { Halloween } from '../halloween';
import { Skybox, SkyboxOptions } from '../skybox';

export class Environment extends THREE.Object3D {
  constructor() {
    super();

    this.ground = new Ground();
    this.add(this.ground);

    this.halloween = new Halloween();
    this.add(this.halloween);

    const skyboxOptions = new SkyboxOptions();
    skyboxOptions.sunSize = 3;
    skyboxOptions.skyColorLow = new THREE.Color(0x0f0015);
    skyboxOptions.skyColorHigh = new THREE.Color(0x0f0015);
    skyboxOptions.castShadow = false;
    skyboxOptions.sunIntensity = 1;
    this.skybox = new Skybox(skyboxOptions);
    this.add(this.skybox);
  }

  update() {
  }
}