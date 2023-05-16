import React, { lazy } from 'react';

const FAQ = lazy(() => import('./components/FAQ'));
const Plans = lazy(() => import('./components/Plans'));
const Header = lazy(() => import('./components/Header'));
const Reviews = lazy(() => import('./components/Reviews'));
const Learning = lazy(() => import('./components/Learning'));
const Instagram = lazy(() => import('./components/Instagram'));
const TrialLesson = lazy(() => import('./components/TrialLesson'));
const AboutSpeaker = lazy(() => import('./components/AboutSpeaker'));

const Home = () => {
    return (
        <>
            <Header/>
            <AboutSpeaker/>
            <TrialLesson/>
            <Learning/>
            <Plans/>
            <FAQ/>
            <Reviews/>
            <Instagram/>
        </>
    );
};

export default Home;
