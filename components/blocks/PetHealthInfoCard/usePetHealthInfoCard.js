import formatISODate from "../../../utils/formatISODate";

function usePetHealthInfoCard(pet) {
    const type = {
        icon: "chemical",
        mainInfo: pet.type,
        subInfo: "Giống",
    }

    const gender = {
        icon: "balloons",
        mainInfo: pet.gender === 1 ? "Đực" : "Cái",
        subInfo: "Giới tính",
    }

    const age = {
        icon: "balloons",
        mainInfo: pet.type,
        subInfo: "Giống",
    }

    const birthday = {
        icon: "birthday",
        mainInfo: formatISODate(pet.birthday),
        subInfo: "Sinh nhật",
    }

    return { age, gender, birthday, type };
}

export default usePetHealthInfoCard;