import CreateOrder from '../../../../../components/blocks/CreateOrder';
import { ScrollView, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { COLORS } from '../../../../../constants';

const CreateOrderSuccess = () => {
  return (
    <View style={{ height: '100%', backgroundColor: COLORS.white }}>
      <CreateOrder />
    </View>
  );
};

export default CreateOrderSuccess;
