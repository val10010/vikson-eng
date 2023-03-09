import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Menu = ({ children }) => {
    return (
        <nav className="menu container">
            <Link to='/' className="menu__logo">VIKSON.ENG</Link>
            <div className="menu__items">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, { className: 'menu__item' });
                    })
                }
            </div>
            <Link to='tel:+(380) 98 6 000 884' className="menu__phoneNumber"> +(380) 98 6 000 884 </Link>
        </nav>
    );
};

export default Menu;
