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
    _id: string,
    createdAt: any,
    text: string,
    user: {
        _id: string,
        fullname: string,
        username: string,
        avatarUrl: string
    }
}

export interface TweetsState {
    items: Tweet[],
    loadingStatus: LoadingState,
    loadingAddTweet: LoadingAddTweet
}