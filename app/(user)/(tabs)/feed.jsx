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

  const {get_all_feeds} = useFeeds();
  const [feeds, setFeeds] = useState([])
  const [refresh, setRefresh] = useState(false);

  const handleRefreshFeeds = async () => {
    setRefresh(true);

    try {
      const feeds_fetch = await get_all_feeds();
      setFeeds(feeds_fetch);
    } catch (error) {
      alert(error.message);
    }

    setRefresh(false);
  };

  useEffect(() => {
    let cleanUpFn = true;
    const fetchData = async () => {
      try {
        const feeds_fetch = await get_all_feeds();
        if (cleanUpFn) {
          setFeeds(feeds_fetch);
        }
      } catch (error) {
       alert(error.message);
      }
    };

    fetchData();
    return () => {
      cleanUpFn = false
    }

  }, [])

  return (
    <View style={{ flex: 1 }}>
      <UserComposition />
      <FlatList
        data={feeds}
        renderItem={({ item }) => <NewsFeedItem data={item} bottomSheetRef={bottomSheetRef}/>}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefreshFeeds} />
        }
      />


        <CustomBottomSheet ref={bottomSheetRef}>
          <Comments />
        </CustomBottomSheet>
      
    </View>
  );
}

export default Feed;
