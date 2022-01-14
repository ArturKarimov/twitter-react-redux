import {Route, Navigate, Routes} from "react-router-dom";

import React, {useEffect, useState} from 'react';
import {privateRoutes, publicRoutes, RouteNames} from "./Routes";
import Tweets from "../pages/Tweets";
import Tweet from "../pages/Tweet";
import Tags from "../pages/Tags";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {authApi} from "../api/auth/authApi";
import {useDispatch} from "react-redux";
import {setAuthUser} from "../store/ducks/auth/contracts/actionCreators";

const AppRouter = () => {


    const [auth, setAuth] = useState(false)
    const dispatch = useDispatch()


    const getMe = async () => {
        try {
            const {data} = await authApi.getMe()
            dispatch(setAuthUser(data))
            setAuth(true)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getMe()
    }, [])

    return (

        auth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.element />} key={route.path}>
                        <Route path={'/home'} element={<Tweets/>}/>
                        <Route path={':username/:idtweet'} element={<Tweet/>}/>
                        <Route path={`search/:tagname`} element={<Tags />}/>
                    </Route>
                )}
                <Navigate to={RouteNames.HOME}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<route.element />} key={route.path}/>
                )}
                <Navigate to={RouteNames.LOGIN}/>
            </Routes>

    );
};

export default AppRouter;