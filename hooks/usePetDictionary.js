const PET_DICTIONARY_DATA = [
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
        list: [
            {
                id: "1",
                type: "Abyssinian",
                url: "https://dogily.vn/wp-content/uploads/2021/07/gia-meo-long-ngan-abyssinian.jpg",
                description: `Mèo Abyssinian có nguồn gốc từ châu Á, chúng có kích thước trung bình và thường nặng từ 3 đến 6kg. Mèo Abyssinian có bộ lông ngắn và màu sắc của bộ lông trải dài từ màu quế đến nâu vàng hay xanh lam. Để Abyssinian có bộ lông đẹp thì bạn nên sử dụng khăn len da cừu để đánh bóng. Abyssinian còn được gọi là "thỏ mèo", vì chúng có đôi tai nhỏ và nhọn. Giống mèo này rất hiếu động và thích chơi đùa với chủ và đặc biệt chúng rất ghét ở một mình. Vì thế nếu muốn rước một bé mèo Abyssinian về nhà thì bạn nên đảm bảo cho các bé có một sân chơi rộng rãi và được rào chắn cẩn thận nhé.`,
                origin: "Ai Cập",
                life_span: 12,
                weight: "Dưới 4.5 Kg"
            },
            {
                id: "2",
                type: "Tai xoắn",
                url: "https://sieupet.com/sites/default/files/meo_my_tai_xoan2.jpg",
                description: `Mèo tai xoắn là một giống mèo đột biến tự nhiên có nguồn gốc từ Mỹ. Giống mèo này sở hữu bộ lông ngắn hoặc trung bình, và điểm nổi bật là đôi tai cong (có thể gấp ra sau đến 180 độ). Giống mèo tai xoắn này rất hiếm, đặc biệt là bên ngoài nước Mỹ. Các chú mèo Mỹ tai xoắn thường rất dễ chịu và thích vui đùa, bên cạnh đó chúng cũng sẽ rất nhẹ nhàng với trẻ em và những chú mèo khác.`,
                origin: "Mỹ",
                life_span: 12,
                weight: "Dưới 4.5 Kg"
            },
            {
                id: "3",
                type: "Mỹ lông ngắn",
                url: "https://zoipet.com/wp-content/uploads/2022/10/meo-my-long-ngan-2-Copy.jpg",
                description: `Mèo Mỹ lông ngắn là một giống mèo có kích thước trung bình, chúng có một cái đầu tương đối rộng, tròn cùng một đôi tai khá ngắn nên khiến chúng có cảm giác mập mạp. Chúng rất mến chủ, tình cảm và thích gần gũi con người. Ngoài ra chúng cũng rất thân thiện và thích được chơi đùa. Bên cạnh đó bạn có biết giống mèo này rất hiếm ở châu u và là một “ngôi sao” nổi tiếng tại Mỹ và Nhật Bản không!`,
                origin: "Anh",
                life_span: 12,
                weight: "2 đến 10 Kg"
            },
            {
                id: "4",
                type: "Mèo nhà",
                url: "https://traicho.com/wp-content/uploads/2023/05/1-4-533x400.png",
                description: `Loài này là sự pha trộn của một số giống mèo. Đây là một thuật ngữ chung để gọi một loài động vật không rõ nguồn gốc, chúng còn được gọi là "mèo nhà". Chúng thường bị nhầm lẫn với giống mèo châu Âu vì mèo trong hẻm thường được tìm thấy nhiều nhất ở châu Âu. Bộ lông của chúng không có màu sắc đặc biệt và cơ thể của chúng không có tiêu chuẩn xác định. Tuy nhiên, chúng ta có thể nói rằng nhờ nguồn gốc đa dạng, chúng trở thành một loài động vật mạnh mẽ và là một thợ săn giỏi. Trong tiếng Pháp, tên của nó có nghĩa đen là "con mèo" bởi vì nó sống trên các mái nhà và trong các rãnh nước của Paris.`,
                origin: "Châu Âu",
                life_span: 12,
                weight: "Dưới 4.5 Kg"
            },
        ]
    },
];

function usePetDictionary() {
    const pet_dictionary = PET_DICTIONARY_DATA;

    const pet_type_info_of = (id) => pet_dictionary.find(pet => pet.id === id)

    return { pet_dictionary, pet_type_info_of };
}

export default usePetDictionary;