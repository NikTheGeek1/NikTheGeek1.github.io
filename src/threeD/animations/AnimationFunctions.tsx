import MonkeyAnimation from './MonkeyAnimation';

class AnimationFunctions {

    private static monkeyAnimation: MonkeyAnimation;

    public static instantiateMonkeyAnimation(): MonkeyAnimation {
        if (!this.monkeyAnimation) {
            this.monkeyAnimation = new MonkeyAnimation();
        }
        this.monkeyAnimation.setCoords(
            this.moveInFromBack(
                this.monkeyAnimation.initialY, this.monkeyAnimation.initialZ,
                0.2, 100,
                )
            );
        return this.monkeyAnimation;
    }

    private static moveInFromBack(
        initialY: number, initialZ: number,
        zIncrement: number,
        length: number
    ): { y: number[], z: number[] } {
        const y = [initialY];
        const z = [initialZ];
        for (let i = 0; i < length; i++) {
            z[i + 1] = z[i] + zIncrement;
            y[i + 1] = this.parabolicFunc(
                z[i + 1] + Math.abs(initialZ), initialY,
                1.55, .07
                )
        }
        return { y, z };
    }

    private static parabolicFunc(x: number, yStart: number, p1: number, p2: number): number {
        return (p1 * x - p2 * x ** 2) + yStart;
    }

}

export default AnimationFunctions;