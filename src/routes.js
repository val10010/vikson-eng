import React from 'react';
import Home from './pages/Home';
import ForTeachers from './pages/ForTeachers';
import NotFound from './pages/NotFound';
import Vacancy from './pages/Vacancy';

const routes = [
    { path: '/', element: <Home /> , exact: true },
    { path: '/for-teachers', element: <ForTeachers /> },
    { path: '/vacancy', element: <Vacancy />},
    { path: '*', element: <NotFound /> },
];

export default routes;
