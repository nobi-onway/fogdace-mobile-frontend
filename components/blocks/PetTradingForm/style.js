import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const SCREEN_WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 12,
        fontFamily: FONTS.bold
    },
    fee_wrapper: {
        flexDirection: 'row',
    },
    fee_payer: (isFeePayer) => ({
        textAlign: 'center',
        color: isFeePayer ? COLORS.danger : COLORS.success,
        fontSize: 10,
        fontFamily: FONTS.bold,
    })
})

export default styles