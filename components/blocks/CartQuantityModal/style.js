import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
   
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalClose:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button: {
        borderRadius: 6,
        padding: 10,
        elevation: 2,
        marginTop: 20,
    },
    buttonOpen: {
        backgroundColor: COLORS.slightOrange,
    },
    buttonClose: {
        backgroundColor: COLORS.slightOrange,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        fontFamily: FONTS.bold,
        fontSize: 20,
    },
    modalTextDes: {
        marginBottom: 15,
        fontFamily: FONTS.medium,
        fontSize: 16,
    },
    modalTextPrice: {
        marginBottom: 45,
    },
    wrapperQuantity: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    priceText: {
        fontFamily: FONTS.bold,
        fontSize: 22,
    },
    wrapperAdjust: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    circleMinus: {
        backgroundColor: COLORS.darkGrey,
        borderRadius: 20,
        padding: 6,
    },
    quantity: {
        fontFamily: FONTS.bold,
        fontSize: 18,
    },
    circlePlus: {
        backgroundColor: COLORS.slightOrange,
        borderRadius: 20,
        padding: 4,
    },
});

export default styles;
