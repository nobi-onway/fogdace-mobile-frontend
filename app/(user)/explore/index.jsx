import { ContentContainer } from "../../../components/elements";
import { PetExploreList, PetTrading } from "../../../components/blocks";
import usePetDictionary from "../../../hooks/usePetDictionary";
import useNavigation from "../../../hooks/useNavigation";
import usePetKnowledge from "../../../hooks/usePetKnowledge";

function Explore() {
  const { pet_dictionary } = usePetDictionary();
  const { pet_knowledge } = usePetKnowledge();
  const { go_to_dictionary_of, go_to_knowledge_of } = useNavigation();

  return (
    <ContentContainer>
      <PetTrading />
      <PetExploreList
        pets={pet_knowledge}
        onCardPress={go_to_knowledge_of}
        type={"knowledge"}
      />
      <PetExploreList
        pets={pet_dictionary}
        onCardPress={go_to_dictionary_of}
        type={"dictionary"}
      />
    </ContentContainer>
  );
}

export default Explore;
