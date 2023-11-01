import { Alert, Modal, Text, Pressable, View, Image } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';

function CartQuantityModal({ modalVisible, setModalVisible }) {


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Số lượng</Text>
                        <Text style={styles.modalTextDes}>Nhà cây cho mèo kèm lồng kính CH030</Text>
                        <Text style={styles.modalTextPrice}>Đơn giá: 1.300.000đ</Text>
                        <View style={styles.wrapperQuantity}>
                            <Text style={styles.priceText}>2.600.000đ</Text>
                            <View style={styles.wrapperAdjust}>
                                <View style={styles.circleMinus}>
                                    <AntDesign name="minus" size={20} color="black" />
                                </View>
                                <Text>2</Text>
                                <View style={styles.circlePlus}>
                                    <AntDesign name="plus" size={20} color="black" />
                                </View>
                            </View>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cập nhật</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default CartQuantityModal;
