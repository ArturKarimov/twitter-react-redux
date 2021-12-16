import {addTweet, FetchAddTweetActionInterface, setTweets, setTweetsLoading, TweetsActionsType} from "./actionCreators";
import {call, put, takeEvery} from 'redux-saga/effects'
import {tweetsApi} from "../../../../api/tweets/tweetsApi";
import {LoadingState, Tweet} from "./types";

export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(tweetsApi.fetchTweets)
        yield put(setTweets(items))

    }catch (e) {
        yield put(setTweetsLoading(LoadingState.ERROR))
    }
}


export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface) {
    try {
        const newTweet: Tweet = {
            id: Date.now().toString(),
            _id: Date.now().toString(),
            text: payload,
            user: {
                fullName: "Test FullName",
                userName: "testUsername",
                avatarUrl: "https://source.unsplash.com/random/100x100?2"
            }
        }
        const item: Tweet = yield call(tweetsApi.fetchAddTweet, newTweet)
        yield put(addTweet(item))

    } catch (e) {
        console.log(e)
    }
}


export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}