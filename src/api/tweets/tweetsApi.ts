import axios from "axios";
import {TweetsState} from "../../store/ducks/tweets/contracts/types";

export const tweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get<TweetsState['items']>('/tweets').then(({data}) => data)
    }
}