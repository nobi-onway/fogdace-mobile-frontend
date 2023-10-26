import { View, ScrollView, Text } from "react-native";
import { COLORS, FONTS } from "../../../../../constants";
import AddressList from "../../../../../components/blocks/AddressList";

const AddressBook = () => {

  return (
    <ScrollView style={{ height: '100%', backgroundColor: COLORS.white }}>
      <Text style={{ fontFamily: FONTS.bold, paddingLeft: 18, fontSize: 30, }}>Địa chỉ đã lưu</Text>
      <AddressList />
    </ScrollView>
  );
};

export default AddressBook;
