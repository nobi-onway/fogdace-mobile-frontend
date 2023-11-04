import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
    },
    input_title: {
        fontSize: 13,
        fontFamily: FONTS.bold,
        color: COLORS.lightBlack,
    },
    radio_group: {
        flex: 0.5,
        backgroundColor: COLORS.lightGray,
        padding: 12,
        borderRadius: 8,
    }
});

export default styles