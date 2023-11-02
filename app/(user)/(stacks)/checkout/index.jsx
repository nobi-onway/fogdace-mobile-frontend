import OrderConfirm from "../../../../components/blocks/OrderConfirm";
import { ScrollView, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { COLORS, FONTS } from "../../../../constants";
import CustomBottomSheet from "../../../../components/elements/CustomBottomSheet";
import { useRef, useState, useEffect } from "react";
import AddressBook from "../shopping-option/address-book";
import PaymentMethod from "../shopping-option/payment-method"
import useAddress from "../../../../hooks/useAddress";
import { userStore } from "../../../../stores/userStore";
import PaymentList from "../../../../components/blocks/PaymentList";
import usePayment from "../../../../hooks/usePayment";

const Checkout = () => {

  const bottomAddressSheetRef = useRef(null);
  const bottomPaymentSheetRef = useRef(null);

  const { info } = userStore();
  const { get_address_by_id } = useAddress();
  const { setDefaultPayment, getDefaultPayment } = usePayment();


  const [addressData, setAddressData] = useState();
  const [addressId, setAddressId] = useState();

  const [selectedPayment, setSelectedPayment] = useState();

  const handleOpenAddressBottomSheet = () => {
    bottomAddressSheetRef.current?.expand();
  }

  const handleOpenPaymentBottomSheet = () => {
    bottomPaymentSheetRef.current?.expand();
  }

  const handleAddressSelection = (selectedAddress) => {
    setAddressId(selectedAddress)
  };

  const handlePaymentSelection = (selectedPayment) => {
    setDefaultPayment(selectedPayment)
    setSelectedPayment(selectedPayment)
  };

  useEffect(() => {
    const fetchCartData = async () => {
      const currentPayment = await getDefaultPayment();
      setSelectedPayment(currentPayment);
    };

    fetchCartData();
  }, [selectedPayment]);

  useEffect(() => {
    const addressList = async () => {
      const data = await get_address_by_id(info._id);

      if (addressId) {
        const selectedAddress = data.find((address) => address._id === addressId);
        if (selectedAddress) {
          setAddressData(selectedAddress);
        }
      } else {
        const defaultAddress = data.find((address) => address.is_default === true);
        if (defaultAddress) {
          setAddressData(defaultAddress);
        }
      }
    };
    addressList();
  }, [addressId]);

  return (
    <View style={{ height: '100%', backgroundColor: COLORS.white }}>
      <OrderConfirm
        handleOpenAddressBottomSheet={handleOpenAddressBottomSheet}
        handleOpenPaymentBottomSheet={handleOpenPaymentBottomSheet}
        addressData={addressData}
        payment={selectedPayment}
      />
      <CustomBottomSheet ref={bottomAddressSheetRef}>
        <AddressBook
          onAddressSelect={(selectedAddress) => handleAddressSelection(selectedAddress)}
        />
      </CustomBottomSheet>
      <CustomBottomSheet ref={bottomPaymentSheetRef}>
        <PaymentMethod
          onPaymentSelect={(selectedPayment) => handlePaymentSelection(selectedPayment)}
        />
      </CustomBottomSheet>
    </View>
  );
};

export default Checkout;
