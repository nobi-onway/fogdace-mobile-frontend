import { Stack } from "expo-router";
import { HeaderButton } from "../../components/elements";
import { useEffect, useLayoutEffect } from "react";
import useAuth from "../../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userStore } from "../../stores/userStore";
import useNavigation from "../../hooks/useNavigation";

function AuthenticateLayout() {
  const { subscribe_auth_state_changed } = useAuth();
  const { authentication, setAuthentication } = userStore();
  const { go_to_feed } = useNavigation();

  useLayoutEffect(() => {
    AsyncStorage.getItem("user-storage").then((userStorage) => {
      const state = JSON.parse(userStorage).state;

      const { authentication } = state;

      if (!authentication) return;

      setAuthentication(authentication);
      go_to_feed();
    });
  }, [authentication]);

  useEffect(() => {
    const unsubscribe_auth_state_changed = subscribe_auth_state_changed();

    return () => unsubscribe_auth_state_changed();
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
