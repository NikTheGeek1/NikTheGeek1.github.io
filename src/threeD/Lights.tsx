import * as THREE from 'three/build/three.module';
import Main from './Main';

class Lights {

    private main: Main;
    public monkeyLight!: THREE.SpotLight;
    private monkeyHelper!: THREE.SpotLightHelper;

    constructor(main: Main) {
        this.main = main;
    }

    private createMonkeyLight(): void {
        this.monkeyLight = new THREE.SpotLight("white", 10, 10, Math.PI / 10, .4, 1);
        this.monkeyLight.position.set(2.5, 2.5, 7)
        this.main.scene.add(this.monkeyLight);

        this.monkeyHelper = new THREE.SpotLightHelper(this.monkeyLight);
        // this.main.scene.add(this.monkeyHelper);
    }

    public init():void {
        this.createMonkeyLight();
    }

    public updateHelpers():void {
        this.monkeyHelper.update()    
    }

    public changeLightColours(): void {
        this.monkeyLight.color.setHex((this.monkeyLight.color.getHex() + 1000) % 1000000);
    }


}

export default Lights;