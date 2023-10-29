import { FlatList, View } from "react-native";
import { PetBlogCard } from "../../../../../components/blocks";
import { Stack, useLocalSearchParams } from "expo-router";
import usePetKnowledge from "../../../../../hooks/usePetKnowledge";
import useNavigation from "../../../../../hooks/useNavigation";

function Knowledge() {
  const { pet_knowledge_info_of } = usePetKnowledge();
  const { go_to_knowledge_detail_of } = useNavigation();
  const params = useLocalSearchParams();
  const { id } = params;

  const pet_knowledge = pet_knowledge_info_of(id);
  const { list, info_about } = pet_knowledge;

  return (
    <View style={{ paddingVertical: 16 }}>
      <Stack.Screen options={{ title: info_about }} />
      <FlatList
        style={{ paddingRight: 36 }}
        keyExtractor={(item) => item.id}
        data={list}
        centerContent
        contentContainerStyle={{ rowGap: 28 }}
        renderItem={({ item: blog }) => (
          <PetBlogCard
            onPress={go_to_knowledge_detail_of}
            key={blog.id}
            blog={blog}
          />
        )}
      />
    </View>
  );
}

export default Knowledge;
