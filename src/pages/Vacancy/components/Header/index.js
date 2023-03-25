import React from 'react';
import {Link} from "react-router-dom";
import Menu from "Components/Menu";
import style from './style.scss'
import Image from 'Components/Image'

const Header = () =>{

    return(
        <header className={style.Header}>
            <Menu>
                <Link to='/'>Головна</Link>
                <Link to='#'>Вакансії</Link>
            </Menu>

            <div className={style.aboutVacancy}>
                <div className={style.container}>
                    <div className={style.aboutVacancyRow}>
                        <div className={style.descriptions}>
                            <div className={style.title}>ми пропонуємо розвиток для кожного</div>
                            <div className={style.texts}>
                                <div className={style.about}>
                                    Для кожного вчителя дуже важливо давати максимум користі своїм учням та студентам,
                                    працювати у здоровому та ламповому ком’юніті та мати змогу розвивати свої думки та ідеї.
                                </div>
                                <div className={style.about}>
                                    Ми надаємо максимально комфортні умови праці для наших тічеров, саме тому в нас працюють профі.
                                </div>
                            </div>
                            <div className={style.button}>дивитись усі вакансії</div>
                        </div>
                        <div className={style.pictures}>
                            <Image src='../../images/Vacancy/main.png' alt='Main' className={style.image}/>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );

}

export default Header;