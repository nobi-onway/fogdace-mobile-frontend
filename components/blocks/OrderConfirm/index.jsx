import React from 'react'
import styles from './style'
import { useState, useEffect, useRef } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { IMAGES, FONTS, COLORS, } from '../../../constants';
import useNavigation from '../../../hooks/useNavigation'
import { useLocalSearchParams } from "expo-router";
import { userStore } from '../../../stores/userStore';
import useCheckout from '../../../hooks/useCheckout'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OrderConfirm({ handleOpenAddressBottomSheet, handleOpenPaymentBottomSheet, addressData, payment }) {

    const { info } = userStore();

    const params = useLocalSearchParams();

    const {totalPrice } = params;


    const totalPriceNumber = parseFloat(totalPrice);

    const { create_order } = useCheckout();


    const checkoutData = JSON.parse(params.cartItems);

    const products = checkoutData?.map((item) => ({
        product_id: item._id,
        product_name: item.name,
        quantity: item.quantity,
        price: item.price,
    }));



    const address = {
        name_user: addressData?.name_user,
        phone_user: addressData?.phone_user,
        address: addressData?.address,
        home_address: addressData?.home_address,
    }

    const handleCheckout = async () => {
        try {
            await create_order({
                user: info._id,
                products: products,
                total: totalPrice,
                price_ship: 22,
                address,
            });
            const cart = await AsyncStorage.getItem("cart");
            let cartArray = cart ? JSON.parse(cart) : [];
            checkoutData.forEach((productToCheckout) => {
                const productIdToCheckout = productToCheckout._id;
                cartArray = cartArray.filter((item) => item._id !== productIdToCheckout);
            });
            await AsyncStorage.setItem("cart", JSON.stringify(cartArray));
        } catch (error) {
            console.error("Checkout error", error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{ fontFamily: FONTS.bold, paddingLeft: 20, fontSize: 30, paddingTop: 20 }}>Xác nhận đơn hàng</Text>
                <View style={{ marginTop: 42 }}>
                    <Image
                        resizeMode="cover"
                        source={IMAGES.map_line}
                        style={styles.bgImage}
                    />
                    <TouchableOpacity
                        key={addressData?._id}  // Đảm bảo có key duy nhất cho mỗi phần tử
                        style={styles.textContainer}
                        onPress={() => handleOpenAddressBottomSheet()}
                    >
                        <Text style={styles.textName}>{addressData?.name_user}</Text>
                        <Text style={styles.textPhone}>{addressData?.phone_user}</Text>
                        <Text style={styles.textAddress}>{`${addressData?.home_address}, ${addressData?.address}`}</Text>
                    </TouchableOpacity>
                    <Image
                        source={IMAGES.edit}
                        style={styles.editImage}
                    />
                </View>

                <Text style={styles.headerText}>Vận chuyển</Text>
                <Text style={styles.hcmText}>Hồ Chí Minh</Text>

                <View style={styles.wrapperShip}>
                    <Text style={styles.flatRate}>Flat rate</Text>
                    <Text style={styles.priceShip}>22.000đ</Text>
                </View>
                {payment === "COD" ? (
                    <TouchableOpacity
                        style={styles.wrapperPayment}
                        onPress={() => handleOpenPaymentBottomSheet()}
                    >
                        <View style={styles.wrapperPaymentImg}>
                            <Image
                                source={IMAGES.cod}
                                style={styles.paymentImg}
                            />
                        </View>
                        <Text style={styles.paymentText}>Thanh toán khi giao hàng (COD)</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.wrapperPayment}
                        onPress={() => handleOpenPaymentBottomSheet()}
                    >
                        <View style={styles.wrapperPaymentImg}>
                            <Image
                                source={IMAGES.visa}
                                style={styles.paymentImg}
                            />
                        </View>
                        <Text style={styles.paymentText}>Thanh toán bằng thẻ quốc tế (VISA)</Text>
                    </TouchableOpacity>
                )}

                <View style={styles.wrapperSummary}>
                    <View style={styles.wrapperCount}>
                        <Text style={styles.priceText}>Giá tạm tính</Text>
                        <Text style={styles.price}>{totalPrice}.0$</Text>
                    </View>
                    <View style={styles.wrapperCount}>
                        <Text style={styles.priceText}>Phí vận chuyển</Text>
                        <Text style={styles.price}>22.0$</Text>
                    </View>
                    <View style={styles.wrapperTotal}>
                        <Text style={styles.totalText}>Tổng</Text>
                        <Text style={styles.totalPrice}>{totalPriceNumber + 22}.0$</Text>
                    </View>
                </View>

                <View style={styles.wrapperNote}>
                    <View style={styles.wrapperNoteText}>
                        <Image
                            source={IMAGES.note}
                            style={styles.noteImage}
                        />
                        <Text style={styles.noteTextHeader}>Ghi chú đơn hàng</Text>
                    </View>
                    <TextInput
                        style={styles.noteText}
                        placeholder='Ví dụ: Gọi trước khi giao 30 phút...'
                        placeholderTextColor={COLORS.slategray}
                    />
                </View>
            </ScrollView>

            <View style={styles.bottomCheckout}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handleCheckout()
                    }}
                >
                    <Text style={styles.textCheckout}> Đặt hàng </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
