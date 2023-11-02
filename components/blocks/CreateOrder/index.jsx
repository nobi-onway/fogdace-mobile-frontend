import React, { useState, useEffect } from 'react'
import styles from './style'
import { ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { IMAGES, FONTS, COLORS, ANIMATIONS } from '../../../constants';
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";
import useNavigation from '../../../hooks/useNavigation';
import StripePayment from '../../elements/StripePaymentButton'
import usePayment from '../../../hooks/usePayment';

export default function CreateOrder({ data }) {

    const [payment, setPayment] = useState();

    const { go_to_feed } = useNavigation();

    const { getDefaultPayment } = usePayment();

    const createdDate = data.createdAt.split("T")[0];
    

    useEffect(() => {
        const fetchCartData = async () => {
            const currentPayment = await getDefaultPayment();
            setPayment(currentPayment);
        };

        fetchCartData();
    }, []);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View style={{ height: '100%', backgroundColor: COLORS.white, position: 'relative' }}>
                <View style={styles.header}>
                    <LottieView
                        source={ANIMATIONS.confetti}
                        style={{
                            width: '100%',
                        }}
                        resizeMode="contain"
                        loop={true}
                        autoPlay
                    />
                    <View style={styles.headerContent}>
                        <Text style={styles.headerContentText}>Thank you!</Text>
                        <Text style={styles.headerContentDes}>Bạn đã tạo đơn hàng thành công</Text>
                    </View>
                    <View style={styles.bottomHeader}>
                        <View style={styles.wrapperBottomHeader}>
                            <Text style={styles.bottomHeaderText}>Xem đơn hàng</Text>
                            <Image
                                source={IMAGES.angle_circle_right}
                                style={styles.angleImg}
                            />
                        </View>
                        <View style={styles.overlay}>
                        </View>
                    </View>
                </View>
                <ScrollView >
                    <View style={styles.bodyContent}>
                        <View style={styles.addressContent}>
                            <Text style={styles.addressContentName}>{data.address.name_user}</Text>
                            <Text style={styles.addressContentDes}>{`${data.address.home_address}, ${data.address.address}`}</Text>
                        </View>
                        <View style={styles.codeContent}>
                            <Text style={styles.codeContentName}>Mã đơn hàng</Text>
                            <Text style={styles.codeContentDes}>{data._id}</Text>
                        </View>
                        <View style={styles.paymentContent}>
                            <Text style={styles.paymentContentName}>Phương thức thanh toán</Text>
                            <Text style={styles.paymentContentDes}>
                                {payment === "COD" ? 'Thanh toán khi nhận hàng' : 'Thanh toán thẻ Visa'}
                            </Text>
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName}>Ngày tạo</Text>
                            <Text style={styles.dateCreateContentDes}>vài giây trước ({createdDate})</Text>
                        </View>

                        <View style={styles.productContent}>
                            <Text style={styles.productContentName}>{data.address.name_user}</Text>
                            {data.products.map((product) => (
                                <View key={product._id} style={styles.wrapperProductContent}>
                                    <Text style={styles.productName}>{product.product_name} <Text style={{ color: COLORS.black, fontFamily: FONTS.bold }}>x{product.quantity}</Text></Text>
                                    <Text style={styles.productDes}>{product.price}.0$</Text>
                                </View>
                            ))}
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName}>Thông tin vận chuyển <Text style={{ fontFamily: FONTS.bold, fontSize: 14, }}>Flat rate</Text></Text>
                            <Text style={styles.dateCreateContentDes}>22.0$</Text>
                        </View>
                        <View style={styles.borderLine}></View>
                        <View style={styles.totalContent}>
                            <Text style={styles.totalContentName}>Tổng tiền</Text>
                            <Text style={styles.totalContentDes}>{data.total + 22}.0$</Text>
                        </View>

                        {payment === 'COD'
                            ? null :
                            (
                                <StripePayment total={data.total} id={data._id}/>
                            )}

                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => { go_to_feed({}) }}
                        >
                            <Text style={styles.closeText}>Xong</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
