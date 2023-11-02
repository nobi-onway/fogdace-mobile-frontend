import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";
import { useStripe } from "@stripe/stripe-react-native";
import useCheckout from "./useCheckout";
import useNavigation from "./useNavigation";

function useStripePayment(id) {
  const { post_fetcher } = useFetch();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const { pay_by_visa } = useCheckout();
  const { go_to_feed } = useNavigation();

  const onCheckout = async (data) => {
    const response = await post_fetcher(`${BASE_URL}/payment/intents`, data);
    if (response.error) {
      Alert.alert("Something went wrong");
      return;
    }

    const initResponse = await initPaymentSheet({
      merchantDisplayName: "dev",
      paymentIntentClientSecret: response,
      returnURL: `${BASE_URL}/payment/intents`,
    });
    if (initResponse.error) {
      console.log(initResponse.error);
      Alert.alert("Something went wrong");
      return;
    }

    const paymentResponse = await presentPaymentSheet();

    if (paymentResponse.error) {
      Alert.alert(
        `Error code: ${paymentResponse.error.code}`,
        paymentResponse.error.message
      );
      return;
    }


    // If payment ok -> create the order
    await pay_by_visa(id);
    go_to_feed();
    // onCreateOrder();
  };

  return { onCheckout };
}

export default useStripePayment;
