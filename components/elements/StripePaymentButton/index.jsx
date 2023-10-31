import { StripeProvider } from "@stripe/stripe-react-native";
import { Pressable, Text } from "react-native";
import styles from "./style";
import useStripePayment from "../../../hooks/useStripePayment";
import { STRIPE_KEY } from "../../../constants/keys";

const StripePayment = () => {
  const { onCheckout } = useStripePayment();

  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
      <Pressable
        onPress={() => onCheckout({ amount: 123 })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Đặt hàng</Text>
      </Pressable>
    </StripeProvider>
  );
};

export default StripePayment;
