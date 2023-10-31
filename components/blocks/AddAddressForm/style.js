import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
   container:{
    paddingTop:25,
    paddingHorizontal:20,
   },
   input_title: {
      fontSize: 13,
      fontFamily: FONTS.bold,
      color: COLORS.slategray,
  },
});

export default styles;
