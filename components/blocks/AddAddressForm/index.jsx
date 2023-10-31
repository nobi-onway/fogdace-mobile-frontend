import { View, Text } from "react-native";
import React, { useState } from "react";

import styles from "./style";
import { FormInput, FormInputDate, LinkableButton } from "../../elements";
import { useForm } from "react-hook-form";
import usePet from "../../../hooks/usePet";
import useNavigation from "../../../hooks/useNavigation";

export default function AddAddressForm() {
    const { control } = useForm();
   

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.input_title}>Nhập họ và tên*</Text>
                <FormInput control={control} type="received_username" />
            </View>
            <View>
                <Text style={styles.input_title}>SDT người nhận hàng*</Text>
                <FormInput control={control} type="received_phone" />
            </View>
            <View>
                <Text style={styles.input_title}>Thành phố</Text>
                <FormInput control={control} type="received_province" />
            </View>
            <View>
                <Text style={styles.input_title}>Quận*</Text>
                <FormInput control={control} type="received_district" />
            </View>
            <View>
                <Text style={styles.input_title}>Số nhà, tên đường*</Text>
                <FormInput control={control} type="received_address" />
            </View>
            <LinkableButton >Thêm</LinkableButton>
        </View>
    );
}
