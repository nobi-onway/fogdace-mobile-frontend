import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";
import GLOBAL_STYLES from "../../../app/global.style";

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: 140,
        borderRadius: 16,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 8,
        backgroundColor: COLORS.primary,
        ...GLOBAL_STYLES.shadow,
    },
    image: {
        width: 60,
        height: 60,
    },
    button_wrapper: {
        backgroundColor: COLORS.white,
        height: 28,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    text_button: {
        fontFamily: FONTS.bold,
        fontSize: 12,
    }
})

export default styles