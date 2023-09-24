import { Stack } from "expo-router";

function DefaultLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerShown: false,
      }}
    />
  );
}

export default DefaultLayout;
