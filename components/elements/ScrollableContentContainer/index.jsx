import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./style";

function ScrollableContentContainer({ color, children }) {
  return (
    <SafeAreaView style={styles.container(color)}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>{children}</ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default ScrollableContentContainer;
