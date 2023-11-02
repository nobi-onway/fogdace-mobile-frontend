import { StripeProvider } from "@stripe/stripe-react-native";
import { Pressable, Text } from "react-native";
import styles from "./style";
import useStripePayment from "../../../hooks/useStripePayment";
import { STRIPE_KEY } from "../../../constants/keys";

const StripePayment = ({ total, id }) => {
  const { onCheckout } = useStripePayment(id);

  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
      <Pressable
        onPress={() => onCheckout({ amount: total * 100+2200 })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Tiếp tục thanh toán</Text>
      </Pressable>
    </StripeProvider>
  );
};

export default StripePayment;
