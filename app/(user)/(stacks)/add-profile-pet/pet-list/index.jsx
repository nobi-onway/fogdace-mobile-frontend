import { View } from "react-native";
import { PetList } from "../../../../../components/blocks";
import { StripePayment } from "../../../../../components/elements";

const PetListAddProfile = () => {
  return (
    <View>
      <PetList />
      <StripePayment />
    </View>
  );
};

export default PetListAddProfile;
