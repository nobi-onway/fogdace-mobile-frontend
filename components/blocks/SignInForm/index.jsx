import { View, Text, TouchableOpacity } from "react-native";
import { FormInput, LinkableButton } from "../../elements";
import styles from "./style";
import { useForm } from "react-hook-form";
import { SIZES } from "../../../constants";
import useNavigation from "../../../hooks/useNavigation";

function SignInForm() {
  const { control, handleSubmit } = useForm();
  const { go_to_sign_up } = useNavigation();

  const onSubmit = () => {
    console.log("onSubmit");
  };

  return (
    <View style={{ marginVertical: SIZES.jumbo }}>
      <View>
        <FormInput
          type="username"
          control={control}
          placeholder="Nhập tên đăng nhập"
        />
        <FormInput type="password" control={control} placeholder="Mật khẩu" />
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text style={styles.forgetPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <LinkableButton handlePress={handleSubmit(onSubmit)}>
        Đăng nhập
      </LinkableButton>
      <LinkableButton handlePress={go_to_sign_up} type="basic">
        Chưa có tài khoản?{" "}
        <Text style={{ textDecorationLine: "underline" }}>Đăng ký</Text>
      </LinkableButton>
    </View>
  );
}

export default SignInForm;
