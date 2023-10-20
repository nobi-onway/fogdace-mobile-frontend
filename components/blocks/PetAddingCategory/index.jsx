import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from "./style";

const PetAddingCategory = () => {
 return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        alt="bg_addpet"
        source={{ uri: "https://img.freepik.com/free-vector/icons-collection-pets-cats-dogs_603843-127.jpg?w=826&t=st=1697689383~exp=1697689983~hmac=dcf5817b0393920d12089253bf391f17306b36807091deb85317e3f97f94dd13" }}
      />
      <Text style={styles.title}>Thêm Profile thú cưng</Text>
      <Text style={styles.subtitle}>
        Bắt đầu một cuộc hành trình mới của bạn cùng thú cưng trên Pety.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Thêm thú cưng yêu thích</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Thêm Profile thú cưng</Text>
      </TouchableOpacity>
    </View>
 );
};


export default PetAddingCategory;