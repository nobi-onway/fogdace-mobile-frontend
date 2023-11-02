import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Banner,
  ContentContainer,
  HeaderButton,
} from "../../../../components/elements";
import { IMAGES } from "../../../../constants";
import { Stack, useLocalSearchParams } from "expo-router";
import usePet from "../../../../hooks/usePet";
import {
  PetHealthProfile,
  PetInfoSectionCard,
  ProfileBriefInfo,
} from "../../../../components/blocks";

export default function PetProfile() {
  const [pet, setPet] = useState({});
  const { get_pet_detail_of } = usePet();
  const params = useLocalSearchParams();

  const { id } = params;

  useEffect(() => {
    const fetch_data = async () => {
      const pet = await get_pet_detail_of(id);
      setPet(pet);
    };

    fetch_data();
  }, []);

  return (
    <ScrollView style={{ paddingHorizontal: 0 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Banner height={200} source={IMAGES.banner} />
      <View style={{ position: "absolute", top: 80, left: 16 }}>
        <HeaderButton type={"back"} />
      </View>
      <ContentContainer>
        <View style={{ position: "absolute", top: -100, left: 0, right: 0 }}>
          <ProfileBriefInfo info={pet} />
        </View>
        <View style={{ marginTop: 300 }}></View>
      </ContentContainer>
      <PetHealthProfile pet={pet} />
    </ScrollView>
  );
}
