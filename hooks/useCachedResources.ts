import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Font, { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...Ionicons.font,
        });
        useFonts({
          "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
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
