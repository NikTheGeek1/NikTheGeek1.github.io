import * as THREE from 'three/build/three.module';
import Main from './Main';

class Lights {

    private main: Main;
    public monkeyLightAtStartOfTheAnimation!: THREE.SpotLight;
    public monkeyLight!: THREE.SpotLight;
    public wallLight!: THREE.DirectionalLight;
    private monkeyHelper!: THREE.SpotLightHelper;
    private wallHelper!: THREE.DirectionalLightHelper;


    constructor(main: Main) {
        this.main = main;
    }

    private createMonkeyLightAtStartOfTheAnimation(): void {
        this.monkeyLightAtStartOfTheAnimation = new THREE.SpotLight(0x00ff00, 10, 30, Math.PI / 10, .4, 1);
        this.monkeyLightAtStartOfTheAnimation.position.set(0, 10, 0);
        const targetObject = new THREE.Object3D();
        targetObject.position.set(0, 0, -20);
        this.main.scene.add(targetObject);
        this.monkeyLightAtStartOfTheAnimation.target = targetObject;
        this.main.scene.add(this.monkeyLightAtStartOfTheAnimation);
        

        const helper = new THREE.SpotLightHelper(this.monkeyLightAtStartOfTheAnimation);
        // this.main.scene.add(helper);
    }

    private createMonkeyLight(): void {
        this.monkeyLight = new THREE.SpotLight("white", 10, 12, Math.PI / 10 , .4, 1);
        this.monkeyLight.position.set(2.5, 5.5, 7)
        this.main.scene.add(this.monkeyLight);

        this.monkeyHelper = new THREE.SpotLightHelper(this.monkeyLight);
        // this.main.scene.add(this.monkeyHelper);
    }

    private createWallLight(): void {
        this.wallLight = new THREE.DirectionalLight("white", 0.03);
        const targetObject = new THREE.Object3D();
        targetObject.position.set(0, 0, -40);
        this.wallLight.target = targetObject;
        this.main.scene.add(targetObject);
        this.wallLight.position.set(0, 0, -30);
        this.main.scene.add(this.wallLight);
        
        this.wallHelper = new THREE.DirectionalLightHelper(this.wallLight);
        // this.main.scene.add(this.wallHelper);
    }

    public init():void {
        this.createMonkeyLight();
        this.createMonkeyLightAtStartOfTheAnimation();
        this.createWallLight();
    }

    public updateHelpers():void {
        this.monkeyHelper.update()    
    }

    public changeLightColours(): void {
        const color = (this.monkeyLight.color.getHex() + 1000) % 1000000;
        this.monkeyLight.color.setHex(color);
        this.wallLight.color.setHex(color);
    }


}

export default Lights;