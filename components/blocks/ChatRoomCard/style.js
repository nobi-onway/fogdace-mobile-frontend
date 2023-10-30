import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    content_wrapper: {
        marginHorizontal: 12,
        flex: 1,
    },
    user_name: {
        fontFamily: FONTS.bold,
        fontSize: 14,
        marginVertical: 2,
    },
    last_message: {
        marginVertical: 2,
        fontSize: 12,
        color: COLORS.lightBlack,
    },
    create_at: {
        fontSize: 12,
        color: COLORS.lightBlack,
    }
});

export default styles;