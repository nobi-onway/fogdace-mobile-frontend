import registerNNPushToken from "native-notify";
import { View } from "react-native";
import { Welcome } from "../../components/blocks";
import { Banner, ContentContainer } from "../../components/elements";
import { IMAGES } from "../../constants";
import { APP_ID, APP_TOKEN } from "../../constants/keys";

function WelcomePage() {
  registerNNPushToken(APP_ID, APP_TOKEN);

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
