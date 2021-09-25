import { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
                    RobotoLight: require("../assets/fonts/Roboto-Light.ttf"),
                    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
                    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
                    MontserratBold: require("../assets/fonts/Montserrat-Bold.otf"),
                    MontserratLight: require("../assets/fonts/Montserrat-Light.otf"),
                    MontserratMedium: require("../assets/fonts/Montserrat-Medium.otf"),
                    MontserratRegular: require("../assets/fonts/Montserrat-Regular.otf"),
                });
            } catch (error) {
                console.warn(error);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }
        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
