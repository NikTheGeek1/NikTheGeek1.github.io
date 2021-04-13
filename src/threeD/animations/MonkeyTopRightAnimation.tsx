import AnimationFunctions from "./AnimationFunctions";


class MonkeyTopRightAnimation {

    private initialX: number;
    private initialY: number;
    private initialZ: number;
    private finalZ!: number;
    private finalY!: number;
    private finalX!: number;
    private currentFrame: number;
    private coordsArray!: { y: number[], z: number[] };
    public animationFinished: boolean;

    constructor(initialX: number, initialY: number, initialZ: number) {
        this.initialX = initialX;
        this.initialY = initialY;
        this.initialZ = initialZ;
        this.currentFrame = 0;
        this.animationFinished = false;
    }

    public setCoords(coords: { y:number[], z: number[]}) : void{
        this.coordsArray = coords;
    }

    public getNextFrame(onEndCb: () => void): { y: number, z: number } {
        const results = { y: this.coordsArray.y[this.currentFrame], z: this.coordsArray.z[this.currentFrame] };
        this.currentFrame++;
        if (this.currentFrame > (this.coordsArray.y.length - 1)) {
            this.animationFinished = true;
            this.finalY = this.coordsArray.y[this.currentFrame-1];
            this.finalZ = this.coordsArray.z[this.currentFrame-1];
            AnimationFunctions.currentAnimation = undefined;
            onEndCb();
        }
        return results;
    }
}

export default MonkeyTopRightAnimation;