import React from 'react';

import Header from './componets/Header';
import Benefits from './componets/Benefits';
import OpenVacancies from './componets/OpenVacancies';

const Vacancies = () => {
    return (
        <>
            <Header/>
            <main>
                <Benefits/>
                <OpenVacancies/>
            </main>
        </>
    );
};

export default Vacancies;
