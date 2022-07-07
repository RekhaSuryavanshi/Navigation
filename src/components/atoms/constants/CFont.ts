import { Dimensions, PixelRatio, Platform } from 'react-native';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const Size = Platform.OS === "ios" ? 375 : 375;
const scale = SCREEN_WIDTH / Size;
const fontcache: any = {};

export function normalize(size: number) {
    if (size in fontcache) {
        return fontcache[size];
    }
    const newSize = size * scale;
    fontcache[size] = Math.round(PixelRatio.roundToNearestPixel(newSize));
    return fontcache[size];
}

export default {
    PR: "Poppins-Regular",
    PM: "Poppins-Medium",
    PSB: "Poppins-SemiBold",
    PB: "Poppins-Bold",
    s: normalize,
    TFW: "600", //TextInput Font weight
    w: SCREEN_WIDTH,
    h: SCREEN_HEIGHT,
};
