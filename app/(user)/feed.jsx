import { useState } from "react";

import { View, FlatList, RefreshControl } from "react-native";
import { FEEDS } from "../../fakeData/feed";
import NewsFeedItem from "../../components/blocks/NewsFeedItem"

function Feed() {
  const [refresh, setRefresh] = useState(false);
    const handleRefreshFeeds = () => {
        setRefresh(true);
    
        setTimeout(() => {
          setRefresh(false);
        }, 3000);
      };

  return (
    <View style={{flex: 1}}>
      <FlatList
          data={FEEDS}
          renderItem={({ item }) => <NewsFeedItem data={item} />}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={handleRefreshFeeds} />
          }
        />
    </View>
  );
}

export default Feed;
