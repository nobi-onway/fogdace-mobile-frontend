import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";



const styles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: '#000',
        width: '100%',
        height: '30%',
        position: 'absolute',
        bottom: 0,
    },
    box: {
        padding: SIZES.xSmall,
        width: '100%',
        height: 48,
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.xSmall,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: SIZES.small,
    },
    prefix: {
        marginRight: SIZES.xSmall,
    },
    input: {
        flex: 1,
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
    },
    screen: {
        flex: 1,
    },
    btnText: {
        position: 'absolute',
        top: 0,
        height: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCancel: {
        left: 0,
    },
    btnDone: {
        right: 0,
    },
})


export default styles;