import * as THREE from 'three';
import { Skybox } from './skybox';
import { Grass, GrassOptions } from '../grass';
import { RockOptions, Rocks } from '../rocks';
import { Ground } from './ground';

export class Environment extends THREE.Object3D {
  constructor() {
    super();

    const grassOptions = new GrassOptions();
    grassOptions.castShadow = false;
    grassOptions.receiveShadow = false;
    grassOptions.instanceCount = 500;
    grassOptions.maxInstanceCount = 1000;
    this.grass = new Grass(grassOptions);
    this.add(this.grass);

    this.ground = new Ground();
    this.add(this.ground);

    this.skybox = new Skybox();
    this.add(this.skybox);

    const rocksOptions = new RockOptions();
    rocksOptions.castShadow = false;
    this.rocks = new Rocks(rocksOptions);
    this.add(this.rocks);
  }

  update(elapsedTime) {
    this.grass.update(elapsedTime);
  }
}