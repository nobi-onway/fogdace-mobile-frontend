import { FlatList, Text, View } from "react-native";
import { PetDictionaryCard } from "../../elements";

import styles from "./style";

const PET_CARD_DATA = [
  {
    id: 1,
    url: "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/05/fe4be2e2-cho-san-thumb.png",
    type: "Chó",
  },
  {
    id: 2,
    url: "https://static.wixstatic.com/media/9d8ed5_b8fcc13f08fc4374bb1f979e032b0eb7~mv2.jpg/v1/fit/w_600,h_567,al_c,q_20,enc_auto/file.jpg",
    type: "Mèo",
  },
];

function PetDictionary() {

  const handleGoToDictionary = (id) => {
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Từ điển thú cưng</Text>
      <FlatList
        data={PET_CARD_DATA}
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
