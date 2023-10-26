import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Button } from "react-native";
import { userStore } from "../../../../stores/userStore";
import moment from "moment/moment";
import { child, push, ref, update } from "@firebase/database";
import { FIREBASE_DATABASE } from "../../../../config/firebase";

export default function Message() {
  const params = useLocalSearchParams();
  const { authentication } = userStore();
  const [message, setMessage] = useState("");

  const { username, room_id } = params;

  const sendMessage = async () => {
    let message_data = {
      room_id: room_id,
      message: message,
      from: authentication.uid,
      to: username,
      sendTime: moment().format(),
      type: "text",
    };

    const new_message_key = push(
      child(ref(FIREBASE_DATABASE), "messages/" + room_id)
    ).key;

    message_data.id = new_message_key;
    const updates = {};

    updates["/messages/" + room_id + "/" + new_message_key] = message_data;

    return update(ref(FIREBASE_DATABASE), updates).then(() => {
      const chatListUpdate = {
        lastMsg: message,
        sendTime: message_data.sendTime,
      };

      update(
        ref(
          FIREBASE_DATABASE,
          "chatList/" + username + "/" + authentication.uid
        ),
        chatListUpdate
      );

      setMessage("");
    });
  };

  return (
    <View>
      <Text>Message with: {username}</Text>

      <TextInput
        placeholderTextColor="red"
        placeholder="Say something..."
        value={message}
        onChangeText={(value) => setMessage(value)}
      />

      <Button title="Send Message" onPress={sendMessage} />
    </View>
  );
}
