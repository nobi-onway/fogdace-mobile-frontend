import LottieView from "lottie-react-native";
import { View } from "react-native";
import { ANIMATIONS, SIZES } from "../../../constants";

const TYPE = {
  browsing: { source: ANIMATIONS.browsing },
  welcome: { source: ANIMATIONS.welcome },
};

function AnimationView({ type }) {
  return (
    <View style={{ marginVertical: SIZES.medium }}>
      <LottieView
        style={{ width: 240, height: 240 }}
        source={TYPE[type].source}
        autoPlay
        loop
        resizeMode="contain"
      />
    </View>
  );
}

export default AnimationView;
