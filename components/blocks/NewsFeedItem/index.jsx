import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./style";
import CarouselSlider from "../../elements/CarouselSlider";
import { InteractiveIcon, Icon2D, Avatar } from "../../elements";
import { SIZES } from "../../../constants";


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
     

          <TouchableOpacity
            style={styles.followBtn}
          >
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
          <Icon2D name="threeDotsHorizontal" />
        </View>
      </View>

    
      <View style={styles.imageContainer}>
        <CarouselSlider pagination autoplay type="feeds" carouselData={img} />
      </View>

      <View style={styles.interactionWrapper}>
        <View style={styles.interactionRowGap}>
          <InteractiveIcon
            type="heart"
            width={SIZES.xSmall}
            height={SIZES.xxxLarge}
            scale={1.5}
          />
          <Icon2D name="comment" />
        </View>
        <View>
          <InteractiveIcon
            type="favorite"
            width={SIZES.xxLarge}
            height={SIZES.xxLarge}
            scale={1.5}
          />
        </View>
      </View>

      {/* Reactions */}
      <View style={styles.reactionWrapper}>
        <Icon2D name="heart" activated="red" />
        <Text>{likes} others people reacted to this</Text>
      </View>

      <View style={styles.conentWrapper}>
        <Text>
          <Text style={styles.username}>{username}</Text>: {content}
        </Text>
      </View>

      {/* Interaction */}
      {/* <View style={styles.interactionWrapper}>
          <View style={styles.interactionRowGap}>
            <InteractiveIcon type="heart" width={SIZES.xSmall} height={SIZES.xxxLarge} scale={1.5}/>
            <StateIcon name="comment" hasTitle={false} customColor={COLORS.lightBlack}/>
          
          </View>
          <View>
            <InteractiveIcon type="favorite" width={SIZES.xxLarge} height={SIZES.xxLarge} scale={1.5}/>

          </View>
        </View> */}
    </View>
  );
}
