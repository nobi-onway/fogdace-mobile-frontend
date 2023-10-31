import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {

    },
    pet_wrapper: (isSelected) => ({
        borderWidth: isSelected ? 2 : 0,
        borderColor: isSelected ? COLORS.primary : 'none',
        borderRadius: 16,
    }),
    error_message: {
        color: COLORS.danger,
    }
});

export default styles