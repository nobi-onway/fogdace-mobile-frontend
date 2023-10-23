import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import { Avatar } from "../../elements";

export default function PetBriefCard({ pet }) {
  const { name, type, avatar } = pet;

  return (
    <TouchableOpacity
      onPress={() => {
        alert("đi đến profile thú cưng");
      }}
      style={styles.container}
    >
      <Avatar shape="rounded" size="large" src={avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>{type}</Text>
    </TouchableOpacity>
  );
}
