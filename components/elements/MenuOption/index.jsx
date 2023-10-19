import { Text, TouchableOpacity } from "react-native";
import React from "react";
import InteractiveIcon from "../InteractiveIcon";
import styles from "./style";

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
      <InteractiveIcon type={type} />
      <Text style={styles.text}>{types[type].text}</Text>
    </TouchableOpacity>
  );
}
export default MenuOptionCard;
