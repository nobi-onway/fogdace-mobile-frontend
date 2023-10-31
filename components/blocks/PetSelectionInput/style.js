import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    no_data_container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
    },
    no_data_message: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: FONTS.bold,
        color: COLORS.tertiary,
    },
    pet_wrapper: (isSelected) => ({
        borderWidth: isSelected ? 2 : 0,
        borderColor: isSelected ? COLORS.primary : 'none',
        borderRadius: 16,
    }),
    error_message: {
        color: COLORS.danger,
        fontFamily: FONTS.bold,
        fontSize: 12,
    }
});

export default styles