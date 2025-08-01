import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import "./globals.css";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "QuickSand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "QuickSand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        if (error) throw error;
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [fontsLoaded, error]);

  if (!appIsReady) {
    // Prevent UI from rendering until fonts are loaded
    return <View />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
