import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";
import GLOBAL_STYLE from "../../../app/global.style"

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightBrown,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        height: 180,
        flexDirection: 'row',
        padding: 8,
        ...GLOBAL_STYLE.shadow,
    },
    avatar_wrapper: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info_wrapper: {
        flex: 0.7,
        justifyContent: 'space-around',
    },
    name_wrapper: {
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        paddingBottom: 4,
    },
    strong_text: {
        fontFamily: FONTS.bold,
        color: COLORS.white,
        fontSize: 20,
    },
    regular_text: {
        fontFamily: FONTS.regular,
        color: COLORS.white,
    },
    trading_button: {
        marginBottom: 12,
    }
});

export default styles