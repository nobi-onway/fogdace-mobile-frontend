import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";
import GLOBAL_STYLES from "../../../app/global.style"

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        width: 280,
        marginVertical: 8,
        ...GLOBAL_STYLES.shadow
    },
    trading_info_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    pet_info_wrapper: (end) => ({
        flexDirection: end ? 'row' : 'row-reverse',
        alignItems: 'center',
    }),
    pet_info: {
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pet_name: (end) => ({
        fontFamily: FONTS.bold,
        alignSelf: end ? 'flex-end' : 'flex-start',
    }),
    pet_type: (end) => ({
        alignSelf: end ? 'flex-end' : 'flex-start',
        fontFamily: FONTS.medium,
        fontSize: 10,
    }),
    bonus_info_wrapper: {
        justifyContent: 'space-between',
        borderRadius: 12,
        flexDirection: 'row',
        marginVertical: 2,
    },
    bonus_info: {
        fontFamily: FONTS.medium,
        flexWrap: 'wrap',
        fontSize: 10,
    },
    deposit: {
        fontFamily: FONTS.bold,
        fontSize: 12,
        marginVertical: 2,
        color: COLORS.danger,
    },
    price: {
        fontFamily: FONTS.bold,
        fontSize: 10,
        flexWrap: "wrap",
        color: COLORS.success,
        marginVertical: 2,
    },
    fee_payer: {
        fontFamily: FONTS.bold,
        fontSize: 10,
        flexWrap: "wrap",
        marginVertical: 2,
    },
    confirm_button: {
        height: 24,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 8,
    },
    confirm_button_text: {
        fontFamily: FONTS.bold,
        fontSize: 12,
        color: COLORS.white,
    }
});

export default styles;