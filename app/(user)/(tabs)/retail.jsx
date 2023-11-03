import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ProductCard } from "../../../components/blocks";
import CarouselSlider from "../../../components/elements/CarouselSlider";
import { retailCarouselImages } from "../../../fakeData/retailCarouselImages";
import usePet from "../../../hooks/usePet";

function Retail() {
  const [products, setProducts] = useState();
  const { get_all_pet_products } = usePet();
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    const fetchPetData = async () => {
      const data = await get_all_pet_products();
      setProducts(data);
    };
    fetchPetData();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ height: 300 }}>
        <CarouselSlider carouselData={retailCarouselImages} autoplay />
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
            Pet thích bạn cũng thế
          </Text>
          {/* <Text style={{ color: COLORS.lightBlack }}>Xem toàn bộ</Text> */}
        </View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCard data={item} bottomSheetRef={bottomSheetRef} />
          )}
          keyExtractor={(item) => item._id}
          numColumns={2}
        />
      </View>
      <TouchableOpacity onPress={handleNotification}>
        <View>
          <Text>Test</Text>
        </View>
      </TouchableOpacity>

      {/* <FlatList data={PET_HEALTH_INFO} renderItem={({item}) => <PetHealthInfoCard type={item.type} mainInfo={item.mainInfo} subInfo={item.subInfo}/>} keyExtractor={item => item.id} horizontal/> */}
    </ScrollView>
  );
}

export default Retail;
