import {LoadingState, TweetsState} from "./types";
import produce, {Draft} from "immer";
import {TweetsActions, TweetsActionsType} from "./actionCreators";

const initialState: TweetsState = {
    items: [],
    loadingStatus: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload
            draft.loadingStatus = LoadingState.LOADED
            break

        case TweetsActionsType.LOADING_TWEETS:
            draft.loadingStatus = action.payload
            break

        case TweetsActionsType.FETCH_TWEETS:
            draft.loadingStatus = LoadingState.LOADING
            break

        default:
            return draft

    }
}, initialState)