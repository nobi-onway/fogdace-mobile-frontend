import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 18,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 50,
    },
    clickContent:{
        backgroundColor: COLORS.primaryOrder,
        borderRadius: 8,
    },

    content2: {
        marginHorizontal: 18,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 20,
    },
    wrapperContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    rightContent: {
        flex: 1,
    },
    headerText: {
        fontFamily: FONTS.bold,
        fontSize: 18,
    },
    text: {
        fontSize: 16,
        fontFamily: FONTS.regular,
        color: COLORS.slategray,
        lineHeight: 20,
    },
    wrapperCheck: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.darkGrey,
        borderRadius: 10,
    },
});

export default styles;
