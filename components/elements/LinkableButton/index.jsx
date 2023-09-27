import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

function LinkableButton({
  type = "primary",
  width,
  height,
  children,
  handlePress,
}) {
  return (
    <TouchableOpacity
      style={styles.container(type, width, height)}
      onPress={handlePress}
      disabled={type === "disable"}
    >
      <Text style={styles.content(type)}>{children}</Text>
    </TouchableOpacity>
  );
}

export default LinkableButton;
