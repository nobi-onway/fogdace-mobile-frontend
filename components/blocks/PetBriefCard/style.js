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
        padding: 4,
        backgroundColor: COLORS.white,
        ...GLOBAL_STYLES.shadow,
    },
    name: {
        fontFamily: FONTS.bold,
        textAlign: 'center',
    },
    type: {
        color: COLORS.lightBlack,
        fontFamily: FONTS.medium,
        fontSize: 12,
        textAlign: 'center',
    }
});

export default styles;