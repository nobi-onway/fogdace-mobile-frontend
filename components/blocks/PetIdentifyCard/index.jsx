import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import { Avatar } from "../../elements";

export default function PetIdentifyCard({ pet }) {
  const { avatar, name, id, gender, type, birthday, pet_health_profile } = pet;

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.avatar_wrapper}>
          <Avatar src={avatar} size="mega" shape="rounded" />
        </View>
        <View style={styles.info_wrapper}>
          <View style={styles.name_wrapper}>
            <Text style={styles.strong_text}>{name}</Text>
          </View>
          <Text style={styles.regular_text}>ID: {id}</Text>
          <Text style={styles.regular_text}>Loài: {type}</Text>
          <Text style={styles.regular_text}>Giới tính: {gender}</Text>
          <Text style={styles.regular_text}>Ngày sinh: {birthday}</Text>
          <Text style={styles.regular_text}>
            Cân nặng: {pet_health_profile.weight} kg
          </Text>
          <Text style={styles.regular_text}>
            Tình trạng triệt sản: {pet_health_profile.triet_san}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
