import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    uploadImage: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "purple",
        borderRadius: 4,
        color: "white",
        width: 200,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
    },
    uploadImageText: {
        color: "white",
    },
});

export default styles;