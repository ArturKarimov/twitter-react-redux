import {LoadingState, Tweet} from "./types";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    LOADING_TWEETS = 'tweets/LOADING_TWEETS',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    DELETE_TWEET = 'tweets/DELETE_TWEET'
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

export interface FetchAddTweetActionInterface {
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload: string
}

export interface AddTweetActionInterface {
    type: TweetsActionsType.ADD_TWEET,
    payload: Tweet
}

export interface DeleteTweetActionInterface {
    type: TweetsActionsType.DELETE_TWEET,
    payload: string
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

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
})

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
})

export const deleteTweetAC = (payload: string): DeleteTweetActionInterface => ({
    type: TweetsActionsType.DELETE_TWEET,
    payload
})


export type TweetsActions = SetTweetsActionInterface
    | FetchTweetsActionInterface
    | SetTweetsLoadingActionInterface
    | FetchAddTweetActionInterface
    | AddTweetActionInterface
    | DeleteTweetActionInterface
