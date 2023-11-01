import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";

const GET_FEEDS_URL = `${BASE_URL}/post/all`

function useFeeds(){
    const { get_fetcher } = useFetch()
    const get_all_feeds = async() => {
        const feeds = await get_fetcher(GET_FEEDS_URL).then(feeds => feeds).catch(err => alert(err))

        return feeds
    }
    const get_feeds_by_followers = () => {
        
    }

    return {
        get_all_feeds
    }
}

export default useFeeds