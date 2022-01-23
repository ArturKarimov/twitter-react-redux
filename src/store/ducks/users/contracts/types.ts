import {LoadingState, User} from "../../../types";

export interface UsersState {
    data: User[] | undefined,
    loadingStatus: LoadingState
}