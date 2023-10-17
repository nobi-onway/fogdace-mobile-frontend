import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { PetDictionaryDetail } from "../../../../components/blocks";

function Detail() {
  const params = useLocalSearchParams();
  const info = params;
  console.log(info);

  return (
    <View>
      <PetDictionaryDetail info={info} />
    </View>
  );
}

export default Detail;
