import { View, Text, Pressable } from "react-native";
import { Avatar, Icon2D } from "../../elements";
import styles from "./style";

const UserComposition = () => {
  const handleMoveToCreatePost = () => {};

  return (
    <View style={styles.container}>
      <Avatar shape="rounded" src="https://i.redd.it/8izlkd6nov541.jpg" />
      <Pressable style={styles.inputContainer} onPress={handleMoveToCreatePost}>
        <Text>Viết chia sẻ...</Text>

        <View style={styles.iconWrapper}>
          <Icon2D name="pets" />
          <Icon2D name="image_gallery" />
          <Icon2D name="palette" />
        </View>
      </Pressable>
    </View>
  );
};


export default UserComposition;
