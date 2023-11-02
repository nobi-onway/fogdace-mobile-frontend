import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../../constants";
import CartQuantityModal from "../../blocks/CartQuantityModal";
import styles from "./style";
function CartCard({
  cart,
  isSelected,
  onSelect,
  modalVisible,
  setModalVisible,
  handleCartUpdate,
}) {
  const handlePress = () => {
    onSelect();
  };

  return (
    <View style={styles.content}>
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
        <TouchableOpacity
          style={styles.wrapperContent}
          onPress={() => setModalVisible(cart._id)}
        >
          <Image
            resizeMode="cover"
            style={{ width: 80, height: 80, borderRadius: 6 }}
            source={{
              uri: cart.image,
            }}
          />
          <View style={styles.wrapperProduct}>
            <Text style={styles.text}>{cart.name}</Text>
            <Text style={styles.textPrice}>{cart.price * cart.quantity}.0$</Text>
          </View>
          <View style={styles.wrapperQuantity}>
            <Text style={styles.textQuantity}>x{cart.quantity}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.overlay}>
        <CartQuantityModal
          cart={cart}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleCartUpdate={handleCartUpdate}
        />
      </View>
    </View>
  );
}

export default CartCard;
