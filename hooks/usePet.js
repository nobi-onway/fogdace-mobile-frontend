import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";

const PET_URL = `${BASE_URL}/pet`;
const PET_DETAIL_OF_URL = (id) => `${PET_URL}/detail/${id}`;
const PET_HEALTH_PROFILE = `${BASE_URL}/petHealthProfile`;
const PET_HEALTH_PROFILE_OF_URL = (id) => `${PET_HEALTH_PROFILE}/${id}`;

function usePet() {
    const { post_fetcher, put_fetcher, get_fetcher } = useFetch();

    const create_pet_profile = async (data) =>
        await post_fetcher(PET_URL, data)
            .then(pet_health_profile_id => pet_health_profile_id)
            .catch((err) => alert("Không tạo được pet " + err.message));


    const update_pet_health_profile_of = async (id, data) => {
        await put_fetcher(`${PET_HEALTH_PROFILE}/${id}`, data)
            .then((response) => response)
            .catch((err) => alert(err));
    };

    const get_pet_health_profile_of = async (id) =>
        await get_fetcher(PET_HEALTH_PROFILE_OF_URL(id))
            .then(health_profile => health_profile)

    const get_all_pet_types = async () => {
        const pet_types = await get_fetcher(`${BASE_URL}/petType`);
        return pet_types;
    };

    const get_pet_detail_of = async (id) =>
        await get_fetcher(PET_DETAIL_OF_URL(id)).then(pet => pet)


    return {
        get_pet_detail_of,
        create_pet_profile,
        update_pet_health_profile_of,
        get_all_pet_types,
        get_pet_health_profile_of,
    };
}

export default usePet;
