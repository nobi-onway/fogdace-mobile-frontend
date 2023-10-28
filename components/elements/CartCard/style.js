import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 8,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.blueGrey,
    },
    contentClick: {
       backgroundColor:COLORS.lightOrange,
    },
    bodyContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    wrapperContent: {
        paddingVertical: 18,
        display: 'flex',
        flexDirection: 'row',
    },
    wrapperProduct: {
        paddingHorizontal: 10,
        flex: 0.88,
    },
    text: {
        fontFamily: FONTS.medium,
        letterSpacing: 0.3,
        fontSize: 14,
        paddingBottom: 5,
    },
    textPrice: {
        fontFamily: FONTS.bold,
        color: COLORS.red,
        letterSpacing: 0.3,
        fontSize: 14,
        paddingBottom: 5,
    },

    wrapperCheck: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 4,
        borderColor: COLORS.lightOrange,
        borderWidth: 1,
        marginRight: 10,
    },
    wrapperQuantity: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.lightYellow,
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textQuantity: {
        fontFamily: FONTS.bold,
        color: COLORS.black,
        fontSize: 12,
    },
});

export default styles;
