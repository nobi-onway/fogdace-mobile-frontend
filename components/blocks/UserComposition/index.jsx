import { View, Text, StyleSheet, Pressable } from "react-native";
import { Avatar, Icon2D } from "../../elements";
import { COLORS } from "../../../constants";

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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: COLORS.white,
    gap: 4,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: COLORS.gray,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {},
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default UserComposition;
