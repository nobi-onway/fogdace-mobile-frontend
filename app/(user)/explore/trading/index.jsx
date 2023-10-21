import { Text, ImageBackground, ScrollView, View } from "react-native";
import React from "react";
import { IMAGES } from "../../../../constants";
import { Stack } from "expo-router";
import { HeaderButton } from "../../../../components/elements";

export default function Trading() {
  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ImageBackground style={{ height: 600 }} source={IMAGES.pet_trading}>
        <Text>Trading</Text>
        <View style={{ position: "absolute", top: 16, right: 16 }}>
          <HeaderButton type={"close"} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
