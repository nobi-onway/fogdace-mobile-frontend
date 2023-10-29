import { View } from "react-native";
import { Banner, ContentContainer } from "../../components/elements";
import { Welcome } from "../../components/blocks";
import { IMAGES } from "../../constants";

function WelcomePage() {
  return (
    <View style={{ flex: 1 }}>
      <Banner source={IMAGES.banner} />
      <ContentContainer>
        <Welcome />
      </ContentContainer>
    </View>
  );
}

export default WelcomePage;
