import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "../../elements";

import styles from "./style";
import useNavigation from "../../../hooks/useNavigation";

export default function ChatRoomCard({ user }) {
  const { go_to_messages_with } = useNavigation();
  const { avatar, email, last_message, with_user: name } = user;
  return (
    <TouchableOpacity
      onPress={() => {
        go_to_messages_with(user);
      }}
      style={styles.container}
    >
      <Avatar
        size="large"
        src={
          "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        }
      />
      <View style={styles.content_wrapper}>
        <Text style={styles.user_name}>{name}</Text>
        <Text style={styles.last_message}>{last_message.message}</Text>
      </View>
      <View>
        <Text style={styles.create_at}>Thứ 4</Text>
      </View>
    </TouchableOpacity>
  );
}
