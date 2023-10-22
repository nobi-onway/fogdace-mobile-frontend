import { View } from "react-native";
import {
  MenuOptionCard,
  RewardCard,
  ScrollableContentContainer,
  SupportItemCard,
} from "../../../components/elements";
import React from "react";
import { UserGeneration } from "../../../components/blocks";
import { COLORS } from "../../../constants";

const SUPPORT_LIST = [
  "wish_list",
  "saved_post",
  "following",
  "assistance",
  "setting",
];

const OPTION_RIGHT_LIST = ["NFC", "shopping_options", "pet_services", "clubs"];
const OPTION_LEFT_LIST = ["pet_report_lost"];

function Menu() {
  return (
    <ScrollableContentContainer color={COLORS.white}>
      <UserGeneration />
      <View style={{ flexDirection: "row", columnGap: 12, marginTop: 40 }}>
        <View style={{ flex: 0.5 }}>
          <RewardCard type="diamond" />
          {OPTION_LEFT_LIST.map((item, index) => (
            <View key={`${item} + ${index}`} style={{ marginBottom: 16 }}>
              <MenuOptionCard type={item} />
            </View>
          ))}
        </View>
        <View style={{ flex: 0.5 }}>
          {OPTION_RIGHT_LIST.map((item, index) => (
            <View key={`${item} + ${index}`} style={{ marginBottom: 16 }}>
              <MenuOptionCard type={item} />
            </View>
          ))}
        </View>
      </View>
      <View>
        {SUPPORT_LIST.map((item, index) => (
          <SupportItemCard key={`${item} + ${index}`} type={item} />
        ))}
      </View>
    </ScrollableContentContainer>
  );
}

export default Menu;
