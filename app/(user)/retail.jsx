import { Text, View, FlatList } from "react-native";
import { ProductCard } from "../../components/blocks";
import PetHealthInfoCard from "../../components/blocks/PetHealthInfoCard";
import { PET_HEALTH_INFO } from "../../fakeData/petHealthInfo";
import PetInfoSectionCard from "../../components/blocks/PetInfoSectionCard";

function Retail() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Retail page</Text>
      <ProductCard />

      <PetInfoSectionCard />

      {/* <FlatList data={PET_HEALTH_INFO} renderItem={({item}) => <PetHealthInfoCard type={item.type} mainInfo={item.mainInfo} subInfo={item.subInfo}/>} keyExtractor={item => item.id} horizontal/> */}
    
    </View>
  );
}

export default Retail;
