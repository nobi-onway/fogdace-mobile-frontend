import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { FormInput, LinkableButton } from "../../elements";
import { useForm } from "react-hook-form";
import useAddress from "../../../hooks/useAddress";
import { userStore } from "../../../stores/userStore";

export default function AddAddressForm() {
    const { control, handleSubmit } = useForm();

    const { add_new_address } = useAddress();

    const { info } = userStore();

    const onSubmit = async (data) => {
        const { name_user, phone_user, home_address, district } = data;

        const addressData = {
            name_user,
            phone_user,
            address: `${district},Thành Phố Hồ Chính Minh`,
            home_address,
        }
        
        await add_new_address(info._id, {
            addressData,
        });

    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.input_title}>Nhập họ và tên*</Text>
                <FormInput control={control} type="name_user" />
            </View>
            <View>
                <Text style={styles.input_title}>SDT người nhận hàng*</Text>
                <FormInput control={control} type="phone_user" />
            </View>
            <View>
                <Text style={styles.input_title}>Thành phố</Text>
                <FormInput control={control} type="province" />
            </View>
            <View>
                <Text style={styles.input_title}>Quận*</Text>
                <FormInput control={control} type="district" />
            </View>
            <View>
                <Text style={styles.input_title}>Số nhà, tên đường*</Text>
                <FormInput control={control} type="home_address" />
            </View>
            <LinkableButton handlePress={handleSubmit(onSubmit)}>Thêm</LinkableButton>
        </View>
    );
}
