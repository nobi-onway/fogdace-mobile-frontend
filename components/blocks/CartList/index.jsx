import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import CartCard from '../../elements/CartCard'
import { COLORS, IMAGES } from '../../../constants';
import styles from './style';

const cartData = [
    {
        image: IMAGES.cathouse,
        name: 'Nhà cây cho mèo kèm lồng kính CH030',
        price: '100$',
        quantity: '1',
    },
    {
        image: IMAGES.cathouse,
        name: 'Nhà cây cho mèo - Cat trê CT016',
        price: '30$',
        quantity: '2',
    },
    {
        image: IMAGES.cathouse,
        name: 'Việt ngu',
        price: '1400$',
        quantity: '2',
    },
];

function CartList() {

    const [selectedCarts, setSelectedCarts] = useState([]);
    const [selectAllSelected, setSelectAllSelected] = useState(false);

    const handleCartSelect = (index) => {
        const updatedSelection = [...selectedCarts];

        if (selectedCarts.includes(index)) {
            updatedSelection.splice(updatedSelection.indexOf(index), 1);
        } else {
            updatedSelection.push(index);
        }
        setSelectedCarts(updatedSelection);
        setSelectAllSelected(updatedSelection.length === cartData.length);
    };

    const handleSelectAll = () => {
        if (selectAllSelected) {
            setSelectedCarts([]);
        } else {
            setSelectedCarts([...Array(cartData.length).keys()]);
        }
        setSelectAllSelected(!selectAllSelected);
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
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textCheckout}>Trang thanh toán </Text>
                    <View style={styles.dot}></View>
                    <Text style={styles.textCheckout}> 3.000.000đ </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CartList;
