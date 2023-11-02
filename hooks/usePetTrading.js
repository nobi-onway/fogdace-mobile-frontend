import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";

const FIND_TRADING_PETS_OF_URL = (owner_id) => `${BASE_URL}/pet/pettrading/${owner_id}`
const FIND_PET_TRADING_WITH_URL = (pet_id) => `${BASE_URL}/pet/trading/${pet_id}`
const REQUEST_TRADING_PET_WITH = (pet_id) => `${BASE_URL}/pet/requestTrading/${pet_id}`
const CANCEL_TRADING_PET_WITH = (pet_id) => `${BASE_URL}/pet/cancelTrading/${pet_id}`
const ALL_TRADING_PET = `${BASE_URL}/pet/trading`

function usePetTrading() {
    const { get_fetcher, put_fetcher } = useFetch()
    const get_pets_trading = async () => await get_fetcher(ALL_TRADING_PET).then(pets => pets)

    const request_trading_pet_with = async (pet_id) => await put_fetcher(REQUEST_TRADING_PET_WITH(pet_id)).then(pet => pet)

    const cancel_trading_pet_with = async (pet_id) => await put_fetcher(CANCEL_TRADING_PET_WITH(pet_id)).then(pet => pet)

    const get_pet_trading_with = async (pet_id) => await get_fetcher(FIND_PET_TRADING_WITH_URL(pet_id)).then(pet => pet)

    const get_trading_pets_of = async (owner_id) => await get_fetcher(FIND_TRADING_PETS_OF_URL(owner_id)).then(pets => pets)

    return { get_pets_trading, get_pet_trading_with, get_trading_pets_of, request_trading_pet_with, cancel_trading_pet_with };
}

export default usePetTrading;