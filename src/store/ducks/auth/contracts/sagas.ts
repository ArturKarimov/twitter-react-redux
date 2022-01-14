
import {call, put, takeEvery} from 'redux-saga/effects'
import {LoadingState, User} from "./types";
import {authApi, ResponseApi} from "../../../../api/auth/authApi";
import {AuthUserActionsType, FetchAuthUserActionInterface, setAuthUser, setLoadingAuthUser} from "./actionCreators";

export function* fetchAuthUserRequest({payload}: FetchAuthUserActionInterface) {
    try {
        const data: ResponseApi = yield call(authApi.signIn, payload)
        localStorage.setItem('token', data.data.token)
        yield put(setAuthUser(data.data))
    }catch (e) {
        yield put(setLoadingAuthUser(LoadingState.ERROR))
    }
}

export function* authUserSaga() {
    yield takeEvery(AuthUserActionsType.FETCH_AUTH_USER, fetchAuthUserRequest)
}