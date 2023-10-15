import { Text, View } from "react-native";
import { CheckBox, FormInput, LinkableButton } from "../../elements";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import styles from "./style";

function SignUpForm({ style }) {
  const { control, handleSubmit, watch } = useForm();
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    console.log("onSubmit: " + data);
  };

  return (
    <View style={style}>
      <FormInput
        control={control}
        type="username"
        placeholder={"Tên đăng nhập"}
      />
      <FormInput control={control} type="password" placeholder={"Mật khẩu"} />
      <FormInput
        control={control}
        type="confirmPassword"
        placeholder={"Nhập lại mật khẩu"}
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
