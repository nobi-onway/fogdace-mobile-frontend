import { FlatList, Text, View } from "react-native";
import { PetDictionaryCard } from "../../elements";

import styles from "./style";
import usePetDictionary from "../../../hooks/usePetDictionary";
import useNavigation from "../../../hooks/useNavigation";

function PetDictionary() {
  const { pets } = usePetDictionary();
  const { go_to_dictionary_of } = useNavigation();

  const handleGoToDictionary = (id) => {
    go_to_dictionary_of(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Từ điển thú cưng</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.url}
        renderItem={({ item: pet }) => {
          return <PetDictionaryCard onPress={handleGoToDictionary} pet={pet} />;
        }}
        horizontal
        contentContainerStyle={{ columnGap: 8 }}
      />
    </View>
  );
}

export default PetDictionary;
