import { all } from "redux-saga/effects";
import {tweetsSaga} from "./ducks/tweets/contracts/sagas";
import {tagsSaga} from "./ducks/tags/contracts/sagas";
import {authUserSaga} from "./ducks/auth/contracts/sagas";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        tagsSaga(),
        authUserSaga()
    ])
}