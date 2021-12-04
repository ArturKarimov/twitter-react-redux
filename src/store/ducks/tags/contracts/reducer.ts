import {LoadingState, TagsState} from "./types";
import produce, {Draft} from "immer";
import {TagsActions, TagsActionsType} from "./actionCreators";

const initialState: TagsState = {
    items: [],
    loadingStatus: LoadingState.NEVER
}

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload
            draft.loadingStatus = LoadingState.LOADED
            break

        case TagsActionsType.LOADING_TAGS:
            draft.loadingStatus = action.payload
            break

        case TagsActionsType.FETCH_TAGS:
            draft.loadingStatus = LoadingState.LOADING
            break

        default:
            return draft

    }
}, initialState)