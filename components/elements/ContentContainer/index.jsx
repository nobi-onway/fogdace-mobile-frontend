import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import styles from "./style";

function ContentContainer({ color, children }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container(color)}>{children}</View>
    </TouchableWithoutFeedback>
  );
}

export default ContentContainer;
