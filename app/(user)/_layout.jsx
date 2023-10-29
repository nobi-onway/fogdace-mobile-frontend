import { Tabs, useSegments } from "expo-router";
import { HeaderButton, TabIcon } from "../../components/elements";
import { useLayoutEffect, useState } from "react";
import { userStore } from "../../stores/userStore";
import useNavigation from "../../hooks/useNavigation";
import { View, Text } from "react-native";
import { FONTS } from "../../constants";

const tabs = [
  { page: "feed", name: "Bảng tin", header_options: ["search", "chat"] },
  { page: "explore", name: "Khám phá", header_options: [] },
  {
    page: "care",
    name: "Dịch vụ",
    header_options: ["shopping_cart", "shopping_options"],
  },
  {
    page: "retail",
    name: "Mua sắm",
    header_options: ["shopping_cart", "shopping_options"],
  },
  { page: "menu", name: "Menu", header_options: ["search", "chat"] },
];

function UserLayout() {
  const { authentication } = userStore();
  const [onTabLayout, setOnTabLayout] = useState(true);
  const { go_to_sign_in } = useNavigation();

  const segments = useSegments();

  useLayoutEffect(() => {
    if (!authentication) go_to_sign_in();
  }, []);

  useLayoutEffect(() => {
    setOnTabLayout(segments.length <= 2);
  }, [segments]);

  return (
    <Tabs>
      {tabs.map((tab) => {
        const { page, name, header_options } = tab;
        return (
          <Tabs.Screen
            key={name}
            name={page}
            options={{
              title: "",
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon activated={focused} name={page} />
              ),
              tabBarStyle: { display: onTabLayout ? "flex" : "none" },
              headerShown: onTabLayout,
              headerLeft: () => (
                <Text
                  style={{
                    fontFamily: FONTS.bold,
                    fontSize: 28,
                    marginHorizontal: 16,
                  }}
                >
                  {name}
                </Text>
              ),
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: 72,
                    marginHorizontal: 16,
                  }}
                >
                  {header_options.map((option, index) => (
                    <HeaderButton key={`${option} + ${index}`} type={option} />
                  ))}
                </View>
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}

export default UserLayout;
