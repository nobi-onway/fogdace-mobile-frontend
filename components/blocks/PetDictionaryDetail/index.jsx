import { Image, View, Text, ScrollView } from "react-native";
import styles from "./style";
import { FONTS } from "../../../constants";

function PetDictionaryDetail({ info }) {
  const { url, type, description, origin, life_span, weight } = info;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        alt="pet-image"
        width={240}
        height={320}
        source={{ uri: url }}
      />
      <View style={styles.content_container}>
        <Text style={styles.name}>{type}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.more_info_wrapper}>
          <Text>Xuất xứ</Text>
          <Text style={{ fontFamily: FONTS.bold }}>{origin}</Text>
        </View>
        <View style={styles.more_info_wrapper}>
          <Text>Tuổi thọ</Text>
          <Text style={{ fontFamily: FONTS.bold }}>{life_span}</Text>
        </View>
        <View style={styles.more_info_wrapper}>
          <Text>Cân nặng</Text>
          <Text style={{ fontFamily: FONTS.bold }}>{weight}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default PetDictionaryDetail;
