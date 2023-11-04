import {
  View,
  Text,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
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
  const { _id, name, avatar, room_id } = params;

  const { send_message_to, listen_messages_in_room } = useChat();

  const [messages, setMessages] = useState([]);

  const order_trading_sheet = useRef(null);

  const handleSendMessage = async (message) => {
    send_message_to(room_id, _id, message);
  };

  const handleRequestTrading = async (form_data) => {
    const {
      accepter,
      code,
      fee_payer,
      fee_payer_name,
      price,
      requester,
      items,
    } = form_data;

    const message_data = {
      requester_pet_id: requester.pet_id || "",
      accepter_pet_id: accepter.pet_id || "",
      requester: requester._id,
      accepter: accepter._id,
      items: items.length > 0 ? items : "Không có",
      deposits: 100,
      price: price,
      fee_payer: fee_payer,
      fee_payer_name: fee_payer_name,
      code: code,
      status: 0,
    };

    await send_message_to(room_id, _id, message_data, "order");

    order_trading_sheet.current.close();
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
          handleRequestTrading={() => order_trading_sheet.current.expand()}
        />

        <CustomBottomSheet ref={order_trading_sheet}>
          <KeyboardAvoidingView
            enabled
            keyboardVerticalOffset={200}
            behavior="position"
          >
            <PetTradingForm
              requester={info}
              accepter={{ _id, avatar, name }}
              onSubmitForm={handleRequestTrading}
            />
          </KeyboardAvoidingView>
        </CustomBottomSheet>
      </View>
    </ContentContainer>
  );
}
