import { Stack, useNavigation } from "expo-router";
import { HeaderButton } from "../../../components/elements";
import { COLORS, FONTS, SIZES } from "../../../constants";
import { Text, View } from "react-native";

function ExploreLayout() {
  const { go_back } = useNavigation();
  return (
    <Stack
      screenOptions={{
        title: "",
        headerLeft: () => (
          <HeaderButton size={SIZES.xLarge} type="back" handlePress={go_back} />
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => (
            <View
              style={{
                borderBottomColor: COLORS.lightGray,
                borderBottomWidth: 1,
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
                Khám phá
              </Text>
            </View>
          ),
        }}
      />
    </Stack>
  );
}

export default ExploreLayout;
