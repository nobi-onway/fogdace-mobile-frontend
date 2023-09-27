import { Text } from "react-native";
import {
  ContentContainer,
  LinkableButton,
  Logo,
} from "../../components/elements";
import { COLORS } from "../../constants";

function SignIn() {
  return (
    <ContentContainer>
      <Logo border />
      <Text>Mừng bạn trở lại</Text>
      <Text>Nhập thông tin đăng nhập của bạn để tiếp tục khám phá</Text>
      <LinkableButton>Đăng nhập</LinkableButton>
      <LinkableButton type="basic">
        Chưa có tài khoản?{" "}
        <Text style={{ textDecorationLine: "underline" }}>Đăng ký</Text>
      </LinkableButton>
    </ContentContainer>
  );
}

export default SignIn;
