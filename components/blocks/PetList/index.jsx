import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import CreatePetForm from "../CreatePetForm";
import styles from "./style";
import usePet from "../../../hooks/usePet";

const PetSelection = ({ item, onItemSelected }) => (
  <TouchableOpacity
    style={styles.coverItem}
    onPress={() => onItemSelected(item)}
  >
    <TouchableHighlight style={styles.item}>
      <Image
        style={styles.imageItem}
        source={{
          uri: item.image,
        }}
        alt="pet"
      />
    </TouchableHighlight>
    <Text style={styles.title}>{item.type}</Text>
  </TouchableOpacity>
);

const PetList = () => {
  const [petList, setPetList] = useState([]);
  const [pet, setPet] = useState(undefined);
  const [onSelecting, setOnSelecting] = useState(true);
  const [petData, setPetData] = useState([]);

  const { get_all_pet_types } = usePet();

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const data = await get_all_pet_types();
        setPetData(data);
      } catch (error) {
        console.error("Error fetching pet types:", error);
      }
    };
    fetchPetData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <FlatList
        style={[styles.cover, { alignSelf: "center" }]}
        data={petData}
        horizontal
        keyExtractor={(item) => item._id}
        renderItem={(item) => (
          <TouchableHighlight
            style={styles.headingButton}
            onPress={() => {
              setOnSelecting(true);
              setPetList(item.item.list);
            }}
          >
            <Image
              style={styles.image}
              alt="bg_pet"
              source={{
                uri: item.item.image,
              }}
            />
          </TouchableHighlight>
        )}
      />
      {onSelecting || (
        <>
          <PetSelection
            item={pet}
            onItemSelected={(pet) => {
              setOnSelecting(true);
              setPet(pet);
            }}
          />
          <CreatePetForm pet_type={pet} />
        </>
      )}

      {onSelecting &&
        petList.map((item, index) => (
          <PetSelection
            key={`${item} + ${index}`}
            item={item}
            onItemSelected={(pet) => {
              setOnSelecting(false);
              setPet(pet);
            }}
          />
        ))}
    </ScrollView>
  );
};

export default PetList;
