import { StyleSheet, Dimensions } from "react-native";
import { SIZES, COLORS, ROUNDED } from "../../../constants";

const WIDTH_FULL = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      carouselItem: (padding, width, height) => ({
        padding: padding,
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center",
      }),
      image: {
        width: WIDTH_FULL,
        height: WIDTH_FULL,
      },
      paginationContainer: {
        paddingTop: SIZES.xSmall,
      },
      paginationDot: {
        width: SIZES.xSmall,
        height: SIZES.xSmall,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: COLORS.info,
      },
      inactivePaginationDot: {
        width: SIZES.xSmall,
        height: SIZES.xSmall,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: "lightgray",
      },
      focalPoint: {
          ...StyleSheet.absoluteFillObject,
          width: SIZES.xLarge,
          height: SIZES.xLarge,
          backgroundColor: COLORS.info,
          borderRadius: ROUNDED.small,
        },

});

export default styles;