import * as THREE from 'three';
import Main from './Main';

class Wall {

    private main: Main;
    private material!: THREE.MeshPhongMaterial;
    private wall!: THREE.Mesh;

    constructor(main: Main) {
        this.main = main;
    }

   
    private createMaterial(): void {
        this.material = new THREE.MeshPhongMaterial();
    }

    private createWall(): void {
        const geometry = new THREE.PlaneGeometry(1000, 1000);
        this.wall = new THREE.Mesh(geometry, this.material);
        this.wall.position.z = -40;
        this.main.scene.add(this.wall);
    }



    public init():void {
        this.createMaterial();
        this.createWall();
    }

}

export default Wall;