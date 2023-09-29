import { TouchableOpacity } from "react-native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";

function CheckBox({ checked, size, color, handlePress }) {
  return (
    <TouchableOpacity
      style={[
        styles.checkbox(size, color),
        checked ? styles.checked(color) : null,
      ]}
      onPress={handlePress}
    >
      {checked && <Ionicons name="checkmark-sharp" style={styles.icon} />}
    </TouchableOpacity>
  );
}

export default CheckBox;
