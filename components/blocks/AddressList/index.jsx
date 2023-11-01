
import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import AddressCard from '../../elements/AddressCard'
import { useState, useEffect } from "react";
import { COLORS, FONTS } from '../../../constants';
import useNavigation from '../../../hooks/useNavigation';
import useAddress from '../../../hooks/useAddress';
import { userStore } from '../../../stores/userStore';

function AddressList() {
    
    const { go_to_add_address } = useNavigation();

    const { info } = userStore();

    const [addressData, setAddressData] = useState();
    const [selectedAddress, setSelectedAddress] = useState();

    const { get_address_by_id, set_default_address } = useAddress();

    useEffect(() => {
        const addressList = async () => {
            const data = await get_address_by_id(info._id);
            setAddressData(data);
        };
        addressList();
    }, [selectedAddress]);

    const handleAddressSelect = (index) => {
        setSelectedAddress(index);
    };
    return (
        <View>
            {addressData?.map((address) => (
                <AddressCard
                    userId={info._id}
                    key={address._id}
                    address={address}
                    isSelected={address.is_default === true}
                    onSelect={() => handleAddressSelect(address._id)}
                    set_default_address={set_default_address}
                />
            ))}
            <TouchableOpacity
                style={{ alignItems: 'center', backgroundColor: COLORS.darkGrey, marginHorizontal: 18, borderRadius: 6, paddingVertical: 12, marginTop: 20 }}
                onPress={() => { go_to_add_address({}) }}
            >
                <Text style={{ fontFamily: FONTS.bold }}>Thêm</Text>
            </TouchableOpacity>

        </View>
    );
}

export default AddressList;