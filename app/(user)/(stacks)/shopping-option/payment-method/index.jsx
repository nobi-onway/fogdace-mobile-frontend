import { View, Text, ScrollView } from "react-native";
import PaymentList from "../../../../../components/blocks/PaymentList";
import { FONTS ,COLORS} from "../../../../../constants";

const PaymentMethod = () => {
  return (
    <ScrollView style={{ height: '100%', backgroundColor: COLORS.white }}>
      <Text style={{ fontFamily: FONTS.bold, paddingLeft: 18, fontSize: 30, paddingTop:20, }}>Phương thức thanh {'\n'}toán</Text>
      <PaymentList />
    </ScrollView>
  );
};

export default PaymentMethod;
