import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import favourite from "../../../assets/animations/favorite.json";
import phone from "../../../assets/animations/phone.json";
import heart from "../../../assets/animations/heart.json";
import LottieView from "lottie-react-native";

const types = {
  heart: {
    text: "Wishlist của bạn",
    source: heart,
  },
  favourite: {
    text: "Bài viết đã lưu",
    source: favourite,
  },
  phone: {
    text: "Đang theo dõi",
    source: phone,
  },
};
function SupportItemCard({ type = "heart" }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.logoWrapper}>
        <LottieView
          style={styles.logo}
          source={types[type].source}
          autoPlay
          loop
          resizeMode="contain"
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{types[type].text}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default SupportItemCard;
