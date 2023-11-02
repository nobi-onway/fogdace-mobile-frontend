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

    const { getCart, getSelectedItemsFromCart } = useCart();
    const [cartData, setCartData] = useState([]);
    const [cartUpdated, setCartUpdated] = useState(false);

    const [selectedCarts, setSelectedCarts] = useState([]);

    const [selectAllSelected, setSelectAllSelected] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const cartItems = await getCart();
                setCartData(cartItems);
            } catch (error) {
                console.error('Error fetching cart data', error);
            }
        };

        fetchCartData();
    }, [cartUpdated]);

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

    const handleCartUpdate = () => {
        setCartUpdated((prev) => !prev);
    };

    const handleCheckout = async () => {
        const selectedItems = await getSelectedItemsFromCart(selectedCarts);
        const checkoutData = {
            cartItems: JSON.stringify(selectedItems),
            totalPrice: totalPrice
        };
        go_to_checkout(checkoutData);
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
                        handleCartUpdate={handleCartUpdate}
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
                {cartData.length < 1 || selectedCarts.length < 1 ?
                    (
                        <View
                            style={[styles.button, { backgroundColor: COLORS.darkGrey }]}
                        >
                            <Text style={[styles.textCheckout, { color: COLORS.slategray }]}>Trang thanh toán </Text>
                            <View style={[styles.dot, { backgroundColor: COLORS.slategray }]}></View>
                            <Text style={[styles.textCheckout, { color: COLORS.slategray }]}> {totalPrice}.0$ </Text>
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                handleCheckout();
                            }}
                        >
                            <Text style={styles.textCheckout}>Trang thanh toán </Text>
                            <View style={styles.dot}></View>
                            <Text style={styles.textCheckout}> {totalPrice}.0$ </Text>
                        </TouchableOpacity>)}
            </View>
        </View>
    );
}

export default CartList;
