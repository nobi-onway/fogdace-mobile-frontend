import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
    title_md: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.xxLarge,
        lineHeight: SIZES.jumbo,
    },
    text_light_lg: {
        fontFamily: FONTS.light,
        fontSize: SIZES.large,
        lineHeight: SIZES.xLarge,
        color: COLORS.lightBlack,
    },
});

export default styles;