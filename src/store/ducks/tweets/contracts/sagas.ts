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


export function* fetchAddTweetRequest({payload: text}: FetchAddTweetActionInterface) {
    try {
        const item: Tweet = yield call(tweetsApi.fetchAddTweet, text)
        yield put(addTweet(item))

    } catch (e) {
        console.log(e)
    }
}


export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}