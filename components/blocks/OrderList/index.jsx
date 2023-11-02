import { View, FlatList, ScrollView, Text, Image } from "react-native";
import OrderCard from '../../elements/OrderCard'
import { FEEDS } from "../../../fakeData/feed";
import { COLORS, FONTS, IMAGES } from "../../../constants";
import useOrder from "../../../hooks/useOrder";
import { useState,useEffect } from "react";
import {userStore} from '../../../stores/userStore'

const OrderList = () => {

    const [orderList, setOrderList] = useState();
    
    const { get_order_by_user } = useOrder();
    const { info } = userStore();

    useEffect(() => {
        const allOrder = async () => {
            const data = await get_order_by_user(info._id);
            setOrderList(data);
            console.log("order",data);
        };
        allOrder();
    }, []);

    return (
        <View style={{ height: '100%', backgroundColor: COLORS.primaryOrder }}>
            {FEEDS.length <= 0 ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image resizeMode="cover" style={{ width: 150, height: 150, marginTop: 150 }} source={IMAGES.noData} />
                    <Text style={{ fontSize: 26, fontFamily: FONTS.bold, color: COLORS.blackGrey, marginTop: 15 }}>Không có đơn hàng nào</Text>
                </View>
            ) : (
                <ScrollView>
                    {orderList?.map((order) => (
                        <OrderCard key={order._id} data={order}/>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default OrderList;
