import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/contracts/reducer";
import {tagsReducer} from "./ducks/tags/contracts/reducer";
import {authUserReducer} from "./ducks/auth/contracts/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    authUser: authUserReducer
})