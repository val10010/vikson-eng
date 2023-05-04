import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.scss';

const Footer = () => {
    return (
        <footer className={style.footer} >
            <div className={style.container}>
                <Link to='/' className={style.logo}>VIKSON.ENG</Link>
                <Link to='/privacy-policy' target="_blank" className={style.item}>Політика конфідеційності</Link>
                <div className={style.contacts}>
                    <p className={style.title}>Контакти</p>
                    <Link to='mailto:support@vikson-eng.com' className={style.item}>support@vikson-eng.com</Link>
                    <div className={style.socialMedia}>
                        <Link to='https://instagram.com/vikson.eng' className={style.instagram} target="_blank"  />
                        <Link to='https://t.me/Vikson_eng' className={style.telegram} target="_blank" />
                    </div>
                    <div className={style.design}>
                        Дизайн розроблений
                        <Link to='https://t.me/AndyFiss' className={style.link}>A.SIVTS</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
