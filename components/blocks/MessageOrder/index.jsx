import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./style";
import { Avatar, Icon2D } from "../../elements";
import formatCurrency from "../../../utils/formatCurrency";
import { userStore } from "../../../stores/userStore";
import useOrder from "../../../hooks/useOrder";
import usePet from "../../../hooks/usePet";
import useChat from "../../../hooks/useChat";

const PetBriefInfo = ({ pet, end }) => {
  if (!pet) return null;

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

export default function MessageOrder({ message, room_id, message_key }) {
  const [requesterPet, setRequesterPet] = useState({});
  const [accepterPet, setAccepterPet] = useState({});
  const { update_message } = useChat();
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
    status,
  } = message;

  useEffect(() => {
    const fetch_data = async () => {
      const requester_pet =
        requester_pet_id && (await get_pet_detail_of(requester_pet_id));
      const accepter_pet =
        accepter_pet_id && (await get_pet_detail_of(accepter_pet_id));

      setRequesterPet(requester_pet);
      setAccepterPet(accepter_pet);
    };

    fetch_data();
  }, []);

  const handleConfirmTradingOrder = () => {
    create_trading_order(message);
    update_message(room_id, message_key, { ...message, status: 1 });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={status ? true : false}
        style={{ opacity: status ? 0.25 : 1 }}
      >
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
        <Text style={styles.deposit}>Đặt cọc: {formatCurrency(deposits)}</Text>
      </TouchableOpacity>
      {accepter === info._id && status == 0 && (
        <TouchableOpacity
          onPress={handleConfirmTradingOrder}
          style={styles.confirm_button}
        >
          <Text style={styles.confirm_button_text}>Xác nhận trao đổi</Text>
        </TouchableOpacity>
      )}
      {status == 1 && (
        <TouchableOpacity disabled style={styles.confirm_button_success}>
          <Text style={styles.confirm_button__success_text}>
            Đã xác nhận trao đổi
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
