import { Stack } from "expo-router";
import { HeaderButton } from "../../components/elements";
import { useLayoutEffect, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userStore } from "../../stores/userStore";
import useNavigation from "../../hooks/useNavigation";

function AuthenticateLayout() {
  const { setAuthentication } = userStore();
  const { go_to_feed } = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("user-storage").then((userStorage) => {
      const state = JSON.parse(userStorage).state;
      const { authentication } = state;
      if (!authentication) return;
      setAuthentication(authentication);
      go_to_feed();
    });
    // AsyncStorage.clear();
  }, []);

  return (
    <Stack
      screenOptions={{
        title: "",
        headerRight: () => <HeaderButton type="close" />,
        headerLeft: () => <></>,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default AuthenticateLayout;
