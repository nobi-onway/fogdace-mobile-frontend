import {
  Text,
  ImageBackground,
  ScrollView,
  View,
  FlatList,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";
import { COLORS, IMAGES } from "../../../../constants";
import { Stack } from "expo-router";
import { HeaderButton } from "../../../../components/elements";
import { PetIdentifyCard } from "../../../../components/blocks";
import usePetTrading from "../../../../hooks/usePetTrading";

export default function Trading() {
  const { pets_trading } = usePetTrading();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.brown }}>
      <ScrollView>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <ImageBackground style={{ height: 600 }} source={IMAGES.pet_trading}>
          <View style={{ position: "absolute", top: 16, right: 16 }}>
            <HeaderButton type={"close"} />
          </View>
        </ImageBackground>
        <View
          style={{
            padding: 16,
          }}
        >
          {pets_trading.map((pet, index) => (
            <>
              <PetIdentifyCard key={`${pet.id} + ${index}`} pet={pet} />
            </>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
