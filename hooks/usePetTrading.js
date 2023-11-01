import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";

const FIND_TRADING_PETS_OF_URL = (owner_id) => `${BASE_URL}/pet/pettrading/${owner_id}`
const FIND_PET_TRADING_WITH_URL = (pet_id) => `${BASE_URL}/pet/trading/${pet_id}`
const REQUEST_TRADING_PET_WITH = (pet_id) => `${BASE_URL}/pet/requestTrading/${pet_id}`
const CANCEL_TRADING_PET_WITH = (pet_id) => `${BASE_URL}/pet/cancelTrading/${pet_id}`

const PET_TRADING_DATA = [
    {
        id: '0000000000000001',
        name: "Bún Bò",
        gender: "Đực",
        type: "Shiba Inu",
        birthday: "20/10/2023",
        avatar: "https://i.pinimg.com/236x/8a/ce/9f/8ace9fe1a86e9fc2b5dced5ea7feb0d7.jpg",
        pet_health_profile: {
            triet_san: "Chưa triệt sản",
            weight: 2,
        }
    },
    {
        id: '0000000000000002',
        name: "Choco",
        gender: "Cái",
        type: "Labrador Retriever",
        birthday: "05/12/2022",
        avatar: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-187202146-e1694559336781.jpg",
        pet_health_profile: {
            triet_san: "Đã triệt sản",
            weight: 28,
        }
    },
    {
        id: '0000000000000003',
        name: "Coco",
        gender: "Cái",
        type: "Poodle",
        birthday: "15/06/2021",
        avatar: "https://cdn.tgdd.vn/Files/2021/04/15/1343612/tim-hieu-giong-cho-poodle-nguon-goc-dac-diem-cach-nuoi-bang-gia-202104151447536289.jpg",
        pet_health_profile: {
            triet_san: "Đã triệt sản",
            weight: 8,
        }
    },
    {
        id: '0000000000000004',
        name: "Rocky",
        gender: "Đực",
        type: "Bulldog",
        birthday: "20/09/2020",
        avatar: "https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg",
        pet_health_profile: {
            triet_san: "Chưa triệt sản",
            weight: 22,
        }
    },
    {
        id: '0000000000000005',
        name: "Bella",
        gender: "Cái",
        type: "Siberian Husky",
        birthday: "10/02/2019",
        avatar: "https://www.dailypaws.com/thmb/B6yWhzGpQZsg3kxMzLn-hvGIF7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/siberian-husky-100800827-2000-9449ca147e0e4b819bce5189c2411188.jpg",
        pet_health_profile: {
            triet_san: "Chưa triệt sản",
            weight: 28,
        }
    }
]

function usePetTrading() {
    const { get_fetcher, put_fetcher } = useFetch()
    const pets_trading = PET_TRADING_DATA;

    const request_trading_pet_with = async (pet_id) => await put_fetcher(REQUEST_TRADING_PET_WITH(pet_id)).then(pet => pet)

    const cancel_trading_pet_with = async (pet_id) => await put_fetcher(CANCEL_TRADING_PET_WITH(pet_id)).then(pet => pet)

    const get_pet_trading_with = async (pet_id) => await get_fetcher(FIND_PET_TRADING_WITH_URL(pet_id)).then(pet => pet)

    const get_trading_pets_of = async (owner_id) => await get_fetcher(FIND_TRADING_PETS_OF_URL(owner_id)).then(pets => pets)

    return { pets_trading, get_pet_trading_with, get_trading_pets_of, request_trading_pet_with, cancel_trading_pet_with };
}

export default usePetTrading;