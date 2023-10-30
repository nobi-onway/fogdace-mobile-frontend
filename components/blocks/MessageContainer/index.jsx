import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "../../elements";

import styles from "./style";
import MessageText from "../MessageText";
import MessageOrder from "../MessageOrder";

const TYPE = {
  text: {
    component: MessageText,
  },
  order: {
    component: MessageOrder,
  },
};

export default function MessageContainer({ message, user, isUser }) {
  const { avatar, name } = user;

  const { messages } = message;

  return (
    <View style={styles.container(isUser)}>
      <Avatar shape="rounded" size="small" src={avatar} />
      <View style={styles.message_wrapper(isUser)}>
        {messages.map((item, index) => {
          const { type, message } = item;
          const Component = TYPE[type].component;

          return (
            <Component
              key={`${message} + ${index}`}
              message={JSON.parse(message)}
              isUser={isUser}
            />
          );
        })}
      </View>
    </View>
  );
}
