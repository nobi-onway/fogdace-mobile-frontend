import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES,ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.xSmall,
  },
  radioCircle: (selected) => ({
    height: SIZES.xLarge,
    width: SIZES.xLarge,
    borderRadius: ROUNDED.small,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: selected ? COLORS.primary : COLORS.black,
    
  }),
  radioDot: {
    height: SIZES.small,
    width:  SIZES.small,
    borderRadius: ROUNDED.small,
    backgroundColor: COLORS.primary,
  },
  radioText:{
    paddingLeft: SIZES.small,
  }
});


export default styles;