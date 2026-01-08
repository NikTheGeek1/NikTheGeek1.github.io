import * as THREE from 'three';
import Main from './Main';
import SidersAnimation from './animations/siders/MovingBackAnimation';
class Siders {

    private main: Main;
    private leftKnot!: THREE.Mesh;
    private rightKnot!: THREE.Mesh;
    private material!: THREE.MeshNormalMaterial;
    private leftKnotProps: { radius: number, tube: number, tubularSegments: number, radialSegments: number, p: number, q: number };
    private rightKnotProps: { radius: number, tube: number, tubularSegments: number, radialSegments: number, p: number, q: number };
    private lastUpdateTime: number;
    private radiusCurrValue: number;
    public sidersAnimation!: SidersAnimation;

    constructor(main: Main) {
        this.main = main;
        this.leftKnotProps = { radius: 0.3, tube: 0.1, tubularSegments: 20, radialSegments: 20, p: 10, q: 20 };
        this.rightKnotProps = { radius: 0.3, tube: 0.1, tubularSegments: 20, radialSegments: 20, p: 10, q: 20 };
        this.lastUpdateTime = new Date().getTime();
        this.radiusCurrValue = 1;
    }

    
    private createMaterial(): void {
        this.material = new THREE.MeshNormalMaterial();
    }

    private regenerateKnotGeometries(): void {
        // LEFT
        const newLeftGeometry = new THREE.TorusKnotGeometry(
            this.leftKnotProps.radius, this.leftKnotProps.tube, this.leftKnotProps.tubularSegments, this.leftKnotProps.radialSegments, this.leftKnotProps.p, this.leftKnotProps.q
        );
        this.leftKnot.geometry.dispose();
        this.leftKnot.geometry = newLeftGeometry;
        // RIGHT
        const newRightGeometry = new THREE.TorusKnotGeometry(
            this.rightKnotProps.radius, this.rightKnotProps.tube, this.rightKnotProps.tubularSegments, this.rightKnotProps.radialSegments, this.rightKnotProps.p, this.rightKnotProps.q
        );
        this.rightKnot.geometry.dispose();
        this.rightKnot.geometry = newRightGeometry;
    }

    private createLeftKnot(): void {
        const geometry = new THREE.TorusKnotGeometry(this.leftKnotProps.radius, this.leftKnotProps.tube, this.leftKnotProps.tubularSegments, this.leftKnotProps.radialSegments, this.leftKnotProps.p, this.leftKnotProps.q);
        this.leftKnot = new THREE.Mesh(geometry, this.material);
        this.leftKnot.position.x = -3;
        this.leftKnot.position.y = 2;
        this.main.scene.add(this.leftKnot);
    }

    private createRightKnot(): void {
        const geometry = new THREE.TorusKnotGeometry(this.rightKnotProps.radius, this.rightKnotProps.tube, this.rightKnotProps.tubularSegments, this.rightKnotProps.radialSegments, this.rightKnotProps.p, this.rightKnotProps.q);
        this.rightKnot = new THREE.Mesh(geometry, this.material);
        this.rightKnot.position.x = 3;
        this.rightKnot.position.y = 2;
        this.main.scene.add(this.rightKnot);
    }

    private waveFunction(start: number, range: number, step: number): number {
        const curr = this.radiusCurrValue;
        const p1 = curr % ((range - step) * 2);
        const p2 = curr % (range - step);
        this.radiusCurrValue = step + (this.radiusCurrValue % ((range-step) * 2));
        if (p1 === p2) {
            return p1 + start;
        }
        return p1 - p2 * 2 + start;
    }

    public updateKnots(): void {
        if (new Date().getTime() - this.lastUpdateTime > 1) {
            // this.leftKnotProps.radius = this.waveFunction(.2, .5, .1);
            // console.log(this.leftKnotProps.radius, 'Siders.tsx', 'line: ', '64');
            this.leftKnotProps.p = 1 + (this.leftKnotProps.p % 20);
            this.rightKnotProps.p = 1 + (this.rightKnotProps.p % 20);
            this.regenerateKnotGeometries();
            this.lastUpdateTime = new Date().getTime();
        }

        // this.rotateKnots();
    }

    instantiateMovingBackAnimation(): void {
        this.sidersAnimation = new SidersAnimation(this.leftKnot.position.x, this.leftKnot.position.y, this.leftKnot.position.z);
    }

    public animateKnots(): void {
        if (this.sidersAnimation.shouldAnimate) {
            const coords = this.sidersAnimation.getNextFrame();
            this.leftKnot.position.x = coords.x;
            this.leftKnot.position.y = coords.y;
            this.leftKnot.position.z = -coords.z;

            this.rightKnot.position.x = -coords.x;
            this.rightKnot.position.y = coords.y;
            this.rightKnot.position.z = -coords.z;
        }
    }


    public init(): void {
        this.createMaterial();
        this.createLeftKnot();
        this.createRightKnot();
        this.instantiateMovingBackAnimation();
    }

}

export default Siders;