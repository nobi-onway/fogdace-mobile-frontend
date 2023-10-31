import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import { Avatar, Icon2D } from "../../elements";

const REQUESTER_PET_DATA = {
  id: "0000000000000005",
  name: "Bella",
  gender: "Cái",
  type: "Siberian Husky",
  birthday: "10/02/2019",
  avatar:
    "https://www.dailypaws.com/thmb/B6yWhzGpQZsg3kxMzLn-hvGIF7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/siberian-husky-100800827-2000-9449ca147e0e4b819bce5189c2411188.jpg",
  pet_health_profile: {
    triet_san: "Chưa triệt sản",
    weight: 28,
  },
};

const ACCEPTER_PET_DATA = {
  id: "0000000000000001",
  name: "Bún Bò",
  gender: "Đực",
  type: "Shiba Inu",
  birthday: "20/10/2023",
  avatar:
    "https://i.pinimg.com/236x/8a/ce/9f/8ace9fe1a86e9fc2b5dced5ea7feb0d7.jpg",
  pet_health_profile: {
    triet_san: "Chưa triệt sản",
    weight: 2,
  },
};

const PetBriefInfo = ({ pet, end }) => {
  const { name, avatar, type } = pet;

  return (
    <View style={styles.pet_info_wrapper(end)}>
      <View style={styles.pet_info}>
        <Text style={styles.pet_name(end)}>{name}</Text>
        <Text style={styles.pet_type(end)}>{type}</Text>
      </View>
      <View>
        <Avatar src={avatar} />
      </View>
    </View>
  );
};

export default function MessageOrder({ message, isUser }) {
  const { deposits, items, pet_id, price } = message;
  return (
    <View style={styles.container(isUser)}>
      <View style={styles.trading_info_wrapper}>
        <PetBriefInfo pet={ACCEPTER_PET_DATA} end={false} />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Icon2D name={"activity"} />
        </View>
        <PetBriefInfo pet={REQUESTER_PET_DATA} end={true} />
      </View>
      <FlatList
        data={items}
        contentContainerStyle={{ gap: 4 }}
        horizontal
        style={{ paddingVertical: 8 }}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.bonus_info_wrapper}>
            <Text style={styles.bonus_info}>{item.name_product}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.confirm_button}>
        <Text style={styles.confirm_button_text}>Xác nhận trao đổi</Text>
      </TouchableOpacity>
    </View>
  );
}
