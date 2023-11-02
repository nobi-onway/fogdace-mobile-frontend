import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import CartCard from '../../elements/CartCard';
import { COLORS, IMAGES } from '../../../constants';
import styles from './style';
import useNavigation from '../../../hooks/useNavigation';
import useCart from '../../../hooks/useCart';
import Empty from '../../elements/Empty'

function CartList({ modalVisible, setModalVisible }) {
    const { go_to_checkout } = useNavigation();

    const { getCart } = useCart();
    const [cartData, setCartData] = useState([]);

    const [selectedCarts, setSelectedCarts] = useState([]);
    const [selectAllSelected, setSelectAllSelected] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        getCart().then((cartItems) => {
            setCartData(cartItems);
        });
        // AsyncStorage.clear()
    }, []);

    const handleCartSelect = (index) => {
        const updatedSelection = [...selectedCarts];

        if (selectedCarts.includes(index)) {
            updatedSelection.splice(updatedSelection.indexOf(index), 1);
        } else {
            updatedSelection.push(index);
        }
        setSelectedCarts(updatedSelection);
        setSelectAllSelected(updatedSelection.length === cartData.length);
        setTotalPrice(calculateTotalPrice(updatedSelection, cartData));
    };

    const handleSelectAll = () => {
        if (selectAllSelected) {
            setSelectedCarts([]);
            setTotalPrice(0);
        } else {
            setSelectedCarts([...Array(cartData.length).keys()]);
            setTotalPrice(calculateTotalPrice([...Array(cartData.length).keys()], cartData));
        }
        setSelectAllSelected(!selectAllSelected);
    };

    const calculateTotalPrice = (selectedIndexes, products) => {
        let total = 0;
        selectedIndexes.forEach((index) => {
            const product = products[index];
            total += parseFloat(product.price) * parseInt(product.quantity);
        });
        return total;
    };

    return (
        <View style={{ height: '100%', backgroundColor: COLORS.primaryOrder }}>
            {cartData.length < 1 && <Empty />}
            <ScrollView style={{ marginBottom: 105, height: '100%' }}>
                {cartData.map((cart, index) => (
                    <CartCard
                        key={index}
                        cart={cart}
                        isSelected={selectedCarts.includes(index)}
                        onSelect={() => handleCartSelect(index)}
                        modalVisible={modalVisible === cart._id}
                        setModalVisible={(id) => setModalVisible(id)}
                    />
                ))}
            </ScrollView>
            <View style={styles.bottomCart}>
                <View style={styles.wrapperBottom}>
                    <TouchableOpacity
                        style={[
                            styles.wrapperCheck,
                            selectAllSelected ? [styles.contentClick] : null,
                        ]}
                        onPress={handleSelectAll}
                    >
                        {selectAllSelected && (
                            <Image
                                resizeMode="cover"
                                style={{ width: 20, height: 20 }}
                                source={IMAGES.whiteCheck}
                            />
                        )}
                    </TouchableOpacity>
                    <Text style={styles.textCheck}>Chọn mua tất cả</Text>
                </View>
                {cartData.length < 1 ?
                    (
                        <View
                            style={[styles.button, { backgroundColor: COLORS.darkGrey }]}
                        >
                            <Text style={[styles.textCheckout, { color: COLORS.slategray }]}>Trang thanh toán </Text>
                            <View style={[styles.dot, { backgroundColor: COLORS.slategray }]}></View>
                            <Text style={[styles.textCheckout, { color: COLORS.slategray }]}> {totalPrice}$ </Text>
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                go_to_checkout(cartData);
                            }}
                        >
                            <Text style={styles.textCheckout}>Trang thanh toán </Text>
                            <View style={styles.dot}></View>
                            <Text style={styles.textCheckout}> {totalPrice}$ </Text>
                        </TouchableOpacity>)}
            </View>
        </View>
    );
}

export default CartList;
