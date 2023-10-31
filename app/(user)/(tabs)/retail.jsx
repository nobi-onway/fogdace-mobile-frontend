import { Text, View, FlatList, ScrollView, Button } from "react-native";
import { ProductCard } from "../../../components/blocks";
import { COLORS } from "../../../constants";
import { FEEDS } from "../../../fakeData/feed";
import CarouselSlider from "../../../components/elements/CarouselSlider";
import { retailCarouselImages } from "../../../fakeData/retailCarouselImages";

import { useRef } from "react";
import CustomBottomSheet from "../../../components/elements/CustomBottomSheet";

function Retail() {
  const bottomSheetRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 300 }}>
        <CarouselSlider carouselData={retailCarouselImages} />
      </View>

      <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 6,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
            Sản phẩm nổi bật
          </Text>
          <Text style={{ color: COLORS.lightBlack }}>Xem toàn bộ</Text>
        </View>
        <FlatList
          data={FEEDS}
          renderItem={({ item }) => (
            <ProductCard bottomSheetRef={bottomSheetRef} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>

      {/* <FlatList data={PET_HEALTH_INFO} renderItem={({item}) => <PetHealthInfoCard type={item.type} mainInfo={item.mainInfo} subInfo={item.subInfo}/>} keyExtractor={item => item.id} horizontal/> */}

      <CustomBottomSheet ref={bottomSheetRef}>
        <Text>Hi</Text>
      </CustomBottomSheet>
    </View>
  );
}

export default Retail;
