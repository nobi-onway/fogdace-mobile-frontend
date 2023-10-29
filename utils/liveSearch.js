function liveSearch(value, list, key) {
    const searchValue = value.toLowerCase();

    const searchedList = [];

    list.map((info) => {
        const isExisted = info[key].toLowerCase().includes(searchValue);
        if (!isExisted) return;
        searchedList.push(info);
    });

    return searchedList;
}

export default liveSearch;