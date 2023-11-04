import { View, Text, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";

import styles from "./style";
import {
  FormInput,
  FormInputDate,
  ImageUploader,
  LinkableButton,
} from "../../elements";
import { useForm } from "react-hook-form";
import RadioGroup from "../RadioGroup";
import usePet from "../../../hooks/usePet";
import useNavigation from "../../../hooks/useNavigation";
import { userStore } from "../../../stores/userStore";
import useNotify from "../../../hooks/useNotify";

export default function CreatePetForm({ pet_type }) {
  const { control, handleSubmit } = useForm();
  const [avatar, setAvatar] = useState("");
  const { go_to_menu } = useNavigation();
  const { info } = userStore();
  const { create_pet_profile, update_pet_health_profile_of } = usePet();

  const onSubmit = async (data) => {
    const {
      pet_name,
      pet_birthday,
      pet_description,
      pet_weight,
      pet_gender,
      is_triet_san,
    } = data;

    const { type } = pet_type;
    const { notify } = useNotify();

    const pet_data = {
      owner: info._id,
      name: pet_name,
      avatar: avatar || "https://ph-files.imgix.net/34b74f45-ebd4-4cab-a627-2833ca7214f8.png?auto=format",
      gender: pet_gender,
      birthday: pet_birthday,
      type: type,
      description: pet_description,
    };

    const health_profile_id = await create_pet_profile(pet_data);


    await update_pet_health_profile_of(health_profile_id, {
      weight: pet_weight,
    });
    await update_pet_health_profile_of(health_profile_id, {
      triet_san: is_triet_san,
    });
    await notify("Tạo thú cưng nè.", "Thành công ời!");

    go_to_menu();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.input_title}>Hình ảnh của thú cưng</Text>
        <ImageUploader onUpload={setAvatar} />
      </View>
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
          <RadioGroup control={control} type="pet_gender" />
        </View>
        <View style={styles.radio_group}>
          <Text style={styles.input_title}>Đã triệt sản hay chưa</Text>
          <RadioGroup control={control} type="pet_triet_san" />
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
