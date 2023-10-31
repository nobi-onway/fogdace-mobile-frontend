import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "../../../constants";

export default function ChatScreen() {
  const [message, setMessage] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat</Text>
      <TextInput
        onBlur={onSend}
        style={{
          flex: 1,
          fontFamily: FONTS.regular,
          fontSize: SIZES.medium,
        }}
        placeholder={"soạn gì đó đi"}
        placeholderTextColor={COLORS.lightBlack}
        value={message}
        onChangeText={(value) => setMessage(value)}
      />
    </View>
  );
}
