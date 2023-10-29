import { Stack } from "expo-router";
import { HeaderButton } from "../../../components/elements";
import { View, Text } from "react-native";
import { FONTS } from "../../../constants";

function MenuLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerLeft: () => <HeaderButton type={"back"} />,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default MenuLayout;
