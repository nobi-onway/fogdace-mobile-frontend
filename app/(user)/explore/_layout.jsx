import { Stack } from "expo-router";
import { HeaderButton } from "../../../components/elements";
import { COLORS, FONTS } from "../../../constants";
import { Text, View } from "react-native";

function ExploreLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerLeft: () => <HeaderButton type="back" />,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default ExploreLayout;
