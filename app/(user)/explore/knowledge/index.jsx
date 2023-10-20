import { Dimensions, FlatList, View } from "react-native";
import { PetBlogCard } from "../../../../components/elements";
import { Stack, useLocalSearchParams } from "expo-router";
import usePetKnowledge from "../../../../hooks/usePetKnowledge";

function Knowledge() {
  const { pet_knowledge_info_of } = usePetKnowledge();
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
          <PetBlogCard key={blog.id} blog={blog} />
        )}
      />
    </View>
  );
}

export default Knowledge;
