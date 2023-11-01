import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    overlay:{
        height:'100%',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    wrapperButton: {
        alignItems: 'center',
        backgroundColor: COLORS.darkGrey,
        marginHorizontal: 18,
        borderRadius: 6,
        paddingVertical: 12,
        marginTop: 20
    },
    button: {
        fontFamily: FONTS.bold,
        fontSize: 15,
    },
    bottomCart: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 105,
        backgroundColor: COLORS.white,
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
    contentClick: {
        backgroundColor: COLORS.lightOrange,
    },
    wrapperBottom: {
        paddingHorizontal: 18,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCheck: {
        fontFamily: FONTS.bold,
        fontSize: 13,
    },
    button: {
        marginTop: 6,
        backgroundColor: COLORS.slightOrange,
        height: 44,
        marginHorizontal: 18,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCheckout: {
        fontFamily: FONTS.bold,
        fontSize: 14,
        color: COLORS.white,
    },
    dot: {
        width: 2,
        height: 2,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginHorizontal:10,
    },
});

export default styles;
