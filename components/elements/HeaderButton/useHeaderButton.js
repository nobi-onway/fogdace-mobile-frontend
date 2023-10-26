import useNavigation from "../../../hooks/useNavigation";
import { ICONS } from "../../../constants";

function useHeaderButton() {
    const { go_back, go_to_chat } = useNavigation();

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
        function: () => { go_to_chat(); alert('go to chat') }
    }

    const search = {
        icon: ICONS.ionIcon_search,
        function: () => { }
    }

    return { close, back, chat, search };
}

export default useHeaderButton;