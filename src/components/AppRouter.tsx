import {Route, Navigate, Routes} from "react-router-dom";

import React from 'react';
import {privateRoutes, publicRoutes, RouteNames} from "./Routes";
import Tweets from "../pages/Tweets";
import Tweet from "../pages/Tweet";
import Tags from "../pages/Tags";

const AppRouter = () => {

    const isAuth = true

    return (

        isAuth ?
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