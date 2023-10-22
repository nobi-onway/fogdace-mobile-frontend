import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { petData } from "../../../fakeData/petData";
import styles from "./style";

const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.coverItem}
    onPress={() => alert(`You selected ${item.type}`)}
  >
    <TouchableHighlight style={styles.item}>
      <Image
        style={styles.imageItem}
        source={{
          uri: item.url,
        }}
        alt="pet"
      />
    </TouchableHighlight>
    <Text style={styles.title}>{item.type}</Text>
  </TouchableOpacity>
);

const PetList = () => {
  const [selectedType, setSelectedType] = useState(petData[0].type);
  const filterData = () => {
    const filteredItem = petData.find((item) => item.type === selectedType);
    return filteredItem ? filteredItem.list : [];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}></Text>
      <FlatList
        style={[styles.cover, { alignSelf: "center" }]}
        data={petData}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <TouchableHighlight
            style={styles.headingButton}
            onPress={() => setSelectedType(item.item.type)}
          >
            <Image
              style={styles.image}
              alt="bg_pet"
              source={{
                uri: item.item.url,
              }}
            />
          </TouchableHighlight>
        )}
      />
      <FlatList
        data={filterData()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PetList;
