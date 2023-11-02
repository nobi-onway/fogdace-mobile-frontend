import AnimatedLottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ANIMATIONS } from "../../../constants";
import { useEffect, useRef, useState } from "react";

const TYPES = {
  heart: {
    source: ANIMATIONS.heart,
    scale: 1.5,
    width: 24,
    height: 32,
  },
  favorite: {
    source: ANIMATIONS.favorite,
    scale: 1.5,
    width: 24,
    height: 24,
  },
  phone: {
    source: ANIMATIONS.phone,
    scale: 1.5,
    width: 32,
    height: 32,
  },
  coin: {
    source: ANIMATIONS.coin,
    scale: 1.5,
    width: 24,
    height: 24,
  },
};

function InteractiveIcon3D({ type, isActive=false, callbackFn }) {
  const [active, setActive] = useState(isActive);
  const iconRef = useRef();

  const { width, height, scale } = TYPES[type];

  useEffect(() => {
    if (!active) return;
    iconRef.current.play();
  }, [active]);

  return (
    <TouchableOpacity
      onPress={() => {
        setActive(!active);
        callbackFn(!active);
      }}
    >
      <AnimatedLottieView
        ref={iconRef}
        style={{
          transform: [{ scale }],
          width,
          height,
        }}
        source={TYPES[type].source}
        resizeMode="contain"
        progress={active ? 1 : 0}
        loop={false}
      />
    </TouchableOpacity>
  );
}

export default InteractiveIcon3D;
