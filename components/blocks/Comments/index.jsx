import {
  View,
  Text,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { Avatar } from "../../elements";
import { useState } from "react";
import styles from "./style";

const Comment = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <View style={styles.commentContainer}>
      <View style={styles.avatarWrapper}>
        <Avatar
          shape="rounded"
          src={"https://i.ibb.co/Tt12j0Q/test.jpg"}
          size="medium"
        />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.username}>{data.user_id.name}</Text>
        <Text style={styles.content}>{data.comment}</Text>
      </View>
    </View>
  );
};

const Comments = ({ data }) => {
  const [newComment, setNewComment] = useState("");
  const handleAddComment = () => {

    setNewComment("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>

      {data.length === 0 ? (
        <View style={styles.commentList}>
          <View style={styles.centeredNoData}>
            <Text style={styles.noDataText}>Chưa có bình luận nào</Text>
          </View>
        </View>
      ) : (
        <FlatList
          style={styles.commentList}
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Comment data={item} />}
        />
      )}

      <KeyboardAvoidingView
        style={styles.inputWrapper}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={200}
      >
        <Avatar
          shape="rounded"
          src={"https://i.ibb.co/Tt12j0Q/test.jpg"}
          size="large"
        />
        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            value={newComment}
            onChangeText={(text) => setNewComment(text)}
            placeholder="Thêm bình luận..."
            placeholderTextColor="black"
          />
          <Pressable onPress={handleAddComment}>
            <Text>Gửi</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Comments;
