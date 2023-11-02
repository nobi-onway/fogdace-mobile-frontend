import OrderConfirm from "../../../../components/blocks/OrderConfirm";
import { ScrollView, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { COLORS, FONTS } from "../../../../constants";
import CustomBottomSheet from "../../../../components/elements/CustomBottomSheet";
import { useRef, useState, useEffect } from "react";
import AddressBook from "../shopping-option/address-book";
import useAddress from "../../../../hooks/useAddress";
import { userStore } from "../../../../stores/userStore";
const Checkout = () => {

  const bottomSheetRef = useRef(null);
  const { info } = userStore();
  const [addressData, setAddressData] = useState();
  const [addressId, setAddressId] = useState();
  const { get_address_by_id } = useAddress();

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  }

  const handleAddressSelection = (selectedAddress) => {
    console.log("ê", selectedAddress);
    setAddressId(selectedAddress)
  };



  useEffect(() => {
    const addressList = async () => {
      const data = await get_address_by_id(info._id);
      
      if (addressId) {
        // Nếu có địa chỉ được chọn, sử dụng địa chỉ đã chọn
        const selectedAddress = data.find((address) => address._id === addressId);
        if (selectedAddress) {
          setAddressData([selectedAddress]);
        }
      } else {
        // Nếu không có địa chỉ được chọn, tìm địa chỉ có is_default === true
        const defaultAddress = data.find((address) => address.is_default === true);
        if (defaultAddress) {
          setAddressData([defaultAddress]);
        }
      }
      console.log("address:", addressData);
    };
    addressList();
  }, [addressId]);
  return (
    <View style={{ height: '100%', backgroundColor: COLORS.white }}>
      <OrderConfirm handleOpenBottomSheet={handleOpenBottomSheet} addressData={addressData} />
      <CustomBottomSheet ref={bottomSheetRef}>
        <AddressBook
          onAddressSelect={(selectedAddress) => handleAddressSelection(selectedAddress)}
        />
      </CustomBottomSheet>
    </View>
  );
};

export default Checkout;
