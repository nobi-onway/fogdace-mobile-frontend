import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./style";
import { FormInput, LinkableButton, ToggleButton } from "../../elements";
import PetSelectionInput from "../PetSelectionInput";
import usePetTrading from "../../../hooks/usePetTrading";

export default function PetTradingForm({ requester, accepter, onSubmitForm }) {
  const [isFeePayer, setIsFeePayer] = useState(false);
  const [requesterPets, setRequesterPets] = useState([]);
  const [accepterPets, setAccepterPets] = useState([]);
  const { get_trading_pets_of } = usePetTrading();
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    const fetch_data = async () => {
      const requester_pets = await get_trading_pets_of(requester._id);
      const accepter_pets = await get_trading_pets_of(accepter._id);

      setRequesterPets(requester_pets);
      setAccepterPets(accepter_pets);
    };

    fetch_data();
  }, []);

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
        pets={[...requesterPets, undefined]}
      />
      <Text style={styles.title}>Mèo bạn muốn nhận:</Text>
      <PetSelectionInput
        control={control}
        name={"accepter_pet"}
        pets={accepterPets}
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
