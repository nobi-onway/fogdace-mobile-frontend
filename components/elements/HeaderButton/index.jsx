import { Ionicons } from "@expo/vector-icons";
import { COLORS, ICONS } from "../../../constants";
import { TouchableOpacity } from "react-native";
import useHeaderButton from "./useHeaderButton";

function HeaderButton({ type }) {
  const HEADER_BUTTON = useHeaderButton();

  const props = HEADER_BUTTON[type];

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 4,
        paddingVertical: 3,
        backgroundColor: COLORS.lightGray,
        borderRadius: 9999,
      }}
      onPress={props.function}
    >
      <Ionicons name={props.icon} color={COLORS.black} size={20} />
    </TouchableOpacity>
  );
}

export default HeaderButton;
