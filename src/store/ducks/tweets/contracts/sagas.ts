import {setTweets, setTweetsLoading, TweetsActionsType} from "./actionCreators";
import {call, put, takeEvery} from 'redux-saga/effects'
import {tweetsApi} from "../../../../api/tweets/tweetsApi";
import {LoadingState} from "./types";

export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(tweetsApi.fetchTweets)
        yield put(setTweets(items))

    }catch (e) {
        yield put(setTweetsLoading(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
