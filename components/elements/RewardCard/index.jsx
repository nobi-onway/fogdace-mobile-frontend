import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { ANIMATIONS } from "../../../constants";
import InteractiveIcon3D from "../InteractiveIcon3D";
import AnimatedLottieView from "lottie-react-native";

const types = {
  heart: {
    title: "Heart",
    source: ANIMATIONS.heart,
    description: "Thả Tim Để Lan Tỏa Yêu Thương!",
    textButton: "100 Tim",
    sourceButton: "heart",
  },
  diamond: {
    title: "Reward",
    source: ANIMATIONS.heart,
    description: "Rất nhiều phần quà đang chờ bạn đổi thưởng!",
    textButton: "100 Xu",
    sourceButton: "coin",
  },
};

function RewardCard({ type = "heart" }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewAbsolute}>
        <AnimatedLottieView
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
        <InteractiveIcon3D type={types[type].sourceButton} />
        <Text style={styles.textButton}>{types[type].textButton}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default RewardCard;
