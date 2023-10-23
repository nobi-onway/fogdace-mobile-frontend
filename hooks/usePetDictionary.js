import { petData } from "../fakeData/petData";

function usePetDictionary() {
  const pet_dictionary = petData;

  const pet_type_info_of = (id) => pet_dictionary.find((pet) => pet.id === id);

  return { pet_dictionary, pet_type_info_of };
}

export default usePetDictionary;
