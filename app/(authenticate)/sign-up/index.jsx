import { Link } from "expo-router";
import { Text, View } from "react-native";

function SignUp() {
  return (
    <View>
      <Text>Welcome SignUp</Text>
      <Link href={"/sign-in"}>Sign In</Link>
    </View>
  );
}

export default SignUp;
