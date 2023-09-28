import { Keyboard, TouchableWithoutFeedback, Text } from "react-native";
import { ContentContainer, Logo } from "../../components/elements";
import SignInForm from "../../components/blocks/SignInForm";

function SignIn() {
  return (
    <ContentContainer>
      <Logo border />
      <Text>Mừng bạn trở lại</Text>
      <Text>Nhập thông tin đăng nhập của bạn để tiếp tục khám phá</Text>
      <SignInForm />
    </ContentContainer>
  );
}

export default SignIn;
