import {useState, useEffect, useRef} from "react";
import {
  View,
  Dimensions,
  Image,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import styles from "./style";

const carouselData = [
  {
    id: "1",
    content: "Item 1",
    img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "2",
    content: "Item 2",
    img: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80",
  },
  {
    id: "3",
    content: "Item 3",
    img: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const WIDTH_FULL = Dimensions.get("window").width
const ITEM_CAROUSEL_WIDTH = WIDTH_FULL * 0.8;

const TYPE = {
  feeds: {
    title: "feeds",
    itemWidth: WIDTH_FULL,
    padding: 0,
    widthImg: WIDTH_FULL,
    heightImg: WIDTH_FULL * 0.8
  },
  default: {
    title: "default",
    itemWidth: ITEM_CAROUSEL_WIDTH,
    padding: 20,
    widthImg: 350,
    heightImg: 200
  },
};

export default function CarouselSlider({ pagination = false, autoplay = false, carouselData = [], speed = 3000, type= 'default'}) {
  const { itemWidth, padding, widthImg, heightImg } = TYPE[type];
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem(padding, widthImg, heightImg)}>
        <Image source={{ uri: item.URI }} style={styles.image} />
      </View>
    );
  };

  useEffect(() => {
    if (autoplay && carouselRef.current) {
      const autoplayInterval = setInterval(() => {
        if (activeSlide < carouselData.length - 1) {
          carouselRef.current.snapToNext();
        } else {
          carouselRef.current.snapToItem(0);
        }
      }, speed); 
      return () => clearInterval(autoplayInterval);
    }
  }, [autoplay, activeSlide, carouselData.length]);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={WIDTH_FULL}
        itemWidth={itemWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      {pagination && (
          <Pagination
            dotsLength={carouselData.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.inactivePaginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
      )}
    </View>
  );
}
