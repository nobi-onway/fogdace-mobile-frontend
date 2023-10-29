import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    safe_area: (color = COLORS.white) => ({
        backgroundColor: color,
        flex: 1,
    }),
    container: (color = COLORS.white) => ({
        backgroundColor: color,
        paddingHorizontal: SIZES.xLarge,
        paddingVertical: SIZES.large,
    })
})

export default styles;