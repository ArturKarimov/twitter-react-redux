export enum LoadingState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export enum LoadingAddTweet {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Tweet {
    id: string,
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
    loadingStatus: LoadingState,
    loadingAddTweet: LoadingAddTweet
}