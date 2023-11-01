import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { Icon2D } from "../../elements";

import styles from "./style";

const ProductCard = ({ data, bottomSheetRef }) => {
  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const {
    _id,
    name,
    image,
    price,
    quantity,
    rating,
    sold_quantity,
    status,
    topComment,
  } = data;

  return (
    <Pressable style={styles.container} onPress={() => handleOpenBottomSheet()}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>

      <View>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {name}
        </Text>
      </View>

      <View style={styles.rowActions}>
        <Text style={styles.price}>${price}</Text>
        <View style={styles.shoppingCartWrapper}>
          <Icon2D name="productCart" activated />
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
