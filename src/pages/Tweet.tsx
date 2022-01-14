import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {LoadingState} from "../store/ducks/tweets/contracts/types";
import LoadingItem from "../components/LoadingItem";
import OneTweet from "../components/OneTweet";

const Tweet = () => {

    const {loadingStatus} = useTypedSelector(state => state.tweets)


    return (
        <div>
            {
                loadingStatus === LoadingState.LOADING ? <LoadingItem/>
                : <OneTweet />
            }
        </div>
    )
}

export default Tweet;