import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: COLORS.primaryOrder,
        borderRadius: 10,
        width: 176,
        marginBottom: 20,
    },
    icon_wrapper: {
        borderRadius: 8,
        backgroundColor: COLORS.darkGrey,
        width: 50,
        height: 50,
        padding: 8,
        alignItems: "center",
        alignContent: "center",
        marginRight: 16,
    },
    cartBackground: {
        borderColor: COLORS.blueGrey,
        borderWidth: 2,
    },
    icon: {
        width: 34,
        height: 28,
        flex: 1
    },
    text_wrapper: {
        justifyContent: "center",
    },
    text: {
        fontSize: 19,
        paddingTop: 24,
        fontFamily: FONTS.bold,
        color: COLORS.black,
    },
    cartText: {
        fontSize: 19,
        paddingTop: 24,
        fontFamily: FONTS.bold,
        color: COLORS.white,
    },
});

export default styles;