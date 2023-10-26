import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../../constants';
import styles from './style';

function CartCard({ cart, isSelected, onSelect }) {
  const handlePress = () => {
    onSelect();
  };

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
        <View style={styles.wrapperContent}>
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
        </View>
      </View>
    </View>
  );
}

export default CartCard;
