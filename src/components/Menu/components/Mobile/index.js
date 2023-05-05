import { smoothScrollTo } from 'Utils';
import Burger from 'Components/Burger';
import { Link } from 'react-router-dom';
import Button from 'Components/Button';
import { useLockBodyScroll } from 'Hooks';
import React, { useState, useCallback } from 'react';

import style from './style.scss';

const Mobile = ({ children, isShowPlanBtn = false }) => {
    const [isActive, setActive] = useState(false);

    useLockBodyScroll(isActive);

    const handlePlanBtnClick = useCallback(() => {
        setActive(false);
        smoothScrollTo('plans');
    }, []);

    return (
       <>

           <nav className={`${style.menu} ${isActive ? style.active : ''}`}>
               <Link to='/' className={style.logo}>VIKSON.ENG</Link>
               {!isActive && <Link to='tel:+(380) 98 6 000 884' className={style.phoneNumber}> +(380) 98 6 000 884 </Link> }
               <Burger onClick={() => setActive(!isActive)} checked={isActive} classNames={style}/>
           </nav>

           {
               isActive
                   &&
                    <div className={`${style.menuBox} ${isActive ? style.active : ''}`} >
                        <div>
                           {
                               React.Children.map(children, (child) => {
                                   return React.cloneElement(child, { className: style.item });
                               })
                           }
                        </div>
                        { isShowPlanBtn
                           && <Button
                                variant="white"
                                className={style.planBtn}
                                onClick={handlePlanBtnClick}
                              >
                               обрати тариф навчання
                              </Button>
                        }
                        <div>
                            <Link to="/privacy-policy" target="_blank" className={style.link}>Політика конфідеційності</Link>
                            <div className={style.footer}>
                                <p>Контакти</p>
                                <div>
                                    <Link to='tel:+(380) 98 6 000 884' className={style.phoneNumber}> +(380) 98 6 000 884 </Link>
                                    <Link to='mailto:support@vikson-eng.com' className={style.mail}>support@vikson-eng.com</Link>
                                    <div className={style.socialMedia}>
                                        <Link to='https://instagram.com/vikson.eng' className={style.instagram} target="_blank"  />
                                        <Link to='https://t.me/Vikson_eng' className={style.telegram} target="_blank" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           }
       </>
    );
};

export default Mobile;
