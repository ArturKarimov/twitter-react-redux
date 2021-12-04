import axios from "axios";
import {TagsState} from "../../store/ducks/tags/contracts/types";

export const tagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        return axios.get<TagsState['items']>('/tags').then(({data}) => data)
    }
}