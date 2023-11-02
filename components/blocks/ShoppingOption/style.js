import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
    },
    header: {
        height: '100%',
        backgroundColor: '#f6f8fc',
        justifyContent: 'center',
    },
    content: {
        marginTop: 150,
        height: '85%',
        borderRadius: 30,
        backgroundColor: 'white',
        display: 'flex',
        paddingBottom:50
    },
    titleHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        fontSize: 36,
        textAlign: 'center',
        fontFamily: FONTS.bold,
        paddingHorizontal: 60,
        paddingTop: 20,
    },
    line: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
    },
    line1: {
        marginTop: 20,
        borderRadius: 20,
        width: 60,
        height: 6,
        backgroundColor: COLORS.slategray,
    },
    mainContain: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        paddingTop: 40,
    },
    bottomContent: {
        padding: 20,
        paddingTop: 40,
       
    },
    headerBottomText: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        paddingBottom: 10,
    },
    bottomText: {
        paddingVertical: 10,
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.slategray,
    },
});

export default styles;