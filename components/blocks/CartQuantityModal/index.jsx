import { Alert, Modal, Text, Pressable, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';
import { ICONS } from '../../../constants';
import { useState } from 'react';

function CartQuantityModal({ modalVisible, setModalVisible, cart}) {

    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalClose}>
                            <Text style={styles.modalText}>Số lượng</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <AntDesign name={ICONS.antDesign_close} size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalTextDes}>{cart.name}</Text>
                        <Text style={styles.modalTextPrice}>Đơn giá: {cart.price}</Text>
                        <View style={styles.wrapperQuantity}>
                            <Text style={styles.priceText}>{cart.quantity * cart.price}</Text>
                            <View style={styles.wrapperAdjust}>
                                <TouchableOpacity
                                    onPress={() => setQuantity(quantity - 1)}
                                    style={styles.circleMinus}
                                >
                                    <AntDesign name={ICONS.antDesign_plus} size={20} color="white" />
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{cart.quantity}</Text>
                                <TouchableOpacity
                                    onPress={() => setQuantity(quantity + 1)}
                                    style={styles.circlePlus}
                                >
                                    <AntDesign name={ICONS.antDesign_plus} size={20} color="white" />
                                </TouchableOpacity>
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
