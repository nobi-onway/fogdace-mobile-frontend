import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input_message: {
        flex: 1,
        marginHorizontal: 4,
        backgroundColor: COLORS.gray,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});

export default styles;