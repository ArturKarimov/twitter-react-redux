import {LoadingState, Tags} from "./types";

export enum TagsActionsType {
    SET_TAGS = 'tweets/SET_TAGS',
    FETCH_TAGS = 'tweets/FETCH_TAGS',
    LOADING_TAGS = 'tweets/LOADING_TAGS'
}

export interface SetTagsActionInterface {
    type: TagsActionsType.SET_TAGS,
    payload: Tags[]
}

export interface FetchTagsActionInterface {
    type: TagsActionsType.FETCH_TAGS
}

export interface SetTagsLoadingActionInterface {
    type: TagsActionsType.LOADING_TAGS,
    payload: LoadingState
}

export const setTags = (payload: Tags[]): SetTagsActionInterface => ({
    type: TagsActionsType.SET_TAGS,
    payload
})

export const fetchTags = (): FetchTagsActionInterface => ({
    type: TagsActionsType.FETCH_TAGS
})

export const setTagsLoading = (payload: LoadingState): SetTagsLoadingActionInterface => ({
    type: TagsActionsType.LOADING_TAGS,
    payload
})

export type TagsActions = SetTagsActionInterface | FetchTagsActionInterface | SetTagsLoadingActionInterface