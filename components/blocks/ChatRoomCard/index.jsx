import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "../../elements";
import styles from "./style";
import useNavigation from "../../../hooks/useNavigation";
import { userStore } from "../../../stores/userStore";
import calcTimeFrom from "../../../utils/calcTimeFrom";

export default function ChatRoomCard({ room }) {
  const { authentication } = userStore();
  const { go_to_room_chat_with } = useNavigation();
  const { last_message, with_user, room_id } = room;

  const { avatar, name } = with_user;
  const { uid: cur_user_id } = authentication;

  const last_message_of =
    last_message.from === cur_user_id ? "Bạn" : with_user.name;

  return (
    <TouchableOpacity
      onPress={() => {
        go_to_room_chat_with({ ...with_user, room_id });
      }}
      style={styles.container}
    >
      <Avatar shape="rounded" size="large" src={avatar} />
      <View style={styles.content_wrapper}>
        <Text style={styles.user_name}>{name}</Text>
        <Text style={styles.last_message}>
          {`${last_message_of}: ${last_message.message}`}
        </Text>
      </View>
      <View>
        <Text style={styles.create_at}>
          {calcTimeFrom(last_message.send_time)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
