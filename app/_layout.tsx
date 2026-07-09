import {SplashScreen, Stack} from "expo-router";
import "@/global.css"
import {useFonts} from "expo-font";
import {useEffect} from "react";


export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'BeVietnamPro-Thin': require('../assets/fonts/BeVietnamPro-Thin.ttf'),
        'BeVietnamPro-ThinItalic': require('../assets/fonts/BeVietnamPro-ThinItalic.ttf'),
        'BeVietnamPro-ExtraLight': require('../assets/fonts/BeVietnamPro-ExtraLight.ttf'),
        'BeVietnamPro-ExtraLightItalic': require('../assets/fonts/BeVietnamPro-ExtraLightItalic.ttf'),
        'BeVietnamPro-Light': require('../assets/fonts/BeVietnamPro-Light.ttf'),
        'BeVietnamPro-LightItalic': require('../assets/fonts/BeVietnamPro-LightItalic.ttf'),
        'BeVietnamPro-Regular': require('../assets/fonts/BeVietnamPro-Regular.ttf'),
        'BeVietnamPro-Italic': require('../assets/fonts/BeVietnamPro-Italic.ttf'),
        'BeVietnamPro-Medium': require('../assets/fonts/BeVietnamPro-Medium.ttf'),
        'BeVietnamPro-MediumItalic': require('../assets/fonts/BeVietnamPro-MediumItalic.ttf'),
        'BeVietnamPro-SemiBold': require('../assets/fonts/BeVietnamPro-SemiBold.ttf'),
        'BeVietnamPro-SemiBoldItalic': require('../assets/fonts/BeVietnamPro-SemiBoldItalic.ttf'),
        'BeVietnamPro-Bold': require('../assets/fonts/BeVietnamPro-Bold.ttf'),
        'BeVietnamPro-BoldItalic': require('../assets/fonts/BeVietnamPro-BoldItalic.ttf'),
        'BeVietnamPro-ExtraBold': require('../assets/fonts/BeVietnamPro-ExtraBold.ttf'),
        'BeVietnamPro-ExtraBoldItalic': require('../assets/fonts/BeVietnamPro-ExtraBoldItalic.ttf'),
        'BeVietnamPro-Black': require('../assets/fonts/BeVietnamPro-Black.ttf'),
        'BeVietnamPro-BlackItalic': require('../assets/fonts/BeVietnamPro-BlackItalic.ttf'),
    });
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    return <Stack screenOptions={{headerShown: false}}/>;
}
