

class ScreenDimensionUtils {

    public static cameraPositionZ(screenWidth: number, screenHeight: number): { z: number, y: number } {
        if (this.isPhone(screenWidth, screenHeight)) {
            return { z: 10, y: -1};
        }
        return { z: 5, y: 0 };
    }

    private static isPhone(screenWidth: number, screenHeight: number): boolean {
        return screenWidth < 500 && screenHeight > 600
    }
}


export default ScreenDimensionUtils;