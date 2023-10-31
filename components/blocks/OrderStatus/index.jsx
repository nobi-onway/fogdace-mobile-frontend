import React from 'react'
import styles from './style'
import { ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { IMAGES, FONTS, COLORS, ICONS, SIZES } from '../../../constants';
import { FontAwesome5 } from '@expo/vector-icons';
export default function OrderStatus() {


    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.codeText}>Mã đơn hàng</Text>
                <Text style={styles.idText}>54810</Text>
                <Text style={styles.dateText}>Ngày tạo: 31/11/2023</Text>
                <View style={styles.wrapperIcon}>
                    <Image resizeMode="cover" style={styles.icon} source={IMAGES.cancel} />
                    <Text style={styles.text}>Đã hủy</Text>
                </View>
            </View>
            <View style={styles.paymentContent}>
                <View style={styles.wrapperPaymentLeft}>
                    <Image
                        source={IMAGES.cod}
                        style={styles.paymentImg}
                    />
                </View>
                <View style={styles.wrapperPaymentRight}>
                    <Text style={styles.paymentTextName}>2.022.000đ</Text>
                    <Text style={styles.paymentTextDes}>Thanh toán khi giao hàng (COD)</Text>
                </View>
            </View>
            <View style={styles.infoContent}>
                <Text style={{ fontSize: 18, fontFamily: FONTS.bold }}>Thông tin</Text>
                <View style={styles.wrapperInfo}>
                    <View style={styles.wrapperInfoLeft}>
                        <FontAwesome5 name={ICONS.fontAwesome_map} style={styles.iconCheck} size={SIZES.large} color={COLORS.slategray} />
                    </View>
                    <View style={styles.wrapperInfoRight}>
                        <Text style={styles.infoTextName}>HỌ VÀ TÊN</Text>
                        <Text style={styles.infoTextDes}>Trường Giang</Text>
                    </View>
                </View>
                <View style={styles.wrapperInfo}>
                    <View style={styles.wrapperInfoLeft}>
                        <FontAwesome5 name={ICONS.fontAwesome_map} style={styles.iconCheck} size={SIZES.large} color={COLORS.slategray} />
                    </View>
                    <View style={styles.wrapperInfoRight}>
                        <Text style={styles.infoTextName}>SỐ ĐIỆN THOẠI</Text>
                        <Text style={styles.infoTextDes}>0981890260</Text>
                    </View>
                </View>
                <View style={styles.wrapperInfo}>
                    <View style={styles.wrapperInfoLeft}>
                        <FontAwesome5 name={ICONS.fontAwesome_map} style={styles.iconCheck} size={SIZES.large} color={COLORS.slategray} />
                    </View>
                    <View style={styles.wrapperInfoRight}>
                        <Text style={styles.infoTextName}>ĐỊA CHỈ</Text>
                        <Text style={styles.infoTextDes}>Tân Lập 1, Phường Hiệp Phú, Quận 9, Thành Phố Hồ Chí Minh</Text>
                    </View>
                </View>
            </View>
            <Text style={{ fontSize: 18, fontFamily: FONTS.bold, paddingTop: 22 }}>Ghi Chú</Text>
            <View style={styles.noteContent}>
                <Text style={{ fontStyle: 'italic', fontSize: 15 }}>Reason cancel: <Text>Sai đơn</Text></Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 22 }}>
                <Text style={{ fontSize: 18, fontFamily: FONTS.bold, }}>Danh sách sản phẩm</Text>
                <Text style={{ fontSize: 16, fontFamily: FONTS.bold, color: COLORS.slategray }}>1 sản phẩm</Text>
            </View>

            <View style={styles.productContent}>
                <View style={styles.wrapperContent}>
                    <View style={styles.wrapperProduct}>
                        <Text style={styles.textProduct}>Combo 5 gói pate Catchy vị Việt stupid 70g</Text>
                        <Text style={styles.textPrice}>80$</Text>
                    </View>
                    <View style={styles.wrapperQuantity}>
                        <Text style={styles.textQuantity}>
                            1
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.deliveryContent}>
                <Text style={{ fontSize: 14, fontFamily: FONTS.bold, color: COLORS.slategray }}>Phí vận chuyển</Text>
                <Text style={{ fontSize: 14, fontFamily: FONTS.bold, }}>22.000đ</Text>
            </View>

            <View style={{ borderTopWidth: 2, borderColor: COLORS.slategray, marginTop: 20 }}></View>

            <View style={styles.totalContent}>
                <Text style={{ fontSize: 14, fontFamily: FONTS.bold, color: COLORS.slategray }}>Tổng</Text>
                <Text style={{ fontSize: 20, fontFamily: FONTS.bold, }}>2.022.000đ</Text>
            </View>

            <View style={styles.helpContent}>
                <View style={styles.wrapperHelpRight}>
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center',gap:15}}>
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
