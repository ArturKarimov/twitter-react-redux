import {Tweet} from "../../store/ducks/tweets/contracts/types";
import $api from "../../core/axios";

interface Response<T> {
    status: string,
    data: T
}





export const tweetsApi = {
    async fetchTweets(): Promise<Tweet[]> {
        const {data} = await $api.get<Response<Tweet[]>>('/tweets')
        return data.data
    },
    async fetchTweetById(id: string | undefined): Promise<Tweet> {
        const {data} = await $api.get<Response<Tweet>>('/tweets/' + id)
        return data.data
    },
    async fetchAddTweet(payload: string) {
        const {data} = await $api.post<Response<Tweet>>('/tweets', {text: payload})
        return data.data
    },
    async deleteTweet({payload}: any) {
        const {data} = await $api.delete('/tweets/' + payload)
        return data.data
    }
}
