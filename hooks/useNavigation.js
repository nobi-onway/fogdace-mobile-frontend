import { useRouter } from "expo-router";

function useNavigation() {
    const router = useRouter();

    const go_back = () => router.back();
    const go_to_sign_in = () => router.push('/sign-in');
    const go_to_sign_up = () => router.push('/sign-up');
    const go_to_user_profile = () => router.push('/user-profile')
    const go_to_feed = () => router.push('/feed');
    const go_to_dictionary_of = (id) => router.push({ pathname: '/dictionary', params: { id: id } });
    const go_to_dictionary_detail_of = (info) => router.push({ pathname: '/dictionary/detail', params: info })
    const go_to_knowledge_of = (id) => router.push({ pathname: '/knowledge', params: { id: id } });
    const go_to_knowledge_detail_of = (info) => router.push({ pathname: '/knowledge/detail', params: info })
    const go_to_trading = () => router.push('/trading')
    const go_to_chat = () => router.push('/chat')
    const go_to_room_chat_with = (info) => router.push({ pathname: '/chat/room-chat', params: info })
    const go_to_add_profile_pet = () => router.push("/add-profile-pet");
    const go_to_pet_list = () => router.push("/add-profile-pet/pet-list");
    const go_to_menu = () => router.push("/menu")
    const go_to_shopping_options = () => router.push("/shopping-option");
    const go_to_my_order = () => router.push("/shopping-option/my-order");
    const go_to_order_status_detail_of = (detailData) => router.push({ pathname: "/order-status", params: detailData })
    const go_to_my_cart = () => router.push("/shopping-option/cart");
    const go_to_address_book = () => router.push("/shopping-option/address-book");
    const go_to_payment_method = () => router.push("/shopping-option/payment-method");
    const go_to_pet_profile_of = (id) => router.push({ pathname: "/pet-profile", params: { id: id } })
    const go_to_completing_profile = (info) => router.push({ pathname: "/sign-up/completing-profile", params: info })
    const go_to_add_address = () => router.push("/shopping-option/add-new-address");
    const go_to_checkout = (checkoutData) => router.push({ pathname: '/checkout', params: checkoutData })
    const go_to_create_order = (orderDetail) => router.push({ pathname: "/checkout/create-order-success", params: orderDetail });


    return {
        go_to_completing_profile,
        go_to_pet_profile_of,
        go_to_chat,
        go_to_room_chat_with,
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
        go_to_menu,
        go_to_checkout,
        go_to_create_order,
        go_to_add_address,
        go_to_order_status_detail_of,
    };
}

export default useNavigation;
