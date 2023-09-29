import { View, Image } from "react-native";
import { IMAGES } from "../../../constants";
import styles from "./style";

function Logo({ border, rounded, size, style }) {
  return (
    <View style={[styles.logoWrapper(border, rounded, size), style]}>
      <Image
        style={styles.logo(size)}
        resizeMode="contain"
        source={IMAGES.logo}
      />
    </View>
  );
}

export default Logo;
