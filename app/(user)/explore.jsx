import { Text, View } from "react-native";
import {
  ContentContainer,
  FormInput,
  SearchBar,
} from "../../components/elements";
import { useForm } from "react-hook-form";

function Explore() {
  const { control } = useForm();

  return (
    <ContentContainer>
      <Text>Explore page</Text>
      <SearchBar />
    </ContentContainer>
  );
}

export default Explore;
