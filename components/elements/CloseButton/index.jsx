import { Ionicons } from "@expo/vector-icons";
import { COLORS, ICONS } from "../../../constants";
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
      <Ionicons name={ICONS.ionIcon_close} color={COLORS.black} size={size} />
    </TouchableOpacity>
  );
}

export default CloseButton;
