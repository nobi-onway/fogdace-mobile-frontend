import { Text, View } from "react-native";
import {
  CloseButton,
  ContentContainer,
  SearchBar,
} from "../../../components/elements";
import { SearchingNotFound } from "../../../components/blocks";
import { Stack, useLocalSearchParams } from "expo-router";
import usePetDictionary from "../../../hooks/usePetDictionary";

function Dictionary() {
  const { pet_info_of } = usePetDictionary();
  const params = useLocalSearchParams();
  const { id } = params;

  const pet_info = pet_info_of(id);
  const { type, list } = pet_info;

  return (
    <ContentContainer>
      <Stack.Screen
        options={{
          title: type,
          headerLeft: () => {},
        }}
      />
      <SearchBar />
      <SearchingNotFound />
    </ContentContainer>
  );
}

export default Dictionary;
