import { View } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import ShoppingOption from "../../../../components/blocks/ShoppingOption";

const ShoppingOptions = () => {
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
      <ShoppingOption />
    </View>
  );
};

export default ShoppingOptions;
