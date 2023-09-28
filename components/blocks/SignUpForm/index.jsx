import { Text, View } from "react-native";
import { CheckBox, FormInput, LinkableButton } from "../../elements";
import { useForm } from "react-hook-form";
import { useState } from "react";

import styles from "./style";

function SignUpForm({ style }) {
  const { control, handleSubmit, formState } = useForm();
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const onSubmit = (data) => {
    console.log(formState);
  };

  return (
    <View style={style}>
      <FormInput control={control} type="username" />
      <FormInput control={control} type="password" />
      <FormInput control={control} type="confirmPassword" />
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
        type={policyAccepted && formState.isValid ? "primary" : "disable"}
        handlePress={handleSubmit(onSubmit)}
      >
        Đăng ký
      </LinkableButton>
    </View>
  );
}

export default SignUpForm;
