import { Dimensions, Text } from "react-native";
import { ContentContainer } from "../../../components/elements";
import { SignUpForm } from "../../../components/blocks";
import styles from "../../global.style";

function SignUp() {
  return (
    <ContentContainer>
      <Text
        style={[
          styles.title_md,
          { width: Dimensions.get("screen").width * 0.6 },
        ]}
      >
        Số điện thoại hoặc Email của bạn là gì?
      </Text>
      <SignUpForm style={styles.margin_col_lg} />
    </ContentContainer>
  );
}

export default SignUp;
