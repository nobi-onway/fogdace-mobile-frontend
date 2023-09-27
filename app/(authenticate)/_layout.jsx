import { Stack, useRouter } from "expo-router";
import { CloseButton } from "../../components/elements";
import { SIZES } from "../../constants";

function AuthenticateLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        title: "",
        headerRight: () => (
          <CloseButton size={SIZES.xxLarge} handlePress={() => router.back()} />
        ),
        headerLeft: () => <></>,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default AuthenticateLayout;
