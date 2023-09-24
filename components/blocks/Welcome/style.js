import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SIZES.xLarge,
        paddingVertical: SIZES.large,
        position: "relative",
    },
    logoWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: COLORS.white,
        position: "absolute",
        top: -25,
        borderRadius: '50%',
        width: SIZES.mega,
        height: SIZES.mega,
    },
    logo: {
        width: SIZES.jumbo,
        height: SIZES.jumbo,
        borderRadius: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
    },
    titleWrapper: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%"
    },
    title: {
        fontSize: SIZES.xLarge,
        fontWeight: "bold",
    },
    primaryTitle: {
        fontSize: SIZES.xxxLarge,
        fontWeight: "bold",
    },
    policyWrapper: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: SIZES.small,
        marginTop: SIZES.small,
    },
    highlight: {
        fontWeight: "bold",
        textDecorationLine: "underline",
    }
})

export default styles;