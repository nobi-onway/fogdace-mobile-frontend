import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    inner: {
        width: 26,
        height: 26,
        backgroundColor: COLORS.white,
        borderRadius: ROUNDED.medium,
        elevation: 8,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: ROUNDED.tiny,
    },
    outter: {
        width: 50,
        height: 30,
        backgroundColor: COLORS.blueGrey,
        borderRadius: 16,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 2,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonOn: {
        backgroundColor: COLORS.primary,
    },
    buttonOff: {
        backgroundColor: COLORS.blueGrey,
    },
    iconCheck: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -7 }, { translateY: -7 }],
    },
});

export default styles;