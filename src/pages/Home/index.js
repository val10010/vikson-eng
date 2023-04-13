import React, { lazy } from 'react';

import Header from './components/Header';

const FAQ = lazy(() => import('./components/FAQ'));
const Plans = lazy(() => import('./components/Plans'));
const Reviews = lazy(() => import('./components/Reviews'));
const Learning = lazy(() => import('./components/Learning'));
const Instagram = lazy(() => import('./components/Instagram'));
const AboutSpeaker = lazy(() => import('./components/AboutSpeaker'));
const Consultation = lazy(() => import('./components/Consultation'));

const Home = () => {
    return (
        <>
            <Header/>
            <AboutSpeaker/>
            <Consultation/>
            <Learning/>
            <Plans/>
            <FAQ/>
            <Reviews/>
            <Instagram/>
        </>
    );
};

export default Home;
