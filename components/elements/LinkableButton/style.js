import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const types = {
    primary: {
        backgroundColor: COLORS.primary,
    },
    secondary: {
        backgroundColor: COLORS.secondary,
    },
    tertiary: {
        backgroundColor: COLORS.tertiary,
    },
    brown: {
        backgroundColor: COLORS.lightBrown,
    },
    basic: {
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.gray,
    },
    disable: {
        backgroundColor: COLORS.lightGray,
    },
    cancel: {
        backgroundColor: COLORS.lightGray,
    }
}

const contentColor = {
    primary: COLORS.white,
    secondary: COLORS.white,
    tertiary: COLORS.white,
    basic: COLORS.black,
    disable: COLORS.white,
    brown: COLORS.lightYellow,
}

const styles = StyleSheet.create({
    container: (type, width = '100%', height = SIZES.jumbo) => ({
        width: width,
        height: height,
        borderRadius: SIZES.tiny,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: SIZES.tiny,
        ...types[type],
    }),
    content: (type) => ({
        fontSize: SIZES.medium,
        fontFamily: FONTS.bold,
        color: contentColor[type],
    }),
})

export default styles