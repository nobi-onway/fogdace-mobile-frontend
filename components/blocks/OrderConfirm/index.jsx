import React from 'react'
import styles from './style'
import { useState, useEffect, useRef } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { IMAGES, FONTS, COLORS, } from '../../../constants';
import useNavigation from '../../../hooks/useNavigation'
import { useLocalSearchParams } from "expo-router";
import { userStore } from '../../../stores/userStore';
import useAddress from '../../../hooks/useAddress';
import AddressList from '../AddressList';
import CustomBottomSheet from '../../elements/CustomBottomSheet';

export default function OrderConfirm({ handleOpenBottomSheet, addressData }) {


    const { go_to_create_order } = useNavigation();

    const params = useLocalSearchParams();

    const cartData = params;


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
                    {addressData?.map((address) => (
                        <TouchableOpacity
                            key={address._id}  // Đảm bảo có key duy nhất cho mỗi phần tử
                            style={styles.textContainer}
                            onPress={() => handleOpenBottomSheet()}
                        >
                            <Text style={styles.textName}>{address.name_user}</Text>
                            <Text style={styles.textPhone}>{address.phone_user}</Text>
                            <Text style={styles.textAddress}>{`${address.home_address}, ${address.address}`}</Text>
                        </TouchableOpacity>
                    ))}

                    {/* {addressData?.map((address) => {
                        if (address.is_default) {
                            return (
                                <TouchableOpacity
                                    key={address.id}  // Đảm bảo có key duy nhất cho mỗi phần tử
                                    style={styles.textContainer}
                                    onPress={() => { go_to_address_book({}) }}
                                >
                                    <Text style={styles.textName}>{address.name_user}</Text>
                                    <Text style={styles.textPhone}>{address.phone_user}</Text>
                                    <Text style={styles.textAddress}>{`${address.home_address}, ${address.address}`}</Text>
                                </TouchableOpacity>
                            );
                        }
                        return null; // Không hiển thị nếu không có địa chỉ mặc định
                    })} */}
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

                <View style={styles.wrapperPayment}>
                    <View style={styles.wrapperPaymentImg}>
                        <Image
                            source={IMAGES.cod}
                            style={styles.paymentImg}
                        />
                    </View>
                    <Text style={styles.paymentText}>Thanh toán khi giao hàng (COD)</Text>
                </View>

                <View style={styles.wrapperSummary}>
                    <View style={styles.wrapperCount}>
                        <Text style={styles.priceText}>Giá tạm tính</Text>
                        <Text style={styles.price}>2.000.000đ</Text>
                    </View>
                    <View style={styles.wrapperCount}>
                        <Text style={styles.priceText}>Phí vận chuyển</Text>
                        <Text style={styles.price}>22.000đ</Text>
                    </View>
                    <View style={styles.wrapperTotal}>
                        <Text style={styles.totalText}>Tổng</Text>
                        <Text style={styles.totalPrice}>2.022.000đ</Text>
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
                        go_to_create_order({});
                    }}
                >
                    <Text style={styles.textCheckout}> Đặt hàng </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
