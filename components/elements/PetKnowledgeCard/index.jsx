import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

function PetKnowledgeCard({ pet, onPress }) {
  if (!pet) return null;

  const { url, info_about, id } = pet;

  const handleOnPress = () => {
    onPress(id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress} style={styles.image_container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: url,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.content}>{info_about}</Text>
    </View>
  );
}

export default PetKnowledgeCard;
