import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/contracts/reducer";
import {tagsReducer} from "./ducks/tags/contracts/reducer";
import {authUserReducer} from "./ducks/auth/contracts/authReducer";
import {usersReducer} from "./ducks/users/contracts/reducer";
import {registerUserReducer} from "./ducks/auth/contracts/registerReducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    authUser: authUserReducer,
    registerUser: registerUserReducer,
    users: usersReducer
})