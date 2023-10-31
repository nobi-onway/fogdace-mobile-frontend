import React from 'react'
import styles from './style'
import { ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { IMAGES, FONTS, COLORS, } from '../../../constants';
import useNavigation from '../../../hooks/useNavigation'

export default function OrderConfirm() {

    const { go_to_create_order } = useNavigation();
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
                    <View style={styles.textContainer}>
                        <Text style={styles.textName}>Trường Giang</Text>
                        <Text style={styles.textPhone}>0981890260</Text>
                        <Text style={styles.textAddress}>Tân Lập, Phường Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh</Text>
                    </View>
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
