import { View, Text, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { onValue, ref } from "@firebase/database";
import { FIREBASE_DATABASE } from "../../../../config/firebase";
import useChat from "../../../../hooks/useChat";
import { ContentContainer } from "../../../../components/elements";
import {
  MessageComposer,
  MessageContainer,
} from "../../../../components/blocks";
import { userStore } from "../../../../stores/userStore";

export default function RoomChat() {
  const params = useLocalSearchParams();
  const { info } = userStore();
  const { _id, name, avatar, username, room_id } = params;

  const { send_text_message_to } = useChat();

  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    send_text_message_to(room_id, _id, message);
  };

  useEffect(() => {
    const chatListRef = ref(FIREBASE_DATABASE, "messages/" + room_id);

    const group_by_user = (list) => {
      const result = [];
      let cur_group = null;

      list.forEach((item) => {
        const { from, send_time, message } = item;

        if (!cur_group || cur_group.from !== from) {
          cur_group = {
            from: from,
            messages: [],
            send_time: send_time,
          };
          result.push(cur_group);
        }

        cur_group.messages.push(message);
      });

      return result;
    };

    onValue(chatListRef, (snapshot) => {
      if (!snapshot.val()) return;
      const data = Object.values(snapshot.val());
      const new_data = group_by_user(data);

      setMessages(new_data);
    });
  }, []);

  return (
    <ContentContainer>
      <Stack.Screen
        options={{
          title: name,
        }}
      />
      <View
        style={{
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <ScrollView>
          {messages.map((item, index) => {
            const { from, messages } = item;

            const is_user = !(from === _id);

            const user = is_user ? info : { avatar, name };
            return (
              <View
                style={{
                  alignSelf: is_user ? "flex-end" : "flex-start",
                }}
                key={`${from} + ${index}`}
              >
                <MessageContainer messages={messages} user={user} isUser={is_user}/>
              </View>
            );
          })}
        </ScrollView>
        <View>
          <MessageComposer handleSendMessage={handleSendMessage} />
        </View>
      </View>
    </ContentContainer>
  );
}
