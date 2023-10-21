import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";
import styles from "./style";
import { data } from "../../../fakeData/dogCat";

const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.coverItem}
    onPress={() => alert(`You selected ${item.name}`)}
  >
    <TouchableHighlight style={styles.item}>
      <Image
        style={styles.imageItem}
        source={{
          uri: `${item.url}`,
        }}
        alt="pet"
      />
    </TouchableHighlight>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

const PetList = () => {
  const [selectedType, setSelectedType] = useState("Dog");

  const filterData = () => {
    return data.filter((item) => item.type === selectedType);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}></Text>
      <View style={styles.cover}>
        <TouchableHighlight
          style={styles.headingButton}
          onPress={() => setSelectedType("Dog")}
        >
          <Image
            style={styles.image}
            alt="bg_pet"
            source={{
              uri: "https://img.freepik.com/free-photo/cute-smiley-dog-wearing-sunglasses_23-2148865714.jpg?w=826&t=st=1697865681~exp=1697866281~hmac=7b0c50c9a349786bff762d4baffc650e2601e99a506359fe861240c93132d301",
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.headingButton}
          onPress={() => setSelectedType("Cat")}
        >
          <Image
            style={styles.image}
            alt="bg_addpet"
            source={{
              uri: "https://img.freepik.com/free-photo/lovely-pet-portrait-isolated_23-2149192347.jpg?w=740&t=st=1697865799~exp=1697866399~hmac=da848619117a7ba38b5dd67e4b130b6ed2f323a994a86a449bf38877f4e48f72",
            }}
          />
        </TouchableHighlight>
      </View>
      <FlatList
        data={filterData()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PetList;
