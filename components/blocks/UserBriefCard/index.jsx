import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { Avatar } from "../../elements";
import { userStore } from "../../../stores/userStore";

export default function UserBriefCard() {
  const { info } = userStore();

  const { avatar, name } = info;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.avatar_wrapper}>
        <Avatar shape="rounded" size="large" src={avatar} />
      </View>
      <View style={styles.info_wrapper}>
        <Text style={styles.name}>{name}</Text>
        <View>
          <Text style={styles.go_to_profile}>Trang cá nhân</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
