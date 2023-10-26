import { useRouter } from "expo-router";

function useNavigation() {
  const router = useRouter();

  const go_back = () => router.back();
  const go_to_sign_in = () => router.push("/sign-in");
  const go_to_sign_up = () => router.push("/sign-up");
  const go_to_user_profile = () => router.push("/menu/user-profile");
  const go_to_feed = () => router.push("/feed");
  const go_to_dictionary_of = (id) =>
    router.push({ pathname: "/explore/dictionary", params: { id: id } });
  const go_to_dictionary_detail_of = (info) =>
    router.push({
      pathname: "/explore/dictionary/detail",
      params: { ...info },
    });
  const go_to_knowledge_of = (id) =>
    router.push({ pathname: "/explore/knowledge", params: { id: id } });
  const go_to_knowledge_detail_of = (info) =>
    router.push({ pathname: "/explore/knowledge/detail", params: { ...info } });
  const go_to_trading = () => router.push("/explore/trading");
  const go_to_add_profile_pet = () => router.push("/menu/add-profile-pet");
  const go_to_pet_list = () => router.push("/menu/add-profile-pet/pet-list");
  const go_to_shopping_options = () => router.push("/menu/shopping-option");
  const go_to_my_order = () => router.push("/menu/shopping-option/my-order");
  const go_to_my_cart = () => router.push("/menu/shopping-option/cart");
  const go_to_address_book = () => router.push("/menu/shopping-option/address-book");
  const go_to_payment_method = () => router.push("/menu/shopping-option/payment-method");


  return {
    go_back,
    go_to_sign_in,
    go_to_feed,
    go_to_sign_up,
    go_to_dictionary_of,
    go_to_dictionary_detail_of,
    go_to_knowledge_of,
    go_to_knowledge_detail_of,
    go_to_trading,
    go_to_user_profile,
    go_to_add_profile_pet,
    go_to_pet_list,
    go_to_shopping_options,
    go_to_my_order,
    go_to_my_cart,
    go_to_address_book,
    go_to_payment_method,
  };
}

export default useNavigation;
