import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";

const defaultWidth = "auto";
const defaultHeight = "auto";

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: 'center'
    },
    icon: (width=defaultWidth, height=defaultHeight) => ({
        marginVertical: SIZES.tiny,
        width,
        height
    }),
    label: (color) => ({
        fontFamily: FONTS.bold,
        fontSize: SIZES.small,
        color: color,
        textTransform: 'capitalize',
    }),
});

export default styles;