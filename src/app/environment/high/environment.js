import * as THREE from 'three';
import { Ground } from './ground';
import { Grass } from '../grass';
import { Rocks } from '../rocks';
import { Clouds } from '../clouds';
import { SkyboxOptions, Skybox } from '../skybox';

export class Environment extends THREE.Object3D {
  constructor() {
    super();

    this.ground = new Ground();
    this.add(this.ground);

    this.grass = new Grass();
    this.add(this.grass);

    const skyboxOptions = new SkyboxOptions();
    skyboxOptions.castShadow = true;
    this.skybox = new Skybox(skyboxOptions);
    this.add(this.skybox);

    this.rocks = new Rocks();
    this.add(this.rocks);

    this.clouds = new Clouds();
    this.clouds.position.set(0, 200, 0);
    this.clouds.rotation.x = Math.PI / 2;
    this.add(this.clouds);
  }

  update(elapsedTime) {
    this.grass.update(elapsedTime);
    this.clouds.update(elapsedTime);
  }
}