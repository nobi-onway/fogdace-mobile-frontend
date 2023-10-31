const USER_DATA = {
    avatar: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/391662974_1514498385754827_1438736499751965049_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q-8-ZLzuwP0AX99fT9t&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfCnKGsSh_dITWgQugLvMGQzZUazcCuSAuSQHtkHzSKAiQ&oe=653A8025',
    name: 'Đoàn Gia Bảo',
}

function useUser() {
    const cur_user = USER_DATA
    return { cur_user };
}

export default useUser;