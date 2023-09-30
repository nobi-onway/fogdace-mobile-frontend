import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    inputContainer: (width = '100%', height = 48, error) => ({
        padding: SIZES.xSmall,
        width: width,
        height: height,
        backgroundColor: COLORS.lightGray,
        borderWidth: 1,
        borderColor: error ? COLORS.danger : COLORS.none,
        borderRadius: SIZES.xSmall,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: SIZES.small,
    }),
    prefix: {
        marginRight: SIZES.xSmall,
    },
    suffix: {
        marginLeft: SIZES.tiny,
    },
    input: {
        flex: 1,
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
    },
    errorMessage: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.danger,
    }
})

export default styles;