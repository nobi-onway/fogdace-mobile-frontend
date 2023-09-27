import { Link } from "expo-router";
import { Text, View } from "react-native";
import { ContentContainer } from "../../components/elements";

function SignUp() {
  return (
    <ContentContainer>
      <Text>Welcome SignUp</Text>
      <Link href={"/sign-in"}>Sign In</Link>
    </ContentContainer>
  );
}

export default SignUp;
