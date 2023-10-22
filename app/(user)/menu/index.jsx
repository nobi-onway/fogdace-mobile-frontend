import { View } from "react-native";
import {
  MenuOptionCard,
  RewardCard,
  ScrollableContentContainer,
  SupportItemCard,
} from "../../../components/elements";
import React from "react";
import { UserGeneration } from "../../../components/blocks";
const styles = {
  app: {
    backgroundColor: "#252b47",
    padding: 10,
  },
  item: {
    flex: 1,
    maxWidth: "50%",
    margin: 5,
  },
  itemBellow: {
    flex: 1,
    maxWidth: "100%",
  },
};
const Item = ({ item }) => {
  return <View style={styles.item}>{item.icon}</View>;
};
const ItemBellow = ({ item }) => {
  return <View style={styles.itemBellow}>{item.icon}</View>;
};
function Menu() {
  return (
    <ScrollableContentContainer>
      <UserGeneration />
    </ScrollableContentContainer>
  );
}
const itemData = [
  {
    icon: <RewardCard type="heart" />,
  },
  {
    icon: (
      <View>
        <MenuOptionCard type="heart" />
        <MenuOptionCard type="heart" />
      </View>
    ),
  },
];
const itemDataBelow = [
  {
    icon: <SupportItemCard type="heart" />,
  },
  {
    icon: <SupportItemCard type="favorite" />,
  },
  {
    icon: <SupportItemCard type="phone" />,
  },
];
export default Menu;
