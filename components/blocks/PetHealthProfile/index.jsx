import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import PetHealthInfoCard from "../PetHealthInfoCard";
import usePet from "../../../hooks/usePet";
import PetInfoSectionCard from "../PetInfoSectionCard";
import { ToggleButton } from "../../elements";

const PET_HEALTH_INFO_CARDS = ["type", "gender", "birthday"];
const PET_HEALTH_SECTION_CARDS = [
  "weight",
  "xo_giun",
  "tiem_phong",
  "dinh_duong",
  "tinh_trang_sk",
  "tinh_cach",
];

export default function PetHealthProfile({ pet }) {
  const { get_pet_health_profile_of } = usePet();
  const [healthProfile, setHealthProfile] = useState({});

  const { pet_health_profile } = pet;

  useEffect(() => {
    if (!pet_health_profile) return;

    const fetch_data = async () => {
      const health_profile = await get_pet_health_profile_of(
        pet_health_profile
      );
      setHealthProfile(health_profile);
    };

    fetch_data();
  }, [pet_health_profile]);

  return (
    <View style={styles.container}>
      <FlatList
        data={PET_HEALTH_INFO_CARDS}
        horizontal
        renderItem={({ item: name }) => (
          <View key={name.id}>
            <PetHealthInfoCard name={name} pet={pet} />
          </View>
        )}
      />
      <Text style={styles.health_profile_text}>Hồ sơ sức khỏe</Text>
      {PET_HEALTH_SECTION_CARDS.map((item, index) => (
        <View key={`${item} + ${index}`} style={{ marginVertical: 8 }}>
          <PetInfoSectionCard name={item} pet_health_profile={healthProfile} />
        </View>
      ))}
    </View>
  );
}
