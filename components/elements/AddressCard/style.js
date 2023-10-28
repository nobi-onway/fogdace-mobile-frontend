import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
        marginHorizontal: 18,
        backgroundColor: COLORS.primaryOrder,
        borderRadius: SIZES.xSmall,
        borderWidth:2,
        borderColor: COLORS.white,
    },
    contentClick: {
        borderWidth:2,
        borderColor: COLORS.orange,
    },
    bodyContent: {
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: COLORS.lightGray,
    },
    wrapperContent: {
        padding: 20,
        paddingRight:30,
        paddingTop:35,
    },
    wrapperAddress: {
        flex: 0.85,

    },
    text: {
        fontFamily: FONTS.bold,
        letterSpacing: 0.1,
        fontSize: 17,
        paddingBottom: 5,
    },
    textAddress: {
        fontFamily: FONTS.regular,
        color: COLORS.slategray,
        paddingTop: 2,
    },
    wrapperCheck: {
        position: 'absolute',
        top: 20,
        right: 20,
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.darkGrey,
        borderRadius: 10,
    },
});

export default styles;
