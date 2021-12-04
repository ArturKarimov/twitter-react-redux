export enum LoadingState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Tags {
    name: string,
    count: string,
    country: string
}

export interface TagsState {
    items: Tags[],
    loadingStatus: LoadingState
}