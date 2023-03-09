import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const routes = [
    { path: '/', element: <Home /> , exact: true },
    { path: '*', element: <NotFound /> },
];

export default routes;
