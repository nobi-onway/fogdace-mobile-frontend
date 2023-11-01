import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import CartCard from '../../elements/CartCard';
import { COLORS, IMAGES } from '../../../constants';
import styles from './style';
import useNavigation from '../../../hooks/useNavigation';

const cartData = [
    {
        id: 1,
        image: IMAGES.cathouse,
        name: 'Nhà cây cho mèo kèm lồng kính CH030',
        price: 100,
        quantity: 1,
    },
    {
        id: 2,
        image: IMAGES.cathouse,
        name: 'Nhà cây cho mèo - Cat trê CT016',
        price: 30,
        quantity: 2,
    },
    {
        id: 3,
        image: IMAGES.cathouse,
        name: 'Nhà cây cho mèo - Việt ngu 1234',
        price: 1400,
        quantity: 2,
    },
];

function CartList({ modalVisible, setModalVisible }) {
    const { go_to_checkout } = useNavigation();

    const [selectedCarts, setSelectedCarts] = useState([]);
    const [selectAllSelected, setSelectAllSelected] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

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
            const product = products.find((item) => item.id === cartData[index].id);
            total += parseFloat(product.price) * parseInt(product.quantity);
        });
        return total;
    };

    return (
        <View style={{ height: '100%', backgroundColor: COLORS.primaryOrder }}>
            <ScrollView>
                {cartData.map((cart, index) => (
                    <CartCard
                        key={index}
                        cart={cart}
                        isSelected={selectedCarts.includes(index)}
                        onSelect={() => handleCartSelect(index)}
                        modalVisible={modalVisible === cart.id}
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        go_to_checkout({});
                    }}
                >
                    <Text style={styles.textCheckout}>Trang thanh toán </Text>
                    <View style={styles.dot}></View>
                    <Text style={styles.textCheckout}> {totalPrice}$ </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CartList;
