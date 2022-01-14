import {LoadingState, UserState} from "./types";
import {LoginInput} from "../../../../components/LoginModalForm";

export enum AuthUserActionsType {
    SET_AUTH_USER = 'users/SET_AUTH_USER',
    FETCH_AUTH_USER = 'users/FETCH_AUTH_USER',
    LOADING_AUTH_USER = 'users/LOADING_AUTH_USER',
}

export interface SetAuthUserActionInterface {
    type: AuthUserActionsType.SET_AUTH_USER,
    payload: UserState['data']
}

export interface FetchAuthUserActionInterface {
    type: AuthUserActionsType.FETCH_AUTH_USER,
    payload: LoginInput
}

export interface LoadingAuthUserActionInterface {
    type: AuthUserActionsType.LOADING_AUTH_USER,
    payload: LoadingState
}


export const setAuthUser = (payload: UserState['data']): SetAuthUserActionInterface => ({
    type: AuthUserActionsType.SET_AUTH_USER,
    payload
})

export const fetchAuthUser = (payload: LoginInput): FetchAuthUserActionInterface => ({
    type: AuthUserActionsType.FETCH_AUTH_USER,
    payload
})

export const setLoadingAuthUser = (payload: LoadingState): LoadingAuthUserActionInterface => ({
    type: AuthUserActionsType.LOADING_AUTH_USER,
    payload
})




export type AuthUserActions = SetAuthUserActionInterface
    | FetchAuthUserActionInterface
    | LoadingAuthUserActionInterface
