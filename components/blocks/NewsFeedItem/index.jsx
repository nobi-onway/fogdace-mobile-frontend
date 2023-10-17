import { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

import styles from "./style";
import CarouselSlider from "../../elements/CarouselSlider";
import { InteractiveIcon, StateIcon } from "../../elements";
import { COLORS, SIZES } from "../../../constants";
import Avatar from "../../elements/Avatar";


export default function NewsFeedItem({data}){
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
          <Avatar src={avatar} shape="rounded" size="default"/>

          <View style={styles.userInfoWrapper}>
            <Text style={styles.username}>{username}</Text>
  
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <Text style={styles.activityStatus}>2 days ago</Text>
              <StateIcon name="globe" size={12} hasTitle={false} customColor={COLORS.lightBlack}/>
  
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
              <StateIcon name="threeDotsHorizontal" hasTitle={false} />
            
          </View>
        </View>
  
        {/* Content */}
        <View style={styles.conentWrapper}>
          <Text>{content}</Text>
        </View>
  
        {/* Image */}
        <View style={styles.imageContainer}> 
          <CarouselSlider pagination autoplay type="feeds" carouselData={img}/>
        </View>
  
        {/* Reactions */}
        <View style={styles.reactionWrapper}>
          <StateIcon name="heart" hasTitle={false} customColor={COLORS.danger} size={SIZES.large}/>
          <Text>{likes} others people reacted to this</Text>
        </View>
  
        {/* Interaction */}
        <View style={styles.interactionWrapper}>
          <View style={styles.interactionRowGap}>
            <InteractiveIcon type="heart" width={SIZES.xSmall} height={SIZES.xxxLarge} scale={1.5}/>
            <StateIcon name="comment" hasTitle={false} customColor={COLORS.lightBlack}/>
          
          </View>
          <View>
            <InteractiveIcon type="favorite" width={SIZES.xxLarge} height={SIZES.xxLarge} scale={1.5}/>

          </View>
        </View>
    </View>
  )
}