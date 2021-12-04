import {LoadingState, Tweet} from "./types";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    LOADING_TWEETS = 'tweets/LOADING_TWEETS'
}

export interface SetTweetsActionInterface {
    type: TweetsActionsType.SET_TWEETS,
    payload: Tweet[]
}

export interface FetchTweetsActionInterface {
    type: TweetsActionsType.FETCH_TWEETS
}

export interface SetTweetsLoadingActionInterface {
    type: TweetsActionsType.LOADING_TWEETS,
    payload: LoadingState
}

export const setTweets = (payload: Tweet[]): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS
})

export const setTweetsLoading = (payload: LoadingState): SetTweetsLoadingActionInterface => ({
    type: TweetsActionsType.LOADING_TWEETS,
    payload
})

export type TweetsActions = SetTweetsActionInterface | FetchTweetsActionInterface | SetTweetsLoadingActionInterface