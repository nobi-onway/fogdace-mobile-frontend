import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        height: 360,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    bottom_wrapper: {
        padding: 12,
        backgroundColor: 'rgba(150, 99, 72, 0.65)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: (fontSize = 12) => ({
        color: COLORS.white,
        fontSize: fontSize,
        fontFamily: FONTS.bold,
        marginVertical: 2,
    }),
    trading_button: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        height: 28,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trading_button_content: {
        fontSize: 10,
        fontFamily: FONTS.bold,
    }
});

export default styles