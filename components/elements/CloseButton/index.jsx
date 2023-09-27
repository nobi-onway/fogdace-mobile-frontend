import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import { TouchableOpacity } from "react-native";

function CloseButton({ size, handlePress }) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 4,
        paddingVertical: 3,
        backgroundColor: COLORS.lightGray,
        borderRadius: 9999,
      }}
      onPress={handlePress}
    >
      <Ionicons
        name="close-outline"
        color={COLORS.black}
        size={size}
        style={{}}
      />
    </TouchableOpacity>
  );
}

export default CloseButton;
