import React from 'react';
import routes from './routes';
import Footer from 'Components/Footer';
import { useRoutes } from 'react-router-dom';

import './App.scss';




const App =  () => {
    const content = useRoutes(routes);

    return (
       <>
           { content }
            <Footer/>
       </>
    );
};

export default App;
