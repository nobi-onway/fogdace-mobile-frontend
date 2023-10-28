import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    wrapperButton: {
        alignItems: 'center',
        backgroundColor: COLORS.darkGrey,
        marginHorizontal: 18,
        borderRadius: 6,
        paddingVertical: 12,
        marginTop: 20
    },
    button:{
        fontFamily: FONTS.bold,
        fontSize:15,
    },
});

export default styles;
