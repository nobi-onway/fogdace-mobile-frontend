import { StyleSheet } from "react-native";
import { SIZES, FONTS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#30395a",
    borderRadius: 10,
    padding: 15,
    width: "auto",
    alignSelf: 'flex-start'
  },
  iconWrapper: {
    width: SIZES.mega,
    height: SIZES.mega,
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    backgroundColor: "#1b2038",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: SIZES.jumbo,
    height: SIZES.jumbo,
  },
  text: {
    marginTop: 5,
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    color: "white",
  },
});

export default styles;
