import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feedWrapper: {
    marginVertical: SIZES.xSmall,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.tiny,
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
    color: COLORS.info,
    fontSize: SIZES.xSmall,
  },
  interactionRowGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  reactionWrapper: {
    padding: 8,
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
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.info,
    borderRadius: 4, 
    paddingHorizontal: 8,
    paddingVertical: 6
  },
});

export default styles;
