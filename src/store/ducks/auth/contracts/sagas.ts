
import {call, put, takeEvery} from 'redux-saga/effects'
import {LoadingState} from "../../../types";
import {authApi, ResponseApi} from "../../../../api/auth/authApi";
import {
    AuthUserActionsType, CheckAuthUserActionInterface,
    FetchAuthUserActionInterface,
    FetchRegisterUserActionInterface, RegisterActionsType,
    setAuthUser,
    setLoadingAuthUser, setLoadingRegisterUser, setRegisterUser
} from "./actionCreators";

export function* fetchAuthUserRequest({payload}: FetchAuthUserActionInterface) {
    try {
        const data: ResponseApi = yield call(authApi.signIn, payload)
        localStorage.setItem('token', data.data.token)
        yield put(setAuthUser(data.data))
        yield put(setLoadingAuthUser(LoadingState.LOADED))
    }catch (e) {
        yield put(setLoadingAuthUser(LoadingState.ERROR))
    }
}

export function* fetchCheckAuthUserRequest() {
    try {
        const data: ResponseApi = yield call(authApi.getMe)
        yield put(setAuthUser(data.data))
        yield put(setLoadingAuthUser(LoadingState.LOADED))
    }catch (e) {
        yield put(setLoadingAuthUser(LoadingState.ERROR))
    }
}

export function* fetchRegisterUserRequest({payload}: FetchRegisterUserActionInterface) {
    try {
        const data: ResponseApi = yield call(authApi.signUp, payload)
        yield put(setRegisterUser(data.data))
        yield put(setLoadingRegisterUser(LoadingState.LOADED))
    }catch (e) {
        yield put(setLoadingRegisterUser(LoadingState.ERROR))
    }
}

export function* authUserSaga() {
    yield takeEvery(AuthUserActionsType.FETCH_AUTH_USER, fetchAuthUserRequest)
    yield takeEvery(AuthUserActionsType.CHECK_AUTH_USER, fetchCheckAuthUserRequest)
    yield takeEvery(RegisterActionsType.FETCH_REGISTER_USER, fetchRegisterUserRequest)
}