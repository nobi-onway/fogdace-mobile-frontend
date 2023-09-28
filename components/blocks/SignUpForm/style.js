import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants";

const styles = StyleSheet.create({
    policyWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    policyContent: {
        flex: 1,
        fontFamily: FONTS.medium,
    }
})

export default styles;