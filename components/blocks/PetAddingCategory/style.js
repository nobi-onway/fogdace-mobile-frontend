import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 200,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: FONTS.bold,
  },
  button: {
    backgroundColor: "#F8A209",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 7,
    marginBottom: 50,
    fontFamily: FONTS.regular,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default styles;
