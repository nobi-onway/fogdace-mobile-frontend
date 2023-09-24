import { Link } from "expo-router";
import { Text, View } from "react-native";

function SignIn() {
  return (
    <View>
      <Text>Welcome SignIn</Text>
      <Link href={"/sign-up"}>Sign Up</Link>
    </View>
  );
}

export default SignIn;
