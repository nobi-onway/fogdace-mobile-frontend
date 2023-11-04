import { Controller } from "react-hook-form";
import PetBriefCard from "../PetBriefCard";
import { View, Text, FlatList } from "react-native";

import styles from "./style";
import PetAppendProfileCard from "../PetAppendProfileCard";

const PetSelectionInput = ({ pets, control, name }) => {
  const HAVE_DATE = pets.length > 0;

  if (!HAVE_DATE)
    return (
      <View style={styles.no_data_container}>
        <Text style={styles.no_data_message}>
          Không có thú cưng để trao đổi
        </Text>
      </View>
    );

  return (
    <Controller
      control={control}
      name={name}
      // rules={{ required: "Vui lòng chọn thú cưng bạn muốn trao đổi" }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <>
          <FlatList
            data={pets}
            horizontal
            contentContainerStyle={{ columnGap: 12 }}
            style={{ paddingVertical: 16, paddingLeft: 4 }}
            renderItem={({ item: pet }) => {
              if (!pet) return <PetAppendProfileCard />;

              return (
                <View style={styles.pet_wrapper(value?._id === pet._id)}>
                  <PetBriefCard
                    onPress={(pet) => {
                      const selectValue =
                        value?._id === pet._id ? undefined : pet;
                      onChange(selectValue);
                    }}
                    pet={pet}
                    key={pet.id}
                  />
                </View>
              );
            }}
          />
          {error && <Text style={styles.error_message}>{error.message}</Text>}
        </>
      )}
    />
  );
};

export default PetSelectionInput;
