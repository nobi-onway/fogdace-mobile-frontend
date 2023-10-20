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

    return { close, back };
}

export default useHeaderButton;