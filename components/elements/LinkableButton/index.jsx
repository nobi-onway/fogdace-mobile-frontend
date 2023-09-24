import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

function LinkableButton({ color, width, height, children, handlePress }) {
  return (
    <TouchableOpacity
      style={styles.container(color, width, height)}
      onPress={handlePress}
    >
      <Text style={styles.content}>{children}</Text>
    </TouchableOpacity>
  );
}

export default LinkableButton;
