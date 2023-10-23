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
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => (
            <View
              style={{
                flex: 1,
                paddingVertical: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: 28,
                }}
              >
                Menu
              </Text>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: 72,
              }}
            >
              <HeaderButton type={"search"} />
              <HeaderButton type={"chat"} />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

export default MenuLayout;
