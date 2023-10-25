import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    container: {
      height: 280,
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: COLORS.white,
      borderRadius: 8,
      flexDirection: "column",
      gap: 8,
      margin: 5
    },
  
    imageWrapper: {
      width: "100%",
      height: "70%",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    rowActions: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    shoppingCartWrapper: {
      backgroundColor: COLORS.primary,
      borderRadius: 4,
      width: 25,
      height: 25,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    price: {
      fontWeight: "bold",
    },
  });

export default styles;
