import { Image, Text, View } from "react-native";
import { IMAGES } from "../constants";

function LandingScreen() {
  return (
    <View>
      <Image source={IMAGES.banner} />
    </View>
  );
}

export default LandingScreen;
