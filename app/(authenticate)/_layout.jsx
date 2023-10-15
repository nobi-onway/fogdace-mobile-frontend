import { Stack } from "expo-router";
import { CloseButton } from "../../components/elements";
import { SIZES } from "../../constants";
import useNavigation from "../../hooks/useNavigation";

function AuthenticateLayout() {
  const { go_back } = useNavigation();

  return (
    <Stack
      screenOptions={{
        title: "",
        headerRight: () => (
          <CloseButton size={SIZES.xxLarge} handlePress={go_back} />
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
