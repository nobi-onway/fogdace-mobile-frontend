import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./style";
import Icon3D from "../Icon3D";

const TYPE = {
  NFC: {
    icon: "NFC",
    text: "FogDace Smart NFC",
  },
  shopping_options: {
    icon: "shopping",
    text: "Tùy Chọn Mua Hàng",
  },
  pet_services: {
    icon: "pet_service",
    text: "Dịch Vụ Thú Cưng",
  },
  videos: {},
  clubs: {
    icon: "social",
    text: "Clubs",
  },
  pet_report_lost: {
    icon: "emergency",
    text: "Báo mất thú cưng",
  },
};

function MenuOptionCard({ type }) {
  const props = TYPE[type];

  const { icon, text } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Icon3D type={icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
export default MenuOptionCard;
