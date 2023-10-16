import { Tabs } from "expo-router";
import { StateIcon } from "../../components/elements";

const tabs = ["feed", "explore", "care", "retail", "menu"];

function UserLayout() {
  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab}
          name={tab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <StateIcon activated={focused} name={tab} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

export default UserLayout;
