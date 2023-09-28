import { TextInput, View } from "react-native";
import styles from "./style";
import { COLORS, ICONS, SIZES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function CustomInput({ placeholder, width, height, secure = false, prefix }) {
  const [isSecure, setIsSecure] = useState(secure);

  return (
    <View style={styles.inputContainer(width, height)}>
      {prefix && (
        <Ionicons style={styles.prefix} name={prefix} size={SIZES.large} />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightBlack}
        secureTextEntry={isSecure}
      />
      {secure && (
        <Ionicons
          style={styles.suffix}
          name={isSecure ? ICONS.ionIcon_eye_close : ICONS.ionIcon_eye_open}
          size={SIZES.xLarge}
          onPress={() => setIsSecure(!isSecure)}
        />
      )}
    </View>
  );
}

export default CustomInput;
