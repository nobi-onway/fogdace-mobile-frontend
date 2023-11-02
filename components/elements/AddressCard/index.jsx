import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../../constants';
import styles from './style';

function AddressCard({ address, isSelected, onSelect, userId, set_default_address }) {

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = async () => {
    setIsPressed(true);
    try {
      await set_default_address(userId, {
        address_id: address._id,
      });
    } catch (error) {
      console.error(error);
    } finally {
      onSelect();
      setIsPressed(false);
    }

  };

  return (
    <TouchableOpacity
      style={[
        styles.content,
        isSelected ? styles.contentClick : null,
        isPressed ? { opacity: 0.5 } : null,
      ]}
      onPress={handlePress}
    >
      <View style={styles.bodyContent}>
        <View style={styles.wrapperContent}>
          <View style={styles.wrapperAddress}>
            <Text style={styles.text}>{address.name_user}</Text>
            <Text style={styles.text}>{address.phone_user}</Text>
            <Text style={styles.textAddress}>{`${address.home_address}, ${address.address}`}</Text>
          </View>
          <View style={styles.wrapperCheck}>
            {isSelected && (
              <Image
                resizeMode="cover"
                style={{ width: 20, height: 20 }}
                source={IMAGES.check}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default AddressCard;
