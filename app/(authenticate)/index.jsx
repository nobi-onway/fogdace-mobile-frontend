import { View } from "react-native";
import {
  Banner,
  ContentContainer,
  LinkableButton,
} from "../../components/elements";
import { Welcome } from "../../components/blocks";
import { IMAGES } from "../../constants";
import { useRouter } from "expo-router";

function WelcomePage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Banner source={IMAGES.banner} />
      <ContentContainer>
        <Welcome handleNavigateToSignIn={() => router.push("/sign-in")} />
      </ContentContainer>
      <LinkableButton handlePress={() => router.push("/feed")}>
        GO TO USER PAGE
      </LinkableButton>
    </View>
  );
}

export default WelcomePage;
