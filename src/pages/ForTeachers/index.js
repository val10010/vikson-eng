import React, { lazy } from 'react';

const Plans = lazy(() => import('./components/Plans'));
const Header = lazy(() => import('./components/Header'));
const Reviews = lazy(() => import('./components/Reviews'));
const LifeStory = lazy(() => import('./components/LifeStory'));
const Consultation = lazy(() => import('./components/Consultation'));
const Transformation = lazy(() => import('./components/Transformation'));

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
