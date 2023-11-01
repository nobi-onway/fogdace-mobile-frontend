import { FlatList, View } from "react-native";
import {
  MenuOptionCard,
  RewardCard,
  ScrollableContentContainer,
  SupportItemCard,
} from "../../../components/elements";
import React, { useEffect, useState } from "react";
import {
  PetAppendProfileCard,
  PetBriefCard,
  UserBriefCard,
} from "../../../components/blocks";
import { COLORS } from "../../../constants";
import useUser from "../../../hooks/useUser";

const SUPPORT_LIST = [
  "wish_list",
  "saved_post",
  "following",
  "assistance",
  "setting",
  "log_out",
];

const OPTION_RIGHT_LIST = ["NFC", "shopping_options", "pet_services", "clubs"];
const OPTION_LEFT_LIST = ["pet_report_lost"];

const MY_PETS_DATA = [
  {
    component: PetAppendProfileCard,
    props: {},
  },
];

function Menu() {
  const [myPets, setMyPets] = useState(MY_PETS_DATA);
  const { get_my_pets } = useUser();

  useEffect(() => {
    const fetch_data = async () => {
      const pets_data = await get_my_pets();

      const formatted_data = pets_data.map((pet) => ({
        component: PetBriefCard,
        props: {
          pet: pet,
        },
      }));

      setMyPets((cur_pets) => [...formatted_data, ...cur_pets]);
    };

    fetch_data();
  }, []);

  return (
    <ScrollableContentContainer color={COLORS.white}>
      <UserBriefCard />
      <FlatList
        data={myPets}
        horizontal
        contentContainerStyle={{ columnGap: 12 }}
        style={{ paddingVertical: 16, paddingLeft: 4 }}
        renderItem={({ item: pet }) => {
          const { component: Component, props } = pet;

          return <Component key={pet.id} {...props} />;
        }}
      />
      <View style={{ flexDirection: "row", columnGap: 12, marginTop: 40 }}>
        <View style={{ flex: 0.5 }}>
          <RewardCard type="diamond" />
          {OPTION_LEFT_LIST.map((item, index) => (
            <View key={`${item} + ${index}`} style={{ marginBottom: 16 }}>
              <MenuOptionCard type={item} />
            </View>
          ))}
        </View>
        <View style={{ flex: 0.5 }}>
          {OPTION_RIGHT_LIST.map((item, index) => (
            <View key={`${item} + ${index}`} style={{ marginBottom: 16 }}>
              <MenuOptionCard type={item} />
            </View>
          ))}
        </View>
      </View>
      <View>
        {SUPPORT_LIST.map((item, index) => (
          <SupportItemCard key={`${item} + ${index}`} type={item} />
        ))}
      </View>
    </ScrollableContentContainer>
  );
}

export default Menu;
