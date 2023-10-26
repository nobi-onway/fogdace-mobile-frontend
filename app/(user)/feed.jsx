import { useState } from "react";

import { View, FlatList, RefreshControl } from "react-native";
import { FEEDS } from "../../fakeData/feed";
import NewsFeedItem from "../../components/blocks/NewsFeedItem";
import UserComposition from "../../components/blocks/UserComposition";
import { HeaderButton } from "../../components/elements";

function Feed() {
  const [refresh, setRefresh] = useState(false);
  const handleRefreshFeeds = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  return (
    <View style={{ flex: 1 }}>
      <UserComposition />
      <HeaderButton type={"chat"} />
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
