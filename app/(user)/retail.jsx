  import { Text, View, FlatList, ScrollView } from "react-native";
  import { ProductCard } from "../../components/blocks";
  import PetHealthInfoCard from "../../components/blocks/PetHealthInfoCard";
  import { PET_HEALTH_INFO } from "../../fakeData/petHealthInfo";
  import PetInfoSectionCard from "../../components/blocks/PetInfoSectionCard";
  import { Banner } from "../../components/elements";
  import { COLORS, IMAGES } from "../../constants";
  import { FEEDS } from "../../fakeData/feed";
import CarouselSlider from "../../components/elements/CarouselSlider";
import { retailCarouselImages } from "../../fakeData/retailCarouselImages";

  function Retail() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text>Retail page</Text>
        {/* <Banner source={IMAGES.banner} /> */}
        <View style={{height: 300}}>
          <CarouselSlider carouselData={retailCarouselImages} autoplay />

        </View>

        <View style={{paddingHorizontal: 10, marginTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 6}}>
            <Text style={{fontWeight: 'bold', fontSize: 22}}>Sản phẩm nổi bật</Text>
            <Text style={{color: COLORS.lightBlack}}>Xem toàn bộ</Text>
          </View>
          <FlatList data={FEEDS} renderItem={({item}) =>
          <ProductCard />
          } keyExtractor={item => item.id} numColumns={2} 
          />
        </View>

        {/* <FlatList data={PET_HEALTH_INFO} renderItem={({item}) => <PetHealthInfoCard type={item.type} mainInfo={item.mainInfo} subInfo={item.subInfo}/>} keyExtractor={item => item.id} horizontal/> */}
      
      </ScrollView>
    );
  }

  export default Retail;
