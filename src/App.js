import React from 'react';
import routes from './routes';
import Footer from 'Components/Footer';
import { useRoutes } from 'react-router-dom';
import DeviceProvider from './contexts/Device/DeviceProvider';

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
