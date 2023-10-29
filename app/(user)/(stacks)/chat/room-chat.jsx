import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Button } from "react-native";
import { onValue, ref } from "@firebase/database";
import { FIREBASE_DATABASE } from "../../../../config/firebase";
import useChat from "../../../../hooks/useChat";

export default function RoomChat() {
  const params = useLocalSearchParams();
  const [message, setMessage] = useState("");
  const { send_text_message_to } = useChat();

  const [messages, setMessages] = useState([]);

  const { with_user, room_id } = params;

  const handleSendMessage = () => {
    send_text_message_to(room_id, with_user, message);
    setMessage("");
  };

  useEffect(() => {
    const chatListRef = ref(FIREBASE_DATABASE, "messages/" + room_id);

    onValue(chatListRef, (snapshot) => {
      if (!snapshot.val()) return;
      const data = Object.values(snapshot.val());
      setMessages(data);
    });
  }, []);

  return (
    <View>
      <Text>Message with: {with_user}</Text>

      <TextInput
        placeholderTextColor="red"
        placeholder="Say something..."
        value={message}
        onChangeText={(value) => setMessage(value)}
      />

      {messages.map((item, index) => {
        const { from } = item;
        return (
          <View
            style={{
              alignSelf: from === with_user ? "flex-start" : "flex-end",
            }}
            key={`${item.message} + ${index}`}
          >
            <Text>{item.message}</Text>
          </View>
        );
      })}

      <Button title="Send Message" onPress={handleSendMessage} />
    </View>
  );
}
