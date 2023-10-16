import { Text } from "react-native";
import { ContentContainer, Logo } from "../../components/elements";
import { SignInForm } from "../../components/blocks";
import styles from "../global.style";

function SignIn() {
  return (
    <ContentContainer>
      <Logo border />
      <Text style={[styles.title_md, styles.margin_col_sm]}>
        Mừng bạn trở lại!
      </Text>
      <Text style={styles.text_light_lg}>
        Nhập thông tin đăng nhập của bạn để tiếp tục khám phá
      </Text>
      <SignInForm />
    </ContentContainer>
  );
}

export default SignIn;
