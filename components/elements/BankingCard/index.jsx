
import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import { IMAGES } from '../../../constants';
import styles from './style';

function BankingCard({ selectedPayment, isPressed, onPress }) {
    return (
        <TouchableOpacity
            style={[
                styles.content,
                selectedPayment === 1 ? styles.clickContent : null,
                isPressed && selectedPayment === 0 ? { opacity: 0.3 } : null,
            ]}
            onPress={onPress}
        >
            <View style={styles.wrapperContent}>
                <Image resizeMode="cover" style={{ width: 30, height: 30 }} source={IMAGES.banking} />
                <View style={styles.rightContent}>
                    <Text style={styles.headerText}>
                        Chuyển tiền trực tiếp qua ngân hàng
                    </Text>
                    <Text style={styles.text}>
                        Ngân hàng BIDV Chi Nhánh Quận 9
                    </Text>
                    <Text style={styles.text}>
                        STK: 16810000409104
                    </Text>
                    <Text style={styles.text}>
                        CTK: CTY CP CÔNG NGHỆ FogDace
                    </Text>
                    <Text style={styles.text}>
                        Nội dung: Mã số hóa đơn hoặc Số điện thoại nhận hàng
                    </Text>
                </View>
                <View style={styles.wrapperCheck}>
                    {selectedPayment === 1 && (
                        <Image
                            resizeMode="cover"
                            style={{ width: 20, height: 20 }}
                            source={IMAGES.check}
                        />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default BankingCard;
