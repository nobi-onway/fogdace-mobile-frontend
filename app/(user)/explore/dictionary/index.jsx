import { FlatList, View } from "react-native";
import { ContentContainer, SearchBar } from "../../../../components/elements";
import {
  SearchingNotFound,
  PetDictionaryCard,
} from "../../../../components/blocks";
import { Stack, useLocalSearchParams } from "expo-router";
import usePetDictionary from "../../../../hooks/usePetDictionary";
import useNavigation from "../../../../hooks/useNavigation";
import { useState } from "react";

function Dictionary() {
  const { go_to_dictionary_detail_of } = useNavigation();
  const { pet_type_info_of } = usePetDictionary();
  const params = useLocalSearchParams();
  const { id } = params;

  const pet_info = pet_type_info_of(id);
  const { list, type } = pet_info;

  const [data, setData] = useState(list);

  const handleSearch = (value) => {
    const searchValue = value.toLowerCase();

    const searchedList = [];

    list.map((info) => {
      const isExisted = info.type.toLowerCase().includes(searchValue);
      if (!isExisted) return;
      searchedList.push(info);
    });

    setData(searchedList);
  };

  const HAVE_DATA = data.length > 0;

  return (
    <ContentContainer>
      <Stack.Screen options={{ title: type }} />
      <SearchBar onSearch={handleSearch} />
      <View>
        {HAVE_DATA ? (
          <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            numColumns={2}
            centerContent
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ rowGap: 28 }}
            renderItem={({ item: info }) => (
              <PetDictionaryCard
                onPress={() => {
                  go_to_dictionary_detail_of(info);
                }}
                key={info.id}
                pet={info}
              />
            )}
          />
        ) : (
          <SearchingNotFound />
        )}
      </View>
    </ContentContainer>
  );
}

export default Dictionary;
