import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { Avatar } from "../../elements";
import useUser from "../../../hooks/useUser";
import useNavigation from "../../../hooks/useNavigation";
import { userStore } from "../../../stores/userStore";

export default function UserBriefCard() {
  const { info } = userStore();
  const { go_to_user_profile } = useNavigation();

  const { avatar, name } = info;

  return (
    <View style={styles.container}>
      <View style={styles.avatar_wrapper}>
        <Avatar shape="rounded" size="large" src={avatar} />
      </View>
      <View style={styles.info_wrapper}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity onPress={go_to_user_profile}>
          <Text style={styles.go_to_profile}>Trang cá nhân</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
