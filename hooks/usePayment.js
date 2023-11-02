import AsyncStorage from "@react-native-async-storage/async-storage";

function usePayment() {

    const setDefaultPayment = async (paymentMethod) => {
        try {
            await AsyncStorage.setItem("defaultPayment", paymentMethod);
        } catch (error) {
            console.error(error);
        }
    };

    const getDefaultPayment = async () => {
        try {
            const defaultPayment = await AsyncStorage.getItem("defaultPayment");
            return defaultPayment;
        } catch (error) {
            console.error(error);
            return null;
        }
    };
    return {
        setDefaultPayment,
        getDefaultPayment
    }
}
export default usePayment