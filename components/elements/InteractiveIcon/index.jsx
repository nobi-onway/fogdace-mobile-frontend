import AnimatedLottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ANIMATIONS } from "../../../constants";
import { useEffect, useRef, useState } from "react";

const TYPES = {
  heart: {
    source: ANIMATIONS.heart,
  },
  favorite: {
    source: ANIMATIONS.favorite,
  },
};

function InteractiveIcon({ type, width = 80, height = 80, scale = 1.0 }) {
  const [active, setActive] = useState(false);
  const iconRef = useRef();

  useEffect(() => {
    if (!active) return;
    iconRef.current.play();
  }, [active]);

  return (
    <TouchableOpacity
      onPress={() => {
        setActive(!active);
      }}
      
    >
      <AnimatedLottieView
        ref={iconRef}
        style={{
          transform: [{ scale }],
           width, height }}
        source={TYPES[type].source}
        resizeMode="contain"
        progress={active ? 1 : 0}
        loop={false}
      />
    </TouchableOpacity>
  );
}

export default InteractiveIcon;
