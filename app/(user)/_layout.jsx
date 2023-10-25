import { Tabs } from "expo-router";
import { TabIcon } from "../../components/elements";
import { useLayoutEffect } from "react";
import { userStore } from "../../stores/userStore";
import useNavigation from "../../hooks/useNavigation";

const tabs = [
  { page: "feed", name: "Bảng tin" },
  { page: "explore", name: "Khám phá" },
  { page: "care", name: "Dịch vụ" },
  { page: "retail", name: "Mua sắm" },
  { page: "menu", name: "Menu" },
];

function UserLayout() {
  const { authentication } = userStore();
  const { go_to_sign_in } = useNavigation();

  useLayoutEffect(() => {
    if (!authentication) go_to_sign_in();
  }, []);

  return (
    <Tabs>
      {tabs.map((tab) => {
        const { page, name } = tab;
        return (
          <Tabs.Screen
            key={name}
            name={page}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon activated={focused} name={page} />
              ),
              headerShown: false,
            }}
          />
        );
      })}
    </Tabs>
  );
}

export default UserLayout;
