const PET_DATA = [
    {
        id: "1",
        url: "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/05/fe4be2e2-cho-san-thumb.png",
        type: "Chó",
        list: []
    },
    {
        id: "2",
        url: "https://static.wixstatic.com/media/9d8ed5_b8fcc13f08fc4374bb1f979e032b0eb7~mv2.jpg/v1/fit/w_600,h_567,al_c,q_20,enc_auto/file.jpg",
        type: "Mèo",
        list: []
    },
];

function usePetDictionary() {
    const pets = PET_DATA;

    const pet_info_of = (id) => pets.find(pet => pet.id === id)

    return { pets, pet_info_of };
}

export default usePetDictionary;