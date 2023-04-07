import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.scss';

const Desktop = ({ children }) => {
    return (
        <nav className={style.menu}>
            <Link to='/' className={style.logo}>VIKSON.ENG</Link>
            {
                <div>
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { className: style.item });
                        })
                    }
                </div>
            }
            <Link to='tel:+(380) 98 6 000 884' className={style.phoneNumber}> +(380) 98 6 000 884 </Link>
        </nav>
    );
};

export default Desktop;
