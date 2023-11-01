import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { useRef } from "react";
import styles from "./style";
import CarouselSlider from "../../elements/CarouselSlider";
import { InteractiveIcon3D, Icon2D, Avatar } from "../../elements";
import CustomBottomSheet from "../../elements/CustomBottomSheet";

export default function NewsFeedItem({ data, bottomSheetRef, openBottomSheet }) {
  const { _id="", likes="", author_id, caption, images, top_comment } = data;
  const bottomSheetReffff = useRef(null);

  const handleOpenBottomSheet = () => {

  
    openBottomSheet(top_comment)
  };



  return (
    <View style={styles.feedWrapper}>
      {/* Header */}
      <View style={styles.row}>
        <Avatar src={author_id.avatar} shape="rounded" size="default" />

        <View style={styles.userInfoWrapper}>
          <Text style={styles.username}>{author_id.name}</Text>
        </View>
        <View style={styles.threeDotsWrapper}>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
          <Icon2D name="threeDotsHorizontal" />
        </View>
      </View>

      <View style={styles.imageContainer}>
        <CarouselSlider pagination type="feeds" carouselData={images} />
      </View>

      <View style={styles.interactionWrapper}>
        <View style={styles.interactionRowGap}>
          <InteractiveIcon3D type="heart" />
          <Pressable onPress={handleOpenBottomSheet}>
            <Icon2D name="comment" />
          </Pressable>
        </View>
        <View>
          <InteractiveIcon3D type="favorite" />
        </View>
      </View>

      {/* Reactions */}
      {likes ?(
        <View style={styles.reactionWrapper}>
        <Icon2D name="heart" activated="red" />
        <Text>{likes} other people reacted</Text>
      </View>
      ) : null}
      

      <View style={styles.contentWrapper}>
        <Text>
          <Text style={styles.username}>{author_id.name}</Text>: {caption}
        </Text>
      </View>


    </View>
  );
}
