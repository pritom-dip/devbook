import { lazy } from "react";

const DashboardPage = lazy(() =>
    import(/*webpackChunkName:'Dashboard/DashboardPage'*/ "../pages/dashboard.page")
);
const HomePage = lazy(() =>
    import(/*webpackChunkName:'App/HomePage' */ "../pages/home.page")
);
const ProfilePage = lazy(() =>
    import(/*webpackChunkName:'App/ProfilePage' */ "../pages/profile.page")
);
const NotFoundPage = lazy(() =>
    import(/*webpackChunkName:'App/404' */ "../pages/notFound.page")
);

const routes = [
    {
        path: "/dashboard",
        authorization: "private",
        exact: true,
        component: DashboardPage,
    },
    {
        path: "/profile",
        authorization: "private",
        exact: true,
        component: ProfilePage,
    },
    { path: ["/", "/home"], exact: true, component: HomePage },
    { path: "*", exact: true, component: NotFoundPage },
];

export default routes;
