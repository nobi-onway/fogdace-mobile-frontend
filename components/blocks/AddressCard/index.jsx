import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { IMAGES } from '../../../constants';
import styles from './style';

function AddressCard() {
  return (
      <View style={styles.content}>
        <View style={styles.headerContent}>
          <View style={styles.wrapperIcon}>
            <Image resizeMode="cover" style={styles.icon} source={IMAGES.cancel} />
            <Text style={styles.text}>Đã hủy</Text>
          </View>
          <Text style={styles.textDate}>26-10-2023</Text>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.wrapperContent}>
            <View style={styles.wrapperProduct}>
              <Text style={styles.textProduct}>Combo 5 gói pate Catchy vị Việt stupid 70g</Text>
              <Text style={styles.textPrice}>80$</Text>
            </View>
            <View style={styles.wrapperQuantity}>
              <Text style={styles.textQuantity}>
                1
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyBottom}>
          <Text style={styles.textPrice}>Tổng tiền:</Text>
          <Text style={styles.textTotalPrice}>80$</Text>
        </View>
      </View>
  )
}
export default AddressCard;
