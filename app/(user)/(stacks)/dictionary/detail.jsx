import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { PetDictionaryDetail } from "../../../../components/blocks";

function Detail() {
  const params = useLocalSearchParams();
  const info = params;

  return (
    <View>
      <Stack.Screen options={{ title: info.type }} />
      <PetDictionaryDetail info={info} />
    </View>
  );
}

export default Detail;
