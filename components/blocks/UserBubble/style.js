import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 80,
        height: 100,
    },
    avatar_wrapper: {
        padding: 4,
    },
    name: {
        fontSize: 10,
        fontFamily: FONTS.bold,
        textAlign: 'center',
    }
});

export default styles;