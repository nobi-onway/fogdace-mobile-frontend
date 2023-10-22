import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: 4,
        overflow: 'hidden',
    },
    image_wrapper: {
        height: 200,
    },
    image: {
        flex: 1,
    },
    content_wrapper: {
        paddingHorizontal: 20,
        paddingBottom: 16,
    },
    title: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        marginVertical: 24,
    },
    description: {

    },
    bottom_wrapper: {
        padding: 8,
        borderTopColor: COLORS.lightGray,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    author_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    author_image: {
        flex: 0,
    },
    author_name: {
        marginLeft: 8,
        fontSize: 12,
    },
    views_wrapper: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    views: {
        fontSize: 12,
        marginLeft: 4,
    }
})

export default styles;