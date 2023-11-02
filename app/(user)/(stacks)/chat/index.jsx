import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { FIREBASE_DATABASE } from "../../../../config/firebase";
import { get, onValue, ref, set, update } from "@firebase/database";
import { userStore } from "../../../../stores/userStore";
import { ChatRoomCard, UserBubble } from "../../../../components/blocks";
import { ContentContainer, SearchBar } from "../../../../components/elements";
import useChat from "../../../../hooks/useChat";
import { Stack, useLocalSearchParams } from "expo-router";
import liveSearch from "../../../../utils/liveSearch";

export default function Chat() {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchedUserList, setSearchedUserList] = useState([]);
  const [searchedRoomList, setSearchedRoomList] = useState([]);
  const { info } = userStore();
  const { get_chat_list, get_all_users } = useChat();

  const { name, _id } = useLocalSearchParams();

  const handleSearchUser = (value = "") => {
    const searched_list = liveSearch(value, users, "name");
    const searched_list_room = liveSearch(
      value,
      rooms.map((room) => ({ ...room, name: room.with_user.name })),
      "name"
    );
    setSearchedUserList(searched_list);
    setSearchedRoomList(searched_list_room);
  };

  useEffect(() => {
    get_all_users((users) => {
      const filter_data = _id
        ? users.filter((user) => user._id === _id)
        : users.filter((user) => user._id !== info._id);

      setSearchedUserList(filter_data);
      setUsers(filter_data);
    });
    get_chat_list((rooms) => {
      const filter_data = _id
        ? rooms.filter((room) => room.with_user._id === _id)
        : rooms;
      setSearchedRoomList(filter_data);
      setRooms(filter_data);
    });
  }, []);

  return (
    <ContentContainer>
      <Stack.Screen
        options={{
          title: "Tin nhắn",
        }}
      />
      <SearchBar initSearchValue={name} onSearch={handleSearchUser} />
      <FlatList
        data={searchedUserList}
        contentContainerStyle={{ gap: 12 }}
        horizontal
        renderItem={({ item: user }) => (
          <UserBubble
            already_in_room={() => {
              const user_in_room = rooms.map((room) => room.with_user._id);

              let cur_room_index = 0;

              return user_in_room.some((item, index) => {
                cur_room_index = index;
                return item === user._id;
              })
                ? rooms[cur_room_index].room_id
                : null;
            }}
            user={user}
          />
        )}
      />
      <FlatList
        data={searchedRoomList}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item: room }) => <ChatRoomCard room={room} />}
      />
    </ContentContainer>
  );
}
