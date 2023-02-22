import { RouteProps } from 'react-router-dom'
import { MainPage } from 'Pages/MainPage'
import { AboutPage } from 'Pages/AboutPage'
import { NotFoundPage } from 'Pages/NotFoundPage'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FUUND = 'not_found'

}

export const RoutePath:Record <AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FUUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FUUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
