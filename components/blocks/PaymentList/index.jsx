import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, IMAGES } from '../../../constants';
import styles from './style';
import CodCard from '../../elements/CodCard';
import BankingCard from '../../elements/BankingCard';

function PaymentList() {
    const [selectedPayment, setSelectedPayment] = useState(0);
    const [isPressed, setIsPressed] = useState(false);


    const handlePress = (index) => {
        setIsPressed(true);

        setTimeout(() => {
            setIsPressed(false);
            setSelectedPayment(index);
        }, 1000);
    };

    return (
        <View>
            <CodCard
                selectedPayment={selectedPayment}
                isPressed={isPressed}
                onPress={() => handlePress(0)}
            />
            <BankingCard
                selectedPayment={selectedPayment}
                isPressed={isPressed}
                onPress={() => handlePress(1)}
            />
        </View>
    );
}

export default PaymentList;
