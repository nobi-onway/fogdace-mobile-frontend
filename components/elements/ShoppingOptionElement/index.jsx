import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { COLORS, IMAGES } from "../../../constants";
import useNavigation from "../../../hooks/useNavigation";

const TYPE = {
    my_order: {
        icon: IMAGES.order,
        text: "Đơn hàng của tôi",
        color: COLORS.primaryOrder,
        route: "go_to_my_order",
    },
    cart: {
        icon: IMAGES.shopping,
        text: "Giỏ hàng",
        color: COLORS.orange,
        route: "go_to_my_cart",
    },
    address_book: {
        icon: IMAGES.location,
        text: "Sổ đại chỉ",
        color: COLORS.white,
        route: "go_to_address_book",
    },
    payment_method: {
        icon: IMAGES.wallet,
        text: "Phương thức thanh toán",
        color: COLORS.primaryOrder,
        route: "go_to_payment_method",
    },
};

function ShoppingOptionElement({ type }) {
    const props = TYPE[type];

    const { icon, text, color, route } = props;

    const navigate = useNavigation();

    const wrapperStyle = type === "address_book" ? [styles.wrapper, styles.cartBackground] : styles.wrapper;
    const textStyle = type === "cart" ? [styles.cartText] : styles.text;


    return (
        <TouchableOpacity
        onPress={() => {
            if (route) {
              navigate[route]();
            }
          }}
        >
            <View style={[wrapperStyle, { backgroundColor: color }]}>
                <View style={styles.icon_wrapper}>
                    <Image resizeMode="cover" style={styles.icon} source={icon} />
                </View>
                <View style={styles.text_wrapper}>
                    <Text style={textStyle}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default ShoppingOptionElement;
