import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { COLORS, ICONS, IMAGES, SIZES } from '../../../constants';
import styles from './style';
import useNavigation from '../../../hooks/useNavigation';
import { FontAwesome5 } from '@expo/vector-icons';

function OrderCard({ data }) {

  const { go_to_order_status_detail_of } = useNavigation();

  const createdDate = data.createdAt.split("T")[0].split("-");
  const formattedDate = `${createdDate[2]}-${createdDate[1]}-${createdDate[0]}`;

  const handleGoToOrderDetail = async () => {
    const orderData = {
      detailData: JSON.stringify(data),
    };
    go_to_order_status_detail_of(orderData);
  };


  return (
    <TouchableOpacity style={styles.content}
      onPress={() => { handleGoToOrderDetail() }}
    >
      <View style={styles.headerContent}>

        {data.is_done === false ?
          (
            <View style={styles.wrapperIcon}>
              <Image resizeMode="cover" style={styles.icon} source={IMAGES.cancel} />
              <Text style={styles.text}>Chờ xác nhận</Text>
            </View>
          ) : (
            <View style={styles.wrapperIconDone}>
              <FontAwesome5 name={ICONS.iconCheck} style={styles.icon} size={SIZES.large} color={COLORS.white} />
              <Text style={styles.textDone}>Đã giao</Text>
            </View>
          )}
        <Text style={styles.textDate}>{formattedDate}</Text>
      </View>
      <View style={styles.bodyContent}>
        {data.products.map((product) => (
          <View key={product._id} style={styles.wrapperContent}>
            <View style={styles.wrapperProduct}>
              <Text style={styles.textProduct}>{product.product_name}</Text>
              <Text style={styles.textPrice}>{product.price}.0$</Text>
            </View>
            <View style={styles.wrapperQuantity}>
              <Text style={styles.textQuantity}>
                {product.quantity}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.bodyBottom}>
        <Text style={styles.textPrice}>Tổng tiền:</Text>
        <Text style={styles.textTotalPrice}>{data.total + 22}.0$</Text>
      </View>
    </TouchableOpacity>
  )
}
export default OrderCard;
