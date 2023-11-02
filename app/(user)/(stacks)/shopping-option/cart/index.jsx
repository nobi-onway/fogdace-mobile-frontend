import { View } from "react-native";
import { useState } from "react";
import CartList from '../../../../../components/blocks/CartList'


const MyCart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%' }}>
        <CartList modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
      {modalVisible &&
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%' }}>
        </View>
      }
    </>
  );
};

export default MyCart;
