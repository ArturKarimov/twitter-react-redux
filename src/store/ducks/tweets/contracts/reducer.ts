import {LoadingAddTweet, LoadingState, TweetsState} from "./types";
import produce, {Draft} from "immer";
import {TweetsActions, TweetsActionsType} from "./actionCreators";

const initialState: TweetsState = {
    items: [],
    loadingStatus: LoadingState.NEVER,
    loadingAddTweet: LoadingAddTweet.NEVER
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
        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.loadingAddTweet = LoadingAddTweet.LOADING
            break
        case TweetsActionsType.ADD_TWEET:
            draft.items.splice(0, 0, action.payload)
            draft.loadingAddTweet = LoadingAddTweet.NEVER
            break
        case TweetsActionsType.DELETE_TWEET:
            draft.items = draft.items.filter(item => item._id !== action.payload)
            break
        default:
            return draft

    }
}, initialState)