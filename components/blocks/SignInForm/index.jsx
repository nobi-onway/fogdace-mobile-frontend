import { View, Text, TouchableOpacity } from "react-native";
import { FormInput, LinkableButton } from "../../elements";
import styles from "./style";
import { useForm } from "react-hook-form";
import { SIZES } from "../../../constants";

function SignInForm({ handleNavigateToSignUp }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("onSubmit");
  };

  return (
    <View style={{ marginVertical: SIZES.jumbo }}>
      <View>
        <FormInput type="username" control={control} />
        <FormInput type="password" control={control} />
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text style={styles.forgetPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <LinkableButton handlePress={handleSubmit(onSubmit)}>
        Đăng nhập
      </LinkableButton>
      <LinkableButton handlePress={handleNavigateToSignUp} type="basic">
        Chưa có tài khoản?{" "}
        <Text style={{ textDecorationLine: "underline" }}>Đăng ký</Text>
      </LinkableButton>
    </View>
  );
}

export default SignInForm;
