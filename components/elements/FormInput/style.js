import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
const styles = StyleSheet.create({
    inputContainer: (error) => ({
        padding: SIZES.xSmall,
        width: '100%',
        height: 48,
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
        fontFamily: FONTS.bold,
        fontSize: 12,
        color: COLORS.danger,
    },
    isKg: {
        fontSize: SIZES.large,
        color: COLORS.black,
        fontFamily: FONTS.bold,
    },
    date: {
        flex: 1,
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
    }
})

export default styles;