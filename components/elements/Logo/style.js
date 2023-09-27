import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    logoWrapper: (border, rounded, size = SIZES.mega) => ({
        justifyContent: "center",
        alignItems: "center",
        borderRadius: rounded ? 99999 : SIZES.small,
        backgroundColor: COLORS.white,
        width: size,
        height: size,
        borderWidth: border ? 2 : 0,
        borderColor: COLORS.gray,
    }),
    logo: (size = SIZES.mega) => ({
        width: size * 0.75,
        height: size * 0.75,
    }),
})

export default styles;