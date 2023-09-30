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
};

function StateIcon({ activated, name }) {
  const Icon = types[name].component;
  const color = activated ? types[name].color : COLORS.gray;

  console.log(name);

  return (
    <View style={styles.wrapper}>
      <Icon
        style={styles.icon}
        name={types[name].icon}
        color={color}
        size={SIZES.xxLarge}
      />
      <Text style={styles.label(color)}>{name}</Text>
    </View>
  );
}

export default StateIcon;
