import CreateOrder from '../../../../../components/blocks/CreateOrder';
import { ScrollView, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { COLORS } from '../../../../../constants';
import { useLocalSearchParams } from "expo-router";
const CreateOrderSuccess = () => {

  const params = useLocalSearchParams();

  const orderDetail = JSON.parse(params.orderDetail);

console.log("data params",orderDetail)
  return (
    <View style={{ height: '100%', backgroundColor: COLORS.white }}>
      <CreateOrder data={orderDetail}/>
    </View>
  );
};

export default CreateOrderSuccess;
