import { Text, TouchableOpacity, View, Image } from "react-native";
import { LinkableButton, Logo } from "../../elements";
import { COLORS, ANIMATIONS, SIZES, IMAGES } from "../../../constants";
import styles from "./style";
import LottieView from "lottie-react-native";

function Welcome({ handleNavigateToSignIn }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo rounded />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Hey,</Text>
        <Text style={[styles.primaryTitle]}>Xin chào</Text>
      </View>
      <View style={{ marginVertical: SIZES.medium }}>
        <LottieView
          style={{ width: 240, height: 240 }}
          source={ANIMATIONS.welcome}
          autoPlay
          loop
          resizeMode="contain"
        />
      </View>
      <LinkableButton handlePress={handleNavigateToSignIn}>
        Đăng nhập bằng tài khoản của FogDace
      </LinkableButton>
      <View style={styles.policyWrapper}>
        <Text>Bấm đăng nhập có nghĩa là bạn đồng ý</Text>
        <TouchableOpacity>
          <Text style={styles.highlight}>Các điều khoản sử dụng của Pety</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome;
