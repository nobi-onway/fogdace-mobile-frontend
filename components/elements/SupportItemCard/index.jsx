import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import Icon3D from "../Icon3D";
import { IMAGES } from "../../../constants";

const TYPE = {
  wish_list: {
    icon: IMAGES.heart_3D,
    text: "Wishlist của bạn",
  },
  saved_post: {
    icon: IMAGES.favorite_3D,
    text: "Bài viết đã lưu",
  },
  following: {
    icon: IMAGES.heart_3D,
    text: "Đang theo dõi",
  },
  assistance: {
    icon: IMAGES.heart_3D,
    text: "Trợ giúp",
  },
  setting: {
    icon: IMAGES.setting_3D,
    text: "Cài đặt",
  },
};
function SupportItemCard({ type }) {
  const props = TYPE[type];

  const { icon, text } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon_wrapper}>
        <Image resizeMode="cover" style={styles.icon} source={icon} />
      </View>
      <View style={styles.text_wrapper}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default SupportItemCard;
