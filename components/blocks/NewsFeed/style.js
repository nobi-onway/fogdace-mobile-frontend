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
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.tiny
    },
    avatarWrapper: {
        flex: 1,
    },
    avatar: {
        width: SIZES.xxxLarge,
        height: SIZES.xxxLarge,
        borderRadius: ROUNDED.full
    },
    userInfoWrapper: {
        flex: 8,
      },
    username: {
        fontSize: SIZES.large,
        fontWeight: FONTS.bold
    },
    activityStatus: {
        fontSize: SIZES.xSmall,
        color: COLORS.gray,
      },
      threeDotsWrapper: {
        flex: 1,
      },
      threeDots: {
        textAlign: "center",
        fontSize: SIZES.xLarge,
      },
      conentWrapper: {
        padding: 5,
      },
      followText: {
        color: COLORS.info,
        fontSize: SIZES.xSmall,
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
        paddingVertical: 6,
        paddingHorizontal: SIZES.xLarge,
        marginVertical: 1
      },
});

export default styles;