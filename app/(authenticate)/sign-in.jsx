import { Text } from "react-native";
import {
  ContentContainer,
  CustomInput,
  LinkableButton,
  Logo,
} from "../../components/elements";
import { ICONS } from "../../constants";

function SignIn() {
  return (
    <ContentContainer>
      <Logo border />
      <Text>Mừng bạn trở lại</Text>
      <Text>Nhập thông tin đăng nhập của bạn để tiếp tục khám phá</Text>
      <CustomInput
        placeholder={"Tên đăng nhập của bạn"}
        prefix={ICONS.ionIcon_user}
      />
      <LinkableButton>Đăng nhập</LinkableButton>
      <LinkableButton type="basic">
        Chưa có tài khoản?{" "}
        <Text style={{ textDecorationLine: "underline" }}>Đăng ký</Text>
      </LinkableButton>
    </ContentContainer>
  );
}

export default SignIn;
