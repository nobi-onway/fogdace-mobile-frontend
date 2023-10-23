import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import { IMAGES } from "../../../constants";

export default function PetAppendProfileCard() {
  const handleAppendProfile = () => {
    alert("đi đến tạo profile thú cưng");
  };

  return (
    <TouchableOpacity onPress={handleAppendProfile} style={styles.container}>
      <Image style={styles.image} source={IMAGES.corgi_3D} />
      <TouchableOpacity
        onPress={handleAppendProfile}
        style={styles.button_wrapper}
      >
        <Text style={styles.text_button}>Thêm Profile</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
