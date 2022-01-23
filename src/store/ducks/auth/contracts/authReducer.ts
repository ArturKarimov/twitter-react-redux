import {LoadingState, UserState} from "../../../types";
import produce, {Draft} from "immer";
import {AuthUserActions, AuthUserActionsType, RegisterActionsType} from "./actionCreators";

const initialState: UserState = {
    data: undefined,
    loadingStatus: LoadingState.NEVER
}

export const authUserReducer = produce((draft: Draft<UserState>, action: AuthUserActions) => {
    switch (action.type) {
        case AuthUserActionsType.FETCH_AUTH_USER:
            draft.loadingStatus = LoadingState.LOADING
            break
        case AuthUserActionsType.SET_AUTH_USER:
            draft.data = action.payload
            draft.loadingStatus = LoadingState.LOADED
            break
        case AuthUserActionsType.LOADING_AUTH_USER:
            draft.loadingStatus = action.payload
            break
        default:
            return draft
    }
}, initialState)