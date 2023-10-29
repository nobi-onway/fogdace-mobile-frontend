import { View } from "react-native";
import { PetAddingCategory } from "../../../../../components/blocks";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

const AddProfilePet = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({ tabBarStyle: { display: "none" }, tabBarVisible: false });
    return () =>
      navigation
        .getParent()
        ?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [navigation]);

  return (
    <View>
      <PetAddingCategory />
    </View>
  );
};

export default AddProfilePet;
