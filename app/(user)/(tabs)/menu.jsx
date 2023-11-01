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
import useNavigation from "../../../hooks/useNavigation";

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

function Menu() {
  const { go_to_pet_profile_of } = useNavigation();
  const [myPets, setMyPets] = useState([]);
  const { get_my_pets } = useUser();

  useEffect(() => {
    const fetch_data = async () => {
      const pets_data = await get_my_pets();

      setMyPets([...pets_data, undefined]);
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
          if (!pet) return <PetAppendProfileCard />;

          return (
            <PetBriefCard
              key={pet.id}
              pet={pet}
              onPress={() => go_to_pet_profile_of(pet._id)}
            />
          );
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
