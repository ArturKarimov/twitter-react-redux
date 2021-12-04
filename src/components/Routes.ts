import React from 'react'
import TwitterHome from '../pages/TwitterHome'
import SignIn from "../pages/SignIn";

export interface IRoute {
    path: string,
    element: React.FC
}

export enum RouteNames {
    LOGIN = '/login',
    HOME = '/home',
}


export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, element: TwitterHome},
]

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: SignIn},
]