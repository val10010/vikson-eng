import React from 'react';
import Menu from 'Components/Menu';
import { Link } from 'react-router-dom';

import style from './style.scss';
import Image from "Components/Image";

const Header = () => {
    return (
        <header className={style.header}>
            <Menu>
                <Link to='/'>Головна</Link>
                <Link to='#'>Вакансії</Link>
            </Menu>

            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.mainRow}>
                        <div className={style.information}>
                            <h1 className={style.title}>ВИКЛАДАЧІ - ТВОРЦІ МАЙБУТНЬОГО</h1>
                            <h3 className={style.subtitle}>
                                Наша місія - поширювати хороші практики навчання серед викладачів, в результі чого мати велику кількість
                                людей, які дійсно добилися результатів. Саме тому в нас є особиста программа навчання окермо для викладачів
                                у формі інтенсивів та ообистих консультації від експерта у сфері навчання англійскої мови.
                            </h3>
                            <div className={style.button}>почати навчання</div>
                        </div>
                        <div className={style.pictureSide}>
                             <Image src='../../images/forTeacher/main.png' alt="main" className={style.main}/>
                        </div>
                    </div>
                    <div className={style.secondRow}>
                        <div className={style.information}>
                            <h1 className={style.title}>ІНТЕНСИВИ ПО <div className={style.changecolor}>MIRO</div></h1>
                            <h3 className={style.subtitle}>
                                Сьогодні все дуже швидко рухається. Тому щоб бути реальним експертом у своїй області - треба використовувати сучасні
                                інструменти. Навчися будувати своє навчання у <p className={style.changeText}>Miro</p> - сучасній технологічній онлайн дошці. Стань профі викладачем.
                            </h3>
                        </div>
                        <div className={style.pictureSide}>
                            <div className={style.subtitle}>
                                Маєте змогу дивитись і одночасно реалізовувати дії на дошці.
                                <div className={style.changeText}>(для вчителів будь-якої іноземної мови)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Header;
