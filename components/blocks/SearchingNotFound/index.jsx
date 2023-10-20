import { Text, View } from "react-native";
import { AnimationView } from "../../elements";

import styles from "./style";

function SearchingNotFound() {
  return (
    <View style={styles.container}>
      <AnimationView type="browsing" />
      <Text style={styles.result}>Không có kết quả nào</Text>
      <Text style={styles.response}>
        Xin lỗi! Chúng tôi không thể tìm thấy những gì bạn đang tìm kiếm
      </Text>
    </View>
  );
}

export default SearchingNotFound;
