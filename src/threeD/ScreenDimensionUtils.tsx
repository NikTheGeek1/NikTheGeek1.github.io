

class ScreenDimensionUtils {

    public static cameraPositionZ(screenWidth: number, screenHeight: number): { z: number, y: number } {
        if (this.isPhoneX(screenWidth, screenHeight)) {
            return { z: 14, y: -4};
        }
        if (this.isPhone6(screenWidth, screenHeight)) {
            return { z: 10, y: -2};
        }
        return { z: 5, y: 0 };
    }

    private static isPhone6(screenWidth: number, screenHeight: number): boolean {
        return screenWidth < 500 && screenHeight > 600
    }

    private static isPhoneX(screenWidth: number, screenHeight: number): boolean {
        return screenWidth < 400 && screenHeight > 700
    }
}


export default ScreenDimensionUtils;