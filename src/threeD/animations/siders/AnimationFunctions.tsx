
class AnimationFunctions {

    protected static goToBack(
        initialX: number,
        initialY: number,
        initialZ: number,
        yIncrement: number,
        zIncrement: number,
        length: number
    ): { x: number[], y: number[], z: number[] } {
        const x = [initialX];
        const y = [initialY];
        const z = [initialZ];
        for (let i = 0; i < length; i++) {
            y[i + 1] = y[i] + yIncrement;
            z[i + 1] = z[i] + zIncrement;
            x[i + 1] = this.flattenFunc(z[i + 1], 0.07, 1) -3.075;
        }
        return { x, y, z };
    }

    private static flattenFunc(x: number, p1: number, p2: number): number {
        return (p1 * Math.exp(p2 * x));
    }
}


export default AnimationFunctions;