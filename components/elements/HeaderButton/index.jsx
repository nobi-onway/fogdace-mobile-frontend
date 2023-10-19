import { Ionicons } from "@expo/vector-icons";
import { COLORS, ICONS } from "../../../constants";
import { TouchableOpacity } from "react-native";

const TYPE = {
  close: {
    icon: ICONS.ionIcon_close,
  },
  back: {
    icon: ICONS.ionIcon_back,
  },
};

function HeaderButton({ handlePress, type }) {
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
      <Ionicons name={TYPE[type].icon} color={COLORS.black} size={20} />
    </TouchableOpacity>
  );
}

export default HeaderButton;
