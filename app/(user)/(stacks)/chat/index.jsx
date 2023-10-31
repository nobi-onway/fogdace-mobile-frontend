import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { FIREBASE_DATABASE } from "../../../../config/firebase";
import { get, onValue, ref, set, update } from "@firebase/database";
import { userStore } from "../../../../stores/userStore";
import { ChatRoomCard, UserBubble } from "../../../../components/blocks";
import { ContentContainer, SearchBar } from "../../../../components/elements";
import useChat from "../../../../hooks/useChat";
import { Stack } from "expo-router";
import liveSearch from "../../../../utils/liveSearch";

export default function Chat() {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchedUserList, setSearchedUserList] = useState([]);
  const { info } = userStore();
  const { get_chat_list, get_all_users } = useChat();

  const handleSearchUser = (value) => {
    const searched_list = liveSearch(value, users, "name");
    setSearchedUserList(searched_list);
  };

  useEffect(() => {
    get_all_users((users) => {
      const filter_data = users.filter((user) => user._id !== info._id);
      setUsers(filter_data);
    });
    get_chat_list((rooms) => {
      setRooms(rooms);
    });
  }, []);

  return (
    <ContentContainer>
      <Stack.Screen
        options={{
          title: "Tin nhắn",
        }}
      />
      <SearchBar onSearch={handleSearchUser} />
      <FlatList
        data={searchedUserList}
        contentContainerStyle={{ gap: 12 }}
        horizontal
        renderItem={({ item: user }) => <UserBubble user={user} />}
      />
      <FlatList
        data={rooms}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item: room }) => <ChatRoomCard room={room} />}
      />
    </ContentContainer>
  );
}
