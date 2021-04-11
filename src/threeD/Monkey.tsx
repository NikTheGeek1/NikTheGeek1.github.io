import Main from './Main';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three/build/three.module';

class Monkey {

    private main: Main;
    private monkey!: THREE.Mesh;

    constructor(main: Main) {
        this.main = main;
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
                                this.monkey = child as THREE.Mesh;
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

    private onMouseMove(e: MouseEvent): void {
        if (this.monkey) {
            const x = (e.clientX / this.main.renderer.domElement.clientWidth) * 2 - 1;
            const y = -(e.clientY / this.main.renderer.domElement.clientHeight) * 2 + 1;
            this.monkey.rotation.x = -y;
            this.monkey.rotation.y = x;
        }
    }

    public init(): void {
        this.loadMonkey();
        document.addEventListener("mousemove", this.onMouseMove.bind(this))
    }



}

export default Monkey;