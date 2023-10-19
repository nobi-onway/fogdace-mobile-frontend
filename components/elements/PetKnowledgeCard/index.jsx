import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";

function PetKnowledgeCard({ pet, onPress }) {
  if (!pet) return null;

  const { url, type, id } = pet;

  const handleOnPress = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: url,
        }}
      />
      <Text style={styles.content}>{type}</Text>
    </TouchableOpacity>
  );
}

export default PetKnowledgeCard;
