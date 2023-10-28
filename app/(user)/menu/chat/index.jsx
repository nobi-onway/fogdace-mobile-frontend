import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { FIREBASE_DATABASE } from "../../../../config/firebase";
import { get, onValue, ref, set, update } from "@firebase/database";
import { userStore } from "../../../../stores/userStore";
import { ChatRoomCard } from "../../../../components/blocks";
import { ContentContainer } from "../../../../components/elements";
import useChat from "../../../../hooks/useChat";

export default function Chat() {
  const [users, setUsers] = useState([]);
  const { get_chat_list } = useChat();

  useEffect(() => {
    get_chat_list((users) => {
      setUsers(users);
      console.log(users);
    });
  }, []);

  // const getAllUsers = () => {
  //   const userRef = ref(FIREBASE_DATABASE, "users/");
  //   onValue(
  //     userRef,
  //     (snapshot) => {
  //       const data = Object.values(snapshot.val());
  //       const newData = data.filter((item) => item.uid !== authentication.uid);
  //       setUsers(newData);
  //     },
  //     { onlyOnce: true }
  //   );
  // };

  return (
    <ContentContainer>
      <FlatList
        data={users}
        renderItem={({ item: user }) => <ChatRoomCard user={user} />}
      />
    </ContentContainer>
  );
}
