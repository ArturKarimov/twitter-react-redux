import produce, {Draft} from "immer";
import {UsersActions, UsersActionsType} from "./actionCreators";
import {UsersState} from "./types";
import {LoadingState} from "../../../types";

const initialState: UsersState = {
    data: [],
    loadingStatus: LoadingState.NEVER
}

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {
    switch (action.type) {
        case UsersActionsType.SET_USERS:
            draft.data = action.payload
            draft.loadingStatus = LoadingState.LOADED
            break
        case UsersActionsType.FETCH_USERS:
            draft.loadingStatus = LoadingState.LOADING
            break
        case UsersActionsType.LOADING_USERS:
            draft.loadingStatus = LoadingState.LOADED
            break
        default:
            return draft

    }
}, initialState)