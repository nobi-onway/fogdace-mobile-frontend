import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    header: {
        backgroundColor: COLORS.lightGreen,
        height: 208,
        overflow: 'hidden',
        position: 'absolute',
    },
    headerContent: {
        position: 'absolute',
        top: 0,
        left: 16,
        right: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    headerContentText: {
        fontFamily: FONTS.bold,
        fontSize: 30,
        color: COLORS.white
    },
    headerContentDes: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        color: COLORS.white,
        paddingTop: 10,
    },
    bottomHeader: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    wrapperBottomHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 10,
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.black,
        opacity: 0.45,
        position: 'absolute',
        zIndex: -1
    },
    bottomHeaderText: {
        fontFamily: FONTS.bold,
        fontSize: 15,
        color: COLORS.white,
        opacity: 0.98
    },
    angleImg: {
        width: 25,
        height: 25,
        opacity: 0.8
    },
    bodyContent: {
        backgroundColor: COLORS.white,
        marginTop: 210,
        height: '100%',
        paddingHorizontal: 20,
        paddingBottom:70,
    },
    addressContent: {
        backgroundColor: COLORS.primaryOrder,
        borderRadius: 8,
        paddingLeft: 15,
        paddingRight: 20,
        paddingVertical: 14,
        marginTop: 20,
    },
    addressContentName: {
        fontFamily: FONTS.bold,
        fontSize: 16,
    },
    addressContentDes: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        paddingTop: 12,
    },
    codeContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    codeContentName: {
        fontFamily: FONTS.regular,
        fontSize: 13,
    },
    codeContentDes: {
        fontFamily: FONTS.bold,
        fontSize: 16,
    },
    paymentContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    paymentContentName: {
        fontFamily: FONTS.regular,
        fontSize: 13,
    },
    paymentContentDes: {
        fontFamily: FONTS.bold,
        fontSize: 16,
    },
    dateCreateContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    dateCreateContentName: {
        fontFamily: FONTS.regular,
        fontSize: 13,
    },
    dateCreateContentDes: {
        fontFamily: FONTS.bold,
        fontSize: 16,
    },
    productContent: {
        backgroundColor: COLORS.primaryOrder,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 22,
    },
    productContentName: {
        fontFamily: FONTS.bold,
        fontSize: 16,
    },
    wrapperProductContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    productName: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        maxWidth: 220,
    },
    productDes: {
        fontFamily: FONTS.bold,
        fontSize: 16,
    },
    borderLine: {
        borderTopWidth: 1,
        borderColor: COLORS.gray,
        marginTop: 22,

    },
    totalContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
    },
    totalContentName: {
        fontFamily: FONTS.bold,
        fontSize: 16,
    },
    totalContentDes: {
        fontFamily: FONTS.bold,
        fontSize: 16,
    },
    payButton:{
        backgroundColor:COLORS.slightOrange,
        marginTop:21,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:13,
        borderRadius:5,
     },
    payText:{
        fontSize:14,
        color:COLORS.white,
        fontFamily:FONTS.bold
    },
    closeButton:{
        backgroundColor:COLORS.darkGrey,
        marginTop:21,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:13,
        borderRadius:5,
     },
     closeText:{
        fontSize:14,
        color:COLORS.black,
        fontFamily:FONTS.bold
    },
});

export default styles;
