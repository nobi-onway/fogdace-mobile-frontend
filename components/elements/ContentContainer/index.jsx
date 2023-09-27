import { View } from "react-native";
import styles from "./style";

function ContentContainer({ color, children }) {
  return <View style={styles.container(color)}>{children}</View>;
}

export default ContentContainer;
