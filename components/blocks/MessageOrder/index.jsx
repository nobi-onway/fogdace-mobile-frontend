import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./style";
import { Avatar, Icon2D } from "../../elements";
import formatCurrency from "../../../utils/formatCurrency";
import { userStore } from "../../../stores/userStore";
import useOrder from "../../../hooks/useOrder";
import usePetTrading from "../../../hooks/usePetTrading";
import usePet from "../../../hooks/usePet";

const REQUESTER_PET_DATA = {
  id: "0000000000000005",
  name: "Bella",
  gender: "Cái",
  type: "Siberian Husky",
  birthday: "10/02/2019",
  avatar:
    "https://www.dailypaws.com/thmb/B6yWhzGpQZsg3kxMzLn-hvGIF7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/siberian-husky-100800827-2000-9449ca147e0e4b819bce5189c2411188.jpg",
  pet_health_profile: {
    triet_san: "Chưa triệt sản",
    weight: 28,
  },
};

const ACCEPTER_PET_DATA = {
  id: "0000000000000001",
  name: "Bún Bò",
  gender: "Đực",
  type: "Shiba Inu",
  birthday: "20/10/2023",
  avatar:
    "https://i.pinimg.com/236x/8a/ce/9f/8ace9fe1a86e9fc2b5dced5ea7feb0d7.jpg",
  pet_health_profile: {
    triet_san: "Chưa triệt sản",
    weight: 2,
  },
};

const PetBriefInfo = ({ pet, end }) => {
  const { name, avatar, type } = pet;

  return (
    <View style={styles.pet_info_wrapper(end)}>
      <View style={styles.pet_info}>
        <Text style={styles.pet_name(end)}>{name}</Text>
        <Text style={styles.pet_type(end)}>{type}</Text>
      </View>
      <View>
        <Avatar src={avatar} />
      </View>
    </View>
  );
};

export default function MessageOrder({ message }) {
  const [requesterPet, setRequesterPet] = useState({});
  const [accepterPet, setAccepterPet] = useState({});
  const { create_trading_order } = useOrder();
  const { get_pet_detail_of } = usePet();
  const { info } = userStore();

  const {
    deposits,
    items,
    accepter,
    requester,
    accepter_pet_id,
    requester_pet_id,
    fee_payer,
    fee_payer_name,
    price,
  } = message;

  useEffect(() => {
    const fetch_data = async () => {
      const requester_pet = await get_pet_detail_of(requester_pet_id);
      const accepter_pet = await get_pet_detail_of(accepter_pet_id);

      setRequesterPet(requester_pet);
      setAccepterPet(accepter_pet);
    };

    fetch_data();
  }, []);

  const handleConfirmTradingOrder = () => {
    create_trading_order(message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.trading_info_wrapper}>
        <PetBriefInfo pet={accepterPet} end={false} />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Icon2D name={"swap"} />
        </View>
        <PetBriefInfo pet={requesterPet} end={true} />
      </View>
      <View style={styles.bonus_info_wrapper}>
        <Text style={styles.bonus_info}>Trao đổi thêm: {items}</Text>
      </View>
      <Text style={styles.fee_payer}>Boss thanh toán: {fee_payer_name}</Text>
      <Text style={styles.price}>Giá: {formatCurrency(price)}</Text>
      {accepter === info._id && (
        <TouchableOpacity
          onPress={handleConfirmTradingOrder}
          style={styles.confirm_button}
        >
          <Text style={styles.confirm_button_text}>Xác nhận trao đổi</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
