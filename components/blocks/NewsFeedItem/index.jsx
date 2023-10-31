import { View, Text, TouchableOpacity } from "react-native";

import styles from "./style";
import CarouselSlider from "../../elements/CarouselSlider";
import { InteractiveIcon3D, Icon2D, Avatar } from "../../elements";

export default function NewsFeedItem({ data }) {
  const { id, username, avatar, content, img, likes } = data;

  return (
    <View style={styles.feedWrapper}>
      {/* Header */}
      <View style={styles.row}>
        <Avatar src={avatar} shape="rounded" size="default" />

        <View style={styles.userInfoWrapper}>
          <Text style={styles.username}>{username}</Text>
        </View>
        <View style={styles.threeDotsWrapper}>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
          <Icon2D name="threeDotsHorizontal" />
        </View>
      </View>

      <View style={styles.imageContainer}>
        <CarouselSlider pagination type="feeds" carouselData={img} />
      </View>

      <View style={styles.interactionWrapper}>
        <View style={styles.interactionRowGap}>
          <InteractiveIcon3D type="heart" />
          <Icon2D name="comment" />
        </View>
        <View>
          <InteractiveIcon3D type="favorite" />
        </View>
      </View>

      {/* Reactions */}
      <View style={styles.reactionWrapper}>
        <Icon2D name="heart" activated="red" />
        <Text>{likes} others people reacted</Text>
      </View>

      <View style={styles.contentWrapper}>
        <Text>
          <Text style={styles.username}>{username}</Text>: {content}
        </Text>
      </View>
    </View>
  );
}
