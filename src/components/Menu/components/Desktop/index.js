import { smoothScrollTo } from 'Utils';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';

import style from './style.scss';

const Desktop = ({ children }) => {
    const handlePlanBtnClick = useCallback(() => {
        smoothScrollTo('plans');
    }, []);

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
            <div>
                <Button onClick={handlePlanBtnClick} className={style.button}>обрати тариф навчання</Button>
                <Link to='tel:+(380) 98 6 000 884' className={style.phoneNumber}> +(380) 98 6 000 884 </Link>
            </div>
        </nav>
    );
};

export default Desktop;
