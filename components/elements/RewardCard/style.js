import { StyleSheet } from "react-native";
import { SIZES, FONTS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fddf99",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    flex: 1,
  },
  viewAbsolute: {
    flex: 1,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    flex: 1,
    position: "absolute",
    top: -30,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
  description: {
    textAlign: "center",
    paddingVertical: 15,
    fontSize: 15,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iconButton: {
    width: SIZES.mega,
    height: SIZES.mega,
  },
  textButton: {
    fontSize: 10,
    color: "#e7a530",
    fontFamily: FONTS.bold,
  },
});

export default styles;
