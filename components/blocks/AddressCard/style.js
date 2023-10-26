import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryOrder,
        
    },
    content: {
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.xSmall,
        padding: 20,
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrapperIcon: {
        flex: 0.3,
        flexDirection: 'row',
        backgroundColor: COLORS.cancel,
        alignItems: 'center',
        gap: 10,
        padding: 5,
        paddingHorizontal: 7,
        borderRadius: 10,
    },
    icon: {
        width: 19,
        height: 19,
    },
    text: {
        fontSize: 14,
        fontFamily: FONTS.bold,
        color: COLORS.white,
    },
    textDate: {
        fontSize: 14,
        fontFamily: FONTS.bold,
        color: COLORS.slategray,
    },
    bodyContent: {
        marginTop: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: COLORS.lightGray,
    },
    wrapperContent: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    wrapperProduct: {
        flex: 0.85,

    },
    textProduct: {
        fontFamily: FONTS.bold,
        letterSpacing: 0.1,
    },
    textPrice: {
        fontFamily: FONTS.bold,
        color: COLORS.slategray,
        paddingTop: 5,
    },
    wrapperQuantity: {
        flex: 0.13,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryOrder,
        borderRadius: 10,
    },
    textQuantity: {
        fontFamily: FONTS.bold,
        color: COLORS.black,
        fontSize: 20,
    },
    bodyBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 15,
    },
    textTotalPrice: {
        fontFamily: FONTS.bold,
        color: COLORS.yellow,
        fontSize: 20,
        paddingTop: 1,
        paddingLeft: 20,
    },
});

export default styles;
