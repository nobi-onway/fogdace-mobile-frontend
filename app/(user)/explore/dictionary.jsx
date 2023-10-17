import { View } from "react-native";
import { SearchBar } from "../../../components/elements";
import { SearchingNotFound } from "../../../components/blocks";

function Dictionary() {
  return (
    <View>
      <SearchBar />
      <SearchingNotFound />
    </View>
  );
}

export default Dictionary;
