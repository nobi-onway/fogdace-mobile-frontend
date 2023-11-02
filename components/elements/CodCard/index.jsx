
import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import { IMAGES } from '../../../constants';
import styles from './style';

function CodCard({ selectedPayment, isPressed, onPress }) {
    return (
        <TouchableOpacity
            style={[
                styles.content,
                selectedPayment === "COD" ? styles.clickContent : null,
                isPressed && selectedPayment === "Online Payment" ? { opacity: 0.3 } : null,
            ]}
            onPress={onPress}
        >
            <View style={styles.wrapperContent}>
                <Image resizeMode="cover" style={{ width: 30, height: 30 }} source={IMAGES.cod} />
                <View style={styles.rightContent}>
                    <Text style={styles.headerText}>
                        Thanh toán khi giao hàng (COD)
                    </Text>
                    <Text style={styles.text}>
                        Thanh toán tiền mặt khi giao hàng
                    </Text>
                </View>
                <View style={styles.wrapperCheck}>
                    {selectedPayment === "COD" && (
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

export default CodCard;
