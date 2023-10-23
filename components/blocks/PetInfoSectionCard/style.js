import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 4
   },
   headerContainer: {
       height: 40,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       paddingHorizontal: 8,
   },
   titleWrapper:{
       flexDirection: 'row',
       gap: 6,
       alignItems: 'center',
   },
   detailText:{
       color: COLORS.lightBlack
   },
   mainText:{
       fontWeight: 'bold'
   },
   addBtn:{
       borderRadius: 4,
       paddingHorizontal: 14,
       paddingVertical: 2,
       borderWidth: 1.5,
       borderColor: COLORS.tertiary,
       backgroundColor: COLORS.light,
       width: "auto",
       marginHorizontal: 'auto',
   },
   detailWrapper:{
       flexDirection: 'row',
       alignItems: 'center',
       gap: 4
   },
   addBtnText:{
       color: COLORS.tertiary,
       fontWeight: 'bold'
   },
   centerHorizontalAndVertical: {
       paddingVertical: 10,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       gap: 8
   },
   noDataText: {
       fontWeight: '600',
       fontSize: 15,
       color: COLORS.lightBlack
   },
   iconWrapper:{
       backgroundColor: COLORS.info,
       padding: 4,
       borderRadius: 6,
       width: 30
       
   },
   headerWrapper:{
       flexDirection: 'row',
       justifyContent: 'space-between'
   },
   contentWrapper:{
       flex: 1
   }
  })

export default styles;
