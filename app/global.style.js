import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
    title_lg: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.xxxLarge,
        lineHeight: SIZES.jumbo,
    },
    title_md: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.xxLarge,
        lineHeight: SIZES.xxxLarge,
    },
    text_light_lg: {
        fontFamily: FONTS.light,
        fontSize: SIZES.large,
        lineHeight: SIZES.xLarge,
        color: COLORS.lightBlack,
    },
    text_bold_sm: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.small,
    },
    text_color: (color) => ({
        color: color
    }),
    margin_col_tiny: {
        marginVertical: SIZES.tiny,
    },
    margin_col_xsm: {
        marginVertical: SIZES.xSmall,
    },
    margin_col_sm: {
        marginVertical: SIZES.small
    },
    margin_col_lg: {
        marginVertical: SIZES.large
    },
    margin_col_xlg: {
        marginVertical: SIZES.xLarge,
    },
    margin_col_jumbo: {
        marginVertical: SIZES.jumbo,
    },
});

export default styles;