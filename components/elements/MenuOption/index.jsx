import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import heart from "../../../assets/animations/heart.json";
import favourite from "../../../assets/animations/favorite.json";
import phone from "../../../assets/animations/phone.json";
import styles from "./style";

const types = {
  heart: {
    text: "Pety Smart NFC",
    source: heart,
  },
  favourite: {
    text: "Tùy Chọn Mua Hàng",
    source: favourite,
  },
  phone: {
    text: "Dịch Vụ Thú Cưng",
    source: phone,
  },
};

function MenuOptionCard({ type = "heart" }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <LottieView
          style={styles.icon}
          source={types[type].source}
          autoPlay
          loop
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>{types[type].text}</Text>
    </TouchableOpacity>
  );
}
export default MenuOptionCard;
