import { View } from "react-native";
import { Banner, ContentContainer } from "../../components/elements";
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
    </View>
  );
}

export default WelcomePage;
