import { Text, View } from "react-native";
import {
  ContentContainer,
  FormInput,
  SearchBar,
} from "../../components/elements";
import { useForm } from "react-hook-form";
import { SearchingNotFound } from "../../components/blocks";

function Explore() {
  const { control } = useForm();

  return (
    <ContentContainer>
      <Text>Explore page</Text>
      <SearchBar />
      <SearchingNotFound />
    </ContentContainer>
  );
}

export default Explore;
