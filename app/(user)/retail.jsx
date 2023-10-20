import { Text, View } from "react-native";
import { ProductCard } from "../../components/blocks";

function Retail() {
  return (
    <View style={{flex: 1}}>
      <Text>Retail page</Text>
      <ProductCard />
    </View>
  );
}

export default Retail;
