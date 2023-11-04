import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import styles from "./style";
import { COLORS, ICONS, SIZES } from "../../../constants";
import { FontAwesome } from "@expo/vector-icons";
const ToggleButton = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(true);
  const [animationValue, setAnimationValue] = useState(new Animated.Value(0));

  const toggle = () => {
    onToggle(isOn);
    setIsOn(!isOn);
  };

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: isOn ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const toggleStyle = {
    left: animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 20],
    }),
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.outter, isOn ? styles.buttonOn : styles.buttonOff]}
        onPress={toggle}
        activeOpacity={1}
      >
        <Animated.View style={[styles.inner, toggleStyle]}>
          {isOn && (
            <FontAwesome
              name="check"
              style={styles.iconCheck}
              size={SIZES.medium}
              color={COLORS.primary}
            />
          )}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
