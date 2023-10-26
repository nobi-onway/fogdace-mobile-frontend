import { View, Text } from "react-native";
import React, { useState } from "react";

import styles from "./style";
import { FormInput, FormInputDate, LinkableButton } from "../../elements";
import { useForm } from "react-hook-form";
import RadioGroup from "../RadioGroup";

export default function CreatePetForm() {
  const { control, handleSubmit } = useForm();
  const [gender, setGender] = useState("Đực");
  const [triet_san, setTriet_san] = useState("Rồi");

  const onSubmit = (data) => {
    console.log({ ...data, gender, triet_san });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.input_title}>Tên thú cưng</Text>
        <FormInput control={control} type="pet_name" />
      </View>
      <View>
        <Text style={styles.input_title}>Mô tả về thú cưng</Text>
        <FormInput control={control} type="pet_description" />
      </View>
      <View>
        <Text style={styles.input_title}>Sinh nhật</Text>
        <FormInputDate control={control} type="pet_birthday" />
      </View>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <View style={styles.radio_group}>
          <Text style={styles.input_title}>Giới tính</Text>
          <RadioGroup
            selectedOption={gender}
            onOptionSelect={(value) => setGender(value)}
            options={["Đực", "Cái"]}
          />
        </View>
        <View style={styles.radio_group}>
          <Text style={styles.input_title}>Đã triệt sản hay chưa</Text>
          <RadioGroup
            selectedOption={triet_san}
            onOptionSelect={(value) => setTriet_san(value)}
            options={["Rồi", "Chưa"]}
          />
        </View>
      </View>
      <View>
        <Text style={styles.input_title}>Cân nặng</Text>
        <FormInput control={control} type="pet_weight" />
      </View>
      <LinkableButton handlePress={handleSubmit(onSubmit)}>Thêm</LinkableButton>
    </View>
  );
}
