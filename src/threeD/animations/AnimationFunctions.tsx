import MonkeyAnimation from './MonkeyInitialAnimation';
import MonkeyTopRightAnimation from './MonkeyTopRightAnimation';

class AnimationFunctions {

    private static monkeyAnimation: MonkeyAnimation;
    private static monkeyTopRightAnimation: MonkeyTopRightAnimation;
    public static currentAnimation: MonkeyAnimation | MonkeyTopRightAnimation | undefined;

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
        this.currentAnimation = this.monkeyAnimation;
        return this.monkeyAnimation;
    }

    public static instantiateMonkeyTopRightAnimation(initialX: number, initialY: number, initialZ: number): MonkeyTopRightAnimation {
        if (!this.monkeyTopRightAnimation) {
            this.monkeyTopRightAnimation = new MonkeyTopRightAnimation(initialX, initialY, initialZ);
        }
        this.monkeyTopRightAnimation.setCoords(
            this.goToTopAndBack(initialZ, initialY, 0.04, 100)
        );
        this.currentAnimation = this.monkeyTopRightAnimation;
        return this.monkeyTopRightAnimation;
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

    private static goToTopAndBack(
        initialZ: number,
        initialY: number,
        zIncrement: number,
        length: number
    ): { y: number[], z: number[] } {
        const y = [initialY];
        const z = [initialZ];
        for (let i = 0; i < length; i++) {
            z[i + 1] = z[i] + zIncrement;
            y[i + 1] = this.flattenFunc(z[i + 1], 1, -3, -1) + 4;
        }
        return { y, z };
    }

    private static flattenFunc(x: number, yStart: number, p1: number, p2: number): number {
        return (p1 * Math.exp(p2 * x));
    }
}

export default AnimationFunctions;