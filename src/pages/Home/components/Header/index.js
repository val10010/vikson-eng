import Menu from 'Components/Menu';
import Image from 'Components/Image';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { DeviceContext } from 'Contexts/Device/DeviceContext';

import style from './style.scss';

const Header = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <header className={style.header}>
            <Menu isShowPlanBtn={true}>
                <Link to='/for-teachers'>Викладачам</Link>
                <Link to='#'>Вакансії</Link>
            </Menu>

            <div className={style.container}>
                <div className={style.content}>
                    <h1 className={style.title}>ДОСІ НЕ СПІК ІНГЛІШ?</h1>
                    <h3 className={style.desc}>
                        В школі англійську вчили 60% людей, ще 30% ходили на індивідуальні заняття,
                        і лише 10% вчили мову правильно, що і дало їм зараз вільне володіння Інглішом.
                    </h3>
                    <Button variant="primary" className={style.button}>
                        почати навчання
                    </Button>
                </div>
                { !isMobile && <Image src='../../images/home/hero_main.png' alt="hero" className={style.hero}/> }
            </div>
        </header>
    );
};

export default Header;
