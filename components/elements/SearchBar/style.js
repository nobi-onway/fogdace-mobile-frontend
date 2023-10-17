import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        padding: SIZES.xSmall,
        width: '100%',
        height: 36,
        backgroundColor: COLORS.lightGray,
        borderRadius: SIZES.tiny,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: SIZES.small,
    },
    input: {
        color: COLORS.black,
        flex: 1,
        height: SIZES.xxLarge,
        marginHorizontal: SIZES.small,
    }
});

export default styles;