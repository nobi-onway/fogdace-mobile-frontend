import { Stack } from "expo-router";
import { HeaderButton } from "../../components/elements";
import useNavigation from "../../hooks/useNavigation";

function AuthenticateLayout() {
  const { go_back } = useNavigation();

  return (
    <Stack
      screenOptions={{
        title: "",
        headerRight: () => <HeaderButton handlePress={go_back} type="close" />,
        headerLeft: () => <></>,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default AuthenticateLayout;
