import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import Avatar from "../Avatar";
import Icon2D from "../Icon2D";
import shortenNumber from "../../../utils/shortenNumber";

export default function PetBlogCard({ blog, onPress }) {
  const { primary_image_url, title, description, author, views } = blog;

  const handleOnPress = () => {
    onPress(blog);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.image_wrapper}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: primary_image_url }}
          />
        </View>
        <View style={styles.content_wrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bottom_wrapper}>
        <View style={styles.author_wrapper}>
          <Avatar src={author.avatar} size="small" shape="rounded" />
          <Text style={styles.author_name}>{author.name}</Text>
        </View>
        <View style={styles.views_wrapper}>
          <Icon2D name={"activity"} />
          <Text style={styles.views}>{shortenNumber(views)}</Text>
        </View>
      </View>
    </View>
  );
}
