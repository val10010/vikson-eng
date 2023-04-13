import React, { lazy } from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import DeviceProvider from './contexts/Device/DeviceProvider';

const Footer = lazy(() => import('Components/Footer'));

import './App.scss';




const App =  () => {
    const content = useRoutes(routes);

    return (
       <DeviceProvider>
           { content }
            <Footer/>
       </DeviceProvider>
    );
};

export default App;
