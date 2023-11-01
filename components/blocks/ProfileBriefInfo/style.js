import { Dimensions, StyleSheet } from "react-native";
import { FONTS, COLORS } from "../../../constants";

const FULL_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    avatar_wrapper: {
        padding: 4,
        borderRadius: 100,
        backgroundColor: COLORS.white,
        marginVertical: 8,
    },
    name: {
        fontFamily: FONTS.medium,
        fontSize: 28,
        marginVertical: 8,
    },
    trading_status_message: {
        color: COLORS.danger,
        fontFamily: FONTS.bold,
        fontSize: 12,
    },
    social_info_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: FULL_WIDTH,
        marginTop: 32,
        paddingHorizontal: 40,
    },
    social_info: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    social_primary_text: {
        fontFamily: FONTS.bold,
        fontSize: 18,
        textAlign: 'center'
    },
    social_sub_text: {
        fontSize: 14,
        textAlign: 'center',
        color: COLORS.blackGrey
    },
    following_wrapper: {
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'center',
    },
    functional_wrapper: {
        backgroundColor: COLORS.gray,
        borderRadius: 8,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    }
})

export default styles