import { Tabs } from "expo-router";
import { TabIcon } from "../../components/elements";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const tabs = [
  { page: "feed", name: "Bảng tin" },
  { page: "explore", name: "Khám phá" },
  { page: "care", name: "Dịch vụ" },
  { page: "retail", name: "Mua sắm" },
  { page: "menu", name: "Menu" },
];

function UserLayout() {
  return (
    // <BottomSheetModalProvider>
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
    // </BottomSheetModalProvider>
  );
}

export default UserLayout;
