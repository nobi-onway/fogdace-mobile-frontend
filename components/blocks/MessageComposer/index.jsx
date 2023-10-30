import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Icon2D } from "../../elements";
import { COLORS } from "../../../constants";

export default function MessageComposer({ handleSendMessage }) {
  const [message, setMessage] = useState("");

  const onSend = () => {
    handleSendMessage(message);
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={120}
      enabled
      behavior="padding"
      style={styles.container}
    >
      <TouchableOpacity>
        <Icon2D name={"threeDotsHorizontal"} />
      </TouchableOpacity>
      <TextInput
        style={styles.input_message}
        placeholder="Aa"
        value={message}
        onChangeText={(value) => setMessage(value)}
        placeholderTextColor={COLORS.blackGrey}
      />
      <TouchableOpacity onPress={onSend}>
        <Icon2D name={"pets"} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
