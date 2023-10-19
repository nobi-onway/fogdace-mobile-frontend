const PET_KNOWLEDGE_DATA = [
    {
        id: "1",
        url: "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/05/fe4be2e2-cho-san-thumb.png",
        info_about: "Thức Ăn và Dinh Dưỡng Cho Chó",
        list: []
    },
    {
        id: "2",
        url: "https://static.wixstatic.com/media/9d8ed5_b8fcc13f08fc4374bb1f979e032b0eb7~mv2.jpg/v1/fit/w_600,h_567,al_c,q_20,enc_auto/file.jpg",
        info_about: "Thức Ăn và Dinh Dưỡng Cho Mèo",
        list: []
    },
];

function usePetKnowledge() {
    const pet_knowledge = PET_KNOWLEDGE_DATA;
    return { pet_knowledge };
}

export default usePetKnowledge;