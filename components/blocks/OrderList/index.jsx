import { View, FlatList, ScrollView, Text, Image } from "react-native";
import OrderCard from "../OrderCard";
import { FEEDS } from "../../../fakeData/feed";
import { COLORS, FONTS, IMAGES } from "../../../constants";


const OrderList = () => {
    return (
        <ScrollView style={{ height: '100%', backgroundColor: COLORS.primaryOrder }}>
            {FEEDS.length <= 0 ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image resizeMode="cover" style={{ width: 150, height: 150, marginTop: 150 }} source={IMAGES.noData} />
                    <Text style={{ fontSize: 26, fontFamily: FONTS.bold, color: COLORS.blackGrey, marginTop: 15 }}>Không có đơn hàng nào</Text>
                </View>
            ) : (
                <FlatList
                    data={FEEDS}
                    renderItem={({ item }) =>
                        <OrderCard />
                    }
                    keyExtractor={item => item.id}
                    numColumns={1}
                />
            )}
        </ScrollView>
    );
};

export default OrderList;
