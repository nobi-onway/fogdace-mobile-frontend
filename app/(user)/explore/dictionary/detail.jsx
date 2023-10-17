import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import usePetDictionary from "../../../../hooks/usePetDictionary";

function Detail() {
  const { pet_info_of } = usePetDictionary();
  const params = useLocalSearchParams();
  const { id } = params;

  const info = pet_info_of(id);

  return <View></View>;
}

export default Detail;
