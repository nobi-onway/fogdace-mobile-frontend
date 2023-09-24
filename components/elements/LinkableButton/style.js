import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: (color, width, height) => ({
        width: width ? width : '100%',
        height: height ? height : SIZES.jumbo,
        backgroundColor: color,
        borderRadius: SIZES.tiny,
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.light,
    }),
    content: {
        fontSize: SIZES.medium,
        fontWeight: 'bold',
        color: COLORS.white,
    },
})

export default styles