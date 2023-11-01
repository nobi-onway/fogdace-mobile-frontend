import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 12
  },
  avatarWrapper: {},
  commentContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 6,
  },
  commentList: {
    flex: 1,
    paddingHorizontal: 4
  },
  infoWrapper: {
    width: 350,
  },
  username: {
    fontWeight: "bold",
  },
  content: {},
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    justifyContent: 'flex-end',
    borderTopWidth: 0.6,
    borderTopColor: COLORS.gray,
    paddingVertical: 4,
    gap: 8,
    paddingHorizontal: 4
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.gray,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    height: 50,
    borderRadius: 50
  },
  input: {
    flex: 1,
    height: 40,
  },
  centeredNoData: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    alignSelf: "center",
    color: COLORS.blackGrey,
    fontWeight: 'bold',
    fontSize: 20,

  }
});

export default styles;
