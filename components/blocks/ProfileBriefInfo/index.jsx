import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../../constants";
import { Avatar, Icon2D, LinkableButton } from "../../elements";

import styles from "./style";
import usePetTrading from "../../../hooks/usePetTrading";
import { userStore } from "../../../stores/userStore";

export default function ProfileBriefInfo({ info }) {
  const [isTrading, setIsTrading] = useState(false);
  const { request_trading_pet_with, cancel_trading_pet_with } = usePetTrading();
  const { avatar, name, description, pet_owner } = info;
  const { info: userInfo } = userStore();

  useEffect(() => {
    setIsTrading(info.isTrading);
  }, [info]);

  const handleTradingPet = async () => {
    const pet = await request_trading_pet_with(info._id);
    setIsTrading(pet.isTrading);
  };

  const handleCancelTradingPet = async () => {
    const pet = await cancel_trading_pet_with(info._id);
    setIsTrading(pet.isTrading);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar_wrapper}>
        <Avatar shape="rounded" size="supper_mega" src={avatar} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      {isTrading && (
        <Text style={styles.trading_status_message}>
          Thú cưng đang chờ chủ nhận mới
        </Text>
      )}
      <View style={styles.social_info_wrapper}>
        <View style={styles.social_info}>
          <Text style={styles.social_primary_text}>27</Text>
          <Text style={styles.social_sub_text}>Thích</Text>
        </View>
        <View style={styles.social_info}>
          <Text style={styles.social_primary_text}>0</Text>
          <Text style={styles.social_sub_text}>Người theo dõi</Text>
        </View>
        <View style={styles.social_info}>
          <Text style={styles.social_primary_text}>0</Text>
          <Text style={styles.social_sub_text}>Ảnh</Text>
        </View>
      </View>
      {userInfo._id === pet_owner && (
        <View style={styles.following_wrapper}>
          <View style={{ flex: 1 }}>
            {isTrading ? (
              <LinkableButton
                handlePress={handleCancelTradingPet}
                type="cancel"
              >
                Bỏ trao đổi thú cưng
              </LinkableButton>
            ) : (
              <LinkableButton handlePress={handleTradingPet}>
                Trao đổi thú cưng
              </LinkableButton>
            )}
          </View>

          <TouchableOpacity style={styles.functional_wrapper}>
            <Icon2D name={"threeDotsHorizontal"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.functional_wrapper}>
            <Icon2D name={"share_social"} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
