import {LoadingState, UserState} from "../../../types";
import produce, {Draft} from "immer";
import {AuthUserActions, RegisterActionsType} from "./actionCreators";

const initialState: UserState = {
    data: undefined,
    loadingStatus: LoadingState.NEVER
}

export const registerUserReducer = produce((draft: Draft<UserState>, action: AuthUserActions) => {
    switch (action.type) {
        case RegisterActionsType.FETCH_REGISTER_USER:
            draft.loadingStatus = LoadingState.LOADING
            break
        case RegisterActionsType.SET_REGISTER_USER:
            draft.data = action.payload
            draft.loadingStatus = LoadingState.LOADED
            break
        case RegisterActionsType.LOADING_REGISTER_USER:
            draft.loadingStatus = action.payload
            break
        default:
            return draft
    }
}, initialState)