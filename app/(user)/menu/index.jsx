import { View } from "react-native";
import {
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

function Menu() {
  return (
    <ScrollableContentContainer color={COLORS.white}>
      <UserGeneration />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 0.5 }}>
          <RewardCard type="diamond" />
        </View>
        <View style={{ flex: 0.5 }}></View>
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
