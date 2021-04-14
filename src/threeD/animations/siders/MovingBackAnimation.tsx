import AnimationFunctions from "./AnimationFunctions";

class MovingBackAnimation extends AnimationFunctions {

    private initialX: number;
    private initialY: number;
    private initialZ: number;
    private finalZ!: number;
    private finalY!: number;
    private finalX!: number;
    public coordsArray!: { x: number[], y: number[], z: number[] };
    private currentFrame: number;
    public animationFinished: boolean;
    public shouldAnimate: boolean;

    constructor(initialX: number, initialY: number, initialZ: number) {
        super()
        this.initialX = initialX;
        this.initialY = initialY;
        this.initialZ = initialZ;
        this.currentFrame = 0;
        this.animationFinished = false;
        this.shouldAnimate = false;
        this.setCoords();
    }

    private setCoords(): void {
        const coords = MovingBackAnimation.goToBack(this.initialX, this.initialY, this.initialZ, 0.037, 0.037825, 100);
        this.coordsArray = coords;
    }

    public getNextFrame(): {x: number, y: number, z: number } {
        const results = { 
            x: this.coordsArray.x[this.currentFrame],
            y: this.coordsArray.y[this.currentFrame], 
            z: this.coordsArray.z[this.currentFrame] 
        };
        this.currentFrame++;
        if (this.currentFrame > (this.coordsArray.y.length - 1)) {
            this.animationFinished = true;
            this.shouldAnimate = false;
            this.finalX = this.coordsArray.x[this.currentFrame - 1];
            this.finalY = this.coordsArray.y[this.currentFrame - 1];
            this.finalZ = this.coordsArray.z[this.currentFrame - 1];
        }
        return results;
    }


}

export default MovingBackAnimation;