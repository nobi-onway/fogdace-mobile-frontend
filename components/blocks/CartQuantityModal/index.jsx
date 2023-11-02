import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import {
    Modal,
    Pressable,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { ICONS } from "../../../constants";
import useCart from "../../../hooks/useCart";
import styles from "./style";

function CartQuantityModal({
  modalVisible,
  setModalVisible,
  cart,
  handleCartUpdate,
}) {
  const [quantity, setQuantity] = useState(cart.quantity);
  const { updateQuantity } = useCart();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const updateCart = async () => {
    const updatedCart = { ...cart, quantity: quantity };
    await updateQuantity(updatedCart);
    handleCartUpdate();
    setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalClose}>
              <Text style={styles.modalText}>Số lượng</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign
                  name={ICONS.antDesign_close}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalTextDes}>{cart.name}</Text>
            <Text style={styles.modalTextPrice}>Đơn giá: {cart.price}</Text>
            <View style={styles.wrapperQuantity}>
              <Text style={styles.priceText}>{quantity * cart.price}</Text>
              <View style={styles.wrapperAdjust}>
                <TouchableOpacity
                  onPress={decreaseQuantity}
                  style={styles.circleMinus}
                >
                  <AntDesign
                    name={ICONS.antDesign_minus}
                    size={20}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity
                  onPress={increaseQuantity}
                  style={styles.circlePlus}
                >
                  <AntDesign
                    name={ICONS.antDesign_plus}
                    size={20}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={updateCart}
            >
              <Text style={styles.textStyle}>Cập nhật</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default CartQuantityModal;
