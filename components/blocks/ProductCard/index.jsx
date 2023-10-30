import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { Icon2D } from "../../elements";

import styles from "./style";

const ProductCard = ({ bottomSheetRef }) => {
  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <Pressable style={styles.container} onPress={() => handleOpenBottomSheet()}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/61mwpRSoTeL._AC_UF1000,1000_QL80_.jpg",
          }}
          style={styles.image}
        />
      </View>

      <View>
        <Text numberOfLines={2} ellipsizeMode="tail">
          Pate cho chó hỗ trợ dinh dương, điều trị Mongeeeeeeeeeeeee
        </Text>
      </View>

      <View style={styles.rowActions}>
        <Text style={styles.price}>đ37,000</Text>
        <View style={styles.shoppingCartWrapper}>
          <Icon2D name="productCart" activated />
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
