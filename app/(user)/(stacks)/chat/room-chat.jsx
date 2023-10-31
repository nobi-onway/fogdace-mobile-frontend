import {
  View,
  Text,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { onValue, ref } from "@firebase/database";
import { FIREBASE_DATABASE } from "../../../../config/firebase";
import useChat from "../../../../hooks/useChat";
import { ContentContainer } from "../../../../components/elements";
import {
  MessageComposer,
  MessageContainer,
  PetTradingForm,
} from "../../../../components/blocks";
import { userStore } from "../../../../stores/userStore";
import CustomBottomSheet from "../../../../components/elements/CustomBottomSheet";

export default function RoomChat() {
  const params = useLocalSearchParams();
  const { info } = userStore();
  const { _id, name, avatar, username, room_id } = params;

  const { send_message_to, listen_messages_in_room } = useChat();

  const [messages, setMessages] = useState([]);

  const order_trading_sheet = useRef(null);

  const handleSendMessage = async (message) => {
    send_message_to(room_id, _id, message);
  };

  const handleRequestTrading = () => {
    order_trading_sheet.current.expand();
    // const message_data = {
    //   request_pet_id: "6538c42c2202f8b2966680cd",
    //   items: [{ name_product: "chuồng" }],
    //   deposits: 100,
    //   price: 10000,
    // };
    // send_message_to(room_id, _id, message_data, "order");
  };

  useEffect(() => {
    listen_messages_in_room(room_id, (messages) => {
      setMessages(messages);
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
            const { from } = item;

            const is_user = !(from === _id);

            const user = is_user ? info : { avatar, name };
            return (
              <View
                style={{
                  alignSelf: is_user ? "flex-end" : "flex-start",
                }}
                key={`${from} + ${index}`}
              >
                <MessageContainer message={item} user={user} isUser={is_user} />
              </View>
            );
          })}
        </ScrollView>
        <MessageComposer
          handleSendMessage={handleSendMessage}
          handleRequestTrading={handleRequestTrading}
        />

        <CustomBottomSheet ref={order_trading_sheet}>
          <KeyboardAvoidingView
            enabled
            keyboardVerticalOffset={350}
            behavior="position"
          >
            <PetTradingForm />
          </KeyboardAvoidingView>
        </CustomBottomSheet>
      </View>
    </ContentContainer>
  );
}
