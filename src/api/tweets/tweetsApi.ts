import axios from "axios";
import {Tweet, TweetsState} from "../../store/ducks/tweets/contracts/types";

export const tweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get<TweetsState['items']>('/tweets').then(({data}) => data)
    },
    fetchAddTweet(payload: Tweet): Promise<Tweet> {
        return axios.post('/tweets', payload).then(({data}) => data)
    }
}