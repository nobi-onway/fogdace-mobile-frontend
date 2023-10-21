import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fd",
    paddingTop: 50,
  },
  cover: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f8f9fd",
    justifyContent: "center",
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  headingButton: {
    backgroundColor: "#007BFF",
    margin: 5,
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#fff",
    margin: 5,
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  coverItem: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 2,
    backgroundColor: "#fff",
  },
  title: {
    color: "#384059",
    padding: 15,
    fontSize: 17,
    fontFamily: FONTS.medium
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 20,
  },
  imageItem: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default styles;
