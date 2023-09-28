import { View, Text, ViewBase, TouchableOpacity } from "react-native";
import { CustomInput, LinkableButton } from "../../elements";
import { ICONS } from "../../../constants";
import styles from "./style";

function SignInForm({ handleNavigateToSignUp }) {
  return (
    <View style={styles.margin_col_jumbo}>
      <View style={styles.margin_col_sm}>
        <CustomInput
          placeholder={"Tên đăng nhập của bạn"}
          prefix={ICONS.ionIcon_user}
          style={styles.margin_col_xsm}
        />
        <CustomInput
          placeholder={"Mật khẩu"}
          prefix={ICONS.ionIcon_lock_closed}
          secure
          style={styles.margin_col_xsm}
        />
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text style={styles.forgetPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <LinkableButton style={styles.margin_col_tiny}>Đăng nhập</LinkableButton>
      <LinkableButton
        handlePress={handleNavigateToSignUp}
        style={styles.margin_col_tiny}
        type="basic"
      >
        Chưa có tài khoản?{" "}
        <Text style={{ textDecorationLine: "underline" }}>Đăng ký</Text>
      </LinkableButton>
    </View>
  );
}

export default SignInForm;
