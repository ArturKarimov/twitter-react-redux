import {setTags, setTagsLoading, TagsActionsType} from "./actionCreators";
import {call, put, takeEvery} from 'redux-saga/effects'
import {tagsApi} from "../../../../api/tags/tagsApi";
import {LoadingState} from "./types";

export function* fetchTagsRequest(): any {
    try {
        const tags = yield call(tagsApi.fetchTags)
        yield put(setTags(tags))
    }catch (e) {
        yield put(setTagsLoading(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}
