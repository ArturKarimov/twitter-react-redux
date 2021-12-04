import React from 'react';
import {useParams} from "react-router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import PostItem from "../components/PostItem";
import {LoadingState} from "../store/ducks/tweets/contracts/types";
import LoadingItem from "../components/LoadingItem";

const Tweet = () => {

    const {items, loadingStatus} = useTypedSelector(state => state.tweets)


    const {idtweet} = useParams()

    return (
        <div>
            {
                loadingStatus === LoadingState.LOADING ? <LoadingItem/>
                : items.filter(tweet => tweet._id === idtweet).map(item => <PostItem item={item} key={item._id}/>)
            }
        </div>
    )
}

export default Tweet;