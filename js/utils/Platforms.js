import {Platform} from "react-native";

export const Platforms = {
    curPlatform :  Platform.OS,
    curVersion : Platform.Version,
    onAndroid :   Platform.OS === 'android' ,
    onIos : Platform.OS === 'ios' ,
}

export function ifiOS(iosStyle, regularStyle) {
    if (Platforms.onIos) {
        return iosStyle;
    }
    return regularStyle;
}