import React from 'react'
import styles from './style'
import { ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { ScrollableContentContainer } from '../../elements';
import { IMAGES, FONTS, COLORS, ANIMATIONS } from '../../../constants';
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";
import useNavigation from '../../../hooks/useNavigation';

export default function CreateOrder() {
    const { go_to_feed } = useNavigation();
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
                            <Text style={styles.addressContentName}>Trường Giang</Text>
                            <Text style={styles.addressContentDes}>Tân Lập, Phường Hiệp Phú, Quận 9, Thành Phố Hồ Chí Minh</Text>
                        </View>
                        <View style={styles.codeContent}>
                            <Text style={styles.codeContentName}>Mã đơn hàng</Text>
                            <Text style={styles.codeContentDes}>34315</Text>
                        </View>
                        <View style={styles.paymentContent}>
                            <Text style={styles.paymentContentName}>Phương thức thanh toán</Text>
                            <Text style={styles.paymentContentDes}>Thanh toán thẻ Visa</Text>
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName}>Ngày tạo</Text>
                            <Text style={styles.dateCreateContentDes}>vài giây trước (31/10/2023)</Text>
                        </View>

                        <View style={styles.productContent}>
                            <Text style={styles.productContentName}>Trường Giang</Text>
                            <View style={styles.wrapperProductContent}>
                                <Text style={styles.productName}>Nhà cây cho mèo kèm lồng kính CH030 x 1</Text>
                                <Text style={styles.productDes}>2.020.000đ</Text>
                            </View>
                            {/* <View style={styles.wrapperProductContent}>
                                <Text style={styles.productName}>Nhà cây cho mèo kèm lồng kính CH030 x 1</Text>
                                <Text style={styles.productDes}>2.020.000đ</Text>
                            </View> */}
                        </View>
                        <View style={styles.dateCreateContent}>
                            <Text style={styles.dateCreateContentName}>Thông tin vận chuyển <Text style={{ fontFamily: FONTS.bold, fontSize: 14, }}>Flat rate</Text></Text>
                            <Text style={styles.dateCreateContentDes}>22.000đ</Text>
                        </View>
                        <View style={styles.borderLine}></View>
                        <View style={styles.totalContent}>
                            <Text style={styles.totalContentName}>Tổng tiền</Text>
                            <Text style={styles.totalContentDes}>2.020.000đ</Text>
                        </View>

                        <TouchableOpacity style={styles.payButton}>
                            <Text style={styles.payText}>Tiếp tục thanh toán</Text>
                        </TouchableOpacity>

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
