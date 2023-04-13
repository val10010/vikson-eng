import React, {lazy} from 'react';
const Home = lazy(() => import('Pages/Home'));
const NotFound = lazy(() => import('Pages/NotFound'));
const ForTeachers = lazy(() => import('Pages/ForTeachers'));

const routes = [
    { path: '/', element: <Home /> , exact: true },
    { path: '/for-teachers', element: <ForTeachers /> },
    { path: '*', element: <NotFound /> },
];

export default routes;
