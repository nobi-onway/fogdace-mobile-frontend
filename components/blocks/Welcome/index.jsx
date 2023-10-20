import { Text, TouchableOpacity, View } from "react-native";
import { AnimationView, LinkableButton, Logo } from "../../elements";
import styles from "./style";
import useNavigation from "../../../hooks/useNavigation";

function Welcome() {
  const { go_to_sign_in } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo rounded />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Hey,</Text>
        <Text style={[styles.primaryTitle]}>Xin chào</Text>
      </View>
      <AnimationView type={"welcome"} />
      <LinkableButton handlePress={go_to_sign_in}>
        Đăng nhập bằng tài khoản của FogDace
      </LinkableButton>
      <View style={styles.policyWrapper}>
        <Text>Bấm đăng nhập có nghĩa là bạn đồng ý</Text>
        <TouchableOpacity>
          <Text style={styles.highlight}>
            Các điều khoản sử dụng của FogDace
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome;
