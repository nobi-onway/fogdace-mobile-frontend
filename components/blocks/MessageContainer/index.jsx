import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "../../elements";

import styles from "./style";

export default function MessageContainer({ messages, user, isUser }) {
  const { avatar, name } = user;

  return (
    <View style={styles.container(isUser)}>
      <Avatar shape="rounded" size="small" src={avatar} />
      <View style={styles.message_wrapper(isUser)}>
        {messages.map((message, index) => (
          <View key={`${message} + ${index}`} style={styles.message(isUser)}>
            <Text style={styles.text(isUser)}>{message}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
