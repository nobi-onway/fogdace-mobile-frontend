import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    result: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.xxLarge,
        marginVertical: SIZES.xLarge,
        textAlign: 'center',
    },
    response: {
        textAlign: 'center',
    }
})

export default styles