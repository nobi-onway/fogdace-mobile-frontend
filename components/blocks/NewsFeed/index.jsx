import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  Dimensions,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import CarouselSlider from "../../elements/CarouselSlider";

export default function NewsFeed(){
    const [refresh, setRefresh] = useState(false);
    const handleRefreshFeeds = () => {
        setRefresh(true);
    
        setTimeout(() => {
          setRefresh(false);
        }, 3000);
      };
    return (
        <View style={styles.container}>
          <FlatList
          data={[]}
          renderItem={({ item }) => <FeedItem data={item} />}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
          }
        />
        </View>
    )
}

const NewsFeedItem = ({data}) => {
  const { id, username, avatar, content, img, likes } = data;
    const [isInteract, setIsInteract] = useState({
      liked: false,
      commented: false,
      shared: false,
      bookmarked: false,
      followed: false,
    });
  
    const handleInteract = (type) => {
      if (type === "like") {
        setIsInteract({ ...isInteract, liked: !isInteract.liked });
      }
      if (type === "bookmark") {
        setIsInteract({ ...isInteract, bookmarked: !isInteract.bookmarked });
      }
      if(type === 'follow'){
        setIsInteract({ ...isInteract, followed: !isInteract.followed})
      }
    };
  return (
    <View style={styles.feedWrapper}>
      {/* Header */}
      <View style={styles.row}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{
                uri: avatar,
              }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.userInfoWrapper}>
            <Text style={styles.username}>{username}</Text>
  
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <Text style={styles.activityStatus}>2 days ago</Text>
  
              <Ionicons name="globe" size={12} color="gray" solid />
  
              {isInteract.followed ? null : <Pressable
                onPress={() => handleInteract('follow')}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? "rgb(210, 230, 255)"
                      : "transparent",
                      borderRadius: 50,
                      padding: 2
                      
                  },
                  styles.wrapperCustom,
                ]}
              >
                <Text style={styles.followText}>Follow</Text>
              </Pressable>}
              
            </View>
          </View>
          <View style={styles.threeDotsWrapper}>
            <Pressable onPress={() => handleSnapPress(0)}>
              <Text style={styles.threeDots}>...</Text>
            </Pressable>
          </View>
        </View>
  
        {/* Content */}
        <View style={styles.conentWrapper}>
          <Text>{content}</Text>
        </View>
  
        {/* Image */}
        <View style={styles.imageContainer}> 
          <CarouselSlider pagination autoplay type="feeds"/>
        </View>
  
        {/* Reactions */}
        <View style={styles.reactionWrapper}>
          <Ionicons name="heart-sharp" size={15} color="red" solid />
          <Ionicons name="md-thumbs-up-sharp" size={15} color="blue" solid />
          <Text>{likes} others people reacted to this</Text>
        </View>
  
        {/* Interaction */}
        <View style={styles.interactionWrapper}>
          <View style={{ flexDirection: "row", gap: 40, alignItems: "center" }}>
            <Ionicons
              name="md-heart"
              size={25}
              color={isInteract.liked ? "red" : "gray"}
              solid
              onPress={() => handleInteract("like")}
            />
            <Ionicons name="chatbox-outline" size={23} color="gray" solid />
            <Ionicons name="ios-share-outline" size={23} color="gray" solid />
          </View>
          <View>
            <Ionicons
              name="bookmark"
              size={23}
              color={isInteract.bookmarked ? "#f7bd00" : "gray"}
              solid
              onPress={() => handleInteract("bookmark")}
            />
          </View>
        </View>
    </View>
  )
}