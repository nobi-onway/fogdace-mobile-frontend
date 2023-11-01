import { Text, View } from "react-native";
import {
  CheckBox,
  FormInput,
  ImageUploader,
  LinkableButton,
} from "../../elements";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import styles from "./style";
import useAuth from "../../../hooks/useAuth";

function SignUpForm({ style }) {
  const { control, handleSubmit, watch } = useForm();
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const { sign_up_with_email } = useAuth();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    const { username, password } = data;
    sign_up_with_email(username, password);
  };

  return (
    <View style={style}>
      <FormInput control={control} type="username" />
      <FormInput control={control} type="password" />
      <FormInput
        control={control}
        type="confirmPassword"
        placeholder={"Nhập lại mật khẩu"}
        validated={password === confirmPassword}
      />
      <View style={styles.policyWrapper}>
        <CheckBox
          checked={policyAccepted}
          handlePress={() => setPolicyAccepted(!policyAccepted)}
        />
        <Text style={styles.policyContent}>
          Đồng ý với điều khoản sử dụng FogDace
        </Text>
      </View>
      <LinkableButton
        type={policyAccepted ? "primary" : "disable"}
        handlePress={handleSubmit(onSubmit)}
      >
        Đăng ký
      </LinkableButton>
   
    </View>
  );
}

export default SignUpForm;
