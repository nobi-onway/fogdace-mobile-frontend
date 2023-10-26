
import React from 'react';
import { ScrollView, Text, View,TouchableOpacity } from 'react-native';
import AddressCard from '../../elements/AddressCard'
import { useState } from "react";
import { COLORS } from '../../../constants';
const addressData = [
    {
        name: 'Trường Giang',
        phone: '0981890260',
        address: 'Tân Lập, Phường Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh',
    },
    {
        name: 'Việt ngu',
        phone: '1234567890',
        address: 'Quốc lộ 51, thị xã Mỹ Tho, huyện Phú Giáo Vương quốc Bình Dương',
    },
];


function AddressList() {
    const [selectedAddress, setSelectedAddress] = useState(0);

    const handleAddressSelect = (index) => {
        setSelectedAddress(index);
    };
    return (
        <ScrollView>
            {addressData.map((address, index) => (
                <AddressCard
                    key={index}
                    address={address}
                    isSelected={selectedAddress === index}
                    onSelect={() => handleAddressSelect(index)}
                />
            ))}
            <TouchableOpacity style={{ alignItems: 'center',backgroundColor:COLORS.darkGrey,marginHorizontal:18,borderRadius:6,paddingVertical:12,marginTop:20 }}>
                <Text>Thêm</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export default AddressList;