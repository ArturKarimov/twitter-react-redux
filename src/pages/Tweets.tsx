import React from 'react';
import { Link } from 'react-router-dom';
import LoadingItem from '../components/LoadingItem';
import PostItem from '../components/PostItem';
import TextFieldItem from '../components/TextFieldItem';
import {useTypedSelector} from "../hooks/useTypedSelector";
import { LoadingState } from '../store/ducks/tweets/contracts/types';

const Tweets = () => {

    const {items, loadingStatus} = useTypedSelector(state => state.tweets)

    return (
        <>
        <TextFieldItem minRows={2}/>
    {
        loadingStatus === LoadingState.LOADING ? <LoadingItem /> :
            items.map(item =>
                <Link key={item._id} to={`/home/${item.user.userName}/${item._id}`} style={{textDecoration: 'none'}}><PostItem item={item}/></Link>
            )
    }
    </>
    )
}

export default Tweets;