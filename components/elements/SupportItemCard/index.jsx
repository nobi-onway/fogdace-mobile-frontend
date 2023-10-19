import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import InteractiveIcon from "../InteractiveIcon";

const types = {
  heart: {
    text: "Wishlist của bạn",
  },
  favorite: {
    text: "Bài viết đã lưu",
  },
  phone: {
    text: "Đang theo dõi",
  },
};
function SupportItemCard({ type = "heart" }) {
  return (
    <TouchableOpacity style={styles.container}>
      <InteractiveIcon type={type} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{types[type].text}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default SupportItemCard;
