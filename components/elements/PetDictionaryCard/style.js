import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 160,
        overflow: 'hidden',
        borderRadius: SIZES.medium,
    },
    image: {
        flex: 1,
    },
    content: {
        position: 'absolute',
        color: COLORS.white,
        fontFamily: FONTS.medium,
        fontSize: SIZES.xLarge,
        flex: 0.8,
        bottom: 8,
        left: 8,
    }
})

export default styles