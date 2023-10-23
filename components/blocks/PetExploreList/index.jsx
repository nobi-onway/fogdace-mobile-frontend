import { FlatList, Text, View } from "react-native";
import PetDictionaryCard from "../PetDictionaryCard";
import PetKnowledgeCard from "../PetKnowledgeCard";
import styles from "./style";

const TYPE = {
  dictionary: {
    title: "Từ điển thú cưng",
    item_component: PetDictionaryCard,
  },
  knowledge: {
    title: "Kiến thức bổ ích",
    item_component: PetKnowledgeCard,
  },
};

function PetExploreList({ pets, onCardPress, type }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{TYPE[type].title}</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.url}
        renderItem={({ item: pet }) => {
          const Component = TYPE[type].item_component;
          return <Component onPress={onCardPress} pet={pet} />;
        }}
        horizontal
        contentContainerStyle={{ columnGap: 8 }}
      />
    </View>
  );
}

export default PetExploreList;
