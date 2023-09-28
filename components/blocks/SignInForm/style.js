import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
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
    forgetPassword: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.medium,
    }
});

export default styles;