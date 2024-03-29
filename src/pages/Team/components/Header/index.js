import React from 'react';
import Menu from 'Components/Menu';
import { Link } from 'react-router-dom';

import style from './style.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <Menu>
                <Link to='/'>Головна</Link>
                <Link to='/for-teachers'>Викладачам</Link>
                <Link to='/vacancies'>Вакансії</Link>
            </Menu>
        </header>
    );
};

export default Header;
