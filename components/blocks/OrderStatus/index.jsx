import React from 'react'
import styles from './style'
import { ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { IMAGES, FONTS, COLORS, ICONS, SIZES } from '../../../constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

export default function OrderStatus() {

    const params = useLocalSearchParams();
    const detailData = JSON.parse(params.detailData);

    const createdDate = detailData.createdAt.split("T")[0].split("-");
    const formattedDate = `${createdDate[2]}-${createdDate[1]}-${createdDate[0]}`;


    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.codeText}>Mã đơn hàng</Text>
                <Text style={styles.idText}>{detailData._id}</Text>
                <Text style={styles.dateText}>Ngày tạo: {formattedDate}</Text>
                {detailData.is_done === false ?
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

            </View>
            {detailData.is_paid === true ? (
                <View style={styles.paymentContent}>
                    <View style={styles.wrapperPaymentLeft}>
                        <Image
                            source={IMAGES.visa}
                            style={styles.paymentImg}
                        />
                    </View>
                    <View style={styles.wrapperPaymentRight}>
                        <Text style={styles.paymentTextName}>{detailData.total}.0$</Text>
                        <Text style={styles.paymentTextDes}>Thanh toán qua thẻ Visa</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.paymentContent}>
                    <View style={styles.wrapperPaymentLeft}>
                        <Image
                            source={IMAGES.cod}
                            style={styles.paymentImg}
                        />
                    </View>

                    <View style={styles.wrapperPaymentRight}>
                        <Text style={styles.paymentTextName}>{detailData.total}.0$</Text>
                        <Text style={styles.paymentTextDes}>Thanh toán khi giao hàng (COD)</Text>
                    </View>
                </View>
            )}

            <View style={styles.infoContent}>
                <Text style={{ fontSize: 18, fontFamily: FONTS.bold }}>Thông tin</Text>
                <View style={styles.wrapperInfo}>
                    <View style={styles.wrapperInfoLeft}>
                        <FontAwesome5 name={ICONS.fontAwesome_map} style={styles.iconCheck} size={SIZES.large} color={COLORS.slategray} />
                    </View>
                    <View style={styles.wrapperInfoRight}>
                        <Text style={styles.infoTextName}>HỌ VÀ TÊN</Text>
                        <Text style={styles.infoTextDes}>{detailData.address.name_user}</Text>
                    </View>
                </View>
                <View style={styles.wrapperInfo}>
                    <View style={styles.wrapperInfoLeft}>
                        <FontAwesome5 name={ICONS.fontAwesome_map} style={styles.iconCheck} size={SIZES.large} color={COLORS.slategray} />
                    </View>
                    <View style={styles.wrapperInfoRight}>
                        <Text style={styles.infoTextName}>SỐ ĐIỆN THOẠI</Text>
                        <Text style={styles.infoTextDes}>{detailData.address.phone_user}</Text>
                    </View>
                </View>
                <View style={styles.wrapperInfo}>
                    <View style={styles.wrapperInfoLeft}>
                        <FontAwesome5 name={ICONS.fontAwesome_map} style={styles.iconCheck} size={SIZES.large} color={COLORS.slategray} />
                    </View>
                    <View style={styles.wrapperInfoRight}>
                        <Text style={styles.infoTextName}>ĐỊA CHỈ</Text>
                        <Text style={styles.infoTextDes}>{`${detailData.address.home_address},  ${detailData.address.address}`}</Text>
                    </View>
                </View>
            </View>
            {/* <Text style={{ fontSize: 18, fontFamily: FONTS.bold, paddingTop: 22 }}>Ghi Chú</Text>
            <View style={styles.noteContent}>
                <Text style={{ fontStyle: 'italic', fontSize: 15 }}>Reason cancel: <Text>Sai đơn</Text></Text>
            </View> */}

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 22 }}>
                <Text style={{ fontSize: 18, fontFamily: FONTS.bold, }}>Danh sách sản phẩm</Text>
                <Text style={{ fontSize: 16, fontFamily: FONTS.bold, color: COLORS.slategray }}>1 sản phẩm</Text>
            </View>
            {detailData.products.map((product) => (
                <View key={product._id} style={styles.productContent}>
                    <View style={styles.wrapperContent}>
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
                </View>
            ))}


            <View style={styles.deliveryContent}>
                <Text style={{ fontSize: 14, fontFamily: FONTS.bold, color: COLORS.slategray }}>Phí vận chuyển</Text>
                <Text style={{ fontSize: 14, fontFamily: FONTS.bold, }}>22.000đ</Text>
            </View>

            <View style={{ borderTopWidth: 2, borderColor: COLORS.slategray, marginTop: 20 }}></View>

            <View style={styles.totalContent}>
                <Text style={{ fontSize: 14, fontFamily: FONTS.bold, color: COLORS.slategray }}>Tổng</Text>
                <Text style={{ fontSize: 20, fontFamily: FONTS.bold, }}>{detailData.total + 22}.0$</Text>
            </View>

            <View style={styles.helpContent}>
                <View style={styles.wrapperHelpRight}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <Image
                            source={IMAGES.help_center}
                            style={styles.helpImg}
                        />
                        <View>
                            <Text style={styles.helpTextName}>Cần trợ giúp?</Text>
                            <Text style={styles.helpTextEmail}>Email: support@fogdace.com</Text>
                            <Text style={styles.helpTextDes}>Chat với chúng tôi</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, fontFamily: FONTS.bold, color: '#24a5fb' }}>Chat</Text>
                </View>
            </View>
        </View>
    )
}
