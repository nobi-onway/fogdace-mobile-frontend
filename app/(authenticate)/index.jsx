import { View } from "react-native";
import {
  Banner,
  ContentContainer,
  LinkableButton,
} from "../../components/elements";
import { Welcome } from "../../components/blocks";
import { IMAGES } from "../../constants";
import useNavigation from "../../hooks/useNavigation";
import { useRouter } from "expo-router";

function WelcomePage() {
  const { go_to_feed } = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Banner source={IMAGES.banner} />
      <ContentContainer>
        <Welcome />
      </ContentContainer>
      <LinkableButton handlePress={go_to_feed}>GO TO USER PAGE</LinkableButton>
    </View>
  );
}

export default WelcomePage;
