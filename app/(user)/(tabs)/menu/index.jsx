import { FlatList, View } from "react-native";
import {
  MenuOptionCard,
  RewardCard,
  ScrollableContentContainer,
  SupportItemCard,
} from "../../../../components/elements";
import React from "react";
import {
  PetAppendProfileCard,
  PetBriefCard,
  UserBriefCard,
} from "../../../../components/blocks";
import { COLORS } from "../../../../constants";

const SUPPORT_LIST = [
  "wish_list",
  "saved_post",
  "following",
  "assistance",
  "setting",
];

const OPTION_RIGHT_LIST = ["NFC", "shopping_options", "pet_services", "clubs"];
const OPTION_LEFT_LIST = ["pet_report_lost"];

const MY_PETS = [
  {
    component: PetBriefCard,
    props: {
      pet: {
        avatar:
          "https://opet.com.vn/wp-content/uploads/2022/03/meo-anh-long-ngan-opet-15.jpg",
        name: "Kem",
        type: "Mèo Anh Lông ngắn",
      },
    },
  },
  {
    component: PetBriefCard,
    props: {
      pet: {
        avatar:
          "https://matpetfamily.com/wp-content/uploads/2022/08/10016876d8a41dfa44b5.jpg",
        name: "Su",
        type: "Mèo Golden",
      },
    },
  },
  {
    component: PetAppendProfileCard,
    props: {},
  },
];

function Menu() {
  return (
    <ScrollableContentContainer color={COLORS.white}>
      <UserBriefCard />
      <FlatList
        data={MY_PETS}
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
