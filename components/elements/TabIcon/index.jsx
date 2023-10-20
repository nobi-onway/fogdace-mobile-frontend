import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { COLORS, ICONS, SIZES } from "../../../constants";
import { View, Text } from "react-native";

import styles from "./style";

const types = {
  feed: {
    component: FontAwesome5,
    icon: ICONS.fa_home,
    color: COLORS.primary,
  },
  explore: {
    component: Ionicons,
    icon: ICONS.ionIcon_paw,
    color: COLORS.secondary,
  },
  care: {
    component: Ionicons,
    icon: ICONS.ionIcon_heart,
    color: COLORS.danger,
  },
  retail: {
    component: FontAwesome5,
    icon: ICONS.fa_cart,
    color: COLORS.tertiary,
  },
  menu: {
    component: Ionicons,
    icon: ICONS.ionIcon_menu,
    color: COLORS.info,
  },
  globe: {
    component: Ionicons,
    icon: ICONS.ionIcon_globe,
    color: COLORS.lightGray,
  },
  comment: {
    component: Ionicons,
    icon: ICONS.ionIcon_comment,
    color: COLORS.lightGray,
  },
  heart: {
    component: Ionicons,
    icon: ICONS.ionIcon_heart_full,
    color: COLORS.lightGray,
  },
  threeDotsHorizontal: {
    component: Ionicons,
    icon: ICONS.ionIcon_ellipsis_horizontal_sharp,
    color: COLORS.lightGray,
  },
};

function TabIcon({ activated, name, size = SIZES.xxLarge }) {
  const Icon = types[name].component;
  const color = activated ? types[name].color : COLORS.gray;

  return (
    <View style={styles.wrapper}>
      <Icon
        style={styles.icon}
        name={types[name].icon}
        color={color}
        size={size}
      />
      <Text style={styles.label(color)}>{name}</Text>
    </View>
  );
}

export default TabIcon;
