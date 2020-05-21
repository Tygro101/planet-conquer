import { Injectable, NgZone, ElementRef } from '@angular/core';

import { ObxLoaderService, ObxTypes, ObxNames } from './obx-loader.service';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, Vector3, Clock, Object3D, Group, SpotLight, DirectionalLight } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";

@Injectable({ providedIn: 'root' })
export class GameEngineService {
  private canvas: HTMLCanvasElement;
  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private scene: Scene;
  private light: AmbientLight;
  private clock: Clock = new Clock();
  private fpsCounter: number = 0;
  public fps: string;
  private fpsInterval: any;
  private composer: EffectComposer;

  private frameId: number = null;
  private spotLight: SpotLight;

  public constructor(private ngZone: NgZone, private obxLoader: ObxLoaderService) { }

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.fpsInterval) {
      clearInterval(this.fpsInterval);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {

    this.canvas = canvas.nativeElement;
    this.initScene();
    this.initCamera();
    this.initLight();
    this.initWorld();
    this.initFpsCalculation();
    this.animate();
  }
  initFpsCalculation() {
    this.fpsInterval = setInterval(() => {
      this.fps = this.fpsCounter.toString();
      this.fpsCounter = 0;

    }, 1000);
  }

  initScene(): void {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.scene = new Scene();
  }

  initCamera() {
    this.camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.3, 1000);
    this.camera.position.set(13.320, 26.500, 20.714);
    this.camera.rotation.set(-this.degToRad(42.40), this.degToRad(23.6), this.degToRad(22.2));
    this.scene.add(this.camera);
    this.composer = new EffectComposer(new WebGLRenderer());
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    const bloomOptions = {

			luminanceThreshold: 0.2,
			luminanceSmoothing: 0.075,
			height: 480,
		};
    const bloom = new BloomEffect(bloomOptions);
    //const selectiveBloomEffect = new SelectiveBloomEffect(scene, camera, bloomOptions);
    this.composer.addPass(new EffectPass(this.camera, bloom));
  }

  initLight() {
    this.light = new AmbientLight(0x404040);
    this.light.position.z = -10;
    this.light.intensity = 3;
    this.light.castShadow = true;
    this.scene.add(this.light);
    this.spotLight = new SpotLight(0xfdfbd3);
    this.spotLight.position.set(9, 30, 7.5);
    this.spotLight.intensity = 1;
    this.spotLight.angle = 0.3;
    this.spotLight.castShadow = true;
    const directionalLight = new DirectionalLight(0xfdfbd3);
    directionalLight.castShadow = true;
    directionalLight.intensity = 0.5;
    this.scene.add(directionalLight)

    //this.scene.add(this.spotLight);
  }


  initWorld() {
    //this.obxLoader.loadObject(this.scene, ObxNames.WORLD,ObxTypes.OBJ);
    this.obxLoader.loadObject(this.scene, ObxNames.WORLD, ObxTypes.GLTF);
  }


  public animate(): void {

    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    //this.cube.rotation.x += 0.01;
    //this.cube.rotation.y += 0.01;
    const dt = this.clock.getDelta();
    this.fpsCounter++;
    this.obxLoader.update(dt);
    this.renderer.render(this.scene, this.camera);
    this.composer.render(dt);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }


  degToRad(degree: number): number {
    return (Math.PI / 180) * degree;
  }
}
