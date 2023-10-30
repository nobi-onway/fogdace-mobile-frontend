import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

import styles from "./style";

const ImageUploader = () => {
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
        console.log(response);
        setImgUrl(response.data.data.url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <Image source={{ uri: imgURL }} style={{ width: 200, height: 200 }} />
      <Pressable style={styles.uploadImage} onPress={handleUploadImage}>
        <Text style={styles.uploadImageText}>Select Image from Library</Text>
      </Pressable>
    </View>
  );
};

export default ImageUploader;
