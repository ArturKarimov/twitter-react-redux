
export interface IRoute {
    path: string,
}

export enum RouteNames {
    LOGIN = '/login',
    HOME = '/home'
}

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME},
]

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN},
]