import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./style";
import { Avatar, LinkableButton } from "../../elements";
import formatISODate from "../../../utils/formatISODate";
import usePet from "../../../hooks/usePet";
import useNavigation from "../../../hooks/useNavigation";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../constants/url";
import { userStore } from "../../../stores/userStore";

export default function PetIdentifyCard({ pet }) {
  const [healthProfile, setHealthProfile] = useState({});
  const { get_pet_health_profile_of } = usePet();
  const { info } = userStore();
  const { get_fetcher } = useFetch();
  const { go_to_pet_profile_of, go_to_chat_with } = useNavigation();
  const {
    avatar,
    name,
    _id,
    gender,
    type,
    birthday,
    pet_health_profile,
    pet_owner,
  } = pet;

  useEffect(() => {
    const fetch_data = async () => {
      const health_profile_data = await get_pet_health_profile_of(
        pet_health_profile
      );

      setHealthProfile(health_profile_data);
    };

    fetch_data();
  }, [pet]);

  const goToTrading = async () => {
    const owner = await get_fetcher(`${BASE_URL}/${pet_owner}`).then(
      (owner) => owner
    );

    go_to_chat_with(owner);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => go_to_pet_profile_of(_id)}>
        <View style={styles.container}>
          <View style={styles.avatar_wrapper}>
            <Avatar src={avatar} size="mega" shape="rounded" />
          </View>
          <View style={styles.info_wrapper}>
            <View style={styles.name_wrapper}>
              <Text style={styles.strong_text}>{name}</Text>
            </View>
            <Text style={styles.regular_text}>ID: {_id}</Text>
            <Text style={styles.regular_text}>Loài: {type}</Text>
            <Text style={styles.regular_text}>Giới tính: {gender}</Text>
            <Text style={styles.regular_text}>
              Ngày sinh: {formatISODate(birthday)}
            </Text>
            <Text style={styles.regular_text}>
              Cân nặng: {healthProfile?.weight ? healthProfile?.weight[0] : 0}{" "}
              kg
            </Text>
            <Text style={styles.regular_text}>
              Tình trạng triệt sản: {healthProfile?.triet_san ? "Rồi" : "Chưa"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.trading_button}>
        {pet_owner === info._id ? (
          <LinkableButton
            type="brown"
            handlePress={() => go_to_pet_profile_of(_id)}
          >
            Xem hồ sơ
          </LinkableButton>
        ) : (
          <LinkableButton handlePress={goToTrading} type="brown">
            Trao đổi
          </LinkableButton>
        )}
      </View>
    </View>
  );
}
