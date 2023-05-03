import React from 'react';
import Menu from 'Components/Menu';
import Image from 'Components/Image';
import { Link } from 'react-router-dom';

import style from './style.scss';
import Button from "Components/Button";

const Header = () => {
    return (
        <header className={style.header}>
            <Menu isShowPlanBtn={true}>
                <Link to='/'>Головна</Link>
                <Link to='#'>Вакансії</Link>
            </Menu>
            <div className={style.container}>
                <div className={style.content}>
                    <h1 className={style.title}>
                        ВИКЛАДАЧІ - ТВОРЦІ МАЙБУТНЬОГО
                    </h1>
                    <h3 className={style.subtitle}>
                        Наша місія - поширювати хороші практики навчання серед викладачів,
                        в результі чого мати велику кількість людей, які дійсно добилися результатів.
                        Саме тому в нас є особиста программа навчання окермо для викладачів у формі інтенсивів та ообистих консультації від експерта у сфері навчання англійскої мови.
                    </h3>
                    <Button className={style.button}>почати навчання</Button>
                </div>
                <Image className={style.img} src="../../../../images/forTeacher/header_hero.jpg" alt="English teacher" />
            </div>
        </header>
    );
};

export default Header;
