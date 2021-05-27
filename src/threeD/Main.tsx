import * as THREE from 'three/build/three.module';
import Stats from 'three/examples/jsm/libs/stats.module'
import Lights from './Lights';
import Monkey from './Monkey';
import Siders from './Siders';
import Wall from './Wall';
import ScreenDimensionUtils from './ScreenDimensionUtils';

class Main {

    private static singleton: Main;
    public static createOrGetInstance(canvas?: HTMLCanvasElement, monkeyClickedSetter?: (clicked: boolean) => void): Main {
        if (!this.singleton && canvas && monkeyClickedSetter) {
            Main.singleton = new Main(canvas, monkeyClickedSetter);
        }
        return this.singleton;
    }


    public canvas: HTMLCanvasElement;
    public renderer!: THREE.WebGLRenderer;
    public camera!: THREE.PerspectiveCamera;
    public scene!: THREE.Scene;
    public stats!: Stats;
    public monkeyInstance!: Monkey;
    public wallInstance!: Wall;
    public lightsInstance!: Lights;
    public sidersInstance!: Siders;
    public monkeyClickedSetter: (clicked: boolean) => void;
    private fps: number;
    private fpsInterval!: number;
    private now!: number;
    private then!: number;
    private elapsed!: number;
    public shouldRender: boolean;

    constructor(canvas: HTMLCanvasElement, monkeyClickedSetter: (clicked: boolean) => void) {
        this.canvas = canvas;
        this.monkeyClickedSetter = monkeyClickedSetter;
        this.fps = 60;
        this.shouldRender = true;
    }

    private createScene(): void {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color("black");
    }

    private createCamera(): void {
        this.camera = new THREE.PerspectiveCamera(75, document.documentElement.clientWidth / window.innerHeight, .1, 1000);
        const cameraPosition = ScreenDimensionUtils.cameraPositionZ(document.documentElement.clientWidth, window.innerHeight);
        this.camera.position.z = cameraPosition.z;
        this.camera.position.y = cameraPosition.y;
    }

    private createRenderer(): void {
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setSize(document.documentElement.clientWidth, window.innerHeight);
    }

    private createStats(): void {
        this.stats = Stats();
        document.body.appendChild(this.stats.dom)
    }

    private createMonkeyInstance(): void {
        this.monkeyInstance = new Monkey(this);
        this.monkeyInstance.init();
    }

    private createLightsInstance(): void {
        this.lightsInstance = new Lights(this);
        this.lightsInstance.init();
    }

    private createSidersInstance(): void {
        this.sidersInstance = new Siders(this);
        this.sidersInstance.init();
    }

    private createWallInstance(): void {
        this.wallInstance = new Wall(this);
        this.wallInstance.init()
    }

    private onWindowResize(): void {
        const windowMaxHeight = window.innerHeight;
        this.camera.aspect = document.documentElement.clientWidth / windowMaxHeight;
        const cameraPosition = ScreenDimensionUtils.cameraPositionZ(document.documentElement.clientWidth, window.innerHeight)
        this.camera.position.z = cameraPosition.z;
        this.camera.position.y = cameraPosition.y;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(document.documentElement.clientWidth, windowMaxHeight);
        this.render();
    }

    private initTimeDelta(): void {
        this.fpsInterval = 1000 / this.fps;
        this.then = Date.now();
    }

    private animationLoop() {
        requestAnimationFrame(this.animationLoop.bind(this));
        if (this.shouldRender) {
            this.now = Date.now();
            this.elapsed = this.now - this.then;

            // if enough time has elapsed, draw the next frame
            if (this.elapsed > this.fpsInterval) {
                // Get ready for next frame by setting then=now, but...
                // Also, adjust for fpsInterval not being multiple of 16.67
                this.then = this.now - (this.elapsed % this.fpsInterval);

                // draw stuff here
                // this.lightsInstance.updateHelpers();
                this.sidersInstance.updateKnots();
                this.lightsInstance.changeLightColours();
                this.monkeyInstance.animateMonkey();
                this.sidersInstance.animateKnots();
                this.renderer.render(this.scene, this.camera);
                // this.stats.update();
            }
        }
    }

    public init(): void {
        this.createRenderer();
        this.createCamera();
        this.createScene();
        // this.createStats();

        this.createMonkeyInstance();
        this.createLightsInstance();
        this.createSidersInstance();
        this.createWallInstance();

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        this.initTimeDelta();
        this.animationLoop();
    }

    private render(): void {
        this.renderer.render(this.scene, this.camera);
    }

}

export default Main;