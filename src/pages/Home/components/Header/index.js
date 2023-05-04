import Menu from 'Components/Menu';
import Image from 'Components/Image';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import * as actions from 'Actions/actions';

import style from './style.scss';

const Header = () => {
    const dispatch = useDispatch();

    const handleBtnClick = useCallback(() => {
        dispatch(actions.showPopup({
            contents: [{
                name: 'CallbackForm',
                props: {
                    btnonclick: {
                        actionName: 'showPopup',
                        props: {
                            contents: [{
                                name: 'Success'
                            }]
                        }
                    }
                }
            }]
        }))
    }, [])

    return (
        <>
            <header className={style.header}>
                <Menu isShowPlanBtn={true}>
                    <Link to='/for-teachers'>Викладачам</Link>
                    <Link to='#'>Вакансії</Link>
                </Menu>

                <div className={style.container}>
                    <div className={style.content}>
                        <h1 className={style.title}>ДОСІ НЕ СПІК ІНГЛІШ?</h1>
                        <h3 className={style.desc}>
                            В школі англійську вивчали 60% людей, ще 30% відвідували індивідуальні заняття,
                            і лише 10% вивчали мову правильно, це дозволило їм зараз вільно володіти Інглішом.
                        </h3>
                        <Button
                            variant="primary"
                            className={style.button}
                            onClick={handleBtnClick}
                        >
                            почати навчання
                        </Button>
                    </div>
                    <Image src='../../images/home/hero_main.png' alt="hero" className={style.hero}/>
                </div>
            </header>
        </>
    );
};

export default Header;
