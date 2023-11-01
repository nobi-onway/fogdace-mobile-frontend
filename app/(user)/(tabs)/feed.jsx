import { useState, useEffect, useRef } from "react";

import { View, FlatList, RefreshControl, Text } from "react-native";
import { FEEDS } from "../../../fakeData/feed";
import NewsFeedItem from "../../../components/blocks/NewsFeedItem";
import UserComposition from "../../../components/blocks/UserComposition";
import useFeeds from "../../../hooks/useFeeds";
import CustomBottomSheet from "../../../components/elements/CustomBottomSheet";
import Comments from "../../../components/blocks/Comments";

function Feed() {
  const bottomSheetRef = useRef(null);

  const [topCommentByFeed, setTopCommentByFeed] = useState({});

  const { get_all_feeds } = useFeeds();
  const [feeds, setFeeds] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefreshFeeds = async () => {
    setRefresh(true);

    const feeds_fetch = await get_all_feeds();
    setFeeds(feeds_fetch);

    setRefresh(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const feeds_fetch = await get_all_feeds();
      setFeeds(feeds_fetch);
    };

    fetchData();
  }, []);

  const openBottomSheet = (topComment) => {
    setTopCommentByFeed(topComment);
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={{ flex: 1 }}>
      <UserComposition />
      <FlatList
        data={feeds}
        renderItem={({ item }) => (
          <NewsFeedItem
            data={item}
            bottomSheetRef={bottomSheetRef}
            openBottomSheet={openBottomSheet}
          />
        )}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefreshFeeds} />
        }
      />

      <CustomBottomSheet ref={bottomSheetRef}>
        <Comments data={topCommentByFeed} />
      </CustomBottomSheet>
    </View>
  );
}

export default Feed;
