import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { LogBox } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

function DefaultLayout() {
  LogBox.ignoreAllLogs()


  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto-BoldItalic.ttf"),
  });
  const { subscribe_auth_state_changed } = useAuth();
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  })

  useEffect(() => {
    const unsubscribe_auth_state_changed = subscribe_auth_state_changed();

    return () => unsubscribe_auth_state_changed();
  }, []);

  

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
  <QueryClientProvider client={queryClient}>
    <Slot onLayout={onLayoutRootView} />
   </QueryClientProvider>
  )
}

export default DefaultLayout;
