import { BASE_URL } from "../constants/url";
import { userStore } from "../stores/userStore";
import useFetch from "./useFetch";

const FIND_PETS_OF_URL = (owner_id) => `${BASE_URL}/pet/owner/${owner_id}`;

const FIND_TRADING_PETS_OF_URL = (owner_id) => `${BASE_URL}/pet/pettrading/${owner_id}`;

function useUser() {
    const { get_fetcher } = useFetch()
    const { info } = userStore();

    const get_my_pets = async () => await get_fetcher(FIND_PETS_OF_URL(info._id)).then(pets => pets)

    return { get_my_pets };
}

export default useUser;