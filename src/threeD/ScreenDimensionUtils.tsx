

class ScreenDimensionUtils {

    public static cameraPositionZ(screenWidth: number, screenHeight: number): 
    number {
        if (this.isPhone(screenWidth, screenHeight)) {
            return 8;
        }
        return 5;
    }

    private static isPhone(screenWidth: number, screenHeight: number): boolean {
        return screenWidth < 400 && screenHeight > 600
    }
}


export default ScreenDimensionUtils;