import React, {lazy} from 'react';
const Home = lazy(() => import('Pages/Home'));
const NotFound = lazy(() => import('Pages/NotFound'));
const Vacancies = lazy(() => import('Pages/Vacancies'));
const ForTeachers = lazy(() => import('Pages/ForTeachers'));
const PrivacyPolicy = lazy(() => import('Pages/PrivacyPolicy'));

const routes = [
    { path: '/', element: <Home /> , exact: true },
    { path: '/for-teachers', element: <ForTeachers /> },
    { path: '/vacancies', element: <Vacancies /> },
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
    { path: '*', element: <NotFound /> },
];

export default routes;
