import { View } from "react-native";
import {
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
      <View style>
        <View></View>
        <View></View>
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
