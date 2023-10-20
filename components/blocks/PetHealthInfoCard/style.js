import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    container: {
    marginHorizontal: 4,
     backgroundColor: COLORS.white,
     padding: 12,
     borderRadius:8,
     width: 'auto',
     alignSelf: 'flex-start',
     flexDirection: 'column',
     justifyContent: 'space-between',
     gap: 4,
     maxHeight: 110
    },
    iconWrapper: {
      flex: 1
    },
    mainInfo: {
      fontWeight: 'bold',
      fontSize: 20
    },
    subInfo: {
      fontWeight: '500',
      color: COLORS.lightBlack,
    }
  })

export default styles;
