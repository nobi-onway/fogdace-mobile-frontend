import { Text, ImageBackground, View, TouchableOpacity } from "react-native";
import React from "react";
import { IMAGES } from "../../../constants";

import styles from "./style";
import useNavigation from "../../../hooks/useNavigation";

export default function PetTrading() {
  const { go_to_trading } = useNavigation();
  return (
    <TouchableOpacity onPress={go_to_trading}>
      <ImageBackground
        resizeMode="cover"
        source={IMAGES.pet_trading}
        style={styles.container}
      >
        <View></View>
        <View style={styles.bottom_wrapper}>
          <View>
            <Text style={styles.content(24)}>FogDace Trading</Text>
            <Text style={styles.content()}>
              Thú cưng của bạn có thể được trao đổi
            </Text>
          </View>
          <TouchableOpacity style={styles.trading_button}>
            <Text style={styles.trading_button_content}>Trao đổi</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
