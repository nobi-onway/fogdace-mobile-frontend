import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import { IMAGES } from "../../../constants";
import useNavigation from "../../../hooks/useNavigation";

export default function PetAppendProfileCard() {

  const {go_to_add_profile_pet} = useNavigation();

  const handleAppendProfile = () => {
    go_to_add_profile_pet({});
  };


  return (
    <TouchableOpacity onPress={handleAppendProfile} style={styles.container}>
      <Image style={styles.image} source={IMAGES.cat_3D} />
      <TouchableOpacity
        onPress={handleAppendProfile}
        style={styles.button_wrapper}
      >
        <Text style={styles.text_button}>Thêm Profile</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
