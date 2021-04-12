

class MonkeyAnimation {

    public initialY: number;
    public initialZ: number;
    public finalY: number;
    public finalZ: number;
    public coords!: { y: number[], z: number[] };
    private currentFrame: number;

    constructor() {
        this.initialY = -2;
        this.initialZ = -20;
        this.finalY = 2;
        this.finalZ = 0;
        this.currentFrame = 0;
    }

    public setCoords(coords: { y: number[], z: number[] }): void {
        this.coords = coords;
    }

    public getNextFrame(): { y: number, z: number } {
        const results = { y: this.coords.y[this.currentFrame], z: this.coords.z[this.currentFrame] };
        if (this.currentFrame < (this.coords.y.length - 1)) this.currentFrame++;
        return results;
    }


}

export default MonkeyAnimation;