import {takeEvery} from 'redux-saga/effects'
import {UsersActionsType} from "./actionCreators";

export function* fetchUsersRequest(): any {
    // try {
    //     const items = yield call(tweetsApi.fetchTweets)
    //     yield put(setTweets(items))
    //
    // }catch (e) {
    //     yield put(setTweetsLoading(LoadingState.ERROR))
    // }
}

export function* usersSaga() {
    yield takeEvery(UsersActionsType.FETCH_USERS, fetchUsersRequest)
}