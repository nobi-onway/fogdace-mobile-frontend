import React from "react";
import {
  AnimationView,
  ContentContainer,
} from "../../../../components/elements";
import { Stack, useLocalSearchParams } from "expo-router";

export default function Detail() {
  const params = useLocalSearchParams();
  const info = params;

  const { title } = info;

  return (
    <ContentContainer>
      <Stack.Screen options={{ title: title }} />
      <AnimationView type={"coding_working_on"} />
    </ContentContainer>
  );
}
