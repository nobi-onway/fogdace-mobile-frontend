import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

function LinkableButton({
  type = "primary",
  width,
  height,
  children,
  handlePress,
  style,
}) {
  return (
    <TouchableOpacity
      style={[styles.container(type, width, height), style]}
      onPress={handlePress}
      disabled={type === "disable"}
    >
      <Text style={styles.content(type)}>{children}</Text>
    </TouchableOpacity>
  );
}

export default LinkableButton;
