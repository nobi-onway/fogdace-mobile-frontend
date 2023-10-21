import { Stack } from "expo-router";
import { HeaderButton } from "../../components/elements";

function AuthenticateLayout() {
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
