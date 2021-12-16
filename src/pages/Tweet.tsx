import React from 'react';
import {useParams} from "react-router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import PostItem from "../components/PostItem";
import {LoadingState} from "../store/ducks/tweets/contracts/types";
import LoadingItem from "../components/LoadingItem";
import OneTweet from "../components/OneTweet";

const Tweet = () => {

    const {items, loadingStatus} = useTypedSelector(state => state.tweets)


    const {idtweet} = useParams()

    return (
        <div>
            {
                loadingStatus === LoadingState.LOADING ? <LoadingItem/>
                : items.filter(tweet => tweet.id === idtweet).map(item => <OneTweet item={item} key={item.id}/>)
            }
        </div>
    )
}

export default Tweet;