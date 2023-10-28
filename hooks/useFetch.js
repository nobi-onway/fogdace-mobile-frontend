import axios from "axios";

function useFetch() {

    const get_fetcher = async (url) => await axios.get(url).then(res => res.data).then(res => res.metaData);

    const post_fetcher = async (url, data) => await axios.post(url, data).then(res => res.data).then(res => res.metaData);

    const put_fetcher = async (url, data) => await axios.put(url, data).then(res => res.data).then(res => res.metaData)

    return { get_fetcher, post_fetcher, put_fetcher };
}

export default useFetch;