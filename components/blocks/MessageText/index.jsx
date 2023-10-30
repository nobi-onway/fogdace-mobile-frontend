import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "../../elements";

import styles from "./style";

export default function MessageText({ message, isUser }) {
  return (
    <View style={styles.message(isUser)}>
      <Text style={styles.text(isUser)}>{message}</Text>
    </View>
  );
}
