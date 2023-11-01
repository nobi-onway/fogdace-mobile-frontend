import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../../constants';
import styles from './style';
import CartQuantityModal from '../../blocks/CartQuantityModal';
function CartCard({ cart, isSelected, onSelect }) {

  const handlePress = () => {
    onSelect();
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={styles.content}
    >
      <View style={styles.bodyContent}>
        <TouchableOpacity
          style={[
            styles.wrapperCheck,
            isSelected ? [styles.contentClick] : null,
          ]}
          onPress={handlePress}
        >
          {isSelected && (
            <Image
              resizeMode="cover"
              style={{ width: 20, height: 20 }}
              source={IMAGES.whiteCheck}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperContent}
          onPress={() => setModalVisible(true)}
        >
          <Image
            resizeMode="cover"
            style={{ width: 80, height: 80, borderRadius: 6 }}
            source={cart.image}
          />
          <View style={styles.wrapperProduct}>
            <Text style={styles.text}>{cart.name}</Text>
            <Text style={styles.textPrice}>{cart.price}</Text>
          </View>
          <View style={styles.wrapperQuantity}>
            <Text style={styles.textQuantity}>
              x{cart.quantity}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <CartQuantityModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

export default CartCard;
