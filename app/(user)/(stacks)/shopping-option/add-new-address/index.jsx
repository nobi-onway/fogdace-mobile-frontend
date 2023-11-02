import { View, ScrollView, Text } from "react-native";
import { COLORS, FONTS } from "../../../../../constants";
import AddAddress from "../../../../../components/blocks/AddAddressForm";
import { Stack } from "expo-router";
const AddressNewAddress = () => {

  return (
    <ScrollView style={{ height: '100%', backgroundColor: COLORS.white }}>
      <Stack.Screen options={{ title: "Địa chỉ mới" }} />
      <AddAddress />
    </ScrollView>
  );
};

export default AddressNewAddress;
