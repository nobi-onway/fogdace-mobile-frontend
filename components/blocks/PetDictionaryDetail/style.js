import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: COLORS.white,
        minHeight: '100%',
    },
    image: {
        width: '100%',
    },
    content_container: {
        paddingHorizontal: 16,
        height: '100%',
    },
    name: {
        fontFamily: FONTS.bold,
        fontSize: 40,
        marginVertical: 12,
        color: COLORS.dark,
    },
    description: {
        fontSize: 16,
        marginVertical: 12,
    },
    more_info_wrapper: {
        direction: 'column',
        marginVertical: 12,
    }
});

export default styles;