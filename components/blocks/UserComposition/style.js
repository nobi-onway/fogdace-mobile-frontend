import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: COLORS.white,
        gap: 4,
      },
      inputContainer: {
        flex: 1,
        backgroundColor: COLORS.gray,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      inputText: {},
      iconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      },

});

export default styles;