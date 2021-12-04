export enum LoadingState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Tweet {
    _id: string,
    text: string,
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string
    }
}

export interface TweetsState {
    items: Tweet[],
    loadingStatus: LoadingState
}