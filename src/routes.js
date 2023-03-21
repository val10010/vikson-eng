import React from 'react';
import Home from './pages/Home';
import ForTeachers from './pages/ForTeachers';
import NotFound from './pages/NotFound';

const routes = [
    { path: '/', element: <Home /> , exact: true },
    { path: '/for-teachers', element: <ForTeachers /> },
    { path: '*', element: <NotFound /> },
];

export default routes;
