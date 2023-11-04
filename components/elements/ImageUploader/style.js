import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    image_wrapper: {
        height: 120,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderWidth: 1,
        borderRadius: 60,
        borderColor: COLORS.gray,
        backgroundColor: COLORS.gray,
    },
});

export default styles;