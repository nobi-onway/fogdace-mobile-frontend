import { Stack, useNavigation } from "expo-router";
import { CloseButton } from "../../../components/elements";
import { SIZES } from "../../../constants";

function ExploreLayout() {
  const { go_back } = useNavigation();

  return (
    <Stack
      screenOptions={{
        title: "",
        headerLeft: () => (
          <CloseButton size={SIZES.xxLarge} handlePress={go_back} />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default ExploreLayout;
