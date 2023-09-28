import { Keyboard, TouchableWithoutFeedback, Text } from "react-native";
import { ContentContainer, Logo } from "../../components/elements";
import SignInForm from "../../components/blocks/SignInForm";
import styles from "../global.style";
import { SIZES } from "../../constants";
import { useRouter } from "expo-router";

function SignIn() {
  const router = useRouter();

  return (
    <ContentContainer>
      <Logo border style={{ marginBottom: SIZES.xxLarge }} />
      <Text style={styles.title_md}>Mừng bạn trở lại!</Text>
      <Text style={styles.text_light_lg}>
        Nhập thông tin đăng nhập của bạn để tiếp tục khám phá
      </Text>
      <SignInForm handleNavigateToSignUp={() => router.push("/sign-up")} />
    </ContentContainer>
  );
}

export default SignIn;
