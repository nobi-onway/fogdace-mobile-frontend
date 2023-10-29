import useNavigation from "../../../hooks/useNavigation";
import { ICONS } from "../../../constants";

function useHeaderButton() {
    const { go_back, go_to_chat, go_to_shopping_options, go_to_my_cart } = useNavigation();

    const close = {
        icon: ICONS.ionIcon_close,
        function: () => { go_back() },
    }

    const back = {
        icon: ICONS.ionIcon_back,
        function: () => { go_back() },
    }

    const chat = {
        icon: ICONS.ionIcon_chat,
        function: () => { go_to_chat(), alert('go to chat') }
    }

    const search = {
        icon: ICONS.ionIcon_search,
        function: () => { }
    }

    const shopping_options = {
        icon: ICONS.ionIcon_menu,
        function: () => { go_to_shopping_options() }
    }

    const shopping_cart = {
        icon: ICONS.ionIcons_cart,
        function: () => { go_to_my_cart() }
    }

    return { close, back, chat, search, shopping_options, shopping_cart };
}

export default useHeaderButton;