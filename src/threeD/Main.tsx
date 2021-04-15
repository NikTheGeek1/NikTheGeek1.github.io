import * as THREE from 'three/build/three.module';
import Stats from 'three/examples/jsm/libs/stats.module'
import Lights from './Lights';
import Monkey from './Monkey';
import Siders from './Siders';
import Wall from './Wall';

class Main {

    public canvas: HTMLCanvasElement;
    public renderer!: THREE.WebGLRenderer;
    public camera!: THREE.PerspectiveCamera;
    public scene!: THREE.Scene;
    public stats!: Stats;
    public monkeyInstance!: Monkey;
    public wallInstance!: Wall;
    public lightsInstance!: Lights;
    public sidersInstance!: Siders;
    public monkeyClickedSetter: (clicked:boolean) => void;

    constructor(canvas: HTMLCanvasElement, monkeyClickedSetter: (clicked:boolean) => void) {
        this.canvas = canvas;
        this.monkeyClickedSetter = monkeyClickedSetter;
    }
    
    private createScene(): void {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color("black");
    }

    private createCamera(): void {
        this.camera = new THREE.PerspectiveCamera(75, document.documentElement.clientWidth / window.innerHeight, .1, 1000);
        this.camera.position.z = 5;
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
        const windowMaxHeight = window.innerHeight < 1000 ? window.innerHeight : 1000;
        console.log(document.documentElement.clientWidth, 'Main.tsx', 'line: ', '68');
        console.log(window.innerWidth, 'Main.tsx', 'line: ', '69');
        this.camera.aspect = document.documentElement.clientWidth / windowMaxHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(document.documentElement.clientWidth, windowMaxHeight);
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
        this.createWallInstance();

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        this.animationLoop();
    }

    private render(): void {
        this.renderer.render(this.scene, this.camera);
    }

}

export default Main;