function usePetInfoSectionCard(pet_health_profile) {
    const weight = {
        icon: 'pills',
        title: 'Cân nặng',
        children: null,
    }

    const xo_giun = {
        icon: 'pills',
        title: 'Xổ giun',
        children: null,
    }

    const tiem_phong = {
        icon: 'pills',
        title: 'Tiêm phòng',
        children: null,
    }

    const dinh_duong = {
        icon: 'pills',
        title: 'Dinh dưỡng',
        children: null,
    }

    const tinh_trang_sk = {
        icon: 'pills',
        title: 'Tình trạng sức khỏe',
        children: null,
    }

    const tinh_cach = {
        icon: 'pills',
        title: 'Tính cách',
        children: null,
    }

    return { weight, xo_giun, tiem_phong, dinh_duong, tinh_trang_sk, tinh_cach };
}

export default usePetInfoSectionCard;