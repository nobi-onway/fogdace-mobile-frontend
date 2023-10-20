import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 'auto'
    },
    image_container: {
        width: 160,
        height: 160,
        overflow: 'hidden',
        borderRadius: SIZES.medium,
    },
    image: {
        flex: 1,
    },
    content: {
        marginTop: 4,
        color: COLORS.lightBlack,
        fontFamily: FONTS.medium,
        fontSize: SIZES.small,
    }
})

export default styles