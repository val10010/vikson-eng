import React from 'react';
import FAQ from './components/FAQ';
import Plans from './components/Plans';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Learning from './components/Learning';
import Instagram from './components/Instagram';
import AboutSpeaker from './components/AboutSpeaker';
import Consultation from './components/Сonsultation';

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
