import AnimationFunctions from "./AnimationFunctions";

class MonkeyAnimation {

    public initialY: number;
    public initialZ: number;
    public finalY: number;
    public finalZ: number;
    public coords!: { y: number[], z: number[] };
    private currentFrame: number;
    public animationFinished: boolean;

    constructor() {
        this.initialY = -2;
        this.initialZ = -20;
        this.finalY = 2;
        this.finalZ = 0;
        this.currentFrame = 0;
        this.animationFinished = false;
    }

    public setCoords(coords: { y: number[], z: number[] }): void {
        this.coords = coords;
    }

    public getNextFrame(): { y: number, z: number } {
        const results = { y: this.coords.y[this.currentFrame], z: this.coords.z[this.currentFrame] };
        this.currentFrame++;
        if (this.currentFrame > (this.coords.y.length - 1)) {
            this.animationFinished = true;
            this.finalY = this.coords.y[this.currentFrame-1];
            this.finalZ = this.coords.z[this.currentFrame-1];
            AnimationFunctions.currentAnimation = undefined;
        }
        return results;
    }


}

export default MonkeyAnimation;