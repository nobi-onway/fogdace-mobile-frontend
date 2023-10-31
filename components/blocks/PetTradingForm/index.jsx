import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./style";
import { FormInput, LinkableButton, ToggleButton } from "../../elements";
import PetSelectionInput from "../PetSelectionInput";
import useChat from "../../../hooks/useChat";

const MY_PETS = [
  {
    _id: "1",
    avatar:
      "https://opet.com.vn/wp-content/uploads/2022/03/meo-anh-long-ngan-opet-15.jpg",
    name: "Kem",
    type: "Mèo Anh Lông ngắn",
  },
  {
    _id: "2",
    avatar:
      "https://opet.com.vn/wp-content/uploads/2022/03/meo-anh-long-ngan-opet-15.jpg",
    name: "Kem",
    type: "Mèo Anh Lông ngắn",
  },
  {
    _id: "3",
    avatar:
      "https://opet.com.vn/wp-content/uploads/2022/03/meo-anh-long-ngan-opet-15.jpg",
    name: "Kem",
    type: "Mèo Anh Lông ngắn",
  },
];
const TRADING_PETS = [
  {
    _id: "653e2127382e236194c6309e",
    avatar:
      "https://matpetfamily.com/wp-content/uploads/2022/08/10016876d8a41dfa44b5.jpg",
    name: "Su",
    type: "Mèo Golden",
  },
  {
    _id: "4",
    avatar:
      "https://matpetfamily.com/wp-content/uploads/2022/08/10016876d8a41dfa44b5.jpg",
    name: "Su",
    type: "Mèo Golden",
  },
  {
    _id: "5",
    avatar:
      "https://matpetfamily.com/wp-content/uploads/2022/08/10016876d8a41dfa44b5.jpg",
    name: "Su",
    type: "Mèo Golden",
  },
];

export default function PetTradingForm({ requester, accepter, onSubmitForm }) {
  const [isFeePayer, setIsFeePayer] = useState(false);
  const { control, handleSubmit } = useForm();

  const onSubmit = (value) => {
    const { money, requester_pet, accepter_pet, trading_item } = value;

    const trading_order_data = {
      code: `PTO-${requester._id.substring(0, 3)}-${accepter._id.substring(
        0,
        3
      )}-${money}`,
      requester: {
        ...requester,
        pet_id: requester_pet._id,
        deposits: 100,
      },
      accepter: {
        ...accepter,
        pet_id: accepter_pet._id,
        deposits: 100,
      },
      items: trading_item,
      fee_payer: isFeePayer ? requester._id : accepter._id,
      fee_payer_name: isFeePayer ? requester.name : accepter.name,
      price: money,
    };
    onSubmitForm(trading_order_data);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mèo bạn muốn đổi:</Text>
      <PetSelectionInput
        control={control}
        name={"requester_pet"}
        pets={MY_PETS}
      />
      <Text style={styles.title}>Mèo bạn muốn nhận:</Text>
      <PetSelectionInput
        control={control}
        name={"accepter_pet"}
        pets={TRADING_PETS}
      />
      <Text style={styles.title}>Bạn muốn trao đổi thêm:</Text>
      <FormInput control={control} type={"trading_item"} />
      <View style={styles.fee_wrapper}>
        <View style={{ flex: 0.7 }}>
          <Text style={styles.title}>Tiền trao đổi: </Text>
          <FormInput control={control} type={"money"} />
        </View>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.fee_payer(isFeePayer)}>
            {isFeePayer ? `Là người trả tiền` : `Là người nhận tiền`}
          </Text>
          <ToggleButton onToggle={setIsFeePayer} />
        </View>
      </View>
      <LinkableButton handlePress={handleSubmit(onSubmit)}>
        Tạo yêu cầu trao đổi
      </LinkableButton>
    </ScrollView>
  );
}
