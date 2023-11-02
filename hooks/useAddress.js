import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";
import { userStore } from '../stores/userStore'

const ADDRESS_DEFAULT_URL = `${BASE_URL}/setDefault`;
const ADDRESS_NEW_URL = `${BASE_URL}/address`;

const USER_BY_ID_URL = `${BASE_URL}`;

function useAddress() {

    const { put_fetcher, get_fetcher } = useFetch();

    const set_default_address = async (id, data) => {
        await put_fetcher(`${ADDRESS_DEFAULT_URL}/${id}`, data)
            .then((response) => response)
            .catch((err) => alert(err));
    };
    const add_new_address = async (id, data) => {
         await put_fetcher(`${ADDRESS_NEW_URL}/${id}`, data)
            .then((response) => response)
            .catch((err) => alert(err));
            
    };

    const get_address_by_id = async (id) => {
        const user = await get_fetcher(`${USER_BY_ID_URL}/${id}`)
            .then((res) => res)
            .catch((err) => alert(err));
           
        return user.address
    };


    return {
        set_default_address,
        add_new_address,
        get_address_by_id
    };
}

export default useAddress;
