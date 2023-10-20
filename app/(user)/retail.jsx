import { Text, View, FlatList } from "react-native";
import { ProductCard } from "../../components/blocks";
import PetHealthInfoCard from "../../components/blocks/PetHealthInfoCard";

const data = [
  {
    id: 1,
    type: 'chemical',
    mainInfo:"Mèo Anh lông ngắn",
    subInfo:"Giống"
  },
  {
    id: 2,
    type: 'balloons',
    mainInfo:"Cái",
    subInfo:"Giới tính"
  },
  {
    id: 3,
    type: 'born',
    mainInfo:"1 tháng",
    subInfo:"Hiện 1 tuổi người"
  },
  {
    id: 4,
    type: 'birthday',
    mainInfo:"20 tháng 10, 2023",
    subInfo:"Sinh nhật"
  },
]

function Retail() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Retail page</Text>
      <ProductCard />

      <FlatList data={data} renderItem={({item}) => <PetHealthInfoCard type={item.type} mainInfo={item.mainInfo} subInfo={item.subInfo}/>} keyExtractor={item => item.id} horizontal/>

      {/* <PetHealthInfoCard type="chemical" mainInfo="Mèo Anh lông ngắn" subInfo="Giống"/>
      <PetHealthInfoCard type="balloons" mainInfo="Cái" subInfo="Giống"/>
      <PetHealthInfoCard type="born" mainInfo="1 tháng" subInfo="Hiện 1 tuổi người"/>
      <PetHealthInfoCard type="birthday" mainInfo="20 tháng 10m 2023" subInfo="Sinh nhật"/> */}
    </View>
  );
}

export default Retail;
