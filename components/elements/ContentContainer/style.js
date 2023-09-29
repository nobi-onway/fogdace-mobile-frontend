import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: (color = COLORS.white) => ({
        backgroundColor: color,
        flex: 1,
        paddingHorizontal: SIZES.xLarge,
        paddingVertical: SIZES.large,
    })
})

export default styles;