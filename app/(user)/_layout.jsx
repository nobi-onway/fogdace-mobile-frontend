import React, { useLayoutEffect } from "react";
import { Stack } from "expo-router";
import { userStore } from "../../stores/userStore";
import useNavigation from "../../hooks/useNavigation";
import { HeaderButton } from "../../components/elements";

export default function UserLayout() {
  const { authentication } = userStore();
  const { go_to_sign_in } = useNavigation();

  useLayoutEffect(() => {
    if (!authentication) go_to_sign_in();
  }, []);

  return (
    <Stack
      screenOptions={{
        title: "",
        headerLeft: () => <HeaderButton type={"back"} />,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
