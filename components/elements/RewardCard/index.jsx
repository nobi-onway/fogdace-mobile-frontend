import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import LottieView from "lottie-react-native";
import heart from "../../../assets/animations/heart.json";
import coin from "../../../assets/animations/coin.json";
import heart2 from "../../../assets/animations/heartButton.json";

const types = {
  heart: {
    title: "Heart",
    source: heart,
    description: "Thả Tim Để Lan Tỏa Yêu Thương!",
    textButton: "100 Tim",
    sourceButton: heart2,
  },
  diamond: {
    title: "Reward",
    source: heart,
    description: "Rất nhiều phần quà đang chờ bạn đổi thưởng!",
    textButton: "100 Xu",
    sourceButton: coin,
  },
};

function RewardCard({ type = "heart" }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewAbsolute}>
        <LottieView
          style={styles.icon}
          source={types[type].source}
          autoPlay
          loop
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>{types[type].title}</Text>
      <Text style={styles.description}>{types[type].description}</Text>
      <TouchableOpacity style={styles.button}>
        <LottieView
          style={styles.iconButton}
          source={heart2}
          autoPlay
          loop
          resizeMode="contain"
        />
        <Text style={styles.textButton}>{types[type].textButton}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default RewardCard;
