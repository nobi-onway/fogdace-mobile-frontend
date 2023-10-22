import useNavigation from "../../../hooks/useNavigation";
import { ICONS } from "../../../constants";

function useHeaderButton() {
    const { go_back } = useNavigation();

    const close = {
        icon: ICONS.ionIcon_close,
        function: () => go_back(),
    }

    const back = {
        icon: ICONS.ionIcon_back,
        function: () => go_back(),
    }

    const chat = {
        icon: ICONS.ionIcon_chat,
        function: () => { }
    }

    const search = {
        icon: ICONS.ionIcon_search,
        function: () => { }
    }

    return { close, back, chat, search };
}

export default useHeaderButton;