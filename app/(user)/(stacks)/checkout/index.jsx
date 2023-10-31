import OrderConfirm from "../../../../components/blocks/OrderConfirm";
import { ScrollView, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { COLORS,FONTS } from "../../../../constants";

const Checkout = () => {
  return (
    <View style={{ height: '100%', backgroundColor: COLORS.white }}>
      <OrderConfirm />
    </View>
  );
};

export default Checkout;
