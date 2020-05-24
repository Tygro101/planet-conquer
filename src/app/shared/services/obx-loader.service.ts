import { Injectable, OnDestroy } from '@angular/core';
import { Object3D, Scene, Group, Mesh, MaterialLoader, Vector3, Loader } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader, GLTFParser } from 'three/examples/jsm/loaders/GLTFLoader';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ObxLoaderService implements OnDestroy {
  private runningObjects: Array<Object3D> = new Array<Object3D>();
  private fbxLoader = new FBXLoader();
  private objLoader = new OBJLoader();
  private gltfLoader = new GLTFLoader();
  constructor() {

  }
  ngOnDestroy(): void {
    this.runningObjects = [];
  }

  loadObject(scene: Scene, obxName: ObxNames, type: ObxTypes): void {

    const loader = this.getLoader(type) as any;
    const objectPath = this.getObject(obxName);
    loader.load(objectPath, (group) => {

      if (type === ObxTypes.GLTF) {
        group.scene.castShadow = true;
        group.scene.receiveShadow = true;
        //group.scene.scale.set(0.2,0.2,0.2)
        scene.add(group.scene);
        this.runningObjects.push(group.scene);
      } else {
        //group.position.set(0,0,0);
        scene.add(group);
        this.runningObjects.push(group);
      }
    }, (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, (err) => {
      console.log(err);
    });
  }
  private getLoader(type: ObxTypes) {
    switch (type) {
      case ObxTypes.FBX:
        return this.fbxLoader;
      case ObxTypes.OBJ:
        return this.fbxLoader;
      case ObxTypes.GLTF:
        return this.gltfLoader;
    }
  }

  private getObject(obxName: ObxNames) {
    switch (obxName) {
      case ObxNames.WORLD:
        if (environment.production)
          return "/planet-conquer/assets/3ds/worlds/login-planet.glb";
        else return "/assets/3ds/worlds/login-planet.glb";
      case ObxNames.TEMP:
        return "/assets/obj/floor.fbx";
      case ObxNames.WORLD_WITH_SUN:
        return "/assets/3ds/worlds/planet-with-sun.glb";
    }
  }

  update(dt: number): void {
    this.runningObjects.forEach(item => {
      //item.rotation.x += dt/6;
      item.rotation.y += dt / 7;
      //item.rotation.z += dt/9;
    })
  }
}


export enum ObxNames {
  WORLD = "world",
  TEMP = "temp",
  WORLD_WITH_SUN = "world with sun"
}

export enum ObxTypes {
  OBJ = "obj",
  FBX = "fbx",
  GLTF = "gltf"
}