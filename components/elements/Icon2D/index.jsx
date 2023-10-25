import React from "react";
import { FontAwesome5, Ionicons, Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { COLORS, ICONS, SIZES } from "../../../constants";

import { View, Image } from "react-native";

import styles from "./style";

const types = {
  feed: {
    component: FontAwesome5,
    icon: ICONS.fa_home,
    color: COLORS.primary,
    size: SIZES.xxLarge,
  },
  explore: {
    component: Ionicons,
    icon: ICONS.ionIcon_paw,
    color: COLORS.secondary,
    size: SIZES.xxLarge,
  },
  care: {
    component: Ionicons,
    icon: ICONS.ionIcon_heart,
    color: COLORS.danger,
    size: SIZES.xxLarge,
  },
  retail: {
    component: FontAwesome5,
    icon: ICONS.fa_cart,
    color: COLORS.tertiary,
    size: SIZES.xxLarge,
  },
  menu: {
    component: Ionicons,
    icon: ICONS.ionIcon_menu,
    color: COLORS.info,
    size: SIZES.xxLarge,
  },
  globe: {
    component: Ionicons,
    icon: ICONS.ionIcon_globe,
    color: COLORS.lightGray,
    size: SIZES.xxLarge,
  },
  comment: {
    component: Ionicons,
    icon: ICONS.ionIcon_comment,
    color: COLORS.lightGray,
    size: SIZES.xxLarge,
  },
  heart: {
    component: Ionicons,
    icon: ICONS.ionIcon_heart_full,
    color: COLORS.danger,
    size: SIZES.xxLarge,
  },
  threeDotsHorizontal: {
    component: Ionicons,
    icon: ICONS.ionIcon_ellipsis_horizontal_sharp,
    color: COLORS.lightGray,
    size: SIZES.xxLarge,
  },
  productCart: {
    component: Feather,
    icon: ICONS.feather_product_cart,
    color: COLORS.white,
    size: SIZES.medium,
  },
  activity: {
    component: Feather,
    icon: ICONS.feather_activity,
    color: COLORS.white,
    size: SIZES.medium,
  },
  born:{
    component: Image,
    src: ICONS.born_img,
    size: SIZES.large,
    icon: ICONS.feather_activity,
    color: COLORS.white,
    height: 35,
    width: 35
  },
  pills:{
    component: Image,
    src: ICONS.pills_img,
    size: SIZES.large,
    icon: ICONS.feather_activity,
    color: COLORS.white,
    height: 15,
    width: 15
  },
  right: {
    component: AntDesign,
    icon: ICONS.antDesign_right,
    color: COLORS.white,
    size: SIZES.small,
  },
  pets: {
    component: MaterialIcons,
    icon: ICONS.materials_pet,
    color: COLORS.lightBlack,
    size: SIZES.large,
  },
  palette: {
    component: FontAwesome5,
    icon: ICONS.fontAwesome_palette,
    color: COLORS.lightBlack,
    size: SIZES.large,
  },
  image_gallery: {
    component: Ionicons,
    icon: ICONS.ionIcons_image,
    color: COLORS.lightBlack,
    size: SIZES.large,
  },
};

const Icon2D = ({ activated, name }) => {
  const Icon = types[name].component;
  const color = activated ? types[name].color : COLORS.lightBlack;
  const size = types[name].size;

  return (
    <View style={styles.wrapper}>
      <Icon
        style={styles.icon(types[name].height, types[name].width)}
        name={types[name].icon}
        color={color}
        size={size}
        source={types[name].src}
      />
    </View>
  );
};

export default Icon2D;
