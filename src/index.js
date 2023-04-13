import App from './App';
import Loader from 'Components/Loader';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loader/>}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>
);
