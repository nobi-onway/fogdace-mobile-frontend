import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    container: (isUser) => ({
        flexDirection: isUser ? 'row-reverse' : 'row',
        alignItems: 'flex-end'
    }),
    message_wrapper: (isUser) => ({
        justifyContent: 'flex-end',
        alignItems: isUser ? 'flex-end' : 'flex-start',
        marginHorizontal: 4,
    }),
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