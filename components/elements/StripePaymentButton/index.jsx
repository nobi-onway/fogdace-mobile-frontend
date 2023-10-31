import { StripeProvider } from "@stripe/stripe-react-native";
import { Pressable, Text } from "react-native";
import styles from "./style";
import useStripePayment from "../../../hooks/useStripePayment";

const StripePayment = () => {
  const STRIPE_KEY =
    "pk_test_51O5OO5Fe0KBrb7klJLhfVf8aAPzX4XxIQIB9v0uf76xYVSVEeckEEqAYstvH6ojcvZDoYLLbYgxVbZpdw2ocdkyz00x8xe8elR";

  const { onCheckout } = useStripePayment();

  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
      <Pressable onPress={() => onCheckout({ amount: 123 })} style={styles.button}>
        <Text style={styles.buttonText}>Đặt hàng</Text>
      </Pressable>
    </StripeProvider>
  );
};

export default StripePayment;
