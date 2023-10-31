import { BASE_URL } from "../constants/url";
import { userStore } from "../stores/userStore";
import useFetch from "./useFetch";

const FIND_PET_BY_OWNER = (owner_id) => `${BASE_URL}/pet/owner/${owner_id}`;

function useUser() {
    const { get_fetcher } = useFetch()
    const { info } = userStore();

    const get_my_pets = async () => await get_fetcher(FIND_PET_BY_OWNER(info._id)).then(pets => pets)

    return { get_my_pets };
}

export default useUser;