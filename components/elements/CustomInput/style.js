import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    inputContainer: (width = '100%', height = SIZES.jumbo) => ({
        padding: SIZES.xSmall,
        width: width,
        height: height,
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.xSmall,
        alignItems: 'center',
        flexDirection: 'row',
    }),
    prefix: {
        marginRight: SIZES.tiny,
    },
    suffix: {
        marginLeft: SIZES.tiny,
    },
    input: {
        flex: 1,
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
    }
})

export default styles;