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
  }, [authentication]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />

  );
}
