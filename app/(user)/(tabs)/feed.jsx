import { useState, useEffect } from "react";

import { View, FlatList, RefreshControl } from "react-native";
import { FEEDS } from "../../../fakeData/feed";
import NewsFeedItem from "../../../components/blocks/NewsFeedItem";
import UserComposition from "../../../components/blocks/UserComposition";
import useFeeds from "../../../hooks/useFeeds";

function Feed() {
  const {get_all_feeds} = useFeeds();
  const [feeds, setFeeds] = useState([])
  const [refresh, setRefresh] = useState(false);
  const handleRefreshFeeds = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  useEffect(async() => {
    let cleanUpFn = true;
    const fetchData = async () => {
      try {
        const feeds_fetch = await get_all_feeds();
        console.log('feeds_fetch', feeds_fetch);
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
        renderItem={({ item }) => <NewsFeedItem data={item} />}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefreshFeeds} />
        }
      />
    </View>
  );
}

export default Feed;
