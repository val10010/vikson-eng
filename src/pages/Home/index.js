import React from 'react';
import { Link } from 'react-router-dom';

import Menu from 'Components/Menu';
import Image from 'Components/Image';

import './style.scss';

const Home = () => {
    return (
        <>
            <header className="header">
                <Menu>
                    <Link to='#' className="">Викладачам</Link>
                    <Link to='#'>Вакансії</Link>
                </Menu>

                <div className="container">
                    <div className="content"></div>
                    <Image src='../../images/hero_main.png' alt="hero" className="hero"/>
                </div>
            </header>
        </>
    );
};

export default Home;
