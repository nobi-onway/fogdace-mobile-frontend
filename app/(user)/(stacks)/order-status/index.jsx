import { ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import { COLORS } from "../../../../constants";
import OrderStatus from "../../../../components/blocks/OrderStatus";
const OrderStatusDetail = () => {
    return (
        <ScrollView style={{backgroundColor:COLORS.white}}>
            <Stack.Screen options={{ headerTransparent: false }} />
            <OrderStatus />
        </ScrollView>
    );
};

export default OrderStatusDetail;
