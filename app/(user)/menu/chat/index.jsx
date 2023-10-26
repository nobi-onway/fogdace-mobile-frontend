import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { FIREBASE_DATABASE } from "../../../../config/firebase";
import { get, onValue, ref, set, update } from "@firebase/database";
import { userStore } from "../../../../stores/userStore";
import { uuidv4 } from "@firebase/util";
import useNavigation from "../../../../hooks/useNavigation";

export default function Chat() {
  const [users, setUsers] = useState([]);
  const { authentication } = userStore();
  const { go_to_messages_with } = useNavigation();

  useEffect(() => {
    getChatList();
  }, []);

  const getChatList = () => {
    const chatListRef = ref(
      FIREBASE_DATABASE,
      "chatList/" + authentication.uid
    );

    onValue(chatListRef, (snapshot) => {
      const data = Object.values(snapshot.val());
      setUsers(data);
    });
  };

  const getAllUsers = () => {
    const userRef = ref(FIREBASE_DATABASE, "users/");
    onValue(
      userRef,
      (snapshot) => {
        const data = Object.values(snapshot.val());
        const newData = data.filter((item) => item.uid !== authentication.uid);
        setUsers(newData);
      },
      { onlyOnce: true }
    );
  };

  const createChatList = (user) => {
    const room_id = uuidv4();
    update(
      ref(
        FIREBASE_DATABASE,
        "chatList/" + user.username + "/" + authentication.uid
      ),
      {
        room_id: room_id,
        username: authentication.uid,
        lastMsg: "",
      }
    );

    update(
      ref(
        FIREBASE_DATABASE,
        "chatList/" + authentication.uid + "/" + user.username
      ),
      {
        room_id: room_id,
        username: user.username,
        lastMsg: "",
      }
    );
    go_to_messages_with({
      room_id: room_id,
      username: user.username,
      lastMsg: "",
    });
  };

  return (
    <View>
      <Text>Chat</Text>
      <FlatList
        data={users}
        renderItem={({ item: user }) => (
          <TouchableOpacity onPress={() => createChatList(user)} key={user.id}>
            <Text>{user.username}</Text>
            <Text>{user.lastMsg}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
