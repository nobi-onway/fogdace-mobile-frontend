import { View } from "react-native";
import { Banner } from "../components/elements";
import { Welcome } from "../components/blocks";
import { IMAGES } from "../constants";

function LandingScreen() {
  return (
    <View>
      <Banner source={IMAGES.banner} />
      <Welcome />
    </View>
  );
}

export default LandingScreen;
