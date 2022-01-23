import {LoadingState, User} from "../../../types";

export enum UsersActionsType {
    SET_USERS = 'users/SET_USERS',
    FETCH_USERS = 'users/FETCH_USERS',
    LOADING_USERS = 'users/LOADING_USERS',
}

export interface SetUsersActionInterface {
    type: UsersActionsType.SET_USERS,
    payload: User[]
}

export interface FetchUsersActionInterface {
    type: UsersActionsType.FETCH_USERS
}

export interface SetUsersLoadingActionInterface {
    type: UsersActionsType.LOADING_USERS,
    payload: LoadingState
}

export const setUsers = (payload: User[]): SetUsersActionInterface => ({
    type: UsersActionsType.SET_USERS,
    payload
})

export const fetchUsers = (): FetchUsersActionInterface => ({
    type: UsersActionsType.FETCH_USERS
})

export const setUsersLoading = (payload: LoadingState): SetUsersLoadingActionInterface => ({
    type: UsersActionsType.LOADING_USERS,
    payload
})

export type UsersActions = SetUsersActionInterface
    | FetchUsersActionInterface
    | SetUsersLoadingActionInterface
