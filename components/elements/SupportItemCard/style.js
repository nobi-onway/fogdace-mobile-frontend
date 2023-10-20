import { StyleSheet } from "react-native";
import { SIZES, FONTS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#30395a",
    flexDirection: "row",
    padding: 15,
    flex: 1,
  },
  logoWrapper: {
    width: SIZES.mega,
    height: SIZES.mega,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#1b2038",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: SIZES.jumbo,
    height: SIZES.jumbo,
  },
  textWrapper: {
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  text: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    color: "white",
  },
});

export default styles;
