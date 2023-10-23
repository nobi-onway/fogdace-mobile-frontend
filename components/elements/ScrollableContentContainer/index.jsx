import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./style";

function ScrollableContentContainer({ style, color, children }) {
  return (
    <SafeAreaView style={[styles.container(color)]}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={[styles.content_wrapper, style]}>
          {children}
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default ScrollableContentContainer;
