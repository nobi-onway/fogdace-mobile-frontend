import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedWrapper: {
    backgroundColor: 'red',
    paddingHorizontal: 1,
    marginVertical: SIZES.xSmall,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.medium
  },
  avatarWrapper: {
    flex: 1,
  },
  avatar: {
    width: SIZES.xxxLarge,
    height: SIZES.xxxLarge,
    borderRadius: ROUNDED.full,
  },
  userInfoWrapper: {
    flex: 8,
  },
  username: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  activityStatus: {
    fontSize: SIZES.xSmall,
    color: COLORS.lightBlack,
  },
  threeDotsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  threeDots: {
    textAlign: "center",
    fontSize: SIZES.xLarge,
  },
  conentWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: SIZES.small,
  },
  followText: {
    color: COLORS.black,
    fontSize: SIZES.xSmall,
    fontWeight: 'bold'
  },
  interactionRowGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  reactionWrapper: {
    paddingHorizontal: 8,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: SIZES.tiny,
    alignItems: "center",
  },
  interactionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.tiny,
  },
  followBtn: {
    backgroundColor: COLORS.gray,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 4, 
    paddingHorizontal: 8,
    paddingVertical: 6
  },
});

export default styles;
