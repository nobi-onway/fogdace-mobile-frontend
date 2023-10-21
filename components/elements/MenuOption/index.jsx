import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import InteractiveIcon3D from "../InteractiveIcon3D";

const types = {
  heart: {
    text: "Pety Smart NFC",
  },
  favorite: {
    text: "Tùy Chọn Mua Hàng",
  },
  phone: {
    text: "Dịch Vụ Thú Cưng",
  },
};

function MenuOptionCard({ type = "heart" }) {
  return (
    <TouchableOpacity style={styles.container}>
      <InteractiveIcon3D type={type} />
      <Text style={styles.text}>{types[type].text}</Text>
    </TouchableOpacity>
  );
}
export default MenuOptionCard;
