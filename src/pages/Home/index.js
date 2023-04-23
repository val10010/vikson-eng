import React, { lazy } from 'react';

const FAQ = lazy(() => import('./components/FAQ'));
const Plans = lazy(() => import('./components/Plans'));
const Header = lazy(() => import('./components/Header'));
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
