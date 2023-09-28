import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    checkbox: (size = SIZES.xLarge, color = COLORS.primary) => ({
        width: size,
        height: size,
        borderRadius: SIZES.tiny,
        borderWidth: 1,
        borderColor: color,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.medium,
        marginRight: SIZES.xSmall,
    }),
    checked: (color = COLORS.primary) => ({
        backgroundColor: color
    }),
    icon: {
        color: COLORS.white,
        fontFamily: FONTS.bold
    }
})

export default styles;