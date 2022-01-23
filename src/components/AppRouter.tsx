import {Route, Navigate, Routes} from "react-router-dom";

import React, {useEffect, useState} from 'react';
import Tweets from "../pages/Tweets";
import Tweet from "../pages/Tweet";
import Tags from "../pages/Tags";
import {useTypedSelector} from "../hooks/useTypedSelector";
import TwitterHome from "../pages/TwitterHome";
import SignIn from "../pages/SignIn";
import {useNavigate} from "react-router";
import ErrorPage from "../pages/Error";

const AppRouter = () => {

    const {data} = useTypedSelector(state => state.authUser)
    console.log(data)
    const navigate = useNavigate()

    console.log('auth', !data)

    // const getMe = async () => {
    //     try {
    //         const {data} = await authApi.getMe()
    //         dispatch(setAuthUser(data))
    //         setAuth(true)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //     if (data !== undefined) {
    //         navigate('/home')
    //     }
    // }, [data])

    return (

        localStorage.getItem('token') ?
            <Routes>
                <Route path={'/home'} element={<TwitterHome/>}>
                    <Route path={'/home'} element={<Tweets/>}/>
                    <Route path={':username/:idtweet'} element={<Tweet/>}/>
                    <Route path={`search/:tagname`} element={<Tags/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/home" />} />
                <Navigate to={'/home'}/>
            </Routes>
            :
            <Routes>
                <Route path={'/login'} element={<SignIn/>}/>
                <Route path="*" element={<Navigate to="/login" />} />
                <Navigate to={'/login'}/>
            </Routes>

    );
};

export default AppRouter;