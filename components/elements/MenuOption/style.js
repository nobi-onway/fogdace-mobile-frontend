import { StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS } from "../../../constants";
import GLOBAL_STYLES from "../../../app/global.style"

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    height: 72,
    justifyContent: 'space-between',
    ...GLOBAL_STYLES.shadow,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
});

export default styles;
