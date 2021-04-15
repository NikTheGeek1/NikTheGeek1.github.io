import * as THREE from 'three/build/three.module';
import Stats from 'three/examples/jsm/libs/stats.module'
import Lights from './Lights';
import Monkey from './Monkey';
import Siders from './Siders';

class Main {

    public canvas: HTMLCanvasElement;
    public renderer!: THREE.WebGLRenderer;
    public camera!: THREE.PerspectiveCamera;
    public scene!: THREE.Scene;
    public stats!: Stats;
    public monkeyInstance!: Monkey;
    public lightsInstance!: Lights;
    public sidersInstance!: Siders;
    public monkeyClickedSetter: (clicked:boolean) => void;

    constructor(canvas: HTMLCanvasElement, monkeyClickedSetter: (clicked:boolean) => void) {
        this.canvas = canvas;
        this.monkeyClickedSetter = monkeyClickedSetter;
    }

    private createScene(): void {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1A090D);
    }

    private createCamera(): void {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
        this.camera.position.z = 5;
    }

    private createRenderer(): void {
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
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

    private onWindowResize(): void {
        const windowMaxHeight = window.innerHeight < 1000 ? window.innerHeight : 1000;
        this.camera.aspect = window.innerWidth / windowMaxHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, windowMaxHeight);
        this.render();
    }

    private animationLoop() {
        requestAnimationFrame(this.animationLoop.bind(this));
        this.lightsInstance.updateHelpers();
        this.sidersInstance.updateKnots();
        this.lightsInstance.changeLightColours();
        this.monkeyInstance.animateMonkey();
        this.sidersInstance.animateKnots();
        this.renderer.render(this.scene, this.camera);
        this.stats.update();
    }

    public init(): void {
        this.createRenderer();
        this.createCamera();
        this.createScene();
        this.createStats();

        this.createMonkeyInstance();
        this.createLightsInstance();
        this.createSidersInstance();

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        this.animationLoop();
    }

    private render(): void {
        this.renderer.render(this.scene, this.camera);
    }

}

export default Main;