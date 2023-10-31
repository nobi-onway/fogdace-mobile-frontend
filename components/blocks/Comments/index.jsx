import { View, StyleSheet, Text, ScrollView, FlatList, TextInput, Button, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { Avatar } from "../../elements";
import { useState } from "react";
import { COLORS } from "../../../constants";

const Comment = () => {
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
        <Text style={styles.username}>Viet Dang</Text>
        <Text style={styles.content}>Lorem ipsum dolor </Text>
      </View>
    </View>
  );
};

const Comments = () => {
  const comment = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [newComment, setNewComment] = useState('');
  const handleAddComment = () => {
   
    console.log('New Comment:', newComment);
    setNewComment('');
  };
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : null}
    //   style={{ flex: 1 }}
    // >
      <View style={styles.container}>
        <Text style={styles.title}>Comments</Text>

        <ScrollView></ScrollView>
            <FlatList
            style={styles.commentList}
            data={comment}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <Comment />}
            />
  
        <KeyboardAvoidingView style={styles.inputWrapper} behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={200}>
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
                    placeholder="Add a comment..."
                    placeholderTextColor="black"
                />
                <Pressable onPress={handleAddComment} >
                    <Text>Send</Text>
                </Pressable>

            </View>
        </KeyboardAvoidingView>
      </View>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 12
  },
  avatarWrapper: {},
  commentContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 6,
  },
  commentList:{
    paddingHorizontal: 4
  },
  infoWrapper: {
    width: 350,
  },
  username: {
    fontWeight: "bold",
  },
  content: {},
  inputWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.6, 
    borderTopColor: COLORS.gray,
    paddingVertical: 4,
    gap: 8,
    paddingHorizontal: 4
  },
  inputField:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.gray,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    height: 50,
    borderRadius: 50
  },
  input:{
    flex: 1,
    height: 40,
  }
});

export default Comments;
