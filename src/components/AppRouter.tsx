import {Route, Navigate, Routes} from "react-router-dom";

import React from 'react';
import {privateRoutes, publicRoutes, RouteNames} from "./Routes";
import TwitterHome from "../pages/TwitterHome";
import SignIn from "./SignIn";

const AppRouter = () => {

    const isAuth = true

    return (

        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<TwitterHome />} key={route.path}/>
                )}
                <Navigate to={RouteNames.HOME}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<SignIn />} key={route.path}/>
                )}
                <Navigate to={RouteNames.LOGIN}/>
            </Routes>

    );
};

export default AppRouter;