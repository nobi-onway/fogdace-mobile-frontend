import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";

const PET_URL = `${BASE_URL}/pet`;
const PET_HEALTH_PROFILE = `${BASE_URL}/petHealthProfile`;

function usePet() {
  const { post_fetcher, put_fetcher, get_fetcher } = useFetch();

  const create_pet_profile = async (data) => {
    const pet = await post_fetcher(PET_URL, data)
      .then((pet) => pet)
      .catch((err) => alert(err));

    const pet_id = pet._id;

    const pet_health_profile = await create_pet_health_profile({ pet_id });

    const profile_id = pet_health_profile._id;

    return profile_id;
  };

  const create_pet_health_profile = async (data) => {
    const pet_health_profile = await post_fetcher(
      PET_HEALTH_PROFILE,
      data
    ).then((res) => res);

    return pet_health_profile;
  };

  const update_pet_health_profile_of = async (id, data) => {
    await put_fetcher(`${PET_HEALTH_PROFILE}/${id}`, data)
      .then((response) => response)
      .catch((err) => alert(err));
  };

  const get_all_pet_types = async () => {
    const pet_types = await get_fetcher(`${BASE_URL}/petType`);
    return pet_types;
  };

  const get_all_pet_products = async () => {
    const pet_products = await get_fetcher(`${BASE_URL}/product?limit=14&page=1`);
    return pet_products;
  };

  return {
    create_pet_profile,
    update_pet_health_profile_of,
    get_all_pet_types,
    get_all_pet_products,
  };
}

export default usePet;
