import {LoadingState, UserState} from "../../../types";
import {LoginInput} from "../../../../components/LoginModalForm";
import {RegisterInput} from "../../../../components/RegisterModalForm";

export enum AuthUserActionsType {
    SET_AUTH_USER = 'users/SET_AUTH_USER',
    FETCH_AUTH_USER = 'users/FETCH_AUTH_USER',
    LOADING_AUTH_USER = 'users/LOADING_AUTH_USER',
    CHECK_AUTH_USER = 'users/CHECK_AUTH_USER'
}

export enum RegisterActionsType {
    SET_REGISTER_USER = 'users/SET_REGISTER_USER',
    FETCH_REGISTER_USER = 'users/FETCH_REGISTER_USER',
    LOADING_REGISTER_USER = 'users/LOADING_REGISTER_USER',
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

export interface CheckAuthUserActionInterface {
    type: AuthUserActionsType.CHECK_AUTH_USER
}


export interface SetRegisterUserActionInterface {
    type: RegisterActionsType.SET_REGISTER_USER,
    payload: UserState['data']
}

export interface FetchRegisterUserActionInterface {
    type: RegisterActionsType.FETCH_REGISTER_USER,
    payload: RegisterInput
}

export interface LoadingRegisterUserActionInterface {
    type: RegisterActionsType.LOADING_REGISTER_USER,
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

export const checkAuthUser = (): CheckAuthUserActionInterface => ({
    type: AuthUserActionsType.CHECK_AUTH_USER
})


export const setRegisterUser = (payload: UserState['data']): SetRegisterUserActionInterface => ({
    type: RegisterActionsType.SET_REGISTER_USER,
    payload
})

export const fetchRegisterUser = (payload: RegisterInput): FetchRegisterUserActionInterface => ({
    type: RegisterActionsType.FETCH_REGISTER_USER,
    payload
})

export const setLoadingRegisterUser = (payload: LoadingState): LoadingRegisterUserActionInterface => ({
    type: RegisterActionsType.LOADING_REGISTER_USER,
    payload
})


export type AuthUserActions = SetAuthUserActionInterface
    | FetchAuthUserActionInterface
    | LoadingAuthUserActionInterface
    | SetRegisterUserActionInterface
    | FetchRegisterUserActionInterface
    | LoadingRegisterUserActionInterface
    | CheckAuthUserActionInterface
