import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";
import GLOBAL_STYLES from "../../../app/global.style"

const styles = StyleSheet.create({
    container: (isUser) => ({
        padding: 8,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        width: 280,
        maxHeight: 160,
        marginVertical: 8,
        ...GLOBAL_STYLES.shadow
    }),
    trading_info_wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pet_info_wrapper: (end) => ({
        flexDirection: end ? 'row' : 'row-reverse',
        alignItems: 'center',
        justifySelf: 'flex-start',
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
        backgroundColor: COLORS.gray,
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
        paddingHorizontal: 8,
        borderRadius: 12,
    },
    bonus_info: {
        fontFamily: FONTS.medium,
        fontSize: 12,
    },
    deposit: {
        fontFamily: FONTS.bold,
        fontSize: 12,
        marginVertical: 2,
        color: COLORS.danger,
    },
    price: {
        fontFamily: FONTS.bold,
        fontSize: 12,
        marginVertical: 2,
        color: COLORS.success,
    },
    confirm_button: {
        height: 24,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    confirm_button_text: {
        fontFamily: FONTS.bold,
        fontSize: 12,
        color: COLORS.white,
    }
});

export default styles;