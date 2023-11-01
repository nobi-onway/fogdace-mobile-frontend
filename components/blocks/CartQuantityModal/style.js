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
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: COLORS.lightOrange,
    },
    buttonClose: {
        backgroundColor: COLORS.lightOrange,
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
        marginBottom: 15,
    },
    wrapperQuantity: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    priceText: {
        fontFamily: FONTS.bold,
        fontSize: 22,
    },
    wrapperAdjust: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    circleMinus: {
        
    },
    circlePlus: {

    },
});

export default styles;
