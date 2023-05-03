import React from 'react';

import Plans from './components/Plans';
import Header from './components/Header';
import Reviews from './components/Reviews';
import LifeStory from './components/LifeStory';
import Consultation from './components/Consultation';
import Transformation from './components/Transformation';

const ForTeachers = () => {
    return (
        <>
            <Header/>
            <Plans/>
            <LifeStory/>
            <Transformation/>
            <Consultation/>
            <Reviews/>
        </>
    );
};

export default ForTeachers;
