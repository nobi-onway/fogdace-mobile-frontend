import { View, FlatList } from "react-native";
import MenuOptionCard from "../../components/elements/MenuOption";
import RewardCard from "../../components/elements/RewardCard";
import SupportItemCard from "../../components/elements/SupportItemCard";
import React from "react";
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
    <View style={styles.app}>
      <FlatList data={itemData} numColumns={2} renderItem={Item} />
      <FlatList data={itemDataBelow} renderItem={ItemBellow} />
    </View>
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
    icon: <SupportItemCard typeIt="heart" />,
  },
  {
    icon: <SupportItemCard type="favorite" />,
  },
  {
    icon: <SupportItemCard type="phone" />,
  },
];
export default Menu;
