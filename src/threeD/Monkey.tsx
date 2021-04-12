import Main from './Main';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three/build/three.module';
import Animations from '../threeD/animations/AnimationFunctions';
import MonkeyAnimation from './animations/MonkeyAnimation';

class Monkey {

    private main: Main;
    private monkey!: THREE.Mesh;
    private monkeyLoaded: boolean;
    private monkeyAnimation!: MonkeyAnimation;
    private raycaster!: THREE.Raycaster;
    private intersects: THREE.Intersection[];
    private pickableObjects!: THREE.Mesh[];


    constructor(main: Main) {
        this.main = main;
        this.monkeyLoaded = false;
        this.intersects = new Array();
    }

    private createRaycaster(): void {
        this.raycaster = new THREE.Raycaster();        
    }


    private loadMonkey(): void {
        const loader = new MTLLoader();
        loader.load(
            'three-assets/monkey.mtl',
            (materials) => {
                materials.preload();

                const objLoader: OBJLoader = new OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load(
                    'three-assets/monkey.obj',
                    (object) => {
                        object.traverse((child) => {
                            if ((child as THREE.Mesh).isMesh) {
                                this.setMonkey(child as THREE.Mesh);
                                const mesh = child as THREE.Mesh;
                                (mesh.material as THREE.MeshPhongMaterial).color.setHex(0xFFFFFF);
                            }
                        })
                        this.main.scene.add(object);
                    },
                    (xhr) => {
                        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                    },
                    (error) => {
                        console.log('An error happened');
                    }
                );
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.log('An error happened');
            }
        );
    }

    private setMonkey(monkey: THREE.Mesh) {
        this.monkey = monkey;
        this.monkeyLoaded = true;
        this.monkeyConfig();
    }

    private onMouseMove(e: MouseEvent): void {
        if (this.monkeyLoaded) {
            const x = (e.clientX / this.main.renderer.domElement.clientWidth) * 2 - 1;
            const y = -(e.clientY / this.main.renderer.domElement.clientHeight) * 2 + 1;
            this.monkey.rotation.x = -y + .7;
            this.monkey.rotation.y = x;

            this.raycaster.setFromCamera({
                x: x,
                y: y
            }, this.main.camera);
            this.intersects = this.raycaster.intersectObjects(this.pickableObjects, false);
        
            if (this.intersects.length > 0) {
                document.getElementsByTagName("body")[0].style.cursor = "pointer";
            } else {
                document.getElementsByTagName("body")[0].style.cursor = "initial";
            }


        }
    }

    private monkeyConfig(): void {
        this.monkeyAnimation = Animations.instantiateMonkeyAnimation();
        // this.monkey.position.x = 2;
        this.monkey.position.y = this.monkeyAnimation.initialY;
        this.monkey.position.z = this.monkeyAnimation.initialZ;
        this.pickableObjects = [this.monkey];
    }

    public animateMonkey(): void {
        if (this.monkeyLoaded && !this.monkeyAnimation.animationFinished) {
            const currentCoords: {y: number, z: number} = this.monkeyAnimation.getNextFrame();
            this.monkey.position.y = currentCoords.y;
            this.monkey.position.z = currentCoords.z;
        }
    }

    public init(): void {
        this.loadMonkey();
        this.createRaycaster();
        document.addEventListener("mousemove", this.onMouseMove.bind(this));
    }

}

export default Monkey;