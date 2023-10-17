import { Tabs } from "expo-router";
import { StateIcon } from "../../components/elements";

const tabs = [
  { page: "feed", name: "Bảng tin" },
  { page: "explore", name: "Khám phá" },
  { page: "care", name: "Dịch vụ" },
  { page: "retail", name: "Mua sắm" },
  { page: "menu", name: "Menu" },
];

function UserLayout() {
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
                <StateIcon activated={focused} name={page} />
              ),
              title: "",
              headerShadowVisible: false,
            }}
          />
        );
      })}
    </Tabs>
  );
}

export default UserLayout;
