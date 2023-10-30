import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import { Avatar } from "../../elements";

const PET_DATA = {
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

export default function MessageOrder({ message, isUser }) {
  const { deposits, items, pet_id, price } = message;
  return (
    <View style={styles.container(isUser)}>
      <View style={styles.trading_info_wrapper}>
        <View>
          <Text style={styles.price}>Tiền trao đổi: {price}</Text>
          <Text style={styles.deposit}>Đặt cọc: {deposits}</Text>
        </View>
        <View style={styles.pet_info_wrapper}>
          <View style={styles.pet_info}>
            <Text style={styles.pet_name}>{PET_DATA.name}</Text>
            <Text style={styles.pet_type}>{PET_DATA.type}</Text>
          </View>
          <Avatar src={PET_DATA.avatar} />
        </View>
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
