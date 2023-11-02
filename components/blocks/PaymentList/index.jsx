import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import CodCard from '../../elements/CodCard';
import BankingCard from '../../elements/BankingCard';
import usePayment from '../../../hooks/usePayment';

function PaymentList({ onPaymentSelect }) {

    const [selectedPayment, setSelectedPayment] = useState("COD");
    const [isPressed, setIsPressed] = useState(false);

    const { getDefaultPayment, setDefaultPayment } = usePayment();

    const handlePress = (index) => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
            setSelectedPayment(index);
            setDefaultPayment(index);
            if (onPaymentSelect) {
                onPaymentSelect(index);
            }
        }, 1000);
    };

    useEffect(() => {
        const fetchCartData = async () => {
            const currentPayment = await getDefaultPayment();
            setSelectedPayment(currentPayment);
        };

        fetchCartData();
    }, [selectedPayment]);

    return (
        <View>
            <CodCard
                selectedPayment={selectedPayment}
                isPressed={isPressed}
                onPress={() => handlePress("COD")}
            />
            <BankingCard
                selectedPayment={selectedPayment}
                isPressed={isPressed}
                onPress={() => handlePress("Online Payment")}
            />
        </View>
    );
}

export default PaymentList;
