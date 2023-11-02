import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";

import useNavigation from "./useNavigation";

const CHECKOUT_URL = `${BASE_URL}/shoppingOrder`;

const CHECKOUT_WITH_VISA = `${BASE_URL}/shoppingOrder/payment`;
const { go_to_create_order } = useNavigation();

function useCheckout() {

    const { post_fetcher, put_fetcher } = useFetch();

    const create_order = async (data) => {
        try {
            const order = await post_fetcher(CHECKOUT_URL, data);
            const checkoutData = {
                orderDetail: JSON.stringify(order),
            };
            console.log("response:", checkoutData)
            go_to_create_order(checkoutData);
            return order;
        } catch (error) {
            alert(error);
        }
    };
    const pay_by_visa = async (id) => {
        await put_fetcher(`${CHECKOUT_WITH_VISA}/${id}`)
            .then((response) => response)
            .catch((err) => alert(err));
    };

    return {
        create_order,
        pay_by_visa
    };
}

export default useCheckout;
