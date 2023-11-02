
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { IMAGES } from '../../../constants';
import styles from './style';

function BankingCard({ selectedPayment, isPressed, onPress }) {
    return (
        <TouchableOpacity
            style={[
                styles.content,
                selectedPayment === "Online Payment" ? styles.clickContent : null,
                isPressed && selectedPayment === "COD" ? { opacity: 0.3 } : null,
            ]}
            onPress={onPress}
        >
            <View style={styles.wrapperContent}>
                <Image resizeMode="cover" style={{ width: 30, height: 30 }} source={IMAGES.visa} />
                <View style={styles.rightContent}>
                    <Text style={styles.headerText}>
                        Thanh toán bằng thẻ quốc tế Visa
                    </Text>
                    <Text style={styles.text}>
                        Thanh toán trực tiếp bằng thẻ Visa
                    </Text>
                </View>
                <View style={styles.wrapperCheck}>
                    {selectedPayment === "Online Payment" && (
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
