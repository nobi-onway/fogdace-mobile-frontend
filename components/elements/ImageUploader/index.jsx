import React, { useState } from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

import styles from "./style";
import Icon2D from "../Icon2D";

const ImageUploader = ({ onUpload }) => {
  const [imgURL, setImgUrl] = useState(null);

  const handleUploadImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required!");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const formData = new FormData();
        formData.append("key", "373bc9b180e920e9c2ebceaa3b341eed");
        formData.append("image", {
          uri: result.assets[0].uri,
          name: "test.jpg",
          type: "image/jpeg",
        });

        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData
        );
        setImgUrl(response.data.data.url);
        onUpload(response.data.data.url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={handleUploadImage} style={styles.container}>
      <View style={styles.image_wrapper}>
        {imgURL ? (
          <Image style={styles.image} source={{ uri: imgURL }} />
        ) : (
          <Icon2D name={"image_gallery_xl"} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ImageUploader;
