import axios from "axios"
import { BASE_URL } from "../../constants/url";

const GET_FEEDS_URL = `${BASE_URL}/post/all`
const LIKED_FEEDS_URL = `${BASE_URL}/likedPost`
const UNLIKED_FEEDS_URL = `${BASE_URL}/unlikedPost`


export const getAllFeeds = async() => {
    const res = await axios.get(GET_FEEDS_URL);

    return res.data.metaData
}

export const likeFeed = async(post) => {
    const res = await axios.patch(`${LIKED_FEEDS_URL}/${post.userId}`, {post_id: post._id})

  

    return res.data.metaData
}

export const unLikeFeed = async(post) => {
    const res = await axios.patch(`${UNLIKED_FEEDS_URL}/${post.userId}`, {post_id: post._id})

    return res.data.metaData
}