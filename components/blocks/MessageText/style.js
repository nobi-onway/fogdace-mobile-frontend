import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    message: (isUser) => ({
        backgroundColor: isUser ? COLORS.primary : COLORS.gray,
        padding: 8,
        marginVertical: 2,
        borderRadius: 4,
    }),
    text: (isUser) => ({
        color: isUser ? COLORS.white : COLORS.black,
        fontFamily: FONTS.medium,
    })
})

export default styles;