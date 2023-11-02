import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllFeeds, likeFeed, unLikeFeed } from "./callers";

const API_KEY = {
    GET_ALL_FEEDS: "feeds"
}

export const useGetAllFeeds = () => {
    return useQuery({
        queryKey: ['feeds'],
        queryFn: () => getAllFeeds(),
        staleTime: 1000,
        cacheTime: 1000,
        refetchOnWindowFocus: true,
        refetchInterval: 1000
    })
}

export const useLikedFeeds = () => {
  const queryClient = useQueryClient();

    return useMutation(likeFeed, {
        onSuccess: () => {
            
            queryClient.invalidateQueries()
        },
        onError: () => {
            
            queryClient.invalidateQueries()
           
        }
    })
}

export const useUnLikedFeeds = () => {
  const queryClient = useQueryClient();
    
    return useMutation(unLikeFeed, {
        onSuccess: () => {
            

            queryClient.invalidateQueries()


        },
        onError: () => {
            queryClient.invalidateQueries()

        }
    })
}